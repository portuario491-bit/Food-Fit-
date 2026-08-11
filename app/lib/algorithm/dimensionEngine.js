/**
 * Dimension Engine (Bloque 6.17).
 *
 * Agrega los resultados de variables en un resultado por dimensión:
 * D = Σ(Cᵢ × Wᵢ) / ΣWᵢ, usando solo el peso de las variables disponibles
 * (6.17.4) — una variable sin información nunca recibe 0, se excluye del
 * numerador y del denominador, y eso reduce la cobertura en su lugar.
 */
const { DIMENSIONS, classifyScore } = require('./config');

/**
 * @param {Array} variableResults - resultados de variableEngine.compareVariables
 *   (incluye la entrada informativa `hijos_stance`, que se ignora aquí: no
 *   tiene method_weight propio, ver comentario en variableEngine.js)
 * @returns {Object} { [dimensionId]: dimensionResult }
 */
function computeDimensionResults(variableResults) {
  const byDimension = {};
  Object.keys(DIMENSIONS).forEach((dimId) => {
    byDimension[dimId] = [];
  });

  variableResults.forEach((v) => {
    if (v.variable_id === 'hijos_stance') return; // informativa, no puntúa por separado (evita doble contabilización, 6.5.16)
    if (byDimension[v.dimension_id]) byDimension[v.dimension_id].push(v);
  });

  const results = {};
  Object.entries(byDimension).forEach(([dimId, variables]) => {
    const expectedWeight = variables.reduce((s, v) => s + v.method_weight, 0);
    const available = variables.filter((v) => v.available);
    const availableWeight = available.reduce((s, v) => s + v.method_weight, 0);

    const base_score =
      availableWeight > 0
        ? available.reduce((s, v) => s + v.adjusted_score * v.method_weight, 0) / availableWeight
        : null;

    const confidence =
      availableWeight > 0
        ? available.reduce((s, v) => s + v.confidence * v.method_weight, 0) / availableWeight
        : 0;

    const coverage = expectedWeight > 0 ? availableWeight / expectedWeight : 0;

    const sorted = [...available].sort((a, b) => b.adjusted_score - a.adjusted_score);

    results[dimId] = {
      dimension_id: dimId,
      label: DIMENSIONS[dimId].label,
      method_weight: DIMENSIONS[dimId].weight,
      structural: DIMENSIONS[dimId].structural,
      base_score,
      final_score: base_score, // sin modificadores/interacciones de dimensión todavía en v0.1.0 (ver Bloque 6.17.6)
      coverage,
      confidence,
      classification: base_score === null ? 'insufficient_information' : classifyScore(base_score),
      variables_used: available.map((v) => v.variable_id),
      missing_variables: variables.filter((v) => !v.available).map((v) => v.variable_id),
      strongest_variable: sorted[0] || null,
      weakest_variable: sorted[sorted.length - 1] || null,
    };
  });

  return results;
}

module.exports = { computeDimensionResults };
