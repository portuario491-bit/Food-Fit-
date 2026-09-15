import { IBEX35_COMPANIES } from "../lib/data/providers/ibex35Companies";
import { GLOBAL_COMPANIES } from "../lib/data/providers/globalCompanies";
import { STALE_AFTER_DAYS, CRITICAL_AFTER_DAYS, daysSince } from "../lib/prices/providers/datasetProvider";
import { statusBadge } from "../lib/prices/format";
import type { PriceStatus } from "../lib/prices/types";
import type { CompanyFundamentals } from "../lib/data/types";

/**
 * Informe de solo lectura, en tres secciones separadas (A: coherencia
 * interna, B: antigüedad del dato, C: comparación con el mercado). NO
 * modifica lib/data/providers/*.ts — eso queda para revisión manual.
 *
 * Usa exactamente la misma clasificación y terminología que la interfaz
 * (mismos umbrales de lib/prices/providers/datasetProvider.ts, mismos
 * cuatro estados de lib/prices/types.ts): el informe y lo que ve el
 * usuario en la web nunca deberían decir cosas distintas.
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

const marketSourceFor = (c: CompanyFundamentals) =>
  c.region === "España"
    ? `Cotización oficial BME (${c.ticker}) — bolsamadrid.es / Investing.com`
    : `Cotización oficial ${c.exchange} (${c.ticker}) — Investing.com / MarketScreener / la propia bolsa`;

function statusFor(age: number): PriceStatus {
  if (age > CRITICAL_AFTER_DAYS) return "critical";
  if (age > STALE_AFTER_DAYS) return "stale";
  return "last-close";
}

/** Mismos tramos que pide el usuario para el informe, ligados al mismo status que ve la UI. */
function freshnessBucket(age: number): { label: string; status: PriceStatus } {
  if (age <= 2) return { label: "0-2 días: reciente", status: "last-close" };
  if (age <= STALE_AFTER_DAYS) return { label: "3-7 días: advertencia de actualización (sigue siendo last-close)", status: "last-close" };
  if (age <= CRITICAL_AFTER_DAYS) return { label: "8-30 días: stale / precio desactualizado", status: "stale" };
  return { label: "Más de 30 días: critical / precio muy desactualizado", status: "critical" };
}

