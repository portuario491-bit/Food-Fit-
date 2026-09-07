import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { getDataProvider } from "@/lib/data";
import { computeRadarScores } from "@/lib/scoring/radar";
import { ScoreBadge } from "@/components/ScoreBadge";
import { DisclaimerBanner, DataQualityBanner } from "@/components/Disclaimer";
import { SectorIcon, SECTOR_COLORS } from "@/lib/sectorIcons";

export const metadata: Metadata = {
  title: "Radar mensual",
  description:
    "Top 10 empresas que combinan actualmente calidad, crecimiento, dividendos y valoración de forma más equilibrada, con explicación de cada resultado. No es una recomendación de compra.",
  alternates: { canonical: "/radar" },
};

export default async function RadarPage() {
  const provider = getDataProvider();
  const universe = await provider.listUniverse();
  const scored = computeRadarScores(universe);
  const byTicker = new Map(universe.map((c) => [c.ticker, c]));

  const top10 = [...scored].sort((a, b) => b.totalScore - a.totalScore).slice(0, 10);

  return (
    <div className="space-y-6">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-dark">
          <Sparkles className="h-3.5 w-3.5" /> Actualización manual
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink-950">Radar mensual</h1>
        <p className="mt-2 max-w-3xl text-ink-700">
          Las 10 empresas del universo analizado que combinan actualmente, de forma más equilibrada, calidad,
          crecimiento, dividendo y valoración razonable. El momentum de mercado <strong>no</strong> forma parte de
          este cálculo: esto no es una lista de &ldquo;las acciones que más han subido&rdquo;, sino de empresas con una
          combinación de fundamentales interesante en este momento.
        </p>
      </div>

      <DataQualityBanner isMock={provider.isMock} />

      <div className="grid gap-4 sm:grid-cols-2">
        {top10.map((result, idx) => {
          const company = byTicker.get(result.ticker)!;
          const sectorColor = SECTOR_COLORS[company.sector];
          return (
            <div
              key={result.ticker}
              className="rounded-xl border border-ink-900/10 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
              style={{ borderTop: `3px solid ${sectorColor}` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-ink-500">#{idx + 1}</p>
                  <Link
                    href={`/acciones/${company.ticker}`}
                    className="font-display text-lg font-bold text-ink-950 hover:text-accent-dark"
                  >
                    {company.name} ({company.ticker})
                  </Link>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-ink-600">
                    <SectorIcon sector={company.sector} className="h-4 w-4" />
                    {company.sector} · {company.region}
                  </p>
                </div>
                <ScoreBadge score={result.totalScore} />
              </div>
              {result.strengths.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-ink-700">
                  {result.strengths.slice(0, 3).map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent">+</span>
                      <span>{s.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <DisclaimerBanner variant="full" />
    </div>
  );
}
