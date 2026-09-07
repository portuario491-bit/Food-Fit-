import type { SubscoreKey, SubscoreResult } from "@/lib/scoring/types";

const SUBSCORE_LABELS: Record<SubscoreKey, string> = {
  dividend: "Dividendo",
  growth: "Crecimiento",
  quality: "Calidad",
  valuation: "Valoración",
  risk: "Riesgo (menor riesgo = mayor score)",
  momentum: "Momentum",
};

const SUBSCORE_ORDER: SubscoreKey[] = ["dividend", "growth", "quality", "valuation", "risk", "momentum"];

function barColor(score: number) {
  if (score >= 75) return "bg-accent";
  if (score >= 55) return "bg-gold";
  return "bg-gray-400";
}

export function ScorePanel({ subscores }: { subscores: Record<SubscoreKey, SubscoreResult> }) {
  return (
    <div className="space-y-3">
      {SUBSCORE_ORDER.map((key) => {
        const s = subscores[key];
        const metricsWithData = s.metrics.filter((m) => m.normalizedScore !== null).length;
        const lowConfidence = s.hasData && metricsWithData <= 2;
        return (
          <div key={key}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-ink-800">
                {SUBSCORE_LABELS[key]}
                {lowConfidence && (
                  <span
                    className="ml-1.5 text-xs text-gold"
                    title={`Calculado con solo ${metricsWithData} de ${s.metrics.length} métricas: tómalo con cautela`}
                  >
                    ({metricsWithData}/{s.metrics.length} métricas)
                  </span>
                )}
              </span>
              <span className="font-medium text-ink-900">{s.hasData ? s.score : "—"}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className={`h-full rounded-full ${barColor(s.score)}`}
                style={{ width: `${s.hasData ? s.score : 0}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
