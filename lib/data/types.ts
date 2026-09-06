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
  marketCapUSD: number;
  asOf: string; // ISO date del snapshot
  isMock: boolean;

  // --- Dividendos ---
  dividendYield: number; // 0.032 = 3.2%
  payoutRatioEarnings: number | null; // dividendos / beneficio neto
  payoutRatioFCF: number | null; // dividendos / free cash flow
  consecutiveYearsPaying: number;
  consecutiveYearsIncreasing: number;
  dividendCagr3y: number | null;
  dividendCagr5y: number | null;
  dividendCagr10y: number | null;
  dividendCoverage: number | null; // FCF / dividendos pagados

  // --- Crecimiento ---
  revenueGrowthCagr3y: number;
  revenueGrowthCagr5y: number;
  epsGrowthCagr3y: number;
  epsGrowthCagr5y: number;
  fcfGrowthCagr3y: number;
  operatingMarginTrend5y: number; // variación en puntos porcentuales de margen operativo en 5 años

  // --- Calidad ---
  roic: number;
  roe: number;
  operatingMargin: number;
  netMargin: number;
  earningsStability: number; // 0-1, 1 = beneficios muy estables (menor volatilidad interanual)
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
  volatility3y: number; // desviación típica anualizada de rentabilidades
  beta: number;
  maxDrawdown5y: number; // magnitud positiva, ej. 0.35 = -35%

  // --- Momentum ---
  return6m: number;
  return1y: number;
  return3yCagr: number;
  distanceFromHigh52w: number; // 0 = en máximos, 0.2 = 20% por debajo
  aboveSma200: boolean;
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
