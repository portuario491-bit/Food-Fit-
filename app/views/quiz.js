const { page } = require('./layout');
const { QUESTIONS } = require('../lib/questions');

function renderQuestion({ user, index, existingChoice }) {
  const q = QUESTIONS[index];
  const total = QUESTIONS.length;
  const pct = Math.round(((index + 1) / total) * 100);

  const options = q.options
    .map((opt, i) => {
      const selected = existingChoice === i ? 'selected' : '';
      return `
      <form method="POST" action="/cuestionario">
        <input type="hidden" name="question_index" value="${index}">
        <input type="hidden" name="choice_index" value="${i}">
        <button class="option ${selected}" type="submit">
          <span class="k">${String.fromCharCode(65 + i)}</span>${opt}
        </button>
      </form>`;
    })
    .join('');

  const backLink = index > 0 ? `<a class="btn ghost" href="/cuestionario?q=${index - 1}">← Atrás</a>` : `<span></span>`;

  const body = `
  <div class="card">
    <div class="progress-wrap">
      <div class="progress-top"><span>Pregunta ${index + 1} de ${total}</span><span>${pct}%</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="dim-pill">${q.label}</div>
    <div class="question">${q.text}</div>
    <div class="options">${options}</div>
    <div class="nav-row">
      ${backLink}
      <div class="spacer"></div>
    </div>
  </div>`;

  return page({ title: 'Cuestionario', user, activeNav: 'cuestionario', body });
}

module.exports = { renderQuestion };
