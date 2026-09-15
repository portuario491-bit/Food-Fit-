import type { PriceProvider } from "./types";
import { DatasetPriceProvider } from "./providers/datasetProvider";
import { PriceService } from "./priceService";

/**
 * Selección del proveedor de cotizaciones en vivo vía PRICE_DATA_PROVIDER:
 * - sin configurar, o "dataset" (por defecto): no hay proveedor en vivo;
 *   PriceService usa directamente el dataset de fundamentales como único
 *   dato disponible ("último cierre conocido"), igual que ahora mismo.
 * - "alphavantage" | "finnhub" | "twelvedata" | "polygon" | "eodhd":
 *   proveedores en tiempo real, con la clase ya preparada en
 *   lib/prices/providers/ pero pendientes de implementar (Fase 2 — ver
 *   informe de evaluación de proveedores antes de contratar ninguno). Si se
 *   piden sin tener la integración lista, se avisa por consola y se sigue
 *   usando el dataset.
 */
function resolveLiveProvider(): PriceProvider | null {
  const requested = (process.env.PRICE_DATA_PROVIDER ?? "dataset").toLowerCase();

  if (requested === "" || requested === "dataset") return null;

  const knownButNotImplemented = ["alphavantage", "finnhub", "twelvedata", "polygon", "eodhd"];
  if (knownButNotImplemented.includes(requested)) {
    console.warn(
      `[PriceService] PRICE_DATA_PROVIDER=${requested} configurado, pero esa integración aún no está implementada. Usando el dataset como fuente de precio.`
    );
  } else {
    console.warn(`[PriceService] PRICE_DATA_PROVIDER=${requested} no reconocido. Usando el dataset como fuente de precio.`);
  }
  return null;
}

let cachedService: PriceService | null = null;

export function getPriceService(): PriceService {
  if (!cachedService) {
    cachedService = new PriceService(resolveLiveProvider(), new DatasetPriceProvider());
  }
  return cachedService;
}

export * from "./types";
export { STALE_AFTER_DAYS, daysSince } from "./providers/datasetProvider";
