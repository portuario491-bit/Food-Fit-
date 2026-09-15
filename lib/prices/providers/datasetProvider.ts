import type { CompanyFundamentals } from "../../data/types";
import type { PriceProvider, PriceQuote, PriceStatus } from "../types";

/**
 * A partir de cuántos días sin actualizar consideramos un precio "antiguo"
 * (🔴) en vez de "último cierre disponible" (🟡). Único sitio donde vive
 * este umbral — cámbialo aquí si hace falta ajustarlo.
 */
export const STALE_AFTER_DAYS = 30;

function parseAsOf(asOf: string): Date {
  return new Date(asOf.includes("T") ? asOf : `${asOf}T00:00:00Z`);
}

export function daysSince(asOf: string): number {
  const ms = Date.now() - parseAsOf(asOf).getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

function statusForAge(asOf: string): PriceStatus {
  return daysSince(asOf) > STALE_AFTER_DAYS ? "stale" : "last-close";
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
