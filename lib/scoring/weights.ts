import type { ProfileKey, SubscoreKey } from "./types";

/**
 * Pesos de cada sub-score en la puntuación total, por perfil de inversión.
 * Configurables desde código hoy; en una fase posterior se moverán a la
 * tabla `scoring_weights` de Supabase editable desde un panel de admin.
 * Deben sumar 1 por perfil (se valida en scoring.test más adelante).
 * Momentum nunca supera 0.15 en ningún perfil, tal como pide la metodología.
 */
export const PROFILE_WEIGHTS: Record<ProfileKey, Record<SubscoreKey, number>> = {
  dividendos: { dividend: 0.35, quality: 0.25, valuation: 0.2, growth: 0.1, risk: 0.1, momentum: 0 },
  crecimiento: { growth: 0.35, quality: 0.25, valuation: 0.15, risk: 0.1, momentum: 0.15, dividend: 0 },
  "dividend-growth": { dividend: 0.25, growth: 0.25, quality: 0.25, valuation: 0.15, risk: 0.1, momentum: 0 },
  calidad: { quality: 0.4, growth: 0.2, valuation: 0.2, risk: 0.15, momentum: 0.05, dividend: 0 },
  "calidad-precio": { quality: 0.3, valuation: 0.3, growth: 0.15, dividend: 0.1, risk: 0.1, momentum: 0.05 },
  equilibrado: { dividend: 0.2, growth: 0.2, quality: 0.2, valuation: 0.2, risk: 0.15, momentum: 0.05 },
};
