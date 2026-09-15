import type { CompanyFundamentals } from "../../data/types";
import type { PriceProvider, PriceQuote, PriceStatus } from "../types";

/**
 * Umbrales de antigüedad (días naturales) que separan los cuatro estados.
 * Único sitio donde viven — cámbialos aquí si hace falta ajustarlos.
 *   0-7 días           -> "last-close" (🟡)
 *   8-30 días          -> "stale" (🟠)
 *   más de 30 días     -> "critical" (🔴)
 *
 * Limitación conocida y documentada (no un error): son días naturales, no
 * de sesión bursátil. No hay calendario de mercado (festivos, fines de
 * semana) implementado en esta fase, así que un cierre de viernes visto en
 * lunes cuenta como 2-3 días naturales aunque sea la sesión más reciente
 * disponible. Construir un calendario de mercado queda fuera de esta fase;
 * se resolverá de forma natural al conectar un proveedor en vivo real
 * (Fase 2), que traerá su propia marca de tiempo de sesión.
 */
export const STALE_AFTER_DAYS = 7;
export const CRITICAL_AFTER_DAYS = 30;

function parseAsOf(asOf: string): Date {
  return new Date(asOf.includes("T") ? asOf : `${asOf}T00:00:00Z`);
}

export function daysSince(asOf: string): number {
  const ms = Date.now() - parseAsOf(asOf).getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function statusForAge(asOf: string): PriceStatus {
  const age = daysSince(asOf);
  if (age > CRITICAL_AFTER_DAYS) return "critical";
  if (age > STALE_AFTER_DAYS) return "stale";
  return "last-close";
}

/**
 * Proveedor de respaldo: el precio y la fecha ya existentes en los
 * fundamentales curados a mano (`company.price` / `company.asOf`). Es la
 * única fuente en la Fase 1 (no hay ningún proveedor en tiempo real
 * conectado) y sigue siendo el fallback cuando uno sí lo esté.
 */
export class DatasetPriceProvider implements PriceProvider {
  readonly id = "dataset";

  async getQuote(company: CompanyFundamentals): Promise<PriceQuote> {
    return {
      ticker: company.ticker,
      price: company.price,
      currency: company.currency,
      asOf: company.asOf,
      fetchedAt: company.asOf,
      source: "dataset",
      delayMinutes: null,
      status: statusForAge(company.asOf),
    };
  }
}
