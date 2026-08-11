/**
 * Variable Comparison Engine (Bloque 6.7 / 6.32).
 *
 * Compara el valor de dos usuarios para cada variable del catálogo y
 * devuelve un resultado estructurado (nunca solo un número) — Bloque 6.7.21.
 * No decide pesos ni combina dimensiones: eso es responsabilidad del
 * Dimension Engine.
 */
const {
  VARIABLES,
  HIJOS_STANCE_QUESTION_INDEX,
  HIJOS_STANCE_MAP,
  HIJOS_COMPATIBILITY_MATRIX,
  classifyScore,
} = require('./config');

/** Distancia ordinal normalizada (Bloque 6.7.5) para variables 0-4. */
function compareOrdinal(variable, valueA, valueB) {
  const dist = Math.abs(valueA - valueB);
  const base_score = 1 - dist / 4;
  return {
    variable_id: variable.variable_id,
    dimension_id: variable.dimension_id,
    method_weight: variable.method_weight,
    value_A: valueA,
    value_B: valueB,
    base_score,
    adjusted_score: base_score, // sin modificadores de importancia/flexibilidad todavía (ver config.js)
    confidence: 1, // respuesta directa del cuestionario
    available: true,
    interaction_type: classifyScore(base_score),
    critical_conflict: false,
    rule_applied: 'ordinal_distance',
  };
}

/** Comparación categórica mediante matriz (Bloque 6.7.7) para la posición sobre hijos. */
function compareHijosStance(stanceA, stanceB, confirmedA, confirmedB) {
  const key = `${stanceA}|${stanceB}`;
  const entry = HIJOS_COMPATIBILITY_MATRIX[key];
  const bothConfirmed = confirmedA && confirmedB;
  return {
    variable_id: 'hijos_stance',
    dimension_id: 'hijos',
    method_weight: 0, // informativa: no se pondera aparte, ya se refleja en q21 (ordinal) dentro de la dimensión
    value_A: stanceA,
    value_B: stanceB,
    base_score: entry.base_score,
    adjusted_score: entry.base_score,
    confidence: bothConfirmed ? 1 : 0.5, // posiciones sin confirmar (p.ej. "depende") reducen la confianza
    available: true,
    interaction_type: entry.interaction_type,
    critical_conflict: false, // el conflicto crítico lo determina el Critical Rules Engine, no esta comparación
    rule_applied: 'hijos_compatibility_matrix',
  };
}

/**
 * Compara dos perfiles variable a variable.
 * @param {Object} answersA - { [questionIndex]: choiceIndex } del usuario A
 * @param {Object} answersB - { [questionIndex]: choiceIndex } del usuario B
 * @returns {Array} resultados estructurados por variable (incluye una entrada informativa `hijos_stance`)
 */
function compareVariables(answersA, answersB) {
  const results = VARIABLES.map((variable, index) => {
    const valueA = answersA[index];
    const valueB = answersB[index];
    if (valueA === undefined || valueB === undefined) {
      return {
        variable_id: variable.variable_id,
        dimension_id: variable.dimension_id,
        method_weight: variable.method_weight,
        value_A: valueA,
        value_B: valueB,
        base_score: null,
        adjusted_score: null,
        confidence: 0,
        available: false,
        interaction_type: 'missing_information',
        critical_conflict: false,
        rule_applied: 'none',
      };
    }
    return compareOrdinal(variable, valueA, valueB);
  });

  const stanceA = HIJOS_STANCE_MAP[answersA[HIJOS_STANCE_QUESTION_INDEX]];
  const stanceB = HIJOS_STANCE_MAP[answersB[HIJOS_STANCE_QUESTION_INDEX]];
  if (stanceA && stanceB) {
    const { HIJOS_CONFIRMED_STANCES } = require('./config');
    results.push(
      compareHijosStance(
        stanceA,
        stanceB,
        HIJOS_CONFIRMED_STANCES.has(stanceA),
        HIJOS_CONFIRMED_STANCES.has(stanceB)
      )
    );
  }

  return results;
}

module.exports = { compareVariables, compareOrdinal, compareHijosStance };
