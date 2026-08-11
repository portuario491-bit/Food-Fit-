/**
 * Critical Rules Engine (Bloque 6.12 / 6.13).
 *
 * Evalúa incompatibilidades críticas de forma independiente del sistema de
 * pesos — "los pesos gestionan relevancia, las reglas críticas gestionan
 * límites" (6.5.10). Se ejecuta ANTES de la compensación (6.13.7): si hay un
 * conflicto crítico, ninguna coincidencia en otras variables lo neutraliza.
 *
 * v0.1.0 solo implementa la regla de hijos (children_conflict_v1), que es la
 * única descrita con suficiente detalle en el Bloque 6 como para
 * implementarla con confianza (6.13.6: "las incompatibilidades críticas
 * automáticas deberán ser pocas, claras y justificables").
 */
const { CRITICAL_RULES, HIJOS_STANCE_QUESTION_INDEX, HIJOS_STANCE_MAP, HIJOS_CONFIRMED_STANCES } = require('./config');

/**
 * Regla unilateral (Bloque 6.13.4): basta con que UNA persona marque hijos
 * como no negociable y la otra mantenga una posición confirmada opuesta.
 */
function evaluateChildrenConflict(profileA, profileB) {
  const stanceA = HIJOS_STANCE_MAP[profileA.answers[HIJOS_STANCE_QUESTION_INDEX]];
  const stanceB = HIJOS_STANCE_MAP[profileB.answers[HIJOS_STANCE_QUESTION_INDEX]];
  if (!stanceA || !stanceB) return null; // sin información suficiente, no se activa la regla (6.13.10)
  if (!HIJOS_CONFIRMED_STANCES.has(stanceA) || !HIJOS_CONFIRMED_STANCES.has(stanceB)) return null;
  if (stanceA === stanceB) return null;

  const holderTriggers = (holder, holderStance, other, otherStance, holderLabel, otherLabel) => {
    if (!holder.hijosNoNegociable) return null;
    return {
      rule_id: CRITICAL_RULES.children_conflict_v1.rule_id,
      variable_id: 'hijos_stance',
      description: CRITICAL_RULES.children_conflict_v1.description,
      action: CRITICAL_RULES.children_conflict_v1.action,
      affected_user: holderLabel,
      other_user: otherLabel,
      position_holder: holderStance,
      position_other: otherStance,
      bilateral: holder.hijosNoNegociable && other.hijosNoNegociable,
      confidence: 1,
      version: CRITICAL_RULES.children_conflict_v1.version,
    };
  };

  return (
    holderTriggers(profileA, stanceA, profileB, stanceB, 'A', 'B') ||
    holderTriggers(profileB, stanceB, profileA, stanceA, 'B', 'A')
  );
}

/**
 * Evalúa todas las reglas críticas definidas para v0.1.0.
 * @returns {Array} lista de conflictos críticos activados (vacía si ninguno)
 */
function evaluateCriticalRules(profileA, profileB) {
  const conflicts = [];
  const childrenConflict = evaluateChildrenConflict(profileA, profileB);
  if (childrenConflict) conflicts.push(childrenConflict);
  return conflicts;
}

module.exports = { evaluateCriticalRules, evaluateChildrenConflict };
