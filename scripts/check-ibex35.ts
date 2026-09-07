import { IBEX35_COMPANIES } from "../lib/data/providers/ibex35Companies";
import { computeUniverseScores } from "../lib/scoring/engine";
import { computeRadarScores } from "../lib/scoring/radar";
import type { ProfileKey } from "../lib/scoring/types";

console.log(`Universo IBEX35: ${IBEX35_COMPANIES.length} empresas (esperado: 35)`);
if (IBEX35_COMPANIES.length !== 35) throw new Error("FALLO: el universo no tiene 35 empresas");

const tickers = new Set(IBEX35_COMPANIES.map((c) => c.ticker));
if (tickers.size !== 35) throw new Error("FALLO: hay tickers duplicados");

const bySector = new Map<string, number>();
for (const c of IBEX35_COMPANIES) bySector.set(c.sector, (bySector.get(c.sector) ?? 0) + 1);
console.log("Distribución por sector:", Object.fromEntries(bySector));

for (const profile of ["dividendos", "crecimiento", "calidad", "calidad-precio", "equilibrado"] as ProfileKey[]) {
  const results = computeUniverseScores(IBEX35_COMPANIES, profile);
  const sorted = [...results].sort((a, b) => b.totalScore - a.totalScore);
  console.log(`\n=== Ranking ${profile.toUpperCase()} (top 10) ===`);
  for (const r of sorted.slice(0, 10)) {
    console.log(
      `${r.ticker.padEnd(6)} total=${String(r.totalScore).padStart(3)} (${r.subscoresWithData}/6 subscores) div=${r.subscores.dividend.score} qual=${r.subscores.quality.score} val=${r.subscores.valuation.score} grow=${r.subscores.growth.score}(${r.subscores.growth.hasData ? "OK" : "sin datos"})`
    );
  }
}

const solaria = computeUniverseScores(IBEX35_COMPANIES, "dividendos").find((r) => r.ticker === "SLR")!;
console.log("\nSolaria (no reparte dividendo) — Dividend Score:", solaria.subscores.dividend.score, "hasData:", solaria.subscores.dividend.hasData);
console.log("Solaria fortalezas:", solaria.strengths.map((s) => s.label));
console.log("Solaria debilidades:", solaria.weaknesses.map((s) => s.label));

const grifols = computeUniverseScores(IBEX35_COMPANIES, "calidad").find((r) => r.ticker === "GRF")!;
console.log("\nGrifols (apalancada, dividendo recién reanudado) — perfil calidad:");
console.log("  total:", grifols.totalScore, `(${grifols.subscoresWithData}/6 subscores)`);
console.log("  debilidades:", grifols.weaknesses.map((w) => w.label));

const radar = computeRadarScores(IBEX35_COMPANIES);
const radarTop = [...radar].sort((a, b) => b.totalScore - a.totalScore).slice(0, 10);
console.log("\n=== Radar mensual (top 10) ===");
for (const r of radarTop) {
  console.log(`${r.ticker.padEnd(6)} total=${r.totalScore} (${r.subscoresWithData}/6 subscores)`);
}

console.log("\nOK: comprobaciones básicas del universo IBEX35 completadas.");
