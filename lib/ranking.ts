import type { CompanyFundamentals, Region, Sector } from "./data/types";
import { computeUniverseScores } from "./scoring/engine";
import type { CompanyScoreResult, ProfileKey } from "./scoring/types";

export interface CompanyWithScore {
  company: CompanyFundamentals;
  score: CompanyScoreResult;
}

export interface RankingFilters {
  region?: Region;
  sector?: Sector;
  minMarketCap?: number;
  minYield?: number;
  minScore?: number;
}

export function buildRanking(
  universe: CompanyFundamentals[],
  profile: ProfileKey,
  filters: RankingFilters = {}
): CompanyWithScore[] {
  const scores = computeUniverseScores(universe, profile);
  const scoreByTicker = new Map(scores.map((s) => [s.ticker, s]));

  return universe
    .filter((c) => !filters.region || c.region === filters.region)
    .filter((c) => !filters.sector || c.sector === filters.sector)
    .filter((c) => !filters.minMarketCap || (c.marketCap ?? 0) >= filters.minMarketCap)
    .filter((c) => !filters.minYield || (c.dividendYield ?? 0) >= filters.minYield)
    .map((company) => ({ company, score: scoreByTicker.get(company.ticker)! }))
    .filter((row) => !filters.minScore || row.score.totalScore >= filters.minScore)
    .sort((a, b) => b.score.totalScore - a.score.totalScore);
}
