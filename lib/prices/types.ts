import type { CompanyFundamentals } from "../data/types";

/**
 * Estado de una cotización, pensado para comunicarse siempre con contexto
 * honesto (nunca un número "pelado" sin decir de cuándo es):
 * - "live": viene de un proveedor en tiempo real conectado (Fase 2+), dentro
 *   de su ventana de frescura conocida. Puede llevar retraso (delayMinutes).
 * - "last-close": no hay proveedor en vivo, o el mercado está cerrado; es el
 *   último precio conocido (hoy: el dato del dataset de fundamentales,
 *   siempre que no sea demasiado antiguo).
 * - "stale": el único dato disponible (dataset o último valor en caché) es
 *   más antiguo que el umbral razonable — debe mostrarse como aviso, no
 *   como una cotización utilizable.
 */
export type PriceStatus = "live" | "last-close" | "stale";

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
