import type { CompanyFundamentals, CompanySeries, FinancialDataProvider } from "../types";
import { IBEX35_COMPANIES } from "./ibex35Companies";
import { GLOBAL_COMPANIES } from "./globalCompanies";

const ALL_COMPANIES: CompanyFundamentals[] = [...IBEX35_COMPANIES, ...GLOBAL_COMPANIES];

/**
 * Proveedor de datos real (recopilado manualmente): universo del IBEX35 más
 * una ampliación con empresas españolas fuera del índice y una selección de
 * grandes empresas del S&P 500. No hay feed de precios en tiempo real
 * todavía: getSeries devuelve un único punto (el precio conocido) en vez de
 * fabricar un histórico, para no presentar un gráfico inventado como si
 * fuera real.
 */
export class Ibex35Provider implements FinancialDataProvider {
  readonly id = "ibex35-curated";
  readonly isMock = false;

  async listUniverse(): Promise<CompanyFundamentals[]> {
    return ALL_COMPANIES;
  }

  async getCompany(ticker: string): Promise<CompanyFundamentals | null> {
    return ALL_COMPANIES.find((c) => c.ticker === ticker.toUpperCase()) ?? null;
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
