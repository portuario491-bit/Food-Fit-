import type { PriceQuote, PriceStatus } from "./types";
import { daysSince } from "./providers/datasetProvider";

export interface StatusBadgeInfo {
  emoji: string;
  label: string;
  className: string;
}

/**
 * Mapea el estado de una cotización al badge visual (🟢/🟡/🟠/🔴) y sus
 * clases de Tailwind. Único sitio donde vive esta correspondencia. El
 * color nunca es el único portador de significado: emoji + texto van
 * siempre juntos (accesibilidad — no depender solo del color).
 */
export function statusBadge(status: PriceStatus): StatusBadgeInfo {
  switch (status) {
    case "live":
      return { emoji: "🟢", label: "Cotización actual", className: "border-accent/30 bg-accent-soft text-accent-dark" };
    case "last-close":
      return { emoji: "🟡", label: "Último cierre", className: "border-gold/30 bg-gold-soft text-gold-dark" };
    case "stale":
      return { emoji: "🟠", label: "Desactualizado", className: "border-orange-300 bg-orange-50 text-orange-700" };
    case "critical":
      return { emoji: "🔴", label: "Muy desactualizado", className: "border-red-200 bg-red-50 text-red-700" };
  }
}

function parseDate(iso: string): Date {
  return new Date(iso.includes("T") ? iso : `${iso}T00:00:00`);
}

/** "15/09/2026" si solo hay fecha, "15/09/2026 · 17:32" si hay hora. */
export function formatQuoteTimestamp(iso: string): string {
  const hasTime = iso.includes("T");
  const d = parseDate(iso);
  const datePart = d.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
  if (!hasTime) return datePart;
  const timePart = d.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
  return `${datePart} · ${timePart}`;
}

/**
 * Frase de contexto para el estado del precio, siempre con matiz honesto
 * (nunca un número "pelado" sin decir de cuándo es). Para "last-close" y
 * "stale" la fecha va embebida en el propio texto (siempre visible, no
 * solo en tooltip); para "live" y "critical" no aplica una fecha de la
 * misma forma, así que la añade quoteContext() por separado.
 */
export function statusCaption(quote: PriceQuote): string {
  const date = formatQuoteTimestamp(quote.fetchedAt);
  switch (quote.status) {
    case "live":
      return quote.delayMinutes ? `Cotización actual (retraso de ${quote.delayMinutes} min)` : "Cotización actual";
    case "last-close":
      return `Último cierre conocido — ${date}`;
    case "stale":
      return `Precio desactualizado — último dato: ${date}`;
    case "critical":
      return "Precio muy desactualizado — no utilizar como cotización actual";
  }
}

/**
 * Texto completo a mostrar (siempre visible, no solo en tooltip): añade la
 * fecha al final para "live"/"critical", que no la llevan embebida en
 * statusCaption(). Único sitio que combina ambas cosas — úsalo en vez de
 * statusCaption() a secas en cualquier sitio visible para el usuario.
 */
export function quoteContext(quote: PriceQuote): string {
  const caption = statusCaption(quote);
  if (quote.status === "last-close" || quote.status === "stale") return caption;
  return `${caption} · Actualizado: ${formatQuoteTimestamp(quote.fetchedAt)}`;
}

/**
 * Etiqueta corta para usar en sitios compactos (columna de precio del
 * ranking/watchlist): no la fecha completa, solo cuánto hace, calculado
 * siempre a partir de quote.asOf — nunca un número escrito a mano. "critical"
 * se queda en "+30 días" porque por definición ese estado siempre significa
 * "más de 30", no un número puntual.
 */
export function compactFreshnessLabel(quote: PriceQuote): string {
  if (quote.status === "live") return "Actual";
  if (quote.status === "critical") return "+30 días";
  return `${daysSince(quote.asOf)} días`;
}
