const LOGO_DATA_URI_CACHE = { value: null };

/** Lee el logo una sola vez y lo cachea como data URI para incrustarlo en cada página. */
function logoDataUri() {
  if (!LOGO_DATA_URI_CACHE.value) {
    const fs = require('node:fs');
    const path = require('node:path');
    const p = path.join(__dirname, '..', 'assets', 'blueheart-logo-256.png');
    const b64 = fs.readFileSync(p).toString('base64');
    LOGO_DATA_URI_CACHE.value = `data:image/png;base64,${b64}`;
  }
  return LOGO_DATA_URI_CACHE.value;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function navLink(href, label, activeNav, key) {
  const cls = activeNav === key ? 'active' : '';
  return `<a class="${cls}" href="${href}">${label}</a>`;
}

/**
 * Envoltorio de página compartido por toda la app: mismo logo, mismos
 * tokens de color que blueheart-demo.html, barra de navegación cuando
 * hay sesión iniciada.
 */
function page({ title, user, activeNav = '', body = '', wide = false }) {
  const logo = logoDataUri();
  const nav = user
    ? `
    <div class="navbar">
      <img src="${logo}" alt="BlueHeart">
      <span class="brand"><b>Blue</b>Heart</span>
      <nav>
        ${navLink('/perfil', 'Mi perfil', activeNav, 'perfil')}
        ${navLink('/cuestionario', 'Cuestionario', activeNav, 'cuestionario')}
        ${navLink('/matches', 'Compatibilidades', activeNav, 'matches')}
      </nav>
      <div class="spacer"></div>
      <form method="POST" action="/logout"><button class="logout-btn" type="submit">Salir</button></form>
    </div>`
    : `
    <div class="navbar">
      <img src="${logo}" alt="BlueHeart">
      <span class="brand"><b>Blue</b>Heart</span>
      <span class="tag" style="margin-left:10px;">PILOTO</span>
      <div class="spacer"></div>
      <nav>
        ${navLink('/login', 'Entrar', activeNav, 'login')}
        ${navLink('/register', 'Registrarme', activeNav, 'register')}
      </nav>
    </div>`;

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>${escapeHtml(title)} · BlueHeart</title>
<link rel="icon" href="${logo}">
<link rel="stylesheet" href="/style.css">
</head>
<body>
<div class="wrap" ${wide ? 'style="max-width:640px;"' : ''}>
  ${nav}
  ${body}
</div>
</body>
</html>`;
}

module.exports = { page, escapeHtml, logoDataUri };
