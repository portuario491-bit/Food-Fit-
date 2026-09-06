function bandFor(score: number) {
  if (score >= 75) return { label: "Alto encaje", classes: "bg-accent/15 text-accent-dark border-accent/40" };
  if (score >= 55) return { label: "Encaje moderado", classes: "bg-gold/15 text-ink-800 border-gold/50" };
  return { label: "Encaje bajo", classes: "bg-gray-100 text-gray-700 border-gray-300" };
}

export function ScoreBadge({ score, size = "md" }: { score: number; size?: "sm" | "md" | "lg" }) {
  const band = bandFor(score);
  const sizeClasses =
    size === "lg" ? "h-16 w-16 text-2xl" : size === "sm" ? "h-9 w-9 text-xs" : "h-12 w-12 text-base";

  return (
    <div className="inline-flex items-center gap-2">
      <div
        className={`flex ${sizeClasses} items-center justify-center rounded-full border-2 font-semibold ${band.classes}`}
        title={`${band.label}: ${score}/100`}
      >
        {score}
      </div>
    </div>
  );
}

export function ScoreLabel({ score }: { score: number }) {
  return <span className="text-xs text-ink-600">{bandFor(score).label}</span>;
}
