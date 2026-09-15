import type { CompanyFundamentals } from "../data/types";
import type { PriceProvider, PriceQuote } from "./types";

/**
 * Punto único de acceso a cotizaciones. Nunca deja que un componente llame
 * a un proveedor externo por su cuenta (requisito: nada de peticiones
 * independientes desde cada componente): todo pasa por aquí, y aquí es
 * donde en el futuro vivirá el batching real y la revalidación.
 *
 * Si hay un proveedor en vivo configurado y falla (red, límite de
 * peticiones, respuesta inválida...), se cae automáticamente al proveedor
 * de respaldo (el dataset de fundamentales) en vez de romper la página.
 */
export class PriceService {
  constructor(
    private readonly liveProvider: PriceProvider | null,
    private readonly fallbackProvider: PriceProvider
  ) {}

  async getQuote(company: CompanyFundamentals): Promise<PriceQuote> {
    if (this.liveProvider) {
      try {
        const quote = await this.liveProvider.getQuote(company);
        if (quote) return quote;
      } catch (err) {
        console.warn(
          `[PriceService] ${this.liveProvider.id} falló para ${company.ticker}, usando el último dato disponible.`,
          err
        );
      }
    }
    const fallback = await this.fallbackProvider.getQuote(company);
    // DatasetPriceProvider siempre devuelve una cotización para una empresa
    // que ya tiene fundamentales cargados; esto es solo para que TypeScript
    // no obligue a comprobar null en cada punto de uso.
    if (!fallback) {
      throw new Error(`[PriceService] no se pudo obtener ni siquiera el precio de respaldo para ${company.ticker}`);
    }
    return fallback;
  }

  /**
   * Versión en lote: UNA sola llamada por página que muestra varias
   * empresas (ranking, listados...), no una por fila. Si el proveedor en
   * vivo implementa `getQuotes`, se usa su lote real; si no, se recurre a
   * `getQuote` en paralelo (barato mientras la única fuente sea el dataset
   * en memoria; cuando haya un proveedor real sin lote propio, esto seguiría
   * haciendo N peticiones — implementar `getQuotes` en ese proveedor si
   * llega a pasar).
   */
  async getQuotes(companies: CompanyFundamentals[]): Promise<Map<string, PriceQuote>> {
    if (this.liveProvider?.getQuotes) {
      try {
        return await this.liveProvider.getQuotes(companies);
      } catch (err) {
        console.warn(
          `[PriceService] getQuotes en lote falló en ${this.liveProvider.id}, usando el último dato disponible para todas.`,
          err
        );
      }
    }
    const entries = await Promise.all(companies.map(async (c) => [c.ticker, await this.getQuote(c)] as const));
    return new Map(entries);
  }
}
