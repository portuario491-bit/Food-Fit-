const db = require('./db');

function requireAuth(req, res, next) {
  if (!req.session.userId) return res.redirect('/login');
  const user = db.getUserById(req.session.userId);
  if (!user) {
    req.session.destroy(() => res.redirect('/login'));
    return;
  }
  req.user = user;
  next();
}

/** Exige foto + edad + género + a quién buscas antes de seguir (cuestionario,
 *  compatibilidades). Sin esto el filtro de emparejamiento no tiene sentido. */
function requireProfileBasics(req, res, next) {
  const photos = db.getPhotos(req.user.id);
  if (!db.hasCompleteBasics(req.user, photos.length)) {
    return res.redirect('/perfil');
  }
  next();
}

module.exports = { requireAuth, requireProfileBasics };
