import type { CompanyFundamentals, CompanySeries, FinancialDataProvider } from "../types";

/**
 * Integración real con Financial Modeling Prep pendiente de implementar.
 * Ver EodhdProvider para el motivo: requiere mapear y validar su respuesta
 * contra datos reales antes de activarla.
 */
export class FmpProvider implements FinancialDataProvider {
  readonly id = "fmp";
  readonly isMock = false;

  constructor(private readonly apiKey: string) {}

  async listUniverse(): Promise<CompanyFundamentals[]> {
    throw new Error("FmpProvider.listUniverse: pendiente de implementar. Ver comentario de la clase.");
  }

  async getCompany(_ticker: string): Promise<CompanyFundamentals | null> {
    throw new Error("FmpProvider.getCompany: pendiente de implementar. Ver comentario de la clase.");
  }

  async getSeries(_ticker: string): Promise<CompanySeries | null> {
    throw new Error("FmpProvider.getSeries: pendiente de implementar. Ver comentario de la clase.");
  }
}
