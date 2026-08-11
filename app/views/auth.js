const { page, escapeHtml } = require('./layout');

function renderRegister({ error, values = {} } = {}) {
  const requireInvite = !!process.env.BLUEHEART_INVITE_CODE;
  const body = `
  <div class="card auth-card">
    <h1>Crear cuenta</h1>
    <p class="sub">Piloto privado de BlueHeart — solo para las personas invitadas a probarlo.</p>
    ${error ? `<div class="alert error">${escapeHtml(error)}</div>` : ''}
    <form method="POST" action="/register">
      <div class="form-group">
        <label for="name">Tu nombre</label>
        <input type="text" id="name" name="name" required maxlength="60" value="${escapeHtml(values.name)}">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required maxlength="120" value="${escapeHtml(values.email)}">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" required minlength="8">
        <div class="hint">Mínimo 8 caracteres.</div>
      </div>
      ${requireInvite ? `
      <div class="form-group">
        <label for="invite_code">Código de invitación</label>
        <input type="text" id="invite_code" name="invite_code" required value="${escapeHtml(values.invite_code)}">
      </div>` : ''}
      <button class="btn" type="submit" style="width:100%;">Crear mi cuenta →</button>
    </form>
    <div class="auth-switch">¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></div>
  </div>`;
  return page({ title: 'Crear cuenta', activeNav: 'register', body });
}

function renderLogin({ error, values = {} } = {}) {
  const body = `
  <div class="card auth-card">
    <h1>Bienvenido/a de nuevo</h1>
    <p class="sub">Inicia sesión para continuar tu perfil BlueHeart.</p>
    ${error ? `<div class="alert error">${escapeHtml(error)}</div>` : ''}
    <form method="POST" action="/login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required value="${escapeHtml(values.email)}">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button class="btn" type="submit" style="width:100%;">Entrar →</button>
    </form>
    <div class="auth-switch">¿Aún no tienes cuenta? <a href="/register">Regístrate</a></div>
  </div>`;
  return page({ title: 'Iniciar sesión', activeNav: 'login', body });
}

module.exports = { renderRegister, renderLogin };
