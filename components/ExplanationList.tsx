import type { ExplanationItem } from "@/lib/scoring/types";

export function ExplanationList({
  strengths,
  weaknesses,
}: {
  strengths: ExplanationItem[];
  weaknesses: ExplanationItem[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <h3 className="mb-2 text-sm font-semibold text-accent-dark">Fortalezas</h3>
        {strengths.length === 0 ? (
          <p className="text-sm text-ink-600">Sin fortalezas destacadas para este perfil.</p>
        ) : (
          <ul className="space-y-1.5 text-sm text-ink-800">
            {strengths.map((s, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-accent">+</span>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold text-red-700">Debilidades</h3>
        {weaknesses.length === 0 ? (
          <p className="text-sm text-ink-600">Sin debilidades destacadas para este perfil.</p>
        ) : (
          <ul className="space-y-1.5 text-sm text-ink-800">
            {weaknesses.map((w, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-red-600">−</span>
                <span>{w.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
