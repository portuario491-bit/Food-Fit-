const express = require('express');
const path = require('node:path');
const fs = require('node:fs');
const db = require('../lib/db');
const { requireAdmin } = require('../lib/middleware');
const { UPLOAD_ROOT } = require('../lib/upload');
const { computeCompatibility } = require('../lib/algorithm');
const { isMutualMatch } = require('../lib/matchFilter');
const { renderAdminLogin, renderAdminDashboard } = require('../views/admin');

const router = express.Router();

function buildEngineProfile(user) {
  return { answers: db.getAnswers(user.id), hijosNoNegociable: !!user.hijos_no_negociable };
}

router.get('/admin/login', (req, res) => {
  if (req.session.isAdmin) return res.redirect('/admin');
  res.send(renderAdminLogin());
});

router.post('/admin/login', (req, res) => {
  const password = req.body.password || '';
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return res.status(500).send(
      renderAdminLogin({ error: 'ADMIN_PASSWORD no está configurada en el servidor — no se puede entrar al panel.' })
    );
  }
  if (password !== expected) {
    return res.status(400).send(renderAdminLogin({ error: 'Contraseña incorrecta.' }));
  }
  req.session.isAdmin = true;
  res.redirect('/admin');
});

router.post('/admin/logout', (req, res) => {
  req.session.isAdmin = false;
  res.redirect('/admin/login');
});

router.get('/admin', requireAdmin, (req, res) => {
  const users = db.listAllUsersWithStats();

  // Matriz de compatibilidad: solo entre personas con perfil completo y
  // cuestionario terminado, y solo los pares que además pasan el filtro
  // de género/edad — igual que en /matches, pero viendo TODAS las parejas
  // a la vez en vez de una persona cada vez.
  const eligible = users.filter((u) => db.hasCompleteBasics(u, u.photo_count) && u.onboarding_completed);
  const pairs = [];
  for (let i = 0; i < eligible.length; i++) {
    for (let j = i + 1; j < eligible.length; j++) {
      const a = eligible[i];
      const b = eligible[j];
      if (!isMutualMatch(a, b)) continue;
      const result = computeCompatibility(buildEngineProfile(a), buildEngineProfile(b));
      pairs.push({
        a, b,
        pct: result.compatibility_percentage,
        status: result.eligibility_status,
        confidence: result.confidence_label,
      });
    }
  }
  pairs.sort((x, y) => y.pct - x.pct);

  res.send(renderAdminDashboard({ users, pairs }));
});

router.post('/admin/usuarios/:id/eliminar', requireAdmin, (req, res) => {
  const id = req.params.id;
  const dir = path.join(UPLOAD_ROOT, String(id));
  db.deleteUser(id);
  fs.rm(dir, { recursive: true, force: true }, () => {});
  res.redirect('/admin');
});

module.exports = router;
