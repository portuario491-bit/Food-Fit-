import { MOCK_COMPANIES } from "../lib/data/providers/mockCompanies";
import { computeUniverseScores } from "../lib/scoring/engine";
import { PROFILE_WEIGHTS } from "../lib/scoring/weights";
import type { ProfileKey } from "../lib/scoring/types";

for (const profile of Object.keys(PROFILE_WEIGHTS) as ProfileKey[]) {
  const sum = Object.values(PROFILE_WEIGHTS[profile]).reduce((a, b) => a + b, 0);
  if (Math.abs(sum - 1) > 1e-9) {
    throw new Error(`Pesos del perfil ${profile} no suman 1: ${sum}`);
  }
}
console.log("OK: todos los pesos de perfil suman 1");

const results = computeUniverseScores(MOCK_COMPANIES, "dividendos");
const sorted = [...results].sort((a, b) => b.totalScore - a.totalScore);
console.log("\n=== Ranking DIVIDENDOS ===");
for (const r of sorted) {
  console.log(
    `${r.ticker.padEnd(6)} total=${r.totalScore} div=${r.subscores.dividend.score} qual=${r.subscores.quality.score} val=${r.subscores.valuation.score}`
  );
}

const lbti = results.find((r) => r.ticker === "LBTI")!;
console.log("\nLBTI (yield trap) fortalezas:", lbti.strengths.map((s) => s.label));
console.log("LBTI (yield trap) debilidades:", lbti.weaknesses.map((s) => s.label));
if (lbti.subscores.dividend.score > 50) {
  throw new Error("FALLO: LBTI (yield trap, payout >100%) no debería tener Dividend Score alto");
}
console.log("OK: LBTI penalizada correctamente pese a yield alto");

const growthResults = computeUniverseScores(MOCK_COMPANIES, "crecimiento");
const qntc = growthResults.find((r) => r.ticker === "QNTC")!;
console.log("\nQNTC growth score:", qntc.subscores.growth.score, "momentum score:", qntc.subscores.momentum.score);
console.log("QNTC fortalezas:", qntc.strengths.map((s) => s.label));
console.log("QNTC debilidades:", qntc.weaknesses.map((s) => s.label));

const ahc = results.find((r) => r.ticker === "AHC")!;
console.log("\nAHC (dividend aristocrat) fortalezas:", ahc.strengths.map((s) => s.label));
console.log("AHC (dividend aristocrat) debilidades:", ahc.weaknesses.map((s) => s.label));

console.log("\nTodas las comprobaciones básicas pasaron.");
