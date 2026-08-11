const { page, escapeHtml } = require('./layout');

function initials(name) {
  return (name || '?').trim().charAt(0).toUpperCase();
}

const STATUS_LABELS = {
  RECOMMENDED: 'Recomendado',
  RECOMMENDED_WITH_NOTES: 'Recomendado, con matices',
  BELOW_THRESHOLD: 'Por debajo del umbral',
  PENDING_INFORMATION: 'Información pendiente',
  CRITICAL_CONFLICT: 'Incompatibilidad crítica',
};

const STATUS_CLASS = {
  RECOMMENDED: 'status-good',
  RECOMMENDED_WITH_NOTES: 'status-good',
  BELOW_THRESHOLD: 'status-neutral',
  PENDING_INFORMATION: 'status-neutral',
  CRITICAL_CONFLICT: 'status-bad',
};

function personCard(m, { showStatus = false } = {}) {
  return `
    <a class="person-card" href="/matches/${m.id}">
      ${m.photoId
        ? `<img class="person-avatar" src="/fotos/${m.photoId}" alt="${escapeHtml(m.name)}">`
        : `<div class="person-avatar">${initials(m.name)}</div>`}
      <div class="person-info">
        <b>${escapeHtml(m.name)}${m.age ? `, ${m.age}` : ''}</b>
        <span>${escapeHtml(m.bio || 'Sin descripción todavía')}</span>
        ${showStatus ? `<span class="status-pill ${STATUS_CLASS[m.status] || ''}">${STATUS_LABELS[m.status] || m.status}</span>` : ''}
      </div>
      <div class="person-pct">${m.pct === null ? '—' : `${m.pct}%`}</div>
    </a>`;
}

function renderMatchList({ user, matches, others_not_recommended = [] }) {
  const items = matches.map((m) => personCard(m)).join('');
  const otherItems = others_not_recommended.map((m) => personCard(m, { showStatus: true })).join('');

  const body = `
  <div class="card">
    <div class="summary-title">Compatibilidades</div>
    <div class="summary-sub">Comparado con el resto de personas del piloto que ya han completado su cuestionario, usando el algoritmo de compatibilidad (Bloque 6).</div>
    ${matches.length === 0
      ? `<div class="empty-state"><div class="big">🫀</div>Por ahora no hay ninguna compatibilidad que cumpla el umbral de recomendación.<br>Eso también es un resultado válido del sistema (Bloque 6.24) — no todas las combinaciones tienen por qué recomendarse.</div>`
      : `<div class="match-grid">${items}</div>`}

    ${others_not_recommended.length > 0
      ? `<div class="section-title">Otras personas del piloto</div>
         <div class="summary-sub" style="margin-top:-6px;">Hay match mutuo de género/edad, pero la compatibilidad calculada no llega a "recomendada" todavía. Se muestran por transparencia, para validar el algoritmo durante el piloto.</div>
         <div class="match-grid">${otherItems}</div>`
      : ''}

    <div class="disclaimer" style="margin-top:20px;">
      Estos porcentajes usan el algoritmo de compatibilidad BlueHeart v0.1.0 (Bloque 6) — todavía una hipótesis metodológica en fase de calibración, no un resultado científico definitivo.
    </div>
  </div>`;

  return page({ title: 'Compatibilidades', user, activeNav: 'matches', body });
}

function statusNotice(result) {
  const status = result.eligibility_status;
  if (status === 'CRITICAL_CONFLICT') {
    const conflict = result.critical_conflicts[0];
    return `<div class="crit-banner">
      <div class="icon">⚠️</div>
      <div>
        <b>Incompatibilidad crítica detectada</b>
        <p>Una de las dos personas ha marcado «tener hijos» como un criterio no negociable, y vuestras posiciones sobre tener hijos son opuestas y están confirmadas. Por eso el sistema no recomienda esta combinación, con independencia del porcentaje descriptivo (Bloque 6.13).</p>
      </div>
    </div>`;
  }
  if (status === 'BELOW_THRESHOLD') {
    return `<div class="alert info">Por ahora, la compatibilidad calculada está por debajo del umbral que usamos en esta fase beta (${result.compatibility_percentage}%). No es una incompatibilidad crítica — simplemente no alcanza todavía el nivel mínimo para considerarse una recomendación (Bloque 6.22).</div>`;
  }
  if (status === 'PENDING_INFORMATION') {
    return `<div class="alert info">Todavía no hay información suficiente o suficientemente fiable para calcular esta compatibilidad con confianza (Bloque 6.19).</div>`;
  }
  if (status === 'RECOMMENDED_WITH_NOTES') {
    return `<div class="alert info">Es una combinación recomendada, aunque hay una o varias diferencias que conviene tener en cuenta — las verás abajo, en "Aspectos a tener en cuenta".</div>`;
  }
  return '';
}

