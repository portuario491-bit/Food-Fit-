/**
 * BlueHeart — servidor del piloto.
 * App autocontenida (Express + SQLite embebido) pensada para probar el
 * cuestionario, los perfiles con foto y el matching con un grupo reducido
 * de personas (10-20) antes de invertir en una versión de producción.
 */
const path = require('node:path');
const crypto = require('node:crypto');
const express = require('express');
const session = require('express-session');

const db = require('./lib/db');
const { requireAuth } = require('./lib/middleware');
const { renderHome } = require('./views/home');

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.SESSION_SECRET) {
  console.warn(
    '[BlueHeart] Aviso: no se ha definido SESSION_SECRET — se ha generado uno temporal.\n' +
    '            Las sesiones se cerrarán cada vez que reinicies el servidor.\n' +
    '            Define SESSION_SECRET en tu entorno para producción/piloto persistente.'
  );
}
const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex');

app.set('trust proxy', 1);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 días
    },
  })
);

app.get('/', (req, res) => {
  if (!req.session.userId) return res.send(renderHome());
  const user = db.getUserById(req.session.userId);
  if (!user) return res.send(renderHome());
  if (!db.hasCompleteBasics(user, db.getPhotos(user.id).length)) return res.redirect('/perfil');
  if (!user.onboarding_completed) return res.redirect('/cuestionario');
  return res.redirect('/matches');
});

app.use('/', require('./routes/auth'));
app.use('/', require('./routes/profile'));
app.use('/', require('./routes/quiz'));
app.use('/', require('./routes/matches'));
app.use('/', require('./routes/admin'));
app.use('/', require('./routes/screening'));

app.use((req, res) => {
  res.status(404).send('Página no encontrada. <a href="/">Volver al inicio</a>');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('[BlueHeart] Error:', err);
  res.status(500).send('Algo ha fallado. Inténtalo de nuevo en unos segundos.');
});

app.listen(PORT, () => {
  console.log(`[BlueHeart] Piloto escuchando en http://localhost:${PORT}`);
  console.log(`[BlueHeart] Usuarios registrados: ${db.countUsers()}`);
});
