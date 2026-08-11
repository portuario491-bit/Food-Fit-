/**
 * Compatibility Engine + Confidence Engine (Bloque 6.18 / 6.19).
 *
 * G = Σ(Dⱼ × Wⱼ) / ΣWⱼ disponible — el porcentaje global nunca mezcla
 * compatibilidad y confianza en la misma fórmula (6.18.4): son dos números
 * separados que se calculan aquí de forma independiente.
 */
const { DIMENSIONS } = require('./config');

/** Porcentaje global de compatibilidad a partir de los resultados por dimensión. */
function computeGlobalCompatibility(dimensionResults) {
  let weightedSum = 0;
  let availableWeight = 0;

  Object.values(dimensionResults).forEach((d) => {
    if (d.base_score === null) return; // dimensión sin información suficiente, excluida (6.18.2)
    weightedSum += d.final_score * d.method_weight;
    availableWeight += d.method_weight;
  });

  const compatibility_score = availableWeight > 0 ? weightedSum / availableWeight : null;
  const compatibility_percentage = compatibility_score === null ? null : Math.round(compatibility_score * 100);

  return { compatibility_score, compatibility_percentage };
}

/** Nivel de confianza global, calculado por separado del porcentaje (6.19.6). */
function computeGlobalConfidence(dimensionResults) {
  let weightedSum = 0;
  let totalWeight = 0;

  Object.values(dimensionResults).forEach((d) => {
    totalWeight += d.method_weight;
    weightedSum += d.confidence * d.method_weight * d.coverage;
  });

  const confidence_score = totalWeight > 0 ? weightedSum / totalWeight : 0;
  return { confidence_score, confidence_label: confidenceLabel(confidence_score) };
}

function confidenceLabel(score) {
  if (score >= 0.9) return 'muy alta';
  if (score >= 0.75) return 'alta';
  if (score >= 0.55) return 'moderada';
  if (score >= 0.35) return 'limitada';
  return 'insuficiente';
}

/** Cobertura global (media ponderada de la cobertura de cada dimensión). */
function computeGlobalCoverage(dimensionResults) {
  let weightedSum = 0;
  let totalWeight = 0;
  Object.values(dimensionResults).forEach((d) => {
    totalWeight += d.method_weight;
    weightedSum += d.coverage * d.method_weight;
  });
  return totalWeight > 0 ? weightedSum / totalWeight : 0;
}

module.exports = { computeGlobalCompatibility, computeGlobalConfidence, computeGlobalCoverage, confidenceLabel };