function renderMatchDetail({ user, userPhotoId, other, otherPhotoId, result }) {
  const circumference = 2 * Math.PI * 52;
  const pct = result.compatibility_percentage === null ? 0 : result.compatibility_percentage;
  const offset = circumference - (pct / 100) * circumference;

  const strengthsHtml = result.strengths.length
    ? result.strengths
        .slice(0, 4)
        .map(
          (s) => `<div class="insight strength"><div class="dot"></div><p>Compatibilidad elevada en <b>${escapeHtml(s.label)}</b> (${Math.round(s.score * 100)}%): vuestras posiciones están muy cerca en esta dimensión.</p></div>`
        )
        .join('')
    : `<div class="insight strength"><div class="dot"></div><p>No hay coincidencias especialmente altas en esta comparación.</p></div>`;

  const frictionsHtml = result.frictions.length
    ? result.frictions
        .slice(0, 4)
        .map(
          (f) => `<div class="insight watch"><div class="dot"></div><p>Diferencia relevante en <b>${escapeHtml(f.label)}</b> (${Math.round(f.score * 100)}% de afinidad): conviene conversarlo antes de dar por hecho que encaja.</p></div>`
        )
        .join('')
    : `<div class="insight watch"><div class="dot"></div><p>No se han detectado diferencias especialmente relevantes.</p></div>`;

  const dimensionLines = Object.values(result.dimension_results)
    .map((d) => {
      const w = (d.method_weight * 100).toFixed(0);
      const s = d.base_score === null ? 'sin datos' : `${Math.round(d.base_score * 100)}%`;
      const contrib = d.base_score === null ? '0.0' : (d.method_weight * d.base_score * 100).toFixed(1);
      return `${d.label.padEnd(22, ' ')} peso ${w}%  ·  afinidad ${s}  ·  aporta ${contrib} pts  ·  cobertura ${(d.coverage * 100).toFixed(0)}%`;
    })
    .join('\n');

  const critLines = result.critical_conflicts.length
    ? result.critical_conflicts.map((c) => `- ${c.rule_id}: ${c.description}`).join('\n')
    : 'ninguna';

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
        <div class="pct"><b>${result.compatibility_percentage === null ? '—' : result.compatibility_percentage + '%'}</b><span>compatibilidad</span></div>
      </div>
      <div class="status-pill ${STATUS_CLASS[result.eligibility_status] || ''}" style="margin-top:8px;">${STATUS_LABELS[result.eligibility_status] || result.eligibility_status}</div>
      <div class="summary-sub" style="margin-top:6px;">Confianza del resultado: ${result.confidence_label}</div>
    </div>

    ${statusNotice(result)}

    <div class="section-title">Fortalezas y complementariedades</div>
    ${strengthsHtml}

    <div class="section-title">Aspectos a tener en cuenta</div>
    ${frictionsHtml}

    <div class="disclaimer" style="margin-top:24px;">
      Este porcentaje es una estimación del algoritmo BlueHeart v0.1.0 (Bloque 6) — no una probabilidad de éxito real, ni un diagnóstico de ninguna de las dos personas. La decisión de conocerse siempre pertenece a las personas.
    </div>

    <details class="algo-toggle" style="margin-top:16px;">
      <summary style="cursor:pointer;color:var(--text-dim);font-size:13px;">Ver cómo se ha calculado</summary>
      <pre class="algo-box show" style="margin-top:10px;">// Motor de compatibilidad BlueHeart v${result.algorithm_version} (config v${result.configuration_version})
D = Σ(variable × peso) / peso disponible   (por dimensión, Bloque 6.17)
G = Σ(dimensión × peso) / peso disponible  (global, Bloque 6.18)

${dimensionLines}
${'-'.repeat(70)}
Compatibilidad global: ${result.compatibility_percentage === null ? 'sin datos' : result.compatibility_percentage + '%'}
Confianza: ${result.confidence_label} (${(result.confidence_score * 100).toFixed(0)}%)
Cobertura: ${(result.coverage_score * 100).toFixed(0)}%
Reglas críticas activadas: ${critLines}
Estado de elegibilidad: ${result.eligibility_status} — ${result.eligibility_reason}</pre>
    </details>

    <div class="row-btns" style="margin-top:22px;">
      <a class="btn secondary" href="/matches">← Volver a compatibilidades</a>
    </div>
  </div>`;

  return page({ title: `Tú y ${other.name}`, user, activeNav: 'matches', body });
}

module.exports = { renderMatchList, renderMatchDetail };
