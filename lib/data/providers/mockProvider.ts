import type { CompanyFundamentals, CompanySeries, FinancialDataProvider } from "../types";
import { MOCK_COMPANIES } from "./mockCompanies";
import { generateMockSeries } from "./generateSeries";

/**
 * Proveedor de datos MOCK. Se usa cuando FINANCIAL_DATA_PROVIDER=mock (por defecto)
 * o cuando falta la API key de un proveedor real. Todas las empresas llevan
 * isMock=true y la UI debe mostrar siempre un aviso visible mientras este
 * proveedor esté activo.
 */
export class MockProvider implements FinancialDataProvider {
  readonly id = "mock";
  readonly isMock = true;

  async listUniverse(): Promise<CompanyFundamentals[]> {
    return MOCK_COMPANIES;
  }

  async getCompany(ticker: string): Promise<CompanyFundamentals | null> {
    return MOCK_COMPANIES.find((c) => c.ticker === ticker.toUpperCase()) ?? null;
  }

  async getSeries(ticker: string): Promise<CompanySeries | null> {
    const company = await this.getCompany(ticker);
    if (!company) return null;
    return generateMockSeries(company);
  }
}
