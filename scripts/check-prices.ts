import { IBEX35_COMPANIES } from "../lib/data/providers/ibex35Companies";
import { GLOBAL_COMPANIES } from "../lib/data/providers/globalCompanies";
import { STALE_AFTER_DAYS, daysSince } from "../lib/prices/providers/datasetProvider";
import type { CompanyFundamentals } from "../lib/data/types";

/**
 * Informe de solo lectura: detecta precios desactualizados e
 * inconsistencias entre precio/marketCap en los datos manuales actuales.
 * NO modifica lib/data/providers/*.ts — eso queda para revisión manual.
 *
 * Como CompanyFundamentals no guarda sharesOutstanding, la única
 * comprobación objetiva de coherencia precio/marketCap posible es el
 * número de acciones implícito (marketCap / price), contrastado contra
 * límites absolutos razonables para una empresa cotizada grande/mediana
 * y contra el resto del universo (outlier estadístico en log10).
 */

const MIN_PLAUSIBLE_SHARES = 1_000_000; // 1M: por debajo, marketCap/price no cuadra con una cotizada de este tamaño
const MAX_PLAUSIBLE_SHARES = 50_000_000_000; // 50.000M: ni Apple con más acciones en circulación del mercado llega aquí
const OUTLIER_Z_SCORE = 2.5;

interface Finding {
  ticker: string;
  name: string;
  price: number;
  asOf: string;
  currency: string;
  exchange: string;
  region: string;
  marketCap: number | null;
  issue: string;
  severity: "Alta" | "Media" | "Baja";
  recommendation: string;
  source: string;
}

const universe: CompanyFundamentals[] = [...IBEX35_COMPANIES, ...GLOBAL_COMPANIES];
const findings: Finding[] = [];

const marketSourceFor = (c: CompanyFundamentals) =>
  c.region === "España"
    ? `Cotización oficial BME (${c.ticker}) — bolsamadrid.es / Investing.com`
    : `Cotización oficial ${c.exchange} (${c.ticker}) — Investing.com / MarketScreener / la propia bolsa`;

// --- 1. Precios desactualizados (umbral absoluto, mismo que PriceService) ---
for (const c of universe) {
  const age = daysSince(c.asOf);
  if (age > STALE_AFTER_DAYS) {
    findings.push({
      ticker: c.ticker,
      name: c.name,
      price: c.price,
      asOf: c.asOf,
      currency: c.currency,
      exchange: c.exchange,
      region: c.region,
      marketCap: c.marketCap,
      issue: `Precio con ${age} días de antigüedad (umbral: ${STALE_AFTER_DAYS} días) — hoy se mostraría como "Dato antiguo" 🔴`,
      severity: "Alta",
      recommendation: "Actualizar price y asOf con el cierre más reciente disponible.",
      source: marketSourceFor(c),
    });
  }
}

// --- 2. Inconsistencias precio / marketCap (nº de acciones implícito) ---
const withMarketCap = universe.filter((c) => c.marketCap != null && c.marketCap > 0 && c.price > 0);
const impliedShares = new Map<string, number>();
for (const c of withMarketCap) impliedShares.set(c.ticker, c.marketCap! / c.price);

const logValues = [...impliedShares.values()].map((v) => Math.log10(v));
const mean = logValues.reduce((a, b) => a + b, 0) / logValues.length;
const variance = logValues.reduce((a, b) => a + (b - mean) ** 2, 0) / logValues.length;
const stddev = Math.sqrt(variance);

