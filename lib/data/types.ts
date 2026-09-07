export type Sector =
  | "Tecnología"
  | "Salud"
  | "Consumo defensivo"
  | "Consumo cíclico"
  | "Industria"
  | "Energía"
  | "Financiero"
  | "Utilities"
  | "Materiales"
  | "Comunicación"
  | "Inmobiliario";

export type Region = "Estados Unidos" | "Europa" | "España";

export interface PricePoint {
  date: string; // ISO yyyy-mm-dd
  close: number;
}

export interface DividendPayment {
  exDate: string; // ISO yyyy-mm-dd
  amount: number; // en la divisa de la empresa
}

/**
 * Fundamentales de una empresa en un instante dado ("snapshot").
 * En producción cada snapshot se persiste con su propia fecha de publicación
 * (fetchedAt) para poder reconstruir el scoring histórico sin look-ahead bias.
 *
 * La mayoría de métricas son `number | null` a propósito: cuando una cifra no
 * se ha podido verificar en una fuente pública fiable, el valor es `null`
 * (nunca se estima ni se inventa). El motor de scoring excluye del cálculo
 * las métricas con valor `null` y renormaliza los pesos restantes.
 */
export interface CompanyFundamentals {
  ticker: string;
  name: string;
  sector: Sector;
  region: Region;
  country: string;
  exchange: string;
  currency: string;
  price: number;
  /** Capitalización de mercado, en la divisa `currency` de la empresa. */
  marketCap: number | null;
  asOf: string; // ISO date del snapshot
  isMock: boolean;
  /** Matiz importante de la fuente (p.ej. contradicción entre fuentes sobre política de dividendo). */
  sourceNote: string | null;

  // --- Dividendos ---
  dividendYield: number | null; // 0.032 = 3.2%
  payoutRatioEarnings: number | null; // dividendos / beneficio neto
  payoutRatioFCF: number | null; // dividendos / free cash flow
  consecutiveYearsPaying: number | null;
  consecutiveYearsIncreasing: number | null;
  dividendCagr3y: number | null;
  dividendCagr5y: number | null;
  dividendCagr10y: number | null;
  dividendCoverage: number | null; // FCF / dividendos pagados

  // --- Crecimiento ---
  revenueGrowthCagr3y: number | null;
  revenueGrowthCagr5y: number | null;
  epsGrowthCagr3y: number | null;
  epsGrowthCagr5y: number | null;
  fcfGrowthCagr3y: number | null;
  operatingMarginTrend5y: number | null; // variación en puntos porcentuales de margen operativo en 5 años

  // --- Calidad ---
  roic: number | null;
  roe: number | null;
  operatingMargin: number | null;
  netMargin: number | null;
  earningsStability: number | null; // 0-1, 1 = beneficios muy estables (menor volatilidad interanual)
  // Nulo cuando la métrica no es comparable para el modelo de negocio (p.ej. bancos)
  netDebtToEbitda: number | null;
  interestCoverage: number | null;

  // --- Valoración ---
  per: number | null;
  forwardPer: number | null;
  peg: number | null;
  evEbitda: number | null;
  priceToFcf: number | null;
  priceToSales: number | null;
  perVsHistoricalAvg5y: number | null; // ratio: PER actual / PER medio 5 años

  // --- Riesgo ---
  volatility3y: number | null; // desviación típica anualizada de rentabilidades
  beta: number | null;
  maxDrawdown5y: number | null; // magnitud positiva, ej. 0.35 = -35%

  // --- Momentum ---
  return6m: number | null;
  return1y: number | null;
  return3yCagr: number | null;
  distanceFromHigh52w: number | null; // 0 = en máximos, 0.2 = 20% por debajo
  aboveSma200: boolean | null;
}

export interface CompanySeries {
  ticker: string;
  prices: PricePoint[];
  dividends: DividendPayment[];
}

export interface FinancialDataProvider {
  readonly id: string;
  readonly isMock: boolean;
  listUniverse(): Promise<CompanyFundamentals[]>;
  getCompany(ticker: string): Promise<CompanyFundamentals | null>;
  getSeries(ticker: string): Promise<CompanySeries | null>;
}
