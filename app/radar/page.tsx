import type { Metadata } from "next";
import Link from "next/link";
import { getDataProvider } from "@/lib/data";
import { computeRadarScores } from "@/lib/scoring/radar";
import { ScoreBadge } from "@/components/ScoreBadge";
import { DisclaimerBanner, MockDataBanner } from "@/components/Disclaimer";

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
        <h1 className="text-3xl font-semibold text-ink-950">Radar mensual</h1>
        <p className="mt-2 max-w-3xl text-ink-700">
          Las 10 empresas del universo analizado que combinan actualmente, de forma más equilibrada, calidad,
          crecimiento, dividendo y valoración razonable. El momentum de mercado <strong>no</strong> forma parte de
          este cálculo: esto no es una lista de &ldquo;las acciones que más han subido&rdquo;, sino de empresas con una
          combinación de fundamentales interesante en este momento.
        </p>
      </div>

      {provider.isMock && <MockDataBanner />}

      <div className="space-y-4">
        {top10.map((result, idx) => {
          const company = byTicker.get(result.ticker)!;
          return (
            <div key={result.ticker} className="rounded-lg border border-ink-900/10 bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-ink-500">#{idx + 1}</p>
                  <Link href={`/acciones/${company.ticker}`} className="text-lg font-semibold text-ink-950 hover:text-accent-dark">
                    {company.name} ({company.ticker})
                  </Link>
                  <p className="text-sm text-ink-600">
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
