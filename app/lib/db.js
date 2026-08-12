/**
 * Capa de datos — SQLite embebido (node:sqlite, nativo desde Node 22.5+).
 * Pensado para el piloto (10-20 personas): un solo fichero, sin servicios
 * externos que dar de alta. Si el piloto crece, esta es la pieza a migrar
 * primero (p. ej. a Postgres), y queda aislada aquí a propósito.
 */
const path = require('node:path');
const fs = require('node:fs');
const { DatabaseSync } = require('node:sqlite');
const { DIMENSIONS } = require('./questions');

// DATA_DIR es configurable para poder apuntarlo a un volumen persistente en
// producción (el disco de la mayoría de plataformas de hosting se borra en
// cada despliegue/reinicio si no se monta un volumen ahí).
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, '..', 'data');
fs.mkdirSync(DATA_DIR, { recursive: true });
const DB_PATH = path.join(DATA_DIR, 'blueheart-pilot.db');

const db = new DatabaseSync(DB_PATH);
db.exec('PRAGMA journal_mode = WAL;');
db.exec('PRAGMA foreign_keys = ON;');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  age INTEGER,
  bio TEXT DEFAULT '',
  hijos_no_negociable INTEGER NOT NULL DEFAULT 0,
  onboarding_completed INTEGER NOT NULL DEFAULT 0,
  invite_code TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS photos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  is_primary INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS answers (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_index INTEGER NOT NULL,
  choice_index INTEGER NOT NULL,
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (user_id, question_index)
);

/** Respuestas del formulario público de selección de candidatos (antes de
 *  invitarles al piloto en sí) — ver FORMULARIO-SELECCION.md. Separado de
 *  "users" a propósito: esto es reclutamiento, no una cuenta de la app. */
CREATE TABLE IF NOT EXISTS screening_responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  age TEXT,
  location TEXT,
  gender TEXT,
  orientation TEXT,
  seeking TEXT,
  age_min TEXT,
  age_max TEXT,
  looking_for TEXT,
  dating_apps_experience TEXT,
  would_meet_match TEXT,
  would_fill_questionnaire TEXT,
  wants_to_participate TEXT,
  name TEXT,
  contact_method TEXT,
  contact_value TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
