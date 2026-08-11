const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../lib/db');
const { renderRegister, renderLogin } = require('../views/auth');

const router = express.Router();

router.get('/register', (req, res) => {
  if (req.session.userId) return res.redirect('/');
  res.send(renderRegister());
});

router.post('/register', async (req, res) => {
  const name = (req.body.name || '').trim();
  const email = (req.body.email || '').trim();
  const password = req.body.password || '';
  const inviteCode = (req.body.invite_code || '').trim();
  const values = { name, email, invite_code: inviteCode };

  const requiredInvite = process.env.BLUEHEART_INVITE_CODE;
  if (requiredInvite && inviteCode !== requiredInvite) {
    return res.status(400).send(renderRegister({ error: 'Código de invitación incorrecto.', values }));
  }
  if (!name || name.length < 2) {
    return res.status(400).send(renderRegister({ error: 'Escribe tu nombre.', values }));
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).send(renderRegister({ error: 'Ese email no parece válido.', values }));
  }
  if (password.length < 8) {
    return res.status(400).send(renderRegister({ error: 'La contraseña debe tener al menos 8 caracteres.', values }));
  }
  if (db.getUserByEmail(email)) {
    return res.status(400).send(renderRegister({ error: 'Ya existe una cuenta con ese email. Prueba a iniciar sesión.', values }));
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = db.createUser({ name, email, passwordHash, inviteCode: inviteCode || null });
  req.session.userId = user.id;
  res.redirect('/perfil');
});

router.get('/login', (req, res) => {
  if (req.session.userId) return res.redirect('/');
  res.send(renderLogin());
});

router.post('/login', async (req, res) => {
  const email = (req.body.email || '').trim();
  const password = req.body.password || '';
  const user = db.getUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    return res.status(400).send(renderLogin({ error: 'Email o contraseña incorrectos.', values: { email } }));
  }
  req.session.userId = user.id;
  res.redirect('/');
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

module.exports = router;
