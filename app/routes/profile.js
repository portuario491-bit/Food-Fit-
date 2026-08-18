const express = require('express');
const path = require('node:path');
const fs = require('node:fs');
const db = require('../lib/db');
const { requireAuth } = require('../lib/middleware');
const { uploadPhoto, UPLOAD_ROOT } = require('../lib/upload');
const { renderProfile } = require('../views/profile');
const { QUESTIONS } = require('../lib/questions');
const { GENDERS, SEEKING_OPTIONS } = require('../lib/matchFilter');

const router = express.Router();
const VALID_GENDERS = GENDERS.map((g) => g.value);
const VALID_SEEKING = SEEKING_OPTIONS.map((s) => s.value);

function renderProfilePage(req, res, status, extra) {
  const photos = db.getPhotos(req.user.id);
  const { scores, answeredCount, total } = db.computeProfileScores(req.user.id, QUESTIONS);
  res.status(status).send(
    renderProfile({ user: req.user, photos, profileScores: scores, answeredCount, total, ...extra })
  );
}

router.get('/perfil', requireAuth, (req, res) => {
  renderProfilePage(req, res, 200, {
    success: req.query.saved ? 'Perfil actualizado.' : null,
    showIncompleteNotice: !!req.query.incompleto,
  });
});

router.post('/perfil', requireAuth, (req, res) => {
  const name = (req.body.name || '').trim();
  const age = req.body.age ? parseInt(req.body.age, 10) : null;
  const bio = (req.body.bio || '').trim().slice(0, 400);
  const hijosNoNegociable = !!req.body.hijos_no_negociable;
  const gender = req.body.gender || '';
  const seekingGender = req.body.seeking_gender || '';
  let ageMin = req.body.age_min ? parseInt(req.body.age_min, 10) : 18;
  let ageMax = req.body.age_max ? parseInt(req.body.age_max, 10) : 99;

  if (!name || name.length < 2) {
    return renderProfilePage(req, res, 400, { error: 'Escribe tu nombre.' });
  }
  if (!VALID_GENDERS.includes(gender)) {
    return renderProfilePage(req, res, 400, { error: 'Selecciona tu género.' });
  }
  if (!VALID_SEEKING.includes(seekingGender)) {
    return renderProfilePage(req, res, 400, { error: 'Selecciona a quién te gustaría conocer.' });
  }
  ageMin = Number.isFinite(ageMin) ? Math.min(Math.max(ageMin, 18), 99) : 18;
  ageMax = Number.isFinite(ageMax) ? Math.min(Math.max(ageMax, 18), 99) : 99;
  if (ageMin > ageMax) {
    return renderProfilePage(req, res, 400, { error: 'El rango de edad no es válido (el mínimo es mayor que el máximo).' });
  }

  db.updateUserProfile(req.user.id, { name, age, bio, hijosNoNegociable, gender, seekingGender, ageMin, ageMax });
  req.user = db.getUserById(req.user.id);
  res.redirect('/perfil?saved=1');
});

router.post('/perfil/foto', requireAuth, (req, res) => {
  uploadPhoto.single('photo')(req, res, (err) => {
    if (err) {
      return renderProfilePage(req, res, 400, { error: err.message });
    }
    if (!req.file) {
      return renderProfilePage(req, res, 400, { error: 'Selecciona una imagen.' });
    }
    const photos = db.getPhotos(req.user.id);
    db.addPhoto(req.user.id, req.file.filename, photos.length === 0);
    res.redirect('/perfil?saved=1');
  });
});

router.post('/perfil/foto/:id/principal', requireAuth, (req, res) => {
  db.setPrimaryPhoto(req.user.id, req.params.id);
  res.redirect('/perfil?saved=1');
});

router.post('/perfil/foto/:id/eliminar', requireAuth, (req, res) => {
  const photos = db.getPhotos(req.user.id);
  const photo = photos.find((p) => String(p.id) === req.params.id);
  db.deletePhoto(req.user.id, req.params.id);
  if (photo) {
    const filePath = path.join(UPLOAD_ROOT, String(req.user.id), photo.filename);
    fs.unlink(filePath, () => {});
  }
  res.redirect('/perfil?saved=1');
});

/** Sirve una foto por id, comprobando que quien la pide ha iniciado sesión.
 *  No es una galería pública: solo miembros del piloto autenticados pueden verla. */
router.get('/fotos/:photoId', requireAuth, (req, res) => {
  const row = db.db.prepare(`SELECT * FROM photos WHERE id = ?`).get(req.params.photoId);
  if (!row) return res.status(404).end();
  const filePath = path.join(UPLOAD_ROOT, String(row.user_id), row.filename);
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(path.resolve(UPLOAD_ROOT))) return res.status(400).end();
  res.sendFile(resolved, (err) => {
    if (err && !res.headersSent) res.status(404).end();
  });
});

module.exports = router;
