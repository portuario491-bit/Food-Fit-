/**
 * Algoritmo de compatibilidad — versión DEMO/piloto.
 * Misma lógica que blueheart-demo.html, aislada aquí para poder
 * sustituirla por el Bloque 6 (algoritmo oficial) sin tocar rutas ni vistas.
 * Interfaz: computeCompatibility(scoresA, scoresB, meta) -> { perDim, globalPct, criticalMismatch }
 */
const { DIMENSIONS } = require('./questions');

const WEIGHTS = {
  comunicacion:.16, confianza:.15, apego:.11, convivencia:.10,
  conflictos:.14, proyecto_vida:.13, valores:.12, hijos:.09
};

function computeCompatibility(a, b) {
  const perDim = {};
  let weighted = 0;
  DIMENSIONS.forEach(d => {
    const dist = Math.abs(a.scores[d] - b.scores[d]);
    const sim = 1 - (dist / 4);
    perDim[d] = sim;
    weighted += sim * WEIGHTS[d];
  });

  let globalPct = Math.round(weighted * 100);

  const hijosDist = Math.abs(a.scores.hijos - b.scores.hijos);
  const bothNonNegotiable = a.hijosNoNegociable && b.hijosNoNegociable;
  const criticalMismatch = bothNonNegotiable && hijosDist >= 2.5;

  if (criticalMismatch) {
    globalPct = Math.min(globalPct, 35);
  }

  return { perDim, globalPct, criticalMismatch, weights: WEIGHTS };
}

module.exports = { computeCompatibility, WEIGHTS };
