const express = require('express');
const db = require('../lib/db');
const { requireAuth, requireProfileBasics } = require('../lib/middleware');
const { computeCompatibility } = require('../lib/algorithm');
const { isMutualMatch } = require('../lib/matchFilter');
const { sendNewMessageEmail } = require('../lib/email');
const { sendNewMessagePush } = require('../lib/push');
const { renderChat, renderConversationList } = require('../views/chat');

const router = express.Router();

const RECOMMENDED_STATES = new Set(['RECOMMENDED', 'RECOMMENDED_WITH_NOTES']);

function buildEngineProfile(user) {
  return { answers: db.getAnswers(user.id), hijosNoNegociable: !!user.hijos_no_negociable };
}

/** El chat solo se abre entre dos personas con match mutuo (filtro de género/edad)
 *  y compatibilidad recomendada (Bloque 7.18/7.19) — no cualquiera con cualquiera. */
function canChat(me, other) {
  if (!other || !other.onboarding_completed || String(other.id) === String(me.id)) return false;
  if (!isMutualMatch(me, other)) return false;
  const result = computeCompatibility(buildEngineProfile(me), buildEngineProfile(other));
  return RECOMMENDED_STATES.has(result.eligibility_status);
}

router.get('/chat', requireAuth, requireProfileBasics, (req, res) => {
  const conversations = db.listConversationsFor(req.user.id);
  res.send(renderConversationList({ user: req.user, conversations }));
});

router.get('/chat/:id', requireAuth, requireProfileBasics, (req, res) => {
  const other = db.getUserById(req.params.id);
  if (!canChat(req.user, other)) return res.redirect('/matches');

  const messages = db.getConversation(req.user.id, other.id);
  const otherPhoto = db.getPrimaryPhoto(other.id);
  res.send(renderChat({ user: req.user, other, otherPhotoId: otherPhoto ? otherPhoto.id : null, messages }));
});

router.post('/chat/:id', requireAuth, requireProfileBasics, (req, res) => {
  const other = db.getUserById(req.params.id);
  if (!canChat(req.user, other)) return res.redirect('/matches');

  const body = (req.body.body || '').trim().slice(0, 2000);
  if (body) {
    db.sendMessage(req.user.id, other.id, body);
    const chatPath = `/chat/${req.user.id}`;
    const chatUrl = `${req.protocol}://${req.get('host')}${chatPath}`;
    sendNewMessageEmail({ to: other.email, recipientName: other.name, senderName: req.user.name, chatUrl }).catch(() => {});
    sendNewMessagePush(other.id, {
      title: 'BlueHeart',
      body: `${req.user.name} te ha escrito un mensaje.`,
      url: chatPath,
    }).catch(() => {});
  }
  res.redirect(`/chat/${other.id}`);
});

module.exports = router;
