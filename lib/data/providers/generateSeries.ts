import type { CompanyFundamentals, CompanySeries, DividendPayment, PricePoint } from "../types";

/**
 * PRNG determinista (mulberry32) sembrado por ticker: las series mock son
 * siempre iguales para la misma empresa, pero no están escritas a mano.
 */
function seededRandom(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822519);
    h = Math.imul(h ^ (h >>> 13), 3266489917);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

/**
 * Genera una serie mensual de 36 meses que termina en el precio actual y es
 * aproximadamente consistente con el CAGR a 3 años y la volatilidad declarados.
 * Es una serie ilustrativa para el gráfico, no la fuente del scoring (que usa
 * directamente los campos de CompanyFundamentals).
 */
export function generateMockPriceSeries(company: CompanyFundamentals): PricePoint[] {
  const rnd = seededRandom(company.ticker + "-price");
  const months = 36;
  const monthlyDrift = Math.pow(1 + company.return3yCagr, 1 / 12) - 1;
  const monthlyVol = company.volatility3y / Math.sqrt(12);

  const monthlyReturns: number[] = [];
  for (let i = 0; i < months; i++) {
    const noise = (rnd() - 0.5) * 2 * monthlyVol;
    monthlyReturns.push(monthlyDrift + noise);
  }

  // Reconstruye hacia atrás desde el precio actual para que el último punto sea exacto.
  const prices: number[] = new Array(months + 1);
  prices[months] = company.price;
  for (let i = months; i > 0; i--) {
    prices[i - 1] = prices[i] / (1 + monthlyReturns[i - 1]);
  }

  const today = new Date("2026-08-31T00:00:00Z");
  return prices.map((close, idx) => {
    const monthsAgo = months - idx;
    const d = new Date(today);
    d.setUTCMonth(d.getUTCMonth() - monthsAgo);
    return { date: d.toISOString().slice(0, 10), close: Math.round(close * 100) / 100 };
  });
}

export function generateMockDividendHistory(company: CompanyFundamentals): DividendPayment[] {
  if (company.consecutiveYearsPaying <= 0 || company.dividendYield <= 0) return [];

  const years = Math.min(company.consecutiveYearsPaying, 10);
  const growth = company.dividendCagr5y ?? company.dividendCagr3y ?? 0;
  const currentAnnualDividend = company.price * company.dividendYield;

  const payments: DividendPayment[] = [];
  for (let yearsAgo = years - 1; yearsAgo >= 0; yearsAgo--) {
    const annualAmount = currentAnnualDividend / Math.pow(1 + growth, yearsAgo);
    const year = 2026 - yearsAgo;
    payments.push({
      exDate: `${year}-06-15`,
      amount: Math.round((annualAmount / 4) * 10000) / 10000,
    });
  }
  return payments;
}

export function generateMockSeries(company: CompanyFundamentals): CompanySeries {
  return {
    ticker: company.ticker,
    prices: generateMockPriceSeries(company),
    dividends: generateMockDividendHistory(company),
  };
}
