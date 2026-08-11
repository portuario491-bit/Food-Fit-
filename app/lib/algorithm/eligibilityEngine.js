/**
 * Eligibility Engine (Bloque 6.18.6 / 6.22).
 *
 * Determina si una comparación puede recomendarse. Es un resultado
 * independiente del porcentaje — "porcentaje alto ≠ recomendación
 * automática" (6.22.1). Se evalúa en este orden (6.18.7):
 *   1. ¿Incompatibilidad crítica?           -> CRITICAL_CONFLICT
 *   2. ¿Información suficiente?              -> PENDING_INFORMATION
 *   3. ¿Alcanza el umbral global?            -> BELOW_THRESHOLD si no
 *   4. ¿Hay diferencias relevantes a notar?  -> RECOMMENDED_WITH_NOTES
 *   5. En otro caso                          -> RECOMMENDED
 */
const { ELIGIBILITY } = require('./config');

const STATUS = {
  RECOMMENDED: 'RECOMMENDED',
  RECOMMENDED_WITH_NOTES: 'RECOMMENDED_WITH_NOTES',
  PENDING_INFORMATION: 'PENDING_INFORMATION',
  BELOW_THRESHOLD: 'BELOW_THRESHOLD',
  CRITICAL_CONFLICT: 'CRITICAL_CONFLICT',
};

function evaluateEligibility({ criticalConflicts, compatibilityPercentage, confidenceScore, coverageScore, dimensionResults }) {
  if (criticalConflicts.length > 0) {
    return { status: STATUS.CRITICAL_CONFLICT, reason: 'Incompatibilidad crítica confirmada.' };
  }

  if (
    compatibilityPercentage === null ||
    confidenceScore < ELIGIBILITY.minConfidenceScore ||
    coverageScore < ELIGIBILITY.minCoverageScore
  ) {
    return { status: STATUS.PENDING_INFORMATION, reason: 'Información insuficiente o poco fiable para decidir.' };
  }

  if (compatibilityPercentage < ELIGIBILITY.betaThreshold) {
    return {
      status: STATUS.BELOW_THRESHOLD,
      reason: `Compatibilidad por debajo del umbral de la versión beta (${ELIGIBILITY.betaThreshold}%).`,
    };
  }

  const relevantDifferences = Object.values(dimensionResults).filter(
    (d) => d.base_score !== null && d.base_score < ELIGIBILITY.relevantDifferenceThreshold
  );

  if (relevantDifferences.length > 0) {
    return {
      status: STATUS.RECOMMENDED_WITH_NOTES,
      reason: 'Cumple el umbral, pero existen diferencias relevantes que conviene explicar.',
    };
  }

  return { status: STATUS.RECOMMENDED, reason: 'Cumple todos los criterios de recomendación.' };
}

module.exports = { evaluateEligibility, STATUS };
