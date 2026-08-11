/**
 * Motor de Compatibilidad BlueHeart — orquestador (Bloque 6.32.1).
 *
 * Flujo (versión v0.1.0 del subconjunto implementado; el flujo completo del
 * 6.32.1 incluye piezas como interacciones entre dimensiones y umbrales
 * estructurales que todavía no están activadas — ver comentarios inline):
 *
 *   respuestas → comparación de variables → reglas críticas
 *   → resultado por dimensión → porcentaje global → confianza y cobertura
 *   → estado de elegibilidad → datos explicativos
 *
 * Este módulo es la única puerta de entrada que debe usar el resto de la
 * app (rutas, vistas). Nadie fuera de app/lib/algorithm/ debería importar
 * los motores individuales directamente.
 */
const { compareVariables } = require('./variableEngine');
const { evaluateCriticalRules } = require('./criticalRulesEngine');
const { computeDimensionResults } = require('./dimensionEngine');
const { computeGlobalCompatibility, computeGlobalConfidence, computeGlobalCoverage } = require('./compatibilityEngine');
const { evaluateEligibility } = require('./eligibilityEngine');
const { ALGORITHM_VERSION, CONFIGURATION_VERSION, DIMENSIONS } = require('./config');

const STRENGTH_THRESHOLD = 0.75;
const FRICTION_THRESHOLD = 0.6;

function extractStrengthsAndFrictions(dimensionResults) {
  const entries = Object.values(dimensionResults).filter((d) => d.base_score !== null);
  const strengths = entries
    .filter((d) => d.base_score >= STRENGTH_THRESHOLD)
    .sort((a, b) => b.base_score - a.base_score)
    .map((d) => ({ dimension_id: d.dimension_id, label: d.label, score: d.base_score }));

  const frictions = entries
    .filter((d) => d.base_score < FRICTION_THRESHOLD)
    .sort((a, b) => a.base_score - b.base_score)
    .map((d) => ({ dimension_id: d.dimension_id, label: d.label, score: d.base_score }));

  return { strengths, frictions };
}

/**
 * Compara dos perfiles y devuelve el resultado estructurado completo.
 *
 * @param {Object} profileA
 * @param {Object} profileA.answers - { [questionIndex]: choiceIndex }
 * @param {boolean} profileA.hijosNoNegociable
 * @param {Object} profileB - misma forma que profileA
 * @returns {Object} resultado global (Bloque 6.33.10)
 */
function computeCompatibility(profileA, profileB) {
  const variableResults = compareVariables(profileA.answers, profileB.answers);
  const criticalConflicts = evaluateCriticalRules(profileA, profileB);
  const dimensionResults = computeDimensionResults(variableResults);

  const { compatibility_score, compatibility_percentage } = computeGlobalCompatibility(dimensionResults);
  const { confidence_score, confidence_label } = computeGlobalConfidence(dimensionResults);
  const coverage_score = computeGlobalCoverage(dimensionResults);

  const eligibility = evaluateEligibility({
    criticalConflicts,
    compatibilityPercentage: compatibility_percentage,
    confidenceScore: confidence_score,
    coverageScore: coverage_score,
    dimensionResults,
  });

  const { strengths, frictions } = extractStrengthsAndFrictions(dimensionResults);

  return {
    algorithm_version: ALGORITHM_VERSION,
    configuration_version: CONFIGURATION_VERSION,
    compatibility_score,
    compatibility_percentage,
    confidence_score,
    confidence_label,
    coverage_score,
    eligibility_status: eligibility.status,
    eligibility_reason: eligibility.reason,
    dimension_results: dimensionResults,
    dimension_weights: Object.fromEntries(Object.entries(DIMENSIONS).map(([id, d]) => [id, d.weight])),
    critical_conflicts: criticalConflicts,
    strengths,
    frictions,
    variable_results: variableResults,
    created_at: new Date().toISOString(),
  };
}

module.exports = {
  computeCompatibility,
  ALGORITHM_VERSION,
  CONFIGURATION_VERSION,
};