for (const c of withMarketCap) {
  const shares = impliedShares.get(c.ticker)!;
  const z = stddev > 0 ? (Math.log10(shares) - mean) / stddev : 0;

  if (shares < MIN_PLAUSIBLE_SHARES || shares > MAX_PLAUSIBLE_SHARES) {
    findings.push({
      ticker: c.ticker,
      name: c.name,
      price: c.price,
      asOf: c.asOf,
      currency: c.currency,
      exchange: c.exchange,
      region: c.region,
      marketCap: c.marketCap,
      issue: `Nº de acciones implícito (marketCap/price) = ${shares.toLocaleString("es-ES", { maximumFractionDigits: 0 })}, fuera de rango plausible para una cotizada de este tamaño (${MIN_PLAUSIBLE_SHARES.toLocaleString("es-ES")}–${MAX_PLAUSIBLE_SHARES.toLocaleString("es-ES")})`,
      severity: "Alta",
      recommendation: "Revisar price y marketCap por separado: probablemente uno de los dos está en una unidad o divisa distinta al otro, o uno de los dos quedó desactualizado tras un split/ampliación.",
      source: marketSourceFor(c),
    });
  } else if (Math.abs(z) > OUTLIER_Z_SCORE) {
    findings.push({
      ticker: c.ticker,
      name: c.name,
      price: c.price,
      asOf: c.asOf,
      currency: c.currency,
      exchange: c.exchange,
      region: c.region,
      marketCap: c.marketCap,
      issue: `Nº de acciones implícito (marketCap/price) = ${shares.toLocaleString("es-ES", { maximumFractionDigits: 0 })}, atípico frente al resto del universo (z=${z.toFixed(2)} sobre log10 del nº de acciones implícito)`,
      severity: "Media",
      recommendation: "Contrastar manualmente price y marketCap contra una fuente reciente; podría ser legítimo (empresa con muy pocas o muchísimas acciones en circulación) o reflejar un dato desactualizado.",
      source: marketSourceFor(c),
    });
  }
}

// --- 3. Resumen de fechas (antigüedad, sin necesidad de superar el umbral) ---
const ages = universe.map((c) => ({ ticker: c.ticker, age: daysSince(c.asOf) }));
const oldestFirst = [...ages].sort((a, b) => b.age - a.age);
const histogram = new Map<string, number>();
for (const { age } of ages) {
  const bucket = age <= 7 ? "0-7 días" : age <= 14 ? "8-14 días" : age <= 30 ? "15-30 días" : "31+ días (antiguo)";
  histogram.set(bucket, (histogram.get(bucket) ?? 0) + 1);
}

// --- Salida ---
console.log(`Universo analizado: ${universe.length} empresas (${IBEX35_COMPANIES.length} IBEX35 + ${GLOBAL_COMPANIES.length} S&P500 seleccionadas)`);
console.log(`Fecha de referencia del análisis: ${new Date().toISOString().slice(0, 10)}`);
console.log(`Umbral de antigüedad usado (igual que PriceService): ${STALE_AFTER_DAYS} días\n`);

console.log("=== Distribución de antigüedad del precio ===");
for (const [bucket, count] of histogram) console.log(`  ${bucket}: ${count} empresas`);

console.log("\n=== 10 precios más antiguos (no implica que incumplan el umbral) ===");
for (const { ticker, age } of oldestFirst.slice(0, 10)) {
  console.log(`  ${ticker.padEnd(6)} ${age} días`);
}

console.log(`\n=== Hallazgos (${findings.length}) ===`);
if (findings.length === 0) {
  console.log("  Ninguno: no se ha detectado ningún precio por encima del umbral de antigüedad ni ninguna inconsistencia precio/marketCap con las comprobaciones aplicadas.");
} else {
  const bySeverity = { Alta: 0, Media: 0, Baja: 0 };
  for (const f of findings) bySeverity[f.severity]++;
  console.log(`  Por gravedad: Alta=${bySeverity.Alta} · Media=${bySeverity.Media} · Baja=${bySeverity.Baja}\n`);
  for (const f of findings) {
    console.log(`  [${f.severity}] ${f.ticker} (${f.name}) — ${f.currency} ${f.exchange}, ${f.region}`);
    console.log(`    Precio almacenado: ${f.price} ${f.currency} · Fecha: ${f.asOf}`);
    console.log(`    Cap. almacenada: ${f.marketCap != null ? f.marketCap.toLocaleString("es-ES") + " " + f.currency : "sin dato"}`);
    console.log(`    Inconsistencia: ${f.issue}`);
    console.log(`    Corrección recomendada: ${f.recommendation}`);
    console.log(`    Fuente a usar: ${f.source}\n`);
  }
}

console.log("Informe generado sin modificar ningún archivo de datos.");
