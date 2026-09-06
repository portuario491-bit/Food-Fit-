import type { CompanyFundamentals, CompanySeries, FinancialDataProvider } from "../types";

/**
 * Integración real con EODHD (https://eodhd.com) pendiente de implementar.
 * Requiere mapear su respuesta de /api/fundamentals, /api/eod y /api/div al
 * modelo CompanyFundamentals/CompanySeries (cálculo de CAGRs, ROIC, etc. a
 * partir de los estados financieros crudos) y validarlo contra datos reales
 * antes de activarlo — no se hace aquí para no fabricar lógica sin probar.
 */
export class EodhdProvider implements FinancialDataProvider {
  readonly id = "eodhd";
  readonly isMock = false;

  constructor(private readonly apiKey: string) {}

  async listUniverse(): Promise<CompanyFundamentals[]> {
    throw new Error("EodhdProvider.listUniverse: pendiente de implementar. Ver comentario de la clase.");
  }

  async getCompany(_ticker: string): Promise<CompanyFundamentals | null> {
    throw new Error("EodhdProvider.getCompany: pendiente de implementar. Ver comentario de la clase.");
  }

  async getSeries(_ticker: string): Promise<CompanySeries | null> {
    throw new Error("EodhdProvider.getSeries: pendiente de implementar. Ver comentario de la clase.");
  }
}
