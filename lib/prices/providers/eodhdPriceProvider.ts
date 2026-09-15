import type { CompanyFundamentals } from "../../data/types";
import type { PriceProvider, PriceQuote } from "../types";

/**
 * Integración real de cotizaciones con EODHD pendiente de implementar
 * (Fase 2 — decidido no contratar el plan comercial todavía, ver informe de
 * evaluación de proveedores). Cuando se implemente: usar EODHD_API_KEY
 * (ya presente en `.env.example`), mapear el sufijo de ticker correcto por
 * mercado (`.MC` para Madrid/BME, sin sufijo para NASDAQ/NYSE) y validar la
 * respuesta real contra su documentación vigente antes de activarla — no se
 * asume nada aquí para no fabricar detalles de una API no verificada.
 *
 * Nombrado `eodhdPriceProvider.ts` (no `eodhdProvider.ts`) para no chocar
 * con `lib/data/providers/eodhdProvider.ts`, que es la integración de
 * FUNDAMENTALES con EODHD (también pendiente, y un servicio independiente).
 */
export class EodhdPriceProvider implements PriceProvider {
  readonly id = "eodhd";

  constructor(private readonly apiKey: string) {}

  async getQuote(_company: CompanyFundamentals): Promise<PriceQuote | null> {
    throw new Error("EodhdPriceProvider.getQuote: pendiente de implementar. Ver comentario de la clase.");
  }
}
