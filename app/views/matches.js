const { page, escapeHtml } = require('./layout');
const { DIMENSIONS, DIM_LABELS } = require('../lib/questions');

function initials(name) {
  return (name || '?').trim().charAt(0).toUpperCase();
}

function renderMatchList({ user, matches }) {
  const items = matches
    .map(
      (m) => `
    <a class="person-card" href="/matches/${m.id}">
      ${m.photoId
        ? `<img class="person-avatar" src="/fotos/${m.photoId}" alt="${escapeHtml(m.name)}">`
        : `<div class="person-avatar">${initials(m.name)}</div>`}
      <div class="person-info">
        <b>${escapeHtml(m.name)}${m.age ? `, ${m.age}` : ''}</b>
        <span>${escapeHtml(m.bio || 'Sin descripción todavía')}</span>
      </div>
      <div class="person-pct">${m.pct}%</div>
    </a>`
    )
    .join('');

  const body = `
  <div class="card">
    <div class="summary-title">Compatibilidades</div>
    <div class="summary-sub">Comparado con el resto de personas del piloto que ya han completado su cuestionario.</div>
    ${matches.length === 0
      ? `<div class="empty-state"><div class="big">🫀</div>Todavía no hay más personas con el perfil completo en el piloto.<br>Vuelve pronto.</div>`
      : `<div class="match-grid">${items}</div>`}
    <div class="disclaimer" style="margin-top:20px;">
      Estos porcentajes usan el algoritmo demo del piloto (ver Bloque 5.15), no el algoritmo oficial (Bloque 6) todavía.
    </div>
  </div>`;

  return page({ title: 'Compatibilidades', user, activeNav: 'matches', body });
}

function renderMatchDetail({ user, userPhotoId, other, otherPhotoId, result }) {
  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (result.globalPct / 100) * circumference;

  const ranked = DIMENSIONS.map((d) => ({ d, sim: result.perDim[d] })).sort((a, b) => b.sim - a.sim);
  const strengths = ranked.filter((r) => r.sim >= 0.75).slice(0, 4);
  const watch = ranked.filter((r) => r.sim < 0.6).slice(0, 4);

  const strengthsHtml = strengths.length
    ? strengths
        .map(
          (s) => `<div class="insight strength"><div class="dot"></div><p>Compatibilidad elevada en <b>${DIM_LABELS[s.d]}</b> (${Math.round(s.sim * 100)}%): vuestras posiciones están muy cerca en esta dimensión.</p></div>`
        )
        .join('')
    : `<div class="insight strength"><div class="dot"></div><p>No hay coincidencias especialmente altas en esta comparación.</p></div>`;

  const watchHtml = watch.length
    ? watch
        .map(
          (w) => `<div class="insight watch"><div class="dot"></div><p>Diferencia relevante en <b>${DIM_LABELS[w.d]}</b> (${Math.round(w.sim * 100)}% de afinidad): conviene conversarlo antes de dar por hecho que encaja.</p></div>`
        )
        .join('')
    : `<div class="insight watch"><div class="dot"></div><p>No se han detectado diferencias especialmente relevantes.</p></div>`;

  const critBanner = result.criticalMismatch
    ? `<div class="crit-banner">
        <div class="icon">⚠️</div>
        <div>
          <b>Incompatibilidad crítica detectada</b>
          <p>Ambos habéis marcado «tener hijos» como un criterio no negociable, y vuestras posiciones son muy distintas. Por eso el porcentaje se ha limitado en vez de compensarse con otras afinidades.</p>
        </div>
      </div>`
    : '';

  const algoLines = DIMENSIONS.map((d) => {
    const p = (result.weights[d] * 100).toFixed(0);
    const s = (result.perDim[d] * 100).toFixed(0);
    const contrib = (result.weights[d] * result.perDim[d] * 100).toFixed(1);
    return `${DIM_LABELS[d].padEnd(22, ' ')} peso ${p}%  ·  afinidad ${s}%  ·  aporta ${contrib} pts`;
  }).join('\n');

  const body = `
  <div class="card">
    <div class="result-head">
      <div class="result-avatar-row">
        ${userPhotoId ? `<img src="/fotos/${userPhotoId}" alt="Tú">` : ''}
        ${otherPhotoId ? `<img src="/fotos/${otherPhotoId}" alt="${escapeHtml(other.name)}">` : ''}
      </div>
      <div class="result-names">Tú &amp; ${escapeHtml(other.name)}</div>
      <div class="gauge">
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" stroke="#131a2c" stroke-width="12" fill="none"/>
          <circle cx="60" cy="60" r="52" stroke="url(#grad)" stroke-width="12" fill="none" stroke-linecap="round"
            transform="rotate(-90 60 60)"
            stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"/>
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#2f7bf6"/>
              <stop offset="100%" stop-color="#38bdf8"/>
            </linearGradient>
          </defs>
        </svg>
        <div class="pct"><b>${result.globalPct}%</b><span>compatibilidad</span></div>
      </div>
    </div>

    ${critBanner}

    <div class="section-title">Fortalezas y complementariedades</div>
    ${strengthsHtml}

    <div class="section-title">Aspectos a tener en cuenta</div>
    ${watchHtml}

    <div class="disclaimer" style="margin-top:24px;">
      Este porcentaje es una estimación del algoritmo demo del piloto — no una probabilidad de éxito real, ni un diagnóstico de ninguna de las dos personas. La decisión de conocerse siempre pertenece a las personas.
    </div>

    <details class="algo-toggle" style="margin-top:16px;">
      <summary style="cursor:pointer;color:var(--text-dim);font-size:13px;">Ver cómo se ha calculado</summary>
      <pre class="algo-box show" style="margin-top:10px;">// Algoritmo demo del piloto (no es el Bloque 6 oficial)
similitud(dim) = 1 - |tú[dim] - otro[dim]| / 4
global% = Σ  peso(dim) × similitud(dim)

${algoLines}
${'-'.repeat(58)}
Incompatibilidad crítica aplicada: ${result.criticalMismatch ? 'sí (tope 35%)' : 'no'}
Resultado mostrado: ${result.globalPct}%</pre>
    </details>

    <div class="row-btns" style="margin-top:22px;">
      <a class="btn secondary" href="/matches">← Volver a compatibilidades</a>
    </div>
  </div>`;

  return page({ title: `Tú y ${other.name}`, user, activeNav: 'matches', body });
}

module.exports = { renderMatchList, renderMatchDetail };
