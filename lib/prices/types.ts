import type { CompanyFundamentals } from "../data/types";

/**
 * Estado de una cotización, pensado para comunicarse siempre con contexto
 * honesto (nunca un número "pelado" sin decir de cuándo es). Cuatro
 * niveles, no tres: distinguir "algo desactualizado" de "muy
 * desactualizado" evita que todo el dataset manual (actualizado cada
 * varios días) se vea permanentemente en el estado más alarmante.
 * - "live": viene de un proveedor en tiempo real conectado (Fase 2+), dentro
 *   de su ventana de frescura conocida. Puede llevar retraso (delayMinutes).
 * - "last-close": no hay proveedor en vivo, o el mercado está cerrado; el
 *   dato del dataset tiene 0-7 días naturales.
 * - "stale": el dato del dataset tiene 8-30 días naturales — desactualizado,
 *   pero todavía se muestra como referencia con su fecha.
 * - "critical": el dato del dataset tiene más de 30 días naturales — no debe
 *   tratarse como cotización utilizable.
 *
 * Los días son naturales (no de sesión bursátil): no hay calendario de
 * mercado (festivos, fines de semana) implementado en esta fase. Ver
 * STALE_AFTER_DAYS/CRITICAL_AFTER_DAYS en providers/datasetProvider.ts.
 */
export type PriceStatus = "live" | "last-close" | "stale" | "critical";

export interface PriceQuote {
  ticker: string;
  price: number;
  currency: string;
  /** Fecha (o fecha+hora ISO) a la que corresponde el propio precio. */
  asOf: string;
  /** Cuándo se obtuvo esta cotización — lo que se muestra como "Actualizado: ...". */
  fetchedAt: string;
  /** "dataset" mientras no haya proveedor real conectado; luego el id del proveedor. */
  source: string;
  /** Minutos de retraso conocidos del proveedor (p.ej. 15). null si no aplica o se desconoce. */
  delayMinutes: number | null;
  status: PriceStatus;
}

/**
 * Contrato que debe cumplir cualquier proveedor de cotizaciones, en vivo o
 * de respaldo. `getQuotes` es opcional: un proveedor real debería
 * implementarlo como UNA sola petición en lote en vez de N peticiones
 * individuales (ver PriceService.getQuotes).
 */
export interface PriceProvider {
  readonly id: string;
  getQuote(company: CompanyFundamentals): Promise<PriceQuote | null>;
  getQuotes?(companies: CompanyFundamentals[]): Promise<Map<string, PriceQuote>>;
}
