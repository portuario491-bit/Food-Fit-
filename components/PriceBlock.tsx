import type { PriceQuote } from "@/lib/prices/types";
import { statusBadge, statusCaption, formatQuoteTimestamp } from "@/lib/prices/format";

/**
 * Bloque "protagonista" del precio en la ficha de empresa: precio grande +
 * badge de estado (🟢/🟡/🔴) + cuándo se obtuvo + cuándo son los
 * fundamentales. Deliberadamente separado de MetricTable/ScorePanel: el
 * precio es un bloque independiente de los fundamentales (Fase 1, punto 1).
 */
export function PriceBlock({
  quote,
  fundamentalsAsOf,
  marketCapLabel,
}: {
  quote: PriceQuote;
  fundamentalsAsOf: string;
  marketCapLabel: string;
}) {
  const badge = statusBadge(quote.status);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-display text-4xl font-bold text-white sm:text-5xl">
          {quote.price.toLocaleString("es-ES", { style: "currency", currency: quote.currency })}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${badge.className}`}
          title={statusCaption(quote)}
        >
          <span aria-hidden>{badge.emoji}</span>
          {badge.label}
        </span>
      </div>

      <p className="mt-2 text-sm text-white/70">
        Actualizado: {formatQuoteTimestamp(quote.fetchedAt)} · {statusCaption(quote)}
      </p>

      <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/50">
        <span>Cap. {marketCapLabel}</span>
        <span aria-hidden>·</span>
        <span>Fundamentales (PER, dividendo, crecimiento...) con datos del {formatQuoteTimestamp(fundamentalsAsOf)}</span>
      </p>
    </div>
  );
}
