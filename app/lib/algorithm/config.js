/**
 * Configuración versionada del motor de compatibilidad BlueHeart (Bloque 6.26 / 6.33).
 *
 * Todo lo metodológico (pesos, umbrales, reglas críticas) vive aquí, separado
 * de la lógica del motor (variableEngine.js, dimensionEngine.js, etc.), tal
 * como exige el Bloque 6: "el código sabe ejecutar una matriz de
 * compatibilidad; la configuración determina qué matriz utiliza la variable
 * Hijos" (6.33.14).
 *
 * IMPORTANTE — esto es una hipótesis metodológica v0.1.0, no un resultado
 * validado (Bloque 6.29). Los pesos, el umbral de recomendación y los rangos
 * de confianza son valores de partida razonables para poder probar el motor,
 * pendientes de calibrarse con datos reales de la beta.
 */
const { QUESTIONS, DIMENSIONS: DIMENSION_IDS } = require('../questions');

const ALGORITHM_VERSION = '0.1.0';
const CONFIGURATION_VERSION = '0.1.0';

/**
 * Pesos metodológicos por dimensión (Bloque 6.6). Deben sumar 1.
 * `structural: true` marca dimensiones que afectan a la posibilidad de
 * construir un proyecto de vida común (Bloque 6.4.6) — hoy esto solo se usa
 * para documentar el catálogo; los mínimos estructurales (6.6.15) todavía no
 * están activados en v0.1.0.
 */
const DIMENSIONS = {
  comunicacion: { label: 'Comunicación', weight: 0.16, structural: false },
  confianza: { label: 'Confianza', weight: 0.15, structural: false },
  apego: { label: 'Apego', weight: 0.11, structural: false },
  convivencia: { label: 'Convivencia', weight: 0.1, structural: false },
  conflictos: { label: 'Gestión de conflictos', weight: 0.14, structural: false },
  proyecto_vida: { label: 'Proyecto de vida', weight: 0.13, structural: true },
  valores: { label: 'Valores', weight: 0.12, structural: false },
  hijos: { label: 'Hijos', weight: 0.09, structural: true },
};

const dimensionWeightSum = Object.values(DIMENSIONS).reduce((s, d) => s + d.weight, 0);
if (Math.abs(dimensionWeightSum - 1) > 1e-9) {
  throw new Error(`[BlueHeart] Los pesos de dimensión deben sumar 1 (suman ${dimensionWeightSum})`);
}

/**
 * Catálogo de variables (Bloque 6.2 / 6.33). Una variable por cada pregunta
 * del cuestionario piloto — es la granularidad real de información que hoy
 * recoge la app.
 *
 * Nota de alcance honesta: el Bloque 6 describe variables mucho más ricas
 * (importancia personal, necesidad de correspondencia, flexibilidad propias
 * de cada variable — 6.2.6 a 6.2.9). El cuestionario piloto actual (Bloque 4
 * reducido) todavía no pregunta eso por separado, solo la posición (0-4).
 * Por tanto `method_weight` se reparte a partes iguales entre las preguntas
 * de una misma dimensión (hipótesis provisional, no una afirmación de que
 * esas 3 preguntas pesan exactamente lo mismo) y no hay modificadores de
 * importancia/flexibilidad todavía — están previstos para cuando el
 * cuestionario se amplíe con el manual completo.
 */
const VARIABLES = QUESTIONS.map((q, index) => ({
  variable_id: `q${index}`,
  dimension_id: q.dim,
  label: q.text,
  value_type: 'ordinal',
  comparison_type: 'ordinal_distance',
  algorithm_role: q.dim === 'hijos' ? 'compatibility_direct' : 'compatibility_condicionada',
  method_weight: 1 / 3, // 3 preguntas por dimensión en el piloto, reparto igualitario provisional
  critical_capable: index === 21, // la pregunta 22 ("papel de los hijos...") alimenta la regla crítica de hijos
  sensitive: ['hijos', 'valores'].includes(q.dim),
  version: CONFIGURATION_VERSION,
}));

/**
 * Deriva una posición categórica (Bloque 6.3.10 / 6.7.7) a partir de la
 * pregunta 22 ("¿Qué papel ocupa la posibilidad de tener hijos...?"),
 * necesaria para la matriz de compatibilidad y la regla crítica de hijos.
 * Las opciones 1 y 2 no representan un "sí" o un "no" confirmado.
 */
