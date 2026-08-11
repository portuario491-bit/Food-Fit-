const { page, logoDataUri } = require('./layout');

function renderHome() {
  const logo = logoDataUri();
  const body = `
  <div class="card hero">
    <div class="logo-ring"><img src="${logo}" alt="BlueHeart logo"></div>
    <h1>Antes de conocerse, <b>comprenderse</b>.</h1>
    <p class="tagline">Piloto privado de BlueHeart. Si tienes invitación, crea tu cuenta, completa tu perfil y el cuestionario, y descubre tus compatibilidades dentro del grupo de prueba.</p>
    <div class="row-btns">
      <a class="btn" href="/register">Crear mi cuenta →</a>
      <a class="btn secondary" href="/login">Ya tengo cuenta</a>
    </div>
    <div class="disclaimer">
      Esta es una versión piloto en pruebas con un grupo reducido de personas. El cuestionario y el algoritmo de compatibilidad son versiones simplificadas — se irán ampliando con el manual completo del proyecto.
    </div>
  </div>`;
  return page({ title: 'BlueHeart · Piloto', body });
}

module.exports = { renderHome };
