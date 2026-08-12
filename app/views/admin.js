const { page, escapeHtml } = require('./layout');
const { GENDERS, SEEKING_OPTIONS } = require('../lib/matchFilter');

const GENDER_LABEL = Object.fromEntries(GENDERS.map((g) => [g.value, g.label]));
const SEEKING_LABEL = Object.fromEntries(SEEKING_OPTIONS.map((s) => [s.value, s.label]));

const STATUS_LABELS = {
  RECOMMENDED: 'Recomendado',
  RECOMMENDED_WITH_NOTES: 'Recomendado, con matices',
  BELOW_THRESHOLD: 'Por debajo del umbral',
  PENDING_INFORMATION: 'Falta información',
  CRITICAL_CONFLICT: 'Incompatibilidad crítica',
};
const STATUS_CLASS = {
  RECOMMENDED: 'status-good',
  RECOMMENDED_WITH_NOTES: 'status-good',
  BELOW_THRESHOLD: 'status-neutral',
  PENDING_INFORMATION: 'status-neutral',
  CRITICAL_CONFLICT: 'status-bad',
};

function renderAdminLogin({ error } = {}) {
  const body = `
  <div class="card auth-card">
    <h1>Panel de administración</h1>
    <p class="sub">Acceso privado para quien gestiona el piloto de BlueHeart.</p>
    ${error ? `<div class="alert error">${escapeHtml(error)}</div>` : ''}
    <form method="POST" action="/admin/login">
      <div class="form-group">
        <label for="password">Contraseña de administración</label>
        <input type="password" id="password" name="password" required autofocus>
      </div>
      <button class="btn" type="submit" style="width:100%;">Entrar →</button>
    </form>
  </div>`;
  return page({ title: 'Admin', user: null, body });
}

function userRow(u) {
  const completo = u.age && u.gender && u.seeking_gender && u.photo_count > 0;
  return `
  <tr>
    <td>${escapeHtml(u.name)}</td>
    <td>${escapeHtml(u.email)}</td>
    <td>${u.age || '—'}</td>
    <td>${GENDER_LABEL[u.gender] || '—'}</td>
    <td>${SEEKING_LABEL[u.seeking_gender] || '—'}</td>
    <td>${u.photo_count}</td>
    <td>${completo ? '<span class="status-pill status-good">Perfil OK</span>' : '<span class="status-pill status-neutral">Incompleto</span>'}</td>
    <td>${u.onboarding_completed ? '<span class="status-pill status-good">Sí</span>' : '<span class="status-pill status-neutral">No</span>'}</td>
    <td>${escapeHtml((u.created_at || '').replace('T', ' ').slice(0, 16))}</td>
    <td>
      <form method="POST" action="/admin/usuarios/${u.id}/eliminar"
            onsubmit="return confirm('¿Borrar la cuenta de ${escapeHtml(u.name)} y todos sus datos? Esto no se puede deshacer.');">
        <button class="btn ghost" type="submit" style="color:#fca5a5;padding:6px 10px;font-size:12px;">Borrar</button>
      </form>
    </td>
  </tr>`;
}

function pairRow(p) {
  return `
  <tr>
    <td>${escapeHtml(p.a.name)}</td>
    <td>${escapeHtml(p.b.name)}</td>
    <td style="font-weight:700;">${p.pct}%</td>
    <td><span class="status-pill ${STATUS_CLASS[p.status] || ''}">${STATUS_LABELS[p.status] || p.status}</span></td>
    <td>${escapeHtml(p.confidence || '—')}</td>
  </tr>`;
}

function screeningRow(s) {
  return `
  <tr>
    <td>${escapeHtml(s.name || '(sin contacto todavía)')}</td>
    <td>${escapeHtml(s.age)}</td>
    <td>${escapeHtml(s.location)}</td>
    <td>${escapeHtml(s.gender)}</td>
    <td>${escapeHtml(s.orientation)}</td>
    <td>${escapeHtml(s.seeking)}</td>
    <td>${escapeHtml(s.age_min)}–${escapeHtml(s.age_max)}</td>
    <td>${escapeHtml(s.looking_for)}</td>
    <td>${escapeHtml(s.wants_to_participate)}</td>
    <td>${s.contact_method ? `${escapeHtml(s.contact_method)}: ${escapeHtml(s.contact_value)}` : '—'}</td>
    <td>${escapeHtml((s.created_at || '').replace('T', ' ').slice(0, 16))}</td>
  </tr>`;
}

function renderAdminDashboard({ users, pairs, screeningResponses = [] }) {
  const body = `
  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
      <div class="summary-title">Panel de administración — BlueHeart piloto</div>
      <form method="POST" action="/admin/logout"><button class="logout-btn" type="submit">Salir</button></form>
    </div>
    <div class="summary-sub">${users.length} persona${users.length === 1 ? '' : 's'} registrada${users.length === 1 ? '' : 's'} · ${pairs.length} pareja${pairs.length === 1 ? '' : 's'} con emparejamiento mutuo calculado.</div>

    <div class="section-title">Candidatas del formulario de selección (${screeningResponses.length})</div>
    <p class="summary-sub" style="margin-top:-6px;">Respuestas de <code>/seleccion</code>, antes de invitar a nadie al piloto.</p>
    <div style="overflow-x:auto;margin-bottom:8px;">
      <table class="admin-table">
        <thead><tr>
          <th>Nombre</th><th>Edad</th><th>Zona</th><th>Género</th><th>Orientación</th>
          <th>Busca</th><th>Rango edad</th><th>Qué busca</th><th>¿Quiere participar?</th><th>Contacto</th><th>Fecha</th>
        </tr></thead>
        <tbody>${screeningResponses.map(screeningRow).join('') || '<tr><td colspan="11">Sin respuestas todavía.</td></tr>'}</tbody>
      </table>
    </div>

    <div class="section-title">Personas registradas</div>
    <div style="overflow-x:auto;">
      <table class="admin-table">
        <thead><tr>
          <th>Nombre</th><th>Email</th><th>Edad</th><th>Género</th><th>Busca</th>
          <th>Fotos</th><th>Perfil</th><th>Cuestionario</th><th>Registro</th><th></th>
        </tr></thead>
        <tbody>${users.map(userRow).join('') || '<tr><td colspan="10">Sin usuarios todavía.</td></tr>'}</tbody>
      </table>
    </div>

    <div class="section-title">Matriz de compatibilidad</div>
    <p class="summary-sub" style="margin-top:-6px;">
      Todas las parejas que pasan el filtro de género/orientación/edad, con el
      resultado del algoritmo (Bloque 6). Incluye también las que no llegan a
      "recomendado", para poder evaluar el algoritmo con datos reales.
    </p>
    <div style="overflow-x:auto;">
      <table class="admin-table">
        <thead><tr><th>Persona A</th><th>Persona B</th><th>%</th><th>Estado</th><th>Confianza</th></tr></thead>
        <tbody>${pairs.map(pairRow).join('') || '<tr><td colspan="5">Todavía no hay ninguna pareja que pase el filtro de emparejamiento.</td></tr>'}</tbody>
      </table>
    </div>
  </div>`;
  return page({ title: 'Panel de administración', user: null, body });
}

module.exports = { renderAdminLogin, renderAdminDashboard };
