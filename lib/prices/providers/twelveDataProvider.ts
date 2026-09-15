import type { CompanyFundamentals } from "../../data/types";
import type { PriceProvider, PriceQuote } from "../types";

/**
 * Integración real con Twelve Data pendiente de implementar (Fase 2).
 * Antes de activarla: revisar su documentación oficial vigente para el
 * endpoint de cotización, el formato exacto de símbolo que espera para cada
 * mercado (NASDAQ/NYSE vs. BME) y sus límites de peticiones — no se asume
 * nada aquí para no fabricar detalles de una API no verificada.
 */
export class TwelveDataProvider implements PriceProvider {
  readonly id = "twelvedata";

  constructor(private readonly apiKey: string) {}

  async getQuote(_company: CompanyFundamentals): Promise<PriceQuote | null> {
    throw new Error("TwelveDataProvider.getQuote: pendiente de implementar. Ver comentario de la clase.");
  }
}
