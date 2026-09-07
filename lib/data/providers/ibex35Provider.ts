import type { CompanyFundamentals, CompanySeries, FinancialDataProvider } from "../types";
import { IBEX35_COMPANIES } from "./ibex35Companies";

/**
 * Proveedor de datos real (recopilado manualmente) para el universo del
 * IBEX35. No hay feed de precios en tiempo real todavía: getSeries devuelve
 * un único punto (el precio conocido) en vez de fabricar un histórico, para
 * no presentar un gráfico inventado como si fuera real.
 */
export class Ibex35Provider implements FinancialDataProvider {
  readonly id = "ibex35-curated";
  readonly isMock = false;

  async listUniverse(): Promise<CompanyFundamentals[]> {
    return IBEX35_COMPANIES;
  }

  async getCompany(ticker: string): Promise<CompanyFundamentals | null> {
    return IBEX35_COMPANIES.find((c) => c.ticker === ticker.toUpperCase()) ?? null;
  }

  async getSeries(ticker: string): Promise<CompanySeries | null> {
    const company = await this.getCompany(ticker);
    if (!company) return null;
    return {
      ticker: company.ticker,
      prices: [{ date: company.asOf, close: company.price }],
      dividends: [],
    };
  }
}