`);

/** Añade una columna si todavía no existe — permite evolucionar el esquema
 *  sin perder los datos ya guardados de un piloto en marcha. */
function addColumnIfMissing(table, columnDef) {
  try {
    db.exec(`ALTER TABLE ${table} ADD COLUMN ${columnDef}`);
  } catch (e) {
    if (!/duplicate column/i.test(e.message)) throw e;
  }
}

// Género, orientación (expresada como "a quién buscas") y rango de edad
// deseado. Son criterios de emparejamiento (filtro duro), no dimensiones
// psicológicas — por eso viven en `users`, junto al resto del perfil básico,
// y no en `answers`.
addColumnIfMissing('users', 'gender TEXT');
addColumnIfMissing('users', 'seeking_gender TEXT');
addColumnIfMissing('users', 'age_min INTEGER');
addColumnIfMissing('users', 'age_max INTEGER');

/* ---------- users ---------- */
function createUser({ name, email, passwordHash, inviteCode }) {
  const stmt = db.prepare(
    `INSERT INTO users (name, email, password_hash, invite_code) VALUES (?, ?, ?, ?)`
  );
  const info = stmt.run(name, email.toLowerCase().trim(), passwordHash, inviteCode || null);
  return getUserById(Number(info.lastInsertRowid));
}

function getUserByEmail(email) {
  return db.prepare(`SELECT * FROM users WHERE email = ?`).get(email.toLowerCase().trim());
}

function getUserById(id) {
  return db.prepare(`SELECT * FROM users WHERE id = ?`).get(id);
}

function updateUserProfile(id, { name, age, bio, hijosNoNegociable, gender, seekingGender, ageMin, ageMax }) {
  db.prepare(
    `UPDATE users SET name = ?, age = ?, bio = ?, hijos_no_negociable = ?,
       gender = ?, seeking_gender = ?, age_min = ?, age_max = ? WHERE id = ?`
  ).run(name, age, bio, hijosNoNegociable ? 1 : 0, gender, seekingGender, ageMin, ageMax, id);
  return getUserById(id);
}

/** Perfil "usable": lo mínimo para aparecer en compatibilidades de otras
 *  personas y para que el filtro de género/edad tenga sentido. */
function hasCompleteBasics(user, photosCount) {
  return !!(user && user.age && user.gender && user.seeking_gender && photosCount > 0);
}

function markOnboardingCompleted(id) {
  db.prepare(`UPDATE users SET onboarding_completed = 1 WHERE id = ?`).run(id);
}

function listCompletedUsersExcept(excludeId) {
  return db
    .prepare(`SELECT * FROM users WHERE onboarding_completed = 1 AND id != ? ORDER BY created_at DESC`)
    .all(excludeId);
}

function countUsers() {
  return db.prepare(`SELECT COUNT(*) AS n FROM users`).get().n;
}

/** Todas las personas registradas con sus datos básicos, para el panel de
 *  administración del piloto (Bloque 12 — control de usuarios). */
function listAllUsersWithStats() {
  return db
    .prepare(
      `SELECT u.*, COUNT(p.id) AS photo_count
       FROM users u LEFT JOIN photos p ON p.user_id = u.id
       GROUP BY u.id ORDER BY u.created_at DESC`
    )
    .all();
}

/** Borra una cuenta y todo lo asociado (fotos, respuestas — vía ON DELETE
 *  CASCADE). El llamador es responsable de borrar también los ficheros de
 *  fotos en disco (ver routes/admin.js). */
function deleteUser(id) {
  return db.prepare(`DELETE FROM users WHERE id = ?`).run(id);
}

/* ---------- screening_responses (formulario de selección) ---------- */
function createScreeningResponse(fields) {
  const stmt = db.prepare(
    `INSERT INTO screening_responses
       (age, location, gender, orientation, seeking, age_min, age_max,
        looking_for, dating_apps_experience, would_meet_match,
        would_fill_questionnaire, wants_to_participate)
     VALUES (@age, @location, @gender, @orientation, @seeking, @age_min, @age_max,
             @looking_for, @dating_apps_experience, @would_meet_match,
             @would_fill_questionnaire, @wants_to_participate)`
  );
  const info = stmt.run(fields);
  return Number(info.lastInsertRowid);
}

function addScreeningContact(id, { name, contactMethod, contactValue }) {
  db.prepare(
    `UPDATE screening_responses SET name = ?, contact_method = ?, contact_value = ? WHERE id = ?`
  ).run(name, contactMethod, contactValue, id);
}

function listScreeningResponses() {
  return db.prepare(`SELECT * FROM screening_responses ORDER BY created_at DESC`).all();
}

/* ---------- photos ---------- */
function addPhoto(userId, filename, makePrimary) {
  if (makePrimary) {
    db.prepare(`UPDATE photos SET is_primary = 0 WHERE user_id = ?`).run(userId);
  }
  const hasAny = db.prepare(`SELECT COUNT(*) AS n FROM photos WHERE user_id = ?`).get(userId).n > 0;
  const isPrimary = makePrimary || !hasAny;
  if (isPrimary) {
    db.prepare(`UPDATE photos SET is_primary = 0 WHERE user_id = ?`).run(userId);
  }
  db.prepare(`INSERT INTO photos (user_id, filename, is_primary) VALUES (?, ?, ?)`).run(
    userId,
    filename,
    isPrimary ? 1 : 0
  );
}

function getPhotos(userId) {
  return db.prepare(`SELECT * FROM photos WHERE user_id = ? ORDER BY is_primary DESC, created_at ASC`).all(userId);
}

function getPrimaryPhoto(userId) {
  return db.prepare(`SELECT * FROM photos WHERE user_id = ? ORDER BY is_primary DESC, created_at ASC LIMIT 1`).get(userId);
}

function setPrimaryPhoto(userId, photoId) {
  const owns = db.prepare(`SELECT id FROM photos WHERE id = ? AND user_id = ?`).get(photoId, userId);
  if (!owns) return false;
  db.prepare(`UPDATE photos SET is_primary = 0 WHERE user_id = ?`).run(userId);
  db.prepare(`UPDATE photos SET is_primary = 1 WHERE id = ?`).run(photoId);
  return true;
}

function deletePhoto(userId, photoId) {
  const result = db.prepare(`DELETE FROM photos WHERE id = ? AND user_id = ?`).run(photoId, userId);
  const stillHasPrimary = db.prepare(`SELECT COUNT(*) AS n FROM photos WHERE user_id = ? AND is_primary = 1`).get(userId).n > 0;
  if (!stillHasPrimary) {
    const next = db.prepare(`SELECT id FROM photos WHERE user_id = ? ORDER BY created_at ASC LIMIT 1`).get(userId);
    if (next) db.prepare(`UPDATE photos SET is_primary = 1 WHERE id = ?`).run(next.id);
  }
  return result;
}

/* ---------- answers / profile scores ---------- */
function saveAnswer(userId, questionIndex, choiceIndex) {
  db.prepare(
    `INSERT INTO answers (user_id, question_index, choice_index, updated_at)
     VALUES (?, ?, ?, datetime('now'))
     ON CONFLICT(user_id, question_index) DO UPDATE SET
       choice_index = excluded.choice_index, updated_at = excluded.updated_at`
  ).run(userId, questionIndex, choiceIndex);
}

function getAnswers(userId) {
  const rows = db.prepare(`SELECT question_index, choice_index FROM answers WHERE user_id = ?`).all(userId);
  const map = {};
  rows.forEach((r) => (map[r.question_index] = r.choice_index));
  return map;
}

/** Calcula los scores por dimensión (0-4) a partir de las respuestas guardadas. */
function computeProfileScores(userId, QUESTIONS) {
  const answers = getAnswers(userId);
  const sums = {}, counts = {};
  DIMENSIONS.forEach((d) => { sums[d] = 0; counts[d] = 0; });
  QUESTIONS.forEach((q, i) => {
    if (answers[i] !== undefined) {
      sums[q.dim] += answers[i];
      counts[q.dim] += 1;
    }
  });
  const scores = {};
  DIMENSIONS.forEach((d) => { scores[d] = counts[d] > 0 ? sums[d] / counts[d] : 2; });
  const answeredCount = Object.keys(answers).length;
  return { scores, answeredCount, total: QUESTIONS.length };
}

module.exports = {
  db,
  createUser,
  getUserByEmail,
  getUserById,
  updateUserProfile,
  hasCompleteBasics,
  markOnboardingCompleted,
  listCompletedUsersExcept,
  countUsers,
  listAllUsersWithStats,
  deleteUser,
  createScreeningResponse,
  addScreeningContact,
  listScreeningResponses,
  addPhoto,
  getPhotos,
  getPrimaryPhoto,
  setPrimaryPhoto,
  deletePhoto,
  saveAnswer,
  getAnswers,
  computeProfileScores,
};
