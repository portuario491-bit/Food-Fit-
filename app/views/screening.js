const { page, escapeHtml } = require('./layout');

const AGE_OPTIONS = Array.from({ length: 48 }, (_, i) => 18 + i).map(String).concat(['65+']);

function selectField({ name, label, options, required = true, value = '' }) {
  const opts = options
    .map((o) => {
      const v = typeof o === 'string' ? o : o.value;
      const l = typeof o === 'string' ? o : o.label;
      return `<option value="${escapeHtml(v)}" ${value === v ? 'selected' : ''}>${escapeHtml(l)}</option>`;
    })
    .join('');
  return `
  <div class="form-group">
    <label for="${name}">${escapeHtml(label)}</label>
    <select id="${name}" name="${name}" ${required ? 'required' : ''}>
      <option value="" disabled ${value ? '' : 'selected'}>Selecciona...</option>
      ${opts}
    </select>
  </div>`;
}

function renderScreeningForm({ error, values = {} } = {}) {
  const body = `
  <div class="card auth-card" style="max-width:560px;">
    <h1>BlueHeart — Formulario de selección</h1>
    <p class="sub">Antes de invitarte al piloto, queremos conocerte un poco. Responde con sinceridad — no hay respuestas "mejores".</p>
    ${error ? `<div class="alert error">${escapeHtml(error)}</div>` : ''}
    <form method="POST" action="/seleccion">
      ${selectField({ name: 'age', label: '¿Qué edad tienes?', options: AGE_OPTIONS, value: values.age })}
      ${selectField({ name: 'location', label: '¿Dónde vives actualmente?', value: values.location, options: [
        'Valencia capital', 'Área metropolitana de Valencia', 'Provincia de Valencia',
        'Otra provincia de la Comunidad Valenciana', 'Otra',
      ] })}
      ${selectField({ name: 'gender', label: '¿Con qué género te identificas?', value: values.gender, options: [
        'Mujer', 'Hombre', 'Prefiero no especificarlo',
      ] })}
      ${selectField({ name: 'orientation', label: '¿Cuál es tu orientación sexual?', value: values.orientation, options: [
        'Heterosexual', 'Homosexual', 'Bisexual', 'Prefiero no indicarlo',
      ] })}
      <div class="form-group">
        <label>¿Qué personas te interesa conocer sentimentalmente?</label>
        <div class="form-checkbox"><label style="display:flex;gap:8px;align-items:center;"><input type="checkbox" name="seeking" value="Mujeres" ${(values.seekingList || []).includes('Mujeres') ? 'checked' : ''}> Mujeres</label></div>
        <div class="form-checkbox" style="margin-top:6px;"><label style="display:flex;gap:8px;align-items:center;"><input type="checkbox" name="seeking" value="Hombres" ${(values.seekingList || []).includes('Hombres') ? 'checked' : ''}> Hombres</label></div>
      </div>
      ${selectField({ name: 'age_min', label: '¿Cuál es la edad MÍNIMA de una persona que estarías dispuesto/a a conocer?', options: AGE_OPTIONS, value: values.age_min })}
      ${selectField({ name: 'age_max', label: '¿Y la edad MÁXIMA?', options: AGE_OPTIONS, value: values.age_max })}
      ${selectField({ name: 'looking_for', label: '¿Qué buscas actualmente?', value: values.looking_for, options: [
        'Una relación estable',
        'Conocer a alguien con intención de que pueda surgir una relación',
        'Conocer personas y ver qué ocurre',
        'Una relación casual',
        'Ahora mismo no estoy buscando conocer a nadie',
      ] })}
      ${selectField({ name: 'dating_apps_experience', label: '¿Has utilizado alguna vez aplicaciones de citas?', value: values.dating_apps_experience, options: [
        'Sí, las utilizo actualmente', 'Sí, las he utilizado pero ya no', 'Las he probado muy poco', 'Nunca las he utilizado',
      ] })}
      ${selectField({ name: 'would_meet_match', label: 'Si BlueHeart encontrara una persona que considera especialmente compatible contigo y su perfil te interesara, ¿estarías realmente dispuesto/a a conocerla?', value: values.would_meet_match, options: [
        'Sí', 'Probablemente sí', 'Dependería de la persona', 'Probablemente no', 'No',
      ] })}
      ${selectField({ name: 'would_fill_questionnaire', label: '¿Estarías dispuesto/a a completar un cuestionario personal para que BlueHeart pueda analizar compatibilidad?', value: values.would_fill_questionnaire, options: [
        'Sí', 'Sí, si sé cómo se utilizarán mis datos', 'Depende de las preguntas', 'No',
      ] })}
      ${selectField({ name: 'wants_to_participate', label: '¿Te gustaría participar gratuitamente en esta primera prueba privada de BlueHeart?', value: values.wants_to_participate, options: [
        'Sí', 'Quizá, quiero recibir más información', 'No',
      ] })}
      <button class="btn" type="submit" style="width:100%;margin-top:8px;">Continuar →</button>
    </form>
  </div>`;
  return page({ title: 'Formulario de selección', user: null, body });
}

function renderScreeningContact({ error, values = {} } = {}) {
  const body = `
  <div class="card auth-card" style="max-width:520px;">
    <h1>Casi terminamos</h1>
    <p class="sub">Déjanos cómo contactarte si finalmente formas parte del piloto.</p>
    <div class="alert info">
      Al continuar nos darás un dato de contacto y ya nos has indicado tu
      orientación sexual — un dato especialmente protegido. Lo usamos solo
      para valorar tu candidatura y contactarte sobre el piloto de
      BlueHeart; no se usa con fines publicitarios ni se comparte con
      terceros. Puedes pedir en cualquier momento que eliminemos tus
      respuestas escribiendo a <b>portuario491@hotmail.com</b>.
    </div>
    ${error ? `<div class="alert error">${escapeHtml(error)}</div>` : ''}
    <form method="POST" action="/seleccion/contacto">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" required maxlength="60" value="${escapeHtml(values.name)}">
        <div class="hint">Solo el nombre, no hace falta el apellido.</div>
      </div>
      ${selectField({ name: 'contact_method', label: '¿Cómo prefieres que contactemos contigo?', value: values.contact_method, options: ['WhatsApp', 'Email'] })}
      <div class="form-group">
        <label for="contact_value">Teléfono o email</label>
        <input type="text" id="contact_value" name="contact_value" required maxlength="120" value="${escapeHtml(values.contact_value)}">
        <div class="hint">Solo lo usaremos para contactarte sobre el piloto de BlueHeart.</div>
      </div>
      <button class="btn" type="submit" style="width:100%;">Enviar →</button>
    </form>
  </div>`;
  return page({ title: 'Formulario de selección', user: null, body });
}

function renderScreeningThanks() {
  const body = `
  <div class="card auth-card" style="max-width:480px;text-align:center;">
    <h1>¡Gracias!</h1>
    <p class="sub">Hemos recibido tus respuestas. Si finalmente formas parte de esta primera prueba privada de BlueHeart, te contactaremos con los siguientes pasos.</p>
  </div>`;
  return page({ title: 'Gracias', user: null, body });
}

module.exports = { renderScreeningForm, renderScreeningContact, renderScreeningThanks };
