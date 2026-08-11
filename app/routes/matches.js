const express = require('express');
const db = require('../lib/db');
const { requireAuth, requireProfileBasics } = require('../lib/middleware');
const { computeCompatibility } = require('../lib/algorithm');
const { isMutualMatch } = require('../lib/matchFilter');
const { QUESTIONS } = require('../lib/questions');
const { renderMatchList, renderMatchDetail } = require('../views/matches');

const router = express.Router();

function requireOnboarding(req, res, next) {
  if (!req.user.onboarding_completed) return res.redirect('/cuestionario');
  next();
}

router.get('/matches', requireAuth, requireProfileBasics, requireOnboarding, (req, res) => {
  const me = db.computeProfileScores(req.user.id, QUESTIONS);
  const meProfile = { scores: me.scores, hijosNoNegociable: !!req.user.hijos_no_negociable };

  const others = db.listCompletedUsersExcept(req.user.id).filter((other) => isMutualMatch(req.user, other));
  const matches = others
    .map((other) => {
      const otherScores = db.computeProfileScores(other.id, QUESTIONS);
      const otherProfile = { scores: otherScores.scores, hijosNoNegociable: !!other.hijos_no_negociable };
      const result = computeCompatibility(meProfile, otherProfile);
      const primaryPhoto = db.getPrimaryPhoto(other.id);
      return {
        id: other.id,
        name: other.name,
        age: other.age,
        bio: other.bio,
        photoId: primaryPhoto ? primaryPhoto.id : null,
        pct: result.globalPct,
      };
    })
    .sort((a, b) => b.pct - a.pct);

  res.send(renderMatchList({ user: req.user, matches }));
});

router.get('/matches/:id', requireAuth, requireProfileBasics, requireOnboarding, (req, res) => {
  const other = db.getUserById(req.params.id);
  if (
    !other ||
    !other.onboarding_completed ||
    String(other.id) === String(req.user.id) ||
    !isMutualMatch(req.user, other)
  ) {
    return res.redirect('/matches');
  }

  const me = db.computeProfileScores(req.user.id, QUESTIONS);
  const otherScores = db.computeProfileScores(other.id, QUESTIONS);
  const meProfile = { scores: me.scores, hijosNoNegociable: !!req.user.hijos_no_negociable };
  const otherProfile = { scores: otherScores.scores, hijosNoNegociable: !!other.hijos_no_negociable };
  const result = computeCompatibility(meProfile, otherProfile);

  const userPhoto = db.getPrimaryPhoto(req.user.id);
  const otherPhoto = db.getPrimaryPhoto(other.id);

  res.send(
    renderMatchDetail({
      user: req.user,
      userPhotoId: userPhoto ? userPhoto.id : null,
      other,
      otherPhotoId: otherPhoto ? otherPhoto.id : null,
      result,
    })
  );
});

module.exports = router;
