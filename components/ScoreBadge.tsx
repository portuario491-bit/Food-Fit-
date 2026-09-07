import type { CSSProperties } from "react";

function bandFor(score: number) {
  if (score >= 75) return { label: "Alto encaje", ring: "#0f7a5c", track: "#d7ede4", text: "text-accent-dark" };
  if (score >= 55) return { label: "Encaje moderado", ring: "#c8933f", track: "#f3e4cb", text: "text-gold-dark" };
  return { label: "Encaje bajo", ring: "#94a3b8", track: "#e2e8f0", text: "text-ink-600" };
}

const SIZES = {
  sm: { outer: 36, inner: 28, text: "text-xs" },
  md: { outer: 52, inner: 42, text: "text-base" },
  lg: { outer: 84, inner: 68, text: "text-2xl" },
} as const;

export function ScoreBadge({ score, size = "md" }: { score: number; size?: keyof typeof SIZES }) {
  const band = bandFor(score);
  const dims = SIZES[size];

  const ringStyle = {
    "--ring-pct": score,
    "--ring-color": band.ring,
    "--ring-track": band.track,
    width: dims.outer,
    height: dims.outer,
  } as CSSProperties;

  return (
    <div
      className="score-ring inline-flex shrink-0 items-center justify-center rounded-full"
      style={ringStyle}
      title={`${band.label}: ${score}/100`}
    >
      <div
        className={`flex items-center justify-center rounded-full bg-white font-display font-bold ${band.text} ${dims.text}`}
        style={{ width: dims.inner, height: dims.inner }}
      >
        {score}
      </div>
    </div>
  );
}

export function ScoreLabel({ score }: { score: number }) {
  return <span className="text-xs text-ink-600">{bandFor(score).label}</span>;
}