// ============================================================
// A. Coherencia interna (precio vs. marketCap)
// ============================================================
const coherenceFindings: Finding[] = [];

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
    coherenceFindings.push({
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
    coherenceFindings.push({
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

// ============================================================
// B. Antigüedad del dato
// ============================================================
const ages = universe.map((c) => ({ company: c, age: daysSince(c.asOf) }));
const oldestFirst = [...ages].sort((a, b) => b.age - a.age);

const bucketCounts = new Map<string, number>();
const statusCounts: Record<PriceStatus, number> = { live: 0, "last-close": 0, stale: 0, critical: 0 };
for (const { age } of ages) {
  const { label, status } = freshnessBucket(age);
  bucketCounts.set(label, (bucketCounts.get(label) ?? 0) + 1);
  statusCounts[status]++;
}

const staleOrWorse: Finding[] = ages
  .filter(({ age }) => age > STALE_AFTER_DAYS)
  .map(({ company: c, age }) => {
    const status = statusFor(age);
    const badge = statusBadge(status);
    return {
      ticker: c.ticker,
      name: c.name,
      price: c.price,
      asOf: c.asOf,
      currency: c.currency,
      exchange: c.exchange,
      region: c.region,
      marketCap: c.marketCap,
      issue: `${age} días de antigüedad — estado actual en la web: ${badge.emoji} ${badge.label}`,
      severity: status === "critical" ? "Alta" : "Media",
      recommendation: "Actualizar price y asOf con el cierre más reciente disponible.",
      source: marketSourceFor(c),
    } satisfies Finding;
  });

// ============================================================
// C. Comparación con el mercado
// ============================================================
// Pendiente: no hay ningún proveedor de mercado conectado. No es posible
// comparar el dataset con una cotización externa hasta completar la Fase 2.
// Esta sección no calcula nada — solo documenta la limitación, para no
// fabricar una comparación que no se puede verificar ("no inventes").

// ============================================================
// Salida
// ============================================================
console.log(`Universo analizado: ${universe.length} empresas (${IBEX35_COMPANIES.length} IBEX35 + ${GLOBAL_COMPANIES.length} S&P500 seleccionadas)`);
console.log(`Fecha de referencia del análisis: ${new Date().toISOString().slice(0, 10)}`);
console.log(`Umbrales (iguales que en la web): last-close 0-${STALE_AFTER_DAYS}d · stale ${STALE_AFTER_DAYS + 1}-${CRITICAL_AFTER_DAYS}d · critical >${CRITICAL_AFTER_DAYS}d`);
console.log("Los días son naturales, no de sesión bursátil: no se descuentan fines de semana ni festivos en esta fase (ver nota al final).\n");

console.log("=== A. Coherencia interna (precio vs. marketCap) ===");
if (coherenceFindings.length === 0) {
  console.log("  Ninguna inconsistencia detectada con las comprobaciones aplicadas (nº de acciones implícito dentro de rango plausible y sin outliers estadísticos).\n");
} else {
  for (const f of coherenceFindings) {
    console.log(`  [${f.severity}] ${f.ticker} (${f.name}) — ${f.currency} ${f.exchange}, ${f.region}`);
    console.log(`    Precio almacenado: ${f.price} ${f.currency} · Fecha: ${f.asOf}`);
    console.log(`    Cap. almacenada: ${f.marketCap != null ? f.marketCap.toLocaleString("es-ES") + " " + f.currency : "sin dato"}`);
    console.log(`    Inconsistencia: ${f.issue}`);
    console.log(`    Corrección recomendada: ${f.recommendation}`);
    console.log(`    Fuente a usar: ${f.source}\n`);
  }
}

console.log("=== B. Antigüedad del dato ===");
console.log("  Distribución por tramo:");
for (const [label, count] of bucketCounts) console.log(`    ${label}: ${count} empresas`);
console.log(`  Distribución por estado (igual que el badge de la web): 🟡 last-close=${statusCounts["last-close"]} · 🟠 stale=${statusCounts.stale} · 🔴 critical=${statusCounts.critical} · 🟢 live=${statusCounts.live} (0 sin proveedor en vivo conectado)`);

console.log("\n  10 precios más antiguos:");
for (const { company, age } of oldestFirst.slice(0, 10)) {
  const badge = statusBadge(statusFor(age));
  console.log(`    ${company.ticker.padEnd(6)} ${String(age).padStart(3)} días  ${badge.emoji} ${badge.label}`);
}

if (staleOrWorse.length === 0) {
  console.log("\n  Ninguna empresa por encima de los 7 días de antigüedad ahora mismo.\n");
} else {
  console.log(`\n  Empresas en stale o critical (${staleOrWorse.length}):`);
  for (const f of staleOrWorse) {
    console.log(`  [${f.severity}] ${f.ticker} (${f.name}) — ${f.currency} ${f.exchange}, ${f.region}`);
    console.log(`    Precio almacenado: ${f.price} ${f.currency} · Fecha: ${f.asOf}`);
    console.log(`    Inconsistencia: ${f.issue}`);
    console.log(`    Corrección recomendada: ${f.recommendation}`);
    console.log(`    Fuente a usar: ${f.source}\n`);
  }
}

console.log("  Nota sobre el umbral: son días naturales, no de sesión bursátil. No hay calendario de mercado");
console.log("  (festivos, fines de semana) implementado en esta fase -- un cierre de viernes visto en lunes");
console.log("  puede contar como 2-3 días naturales aunque sea la sesión más reciente disponible. Limitación");
console.log("  conocida y documentada, no un error; no se construye un calendario de mercado en esta fase.\n");

console.log("=== C. Comparación con el mercado ===");
console.log("  Pendiente: no hay ningún proveedor de mercado conectado. No es posible comparar el dataset con");
console.log("  una cotización externa hasta completar la Fase 2.");
console.log("  Los precios mostrados pueden no coincidir con el mercado actual. La antigüedad solo mide el");
console.log("  tiempo transcurrido desde la fecha almacenada.\n");

console.log("Informe generado sin modificar ningún archivo de datos.");
