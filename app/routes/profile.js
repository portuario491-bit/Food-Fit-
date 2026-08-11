const express = require('express');
const path = require('node:path');
const fs = require('node:fs');
const db = require('../lib/db');
const { requireAuth } = require('../lib/middleware');
const { uploadPhoto, UPLOAD_ROOT } = require('../lib/upload');
const { renderProfile } = require('../views/profile');
const { QUESTIONS } = require('../lib/questions');

const router = express.Router();

router.get('/perfil', requireAuth, (req, res) => {
  const photos = db.getPhotos(req.user.id);
  const { scores, answeredCount, total } = db.computeProfileScores(req.user.id, QUESTIONS);
  res.send(
    renderProfile({
      user: req.user,
      photos,
      profileScores: scores,
      answeredCount,
      total,
      success: req.query.saved ? 'Perfil actualizado.' : null,
    })
  );
});

router.post('/perfil', requireAuth, (req, res) => {
  const name = (req.body.name || '').trim();
  const age = req.body.age ? parseInt(req.body.age, 10) : null;
  const bio = (req.body.bio || '').trim().slice(0, 400);
  const hijosNoNegociable = !!req.body.hijos_no_negociable;

  if (!name || name.length < 2) {
    const photos = db.getPhotos(req.user.id);
    const { scores, answeredCount, total } = db.computeProfileScores(req.user.id, QUESTIONS);
    return res
      .status(400)
      .send(renderProfile({ user: req.user, photos, profileScores: scores, answeredCount, total, error: 'Escribe tu nombre.' }));
  }

  db.updateUserProfile(req.user.id, { name, age, bio, hijosNoNegociable });
  res.redirect('/perfil?saved=1');
});

router.post('/perfil/foto', requireAuth, (req, res) => {
  uploadPhoto.single('photo')(req, res, (err) => {
    const photos = db.getPhotos(req.user.id);
    const { scores, answeredCount, total } = db.computeProfileScores(req.user.id, QUESTIONS);
    if (err) {
      return res
        .status(400)
        .send(renderProfile({ user: req.user, photos, profileScores: scores, answeredCount, total, error: err.message }));
    }
    if (!req.file) {
      return res
        .status(400)
        .send(renderProfile({ user: req.user, photos, profileScores: scores, answeredCount, total, error: 'Selecciona una imagen.' }));
    }
    db.addPhoto(req.user.id, req.file.filename, photos.length === 0);
    res.redirect('/perfil?saved=1');
  });
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
