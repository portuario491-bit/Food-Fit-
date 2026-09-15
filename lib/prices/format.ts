import type { PriceQuote, PriceStatus } from "./types";

export interface StatusBadgeInfo {
  emoji: string;
  label: string;
  className: string;
}

/**
 * Mapea el estado de una cotización al badge visual (🟢/🟡/🔴) y sus
 * clases de Tailwind. Único sitio donde vive esta correspondencia.
 */
export function statusBadge(status: PriceStatus): StatusBadgeInfo {
  switch (status) {
    case "live":
      return { emoji: "🟢", label: "Actualizado", className: "border-accent/30 bg-accent-soft text-accent-dark" };
    case "last-close":
      return { emoji: "🟡", label: "Último cierre", className: "border-gold/30 bg-gold-soft text-gold-dark" };
    case "stale":
      return { emoji: "🔴", label: "Dato antiguo", className: "border-red-200 bg-red-50 text-red-700" };
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
 * Frase corta de contexto para el estado del precio, siempre con matiz
 * honesto (nunca solo "Actualizado" sin más si hay retraso o es un cierre).
 */
export function statusCaption(quote: PriceQuote): string {
  if (quote.status === "live") {
    return quote.delayMinutes ? `Cotización con retraso de ${quote.delayMinutes} min` : "Cotización en vivo";
  }
  if (quote.status === "last-close") return "Último cierre disponible";
  return "Sin actualizar recientemente — dato antiguo, no es una cotización actual";
}
