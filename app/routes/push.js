const express = require('express');
const db = require('../lib/db');
const { requireAuth } = require('../lib/middleware');

const router = express.Router();

router.post('/push/subscribe', requireAuth, express.json(), (req, res) => {
  const sub = req.body;
  if (!sub || !sub.endpoint || !sub.keys || !sub.keys.p256dh || !sub.keys.auth) {
    return res.status(400).json({ error: 'Suscripción inválida.' });
  }
  db.savePushSubscription(req.user.id, sub);
  res.status(204).end();
});

module.exports = router;
