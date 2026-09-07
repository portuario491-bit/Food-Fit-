import type { FinancialDataProvider } from "./types";
import { MockProvider } from "./providers/mockProvider";
import { Ibex35Provider } from "./providers/ibex35Provider";

/**
 * Punto único de acceso al proveedor de datos financieros activo.
 * Selección vía FINANCIAL_DATA_PROVIDER:
 * - "ibex35" (por defecto): universo real del IBEX35 recopilado manualmente.
 * - "mock": universo ficticio, útil para desarrollo/pruebas de la metodología.
 * - "eodhd" / "fmp": proveedores en tiempo real, pendientes de implementar.
 *   Si se solicitan sin tener la integración lista, se usa Ibex35Provider.
 */
function resolveProvider(): FinancialDataProvider {
  const requested = (process.env.FINANCIAL_DATA_PROVIDER ?? "ibex35").toLowerCase();

  if (requested === "mock") return new MockProvider();

  if (requested === "eodhd" && process.env.EODHD_API_KEY) {
    console.warn(
      "FINANCIAL_DATA_PROVIDER=eodhd configurado, pero EodhdProvider aún no está implementado. Usando Ibex35Provider."
    );
  }
  if (requested === "fmp" && process.env.FMP_API_KEY) {
    console.warn(
      "FINANCIAL_DATA_PROVIDER=fmp configurado, pero FmpProvider aún no está implementado. Usando Ibex35Provider."
    );
  }

  return new Ibex35Provider();
}

let cachedProvider: FinancialDataProvider | null = null;

export function getDataProvider(): FinancialDataProvider {
  if (!cachedProvider) cachedProvider = resolveProvider();
  return cachedProvider;
}

export * from "./types";
