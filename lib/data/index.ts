import type { FinancialDataProvider } from "./types";
import { MockProvider } from "./providers/mockProvider";

/**
 * Punto único de acceso al proveedor de datos financieros activo.
 * Selección vía FINANCIAL_DATA_PROVIDER; si el proveedor pedido no tiene
 * API key configurada (o no está implementado todavía), se usa MockProvider
 * en su lugar para que la app nunca muestre datos reales a medio construir.
 */
function resolveProvider(): FinancialDataProvider {
  const requested = (process.env.FINANCIAL_DATA_PROVIDER ?? "mock").toLowerCase();

  if (requested === "eodhd" && process.env.EODHD_API_KEY) {
    console.warn(
      "FINANCIAL_DATA_PROVIDER=eodhd configurado, pero EodhdProvider aún no está implementado. Usando MockProvider."
    );
  }
  if (requested === "fmp" && process.env.FMP_API_KEY) {
    console.warn(
      "FINANCIAL_DATA_PROVIDER=fmp configurado, pero FmpProvider aún no está implementado. Usando MockProvider."
    );
  }

  return new MockProvider();
}

let cachedProvider: FinancialDataProvider | null = null;

export function getDataProvider(): FinancialDataProvider {
  if (!cachedProvider) cachedProvider = resolveProvider();
  return cachedProvider;
}

export * from "./types";
