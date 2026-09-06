import type { CompanyFundamentals } from "../data/types";
import { METRICS_BY_SUBSCORE } from "./metrics";
import { PROFILE_WEIGHTS } from "./weights";
import {
  groupIndicesBy,
  scoreByPercentile,
  scoreByPercentileWithinGroups,
  sweetSpotPenalty,
  weightedAverage,
} from "./normalize";
import type {
  CompanyScoreResult,
  ExplanationItem,
  MetricContribution,
  ProfileKey,
  SubscoreKey,
  SubscoreResult,
} from "./types";

const SUBSCORE_KEYS: SubscoreKey[] = ["dividend", "growth", "quality", "valuation", "risk", "momentum"];

/**
 * Calcula, para un sub-score y todo el universo a la vez (necesario para que
 * la normalización por percentil tenga sentido), la puntuación 0-100 de cada
 * empresa junto con el detalle por métrica.
 */
function computeSubscoreForUniverse(
  universe: CompanyFundamentals[],
  subscore: SubscoreKey
): SubscoreResult[] {
  const metrics = METRICS_BY_SUBSCORE[subscore];
  const sectorGroups = groupIndicesBy(universe, (c) => c.sector);

  // metricScores[metricIndex][companyIndex] = 0-100 | null
  const metricScores: (number | null)[][] = metrics.map((metric) => {
    const raw = universe.map((c) => {
      const value = metric.extract(c);
      return metric.sweetSpot ? sweetSpotPenalty(value, metric.sweetSpot.low, metric.sweetSpot.high) : value;
    });
    const higherIsBetter = metric.sweetSpot ? false : metric.higherIsBetter;
    return metric.sectorRelative
      ? scoreByPercentileWithinGroups(raw, higherIsBetter, sectorGroups)
      : scoreByPercentile(raw, higherIsBetter);
  });

  return universe.map((company, companyIdx) => {
    const contributions: MetricContribution[] = metrics.map((metric, metricIdx) => {
      const rawValue = metric.extract(company);
      return {
        key: metric.key,
        label: metric.label,
        rawValue,
        formattedValue: rawValue !== null ? metric.format(rawValue) : "sin dato",
        normalizedScore: metricScores[metricIdx][companyIdx],
        weight: metric.weight,
        describe: (isPositive: boolean) =>
          rawValue !== null ? metric.describe(metric.format(rawValue), isPositive) : `${metric.label}: sin dato`,
      };
    });

    const available = contributions.filter((c) => c.normalizedScore !== null);
    const hasData = available.length > 0;
    const score = hasData
      ? Math.round(
          weightedAverage(available.map((c) => ({ value: c.normalizedScore as number, weight: c.weight })))
        )
      : 0;

    // Renormaliza los pesos entre las métricas con dato disponible, para que
    // la explicación refleje el peso real que tuvo cada una en este sub-score.
    const totalAvailableWeight = available.reduce((s, c) => s + c.weight, 0) || 1;
    const normalizedContributions = contributions.map((c) => ({
      ...c,
      weight: c.normalizedScore !== null ? c.weight / totalAvailableWeight : 0,
    }));

    return { key: subscore, score, metrics: normalizedContributions, hasData };
  });
}

function pickExplanations(
  subscores: Record<SubscoreKey, SubscoreResult>,
  profileWeights: Record<SubscoreKey, number>
): { strengths: ExplanationItem[]; weaknesses: ExplanationItem[] } {
  type Ranked = { impact: number; isPositive: boolean; label: string; subscore: SubscoreKey };
  const ranked: Ranked[] = [];

  for (const key of SUBSCORE_KEYS) {
    const subscore = subscores[key];
    const profileWeight = profileWeights[key];
    if (profileWeight <= 0) continue;

    for (const metric of subscore.metrics) {
      if (metric.normalizedScore === null) continue;
      const centered = metric.normalizedScore - 50; // >0 = fortaleza, <0 = debilidad
      const impact = centered * metric.weight * profileWeight;
      if (Math.abs(impact) < 0.01) continue;
      ranked.push({
        impact,
        isPositive: impact > 0,
        label: metric.describe(impact > 0),
        subscore: key,
      });
    }
  }

  const strengths = ranked
    .filter((r) => r.isPositive)
    .sort((a, b) => b.impact - a.impact)
    .slice(0, 4)
    .map(({ label, subscore }) => ({ label, subscore }));

  const weaknesses = ranked
    .filter((r) => !r.isPositive)
    .sort((a, b) => a.impact - b.impact)
    .slice(0, 4)
    .map(({ label, subscore }) => ({ label, subscore }));

  return { strengths, weaknesses };
}

/**
 * Calcula los scores de TODO el universo para un perfil dado. Debe llamarse
 * con el universo completo (no una empresa suelta): la normalización por
 * percentil solo tiene sentido en relación con las demás empresas.
 */
/**
 * Núcleo del motor: calcula scores para todo el universo dado un esquema de
 * pesos arbitrario. `computeUniverseScores` (pesos de un perfil de inversión)
 * y `computeRadarScores` (pesos del Radar mensual) son envoltorios de esta
 * función con distintos pesos.
 */
export function computeScoresForWeights(
  universe: CompanyFundamentals[],
  weights: Record<SubscoreKey, number>,
  label: ProfileKey | "radar-mensual"
): CompanyScoreResult[] {
  const subscoresByKey = Object.fromEntries(
    SUBSCORE_KEYS.map((key) => [key, computeSubscoreForUniverse(universe, key)])
  ) as Record<SubscoreKey, SubscoreResult[]>;

  return universe.map((company, idx) => {
    const subscores = Object.fromEntries(
      SUBSCORE_KEYS.map((key) => [key, subscoresByKey[key][idx]])
    ) as Record<SubscoreKey, SubscoreResult>;

    const totalScore = Math.round(
      SUBSCORE_KEYS.reduce((sum, key) => sum + subscores[key].score * weights[key], 0)
    );

    const { strengths, weaknesses } = pickExplanations(subscores, weights);

    return { ticker: company.ticker, profile: label, totalScore, subscores, strengths, weaknesses };
  });
}

export function computeUniverseScores(
  universe: CompanyFundamentals[],
  profile: ProfileKey
): CompanyScoreResult[] {
  return computeScoresForWeights(universe, PROFILE_WEIGHTS[profile], profile);
}

export function computeCompanyScore(
  universe: CompanyFundamentals[],
  ticker: string,
  profile: ProfileKey
): CompanyScoreResult | null {
  const all = computeUniverseScores(universe, profile);
  return all.find((r) => r.ticker === ticker.toUpperCase()) ?? null;
}