const HIJOS_STANCE_QUESTION_INDEX = 21;
const HIJOS_STANCE_MAP = {
  0: 'no', // "No deseo tener hijos"
  1: 'no_lo_sabe', // "No forma parte de mis planes actuales, pero no lo descarto"
  2: 'depende', // "Dependería de la persona y las circunstancias"
  3: 'si', // "Me gustaría tener hijos en el futuro"
  4: 'si', // "Tener hijos es fundamental en mi proyecto de vida"
};

/** Matriz de compatibilidad para la variable "deseo de tener hijos" (Bloque 6.7.7 / 6.3.17). */
const HIJOS_COMPATIBILITY_MATRIX = {
  'si|si': { base_score: 1, interaction_type: 'similarity_positive' },
  'no|no': { base_score: 1, interaction_type: 'similarity_positive' },
  'si|no': { base_score: 0.05, interaction_type: 'critical_conflict' },
  'no|si': { base_score: 0.05, interaction_type: 'critical_conflict' },
  'si|depende': { base_score: 0.55, interaction_type: 'difference_relevant' },
  'depende|si': { base_score: 0.55, interaction_type: 'difference_relevant' },
  'no|depende': { base_score: 0.55, interaction_type: 'difference_relevant' },
  'depende|no': { base_score: 0.55, interaction_type: 'difference_relevant' },
  'si|no_lo_sabe': { base_score: 0.5, interaction_type: 'difference_relevant' },
  'no_lo_sabe|si': { base_score: 0.5, interaction_type: 'difference_relevant' },
  'no|no_lo_sabe': { base_score: 0.5, interaction_type: 'difference_relevant' },
  'no_lo_sabe|no': { base_score: 0.5, interaction_type: 'difference_relevant' },
  'depende|depende': { base_score: 0.65, interaction_type: 'difference_manageable' },
  'depende|no_lo_sabe': { base_score: 0.6, interaction_type: 'difference_manageable' },
  'no_lo_sabe|depende': { base_score: 0.6, interaction_type: 'difference_manageable' },
  'no_lo_sabe|no_lo_sabe': { base_score: 0.6, interaction_type: 'difference_manageable' },
};

/** Posiciones que cuentan como "confirmadas" para poder activar una regla crítica (Bloque 6.13.10). */
const HIJOS_CONFIRMED_STANCES = new Set(['si', 'no']);

/**
 * Regla crítica de hijos (Bloque 6.12 / 6.13). Se evalúa de forma unilateral:
 * basta con que UNA persona haya marcado hijos como no negociable y la otra
 * mantenga una posición confirmada opuesta (Bloque 6.13.4).
 */
const CRITICAL_RULES = {
  children_conflict_v1: {
    rule_id: 'children_conflict_v1',
    variable_id: 'hijos_stance',
    description:
      'Conflicto entre una posición confirmada ("sí" / "no" quiere hijos) marcada como no negociable por una persona, y una posición confirmada opuesta en la otra.',
    action: 'block_recommendation',
    version: CONFIGURATION_VERSION,
  },
};

/** Motor de elegibilidad (Bloque 6.18 / 6.22) — valores provisionales de beta, ver 6.22.3. */
const ELIGIBILITY = {
  betaThreshold: 50, // compatibility_percentage mínimo para no quedar BELOW_THRESHOLD
  relevantDifferenceThreshold: 0.6, // por debajo de esto, una dimensión cuenta como "diferencia relevante" -> RECOMMENDED_WITH_NOTES
  minConfidenceScore: 0.5, // por debajo de esto, PENDING_INFORMATION
  minCoverageScore: 0.6, // por debajo de esto, PENDING_INFORMATION
};

/** Bandas de clasificación cualitativa de un resultado 0-1 (Bloque 6.7.22). */
function classifyScore(score) {
  if (score >= 0.9) return 'similarity_positive';
  if (score >= 0.75) return 'difference_manageable';
  if (score >= 0.6) return 'difference_manageable';
  if (score >= 0.4) return 'difference_relevant';
  return 'incompatibility_strong';
}

module.exports = {
  ALGORITHM_VERSION,
  CONFIGURATION_VERSION,
  DIMENSIONS,
  DIMENSION_IDS,
  VARIABLES,
  HIJOS_STANCE_QUESTION_INDEX,
  HIJOS_STANCE_MAP,
  HIJOS_COMPATIBILITY_MATRIX,
  HIJOS_CONFIRMED_STANCES,
  CRITICAL_RULES,
  ELIGIBILITY,
  classifyScore,
};
