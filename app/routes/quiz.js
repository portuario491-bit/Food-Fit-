const express = require('express');
const db = require('../lib/db');
const { requireAuth, requireProfileBasics } = require('../lib/middleware');
const { renderQuestion } = require('../views/quiz');
const { QUESTIONS } = require('../lib/questions');

const router = express.Router();

function firstUnansweredIndex(userId) {
  const answers = db.getAnswers(userId);
  for (let i = 0; i < QUESTIONS.length; i++) {
    if (answers[i] === undefined) return i;
  }
  return QUESTIONS.length - 1;
}

router.get('/cuestionario', requireAuth, requireProfileBasics, (req, res) => {
  let index = req.query.q !== undefined ? parseInt(req.query.q, 10) : firstUnansweredIndex(req.user.id);
  if (Number.isNaN(index) || index < 0) index = 0;
  if (index >= QUESTIONS.length) index = QUESTIONS.length - 1;

  const answers = db.getAnswers(req.user.id);
  res.send(renderQuestion({ user: req.user, index, existingChoice: answers[index] }));
});

router.post('/cuestionario', requireAuth, requireProfileBasics, (req, res) => {
  const index = parseInt(req.body.question_index, 10);
  const choice = parseInt(req.body.choice_index, 10);
  if (Number.isNaN(index) || Number.isNaN(choice) || index < 0 || index >= QUESTIONS.length || choice < 0 || choice > 4) {
    return res.status(400).redirect('/cuestionario');
  }
  db.saveAnswer(req.user.id, index, choice);

  const nextIndex = index + 1;
  if (nextIndex >= QUESTIONS.length) {
    db.markOnboardingCompleted(req.user.id);
    return res.redirect('/perfil?saved=1');
  }
  res.redirect(`/cuestionario?q=${nextIndex}`);
});

module.exports = router;
