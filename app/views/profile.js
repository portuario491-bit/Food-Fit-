const { page, escapeHtml } = require('./layout');
const { DIMENSIONS, DIM_LABELS } = require('../lib/questions');
const { GENDERS, SEEKING_OPTIONS } = require('../lib/matchFilter');

function selectOptions(options, current) {
  return (
    `<option value="" ${!current ? 'selected' : ''} disabled>Selecciona...</option>` +
    options.map((o) => `<option value="${o.value}" ${current === o.value ? 'selected' : ''}>${o.label}</option>`).join('')
  );
}

function photoThumb(photo) {
  return `
  <div class="photo-thumb ${photo.is_primary ? 'primary' : ''}">
    <img src="/fotos/${photo.id}" alt="Foto de perfil">
    ${photo.is_primary
      ? '<span class="badge">Principal</span>'
      : `<form class="photo-action-primary" method="POST" action="/perfil/foto/${photo.id}/principal">
           <button class="make-primary-btn" type="submit">Hacer principal</button>
         </form>`}
    <form class="photo-action-delete" method="POST" action="/perfil/foto/${photo.id}/eliminar" onsubmit="return confirm('¿Eliminar esta foto?');">
      <button class="del-btn" type="submit" title="Eliminar">✕</button>
    </form>
  </div>`;
}

function dimensionBars(scores) {
  return DIMENSIONS.map((d) => {
    const pct = Math.round((scores[d] / 4) * 100);
    return `
    <div class="dim-row">
      <div class="dim-head"><span>${DIM_LABELS[d]}</span><span>${pct}%</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
}

function renderProfile({ user, photos, profileScores, answeredCount, total, error, success, showIncompleteNotice }) {
  const onboardingDone = !!user.onboarding_completed;
  const hasPhoto = photos.length > 0;
  const hasBasics = !!(user.age && user.gender && user.seeking_gender);
  const profileComplete = hasPhoto && hasBasics;

  const checklist = `
  <div class="steps-hint">
    <span class="${hasPhoto ? 'done' : 'current'}">${hasPhoto ? '✓' : '①'} Sube una foto</span>
    <span class="${hasBasics ? 'done' : hasPhoto ? 'current' : ''}">${hasBasics ? '✓' : '②'} Guarda tus datos básicos</span>
    <span class="${onboardingDone ? 'done' : profileComplete ? 'current' : ''}">${onboardingDone ? '✓' : '③'} Completa el cuestionario</span>
  </div>`;

  const body = `
  <div class="card">
    <div class="summary-title">Mi perfil</div>
    <div class="summary-sub">Esto es lo que verán las demás personas del piloto cuando aparezcas como una compatibilidad.</div>
    ${checklist}
    ${showIncompleteNotice && !profileComplete
      ? `<div class="alert info">Para pasar al cuestionario primero hay que completar los pasos ① y ② de arriba: ${!hasPhoto ? 'te falta subir una foto' : ''}${!hasPhoto && !hasBasics ? ' y ' : ''}${!hasBasics ? 'te falta guardar tus datos básicos (rellena el formulario y pulsa "Guardar cambios")' : ''}.</div>`
      : ''}
    ${error ? `<div class="alert error">${escapeHtml(error)}</div>` : ''}
    ${success ? `<div class="alert success">${escapeHtml(success)}</div>` : ''}

    <div class="section-title">Fotos</div>
    <div class="photo-grid">
      ${photos.map(photoThumb).join('') || ''}
    </div>
    <form method="POST" action="/perfil/foto" enctype="multipart/form-data" class="upload-box">
      <input type="file" name="photo" accept="image/jpeg,image/png,image/webp" required>
      <div style="margin-top:12px;">
        <button class="btn secondary" type="submit">Subir foto</button>
      </div>
      <div class="hint">JPG, PNG o WEBP · máx. 5 MB. La primera foto que subas será tu foto principal.</div>
    </form>

    <div class="section-title">Datos básicos</div>
    <form method="POST" action="/perfil">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" required maxlength="60" value="${escapeHtml(user.name)}">
      </div>
      <div class="form-group">
        <label for="age">Edad</label>
        <input type="number" id="age" name="age" min="18" max="99" value="${user.age || ''}">
      </div>
      <div class="form-group">
        <label for="bio">Sobre ti</label>
        <textarea id="bio" name="bio" maxlength="400" placeholder="Un par de frases sobre ti...">${escapeHtml(user.bio)}</textarea>
      </div>
      <div class="form-group">
        <label class="form-checkbox">
          <input type="checkbox" name="hijos_no_negociable" ${user.hijos_no_negociable ? 'checked' : ''}>
          <span>Tener hijos (o no tenerlos) es, para mí, un criterio <b>no negociable</b> en una relación.</span>
        </label>
      </div>

      <div class="section-title" style="margin-top:8px;">A quién conocer</div>
      <div class="form-group">
        <label for="gender">Tu género</label>
        <select id="gender" name="gender" required>${selectOptions(GENDERS, user.gender)}</select>
      </div>
      <div class="form-group">
        <label for="seeking_gender">¿A quién te gustaría conocer?</label>
        <select id="seeking_gender" name="seeking_gender" required>${selectOptions(SEEKING_OPTIONS, user.seeking_gender)}</select>
      </div>
      <div class="form-group">
        <label>Rango de edad que buscas</label>
        <div style="display:flex;align-items:center;gap:10px;">
          <input type="number" name="age_min" min="18" max="99" style="width:90px;" value="${user.age_min || 18}">
          <span class="hint" style="margin:0;">y</span>
          <input type="number" name="age_max" min="18" max="99" style="width:90px;" value="${user.age_max || 99}">
          <span class="hint" style="margin:0;">años</span>
        </div>
        <div class="hint">Solo se muestran compatibilidades cuando el interés y el rango de edad son mutuos en los dos sentidos.</div>
      </div>

      <button class="btn" type="submit">Guardar cambios</button>
    </form>

    <div class="section-title">Cuestionario de compatibilidad</div>
    ${onboardingDone
      ? `<div class="dim-row"></div>${dimensionBars(profileScores)}
         <div class="row-btns" style="margin-top:16px;justify-content:flex-start;">
           <a class="btn secondary" href="/cuestionario">Revisar mis respuestas</a>
         </div>`
      : `<div class="alert info">Has respondido ${answeredCount} de ${total} preguntas. Complétalo para aparecer en las compatibilidades de las demás personas.</div>
         <a class="btn" href="/cuestionario">${answeredCount > 0 ? 'Continuar cuestionario' : 'Empezar cuestionario'} →</a>`
    }
  </div>`;

  return page({ title: 'Mi perfil', user, activeNav: 'perfil', body });
}

module.exports = { renderProfile };
