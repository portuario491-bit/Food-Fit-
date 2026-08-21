const express = require('express');
const db = require('../lib/db');
const { requireAuth, requireProfileBasics } = require('../lib/middleware');
const { computeCompatibility } = require('../lib/algorithm');
const { isMutualMatch } = require('../lib/matchFilter');
const { zoneDistanceLabel } = require('../lib/location');
const { renderMatchList, renderMatchDetail } = require('../views/matches');

const router = express.Router();

function requireOnboarding(req, res, next) {
  if (!req.user.onboarding_completed) return res.redirect('/cuestionario');
  next();
}

function buildEngineProfile(user) {
  return { answers: db.getAnswers(user.id), hijosNoNegociable: !!user.hijos_no_negociable };
}

const RECOMMENDED_STATES = new Set(['RECOMMENDED', 'RECOMMENDED_WITH_NOTES']);

router.get('/matches', requireAuth, requireProfileBasics, requireOnboarding, (req, res) => {
  const meProfile = buildEngineProfile(req.user);

  const others = db.listCompletedUsersExcept(req.user.id).filter((other) => isMutualMatch(req.user, other));
  const compared = others.map((other) => {
    const result = computeCompatibility(meProfile, buildEngineProfile(other));
    const primaryPhoto = db.getPrimaryPhoto(other.id);
    return {
      id: other.id,
      name: other.name,
      age: other.age,
      bio: other.bio,
      photoId: primaryPhoto ? primaryPhoto.id : null,
      pct: result.compatibility_percentage,
      status: result.eligibility_status,
      distance: zoneDistanceLabel(req.user.location, other.location),
    };
  });

  const matches = compared
    .filter((c) => RECOMMENDED_STATES.has(c.status))
    .sort((a, b) => b.pct - a.pct);

  // Se muestran también, aparte, las personas con las que hay match mutuo de
  // género/edad pero cuya compatibilidad calculada no llega a "recomendada"
  // (Bloque 6.13.9 / 6.24.12) — transparencia útil durante el piloto para
  // validar el algoritmo, en vez de ocultarlas sin explicación.
  const others_not_recommended = compared
    .filter((c) => !RECOMMENDED_STATES.has(c.status))
    .sort((a, b) => (b.pct || 0) - (a.pct || 0));

  res.send(renderMatchList({ user: req.user, matches, others_not_recommended }));
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

  const result = computeCompatibility(buildEngineProfile(req.user), buildEngineProfile(other));

  const userPhoto = db.getPrimaryPhoto(req.user.id);
  const otherPhoto = db.getPrimaryPhoto(other.id);

  res.send(
    renderMatchDetail({
      user: req.user,
      userPhotoId: userPhoto ? userPhoto.id : null,
      other,
      otherPhotoId: otherPhoto ? otherPhoto.id : null,
      result,
      distance: zoneDistanceLabel(req.user.location, other.location),
    })
  );
});

module.exports = router;
