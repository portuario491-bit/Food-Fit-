import type { CompanyFundamentals } from "../data/types";
import { computeScoresForWeights } from "./engine";
import type { SubscoreKey } from "./types";

/**
 * Pesos propios del Radar mensual: combina calidad, crecimiento, dividendo y
 * valoración a partes similares, con algo de peso al riesgo y SIN momentum,
 * para evitar que el radar se convierta en "las acciones que más han subido".
 */
export const RADAR_WEIGHTS: Record<SubscoreKey, number> = {
  quality: 0.25,
  growth: 0.25,
  dividend: 0.2,
  valuation: 0.2,
  risk: 0.1,
  momentum: 0,
};

export function computeRadarScores(universe: CompanyFundamentals[]) {
  return computeScoresForWeights(universe, RADAR_WEIGHTS, "radar-mensual");
}
