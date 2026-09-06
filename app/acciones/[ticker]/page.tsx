import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDataProvider } from "@/lib/data";
import { computeUniverseScores } from "@/lib/scoring/engine";
import { PROFILES } from "@/lib/scoring/profiles";
import type { ProfileKey } from "@/lib/scoring/types";
import { ScoreBadge } from "@/components/ScoreBadge";
import { ScorePanel } from "@/components/ScorePanel";
import { ExplanationList } from "@/components/ExplanationList";
import { MetricTable } from "@/components/MetricTable";
import { PriceChart } from "@/components/PriceChart";
import { WatchlistButton } from "@/components/WatchlistButton";
import { DisclaimerBanner, MockDataBanner } from "@/components/Disclaimer";

const ALL_PROFILES = Object.keys(PROFILES) as ProfileKey[];

export async function generateStaticParams() {
  const provider = getDataProvider();
  const universe = await provider.listUniverse();
  return universe.map((c) => ({ ticker: c.ticker }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ticker: string }>;
}): Promise<Metadata> {
  const { ticker } = await params;
  const provider = getDataProvider();
  const company = await provider.getCompany(ticker);
  if (!company) return {};
  return {
    title: `${company.name} (${company.ticker}) — análisis y scoring`,
    description: `Análisis fundamental, puntuaciones explicadas y para qué perfil de inversor puede encajar ${company.name} (${company.ticker}), ${company.sector}.`,
    alternates: { canonical: `/acciones/${company.ticker}` },
  };
}

export default async function CompanyPage({
  params,
  searchParams,
}: {
  params: Promise<{ ticker: string }>;
  searchParams: Promise<{ profile?: string }>;
}) {
  const { ticker } = await params;
  const query = await searchParams;

  const provider = getDataProvider();
  const [company, series, universe] = await Promise.all([
    provider.getCompany(ticker),
    provider.getSeries(ticker),
    provider.listUniverse(),
  ]);

  if (!company || !series) notFound();

  const scoresByProfile = Object.fromEntries(
    ALL_PROFILES.map((profile) => [profile, computeUniverseScores(universe, profile).find((r) => r.ticker === company.ticker)!])
  ) as Record<ProfileKey, ReturnType<typeof computeUniverseScores>[number]>;

  const ranked = ALL_PROFILES.map((p) => ({ profile: p, total: scoresByProfile[p].totalScore })).sort(
    (a, b) => b.total - a.total
  );
  const bestFit = ranked[0];
  const worstFit = ranked[ranked.length - 1];

  const requestedProfile = query.profile && query.profile in PROFILES ? (query.profile as ProfileKey) : bestFit.profile;
  const activeScore = scoresByProfile[requestedProfile];
  const activeMeta = PROFILES[requestedProfile];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: company.name,
    tickerSymbol: company.ticker,
    industry: company.sector,
  };

  return (
    <div className="space-y-8">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm text-ink-500">
            {company.sector} · {company.exchange} · {company.country}
          </p>
          <h1 className="mt-1 text-3xl font-semibold text-ink-950">
            {company.name} <span className="text-ink-500">({company.ticker})</span>
          </h1>
          <p className="mt-2 text-2xl font-medium text-ink-900">
            {company.price.toLocaleString("es-ES", { style: "currency", currency: company.currency })}
            <span className="ml-3 text-sm font-normal text-ink-500">
              Cap. {(company.marketCapUSD / 1_000_000_000).toFixed(0)} mil M$
            </span>
          </p>
        </div>
        <WatchlistButton ticker={company.ticker} />
      </div>

      {company.isMock && <MockDataBanner />}

      <section className="rounded-lg border border-ink-900/10 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-ink-950">Evolución del precio (36 meses)</h2>
        <PriceChart prices={series.prices} currency={company.currency} />
        <div className="mt-4 grid grid-cols-3 gap-4 text-sm sm:grid-cols-5">
          <Stat label="6 meses" value={fmtPct(company.return6m)} />
          <Stat label="1 año" value={fmtPct(company.return1y)} />
          <Stat label="3 años (anualizada)" value={fmtPct(company.return3yCagr)} />
          <Stat label="Vs. máximo 52 sem." value={`-${fmtPct(company.distanceFromHigh52w)}`} />
          <Stat label="Tendencia" value={company.aboveSma200 ? "Alcista (media 200)" : "Bajista (media 200)"} />
        </div>
      </section>

      <section className="rounded-lg border border-ink-900/10 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-ink-950">Puntuación — perfil {activeMeta.label}</h2>
          <div className="flex flex-wrap gap-1.5">
            {ALL_PROFILES.map((p) => (
              <Link
                key={p}
                href={`/acciones/${company.ticker}?profile=${p}`}
                className={`rounded-full border px-3 py-1 text-xs ${
                  p === requestedProfile
                    ? "border-accent bg-accent text-white"
                    : "border-ink-900/15 text-ink-600 hover:border-accent/50"
                }`}
              >
                {PROFILES[p].label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[auto_1fr]">
          <div className="flex flex-col items-center gap-2">
            <ScoreBadge score={activeScore.totalScore} size="lg" />
            <p className="text-xs text-ink-500">de 100</p>
          </div>
          <ScorePanel subscores={activeScore.subscores} />
        </div>

        <div className="mt-6">
          <ExplanationList strengths={activeScore.strengths} weaknesses={activeScore.weaknesses} />
        </div>
      </section>

      <section className="rounded-lg border border-ink-900/10 bg-white p-6">
        <h2 className="text-lg font-semibold text-ink-950">¿Para qué tipo de inversor puede encajar?</h2>
        <p className="mt-3 text-ink-700">
          Con los datos actuales, {company.name} obtiene su mejor encaje ({bestFit.total}/100) con un perfil de{" "}
          <strong>{PROFILES[bestFit.profile].label}</strong> ({PROFILES[bestFit.profile].tagline.toLowerCase()}),
          frente a un encaje más débil ({worstFit.total}/100) con un perfil de{" "}
          <strong>{PROFILES[worstFit.profile].label}</strong>. Es decir: puede encajar mejor con{" "}
          {PROFILES[bestFit.profile].fitFor} En cambio, encaja peor con lo que busca específicamente un inversor
          de perfil {PROFILES[worstFit.profile].label.toLowerCase()}.
        </p>
        <p className="mt-3 text-sm text-ink-500">
          Esto describe un encaje relativo con distintos estilos de análisis, no una recomendación de compra o
          idoneidad personal. Consulta siempre tu propia situación financiera.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <MetricCard title="Dividendo" score={activeScore.subscores.dividend} />
        <MetricCard title="Crecimiento" score={activeScore.subscores.growth} />
        <MetricCard title="Calidad" score={activeScore.subscores.quality} />
        <MetricCard title="Valoración" score={activeScore.subscores.valuation} />
        <MetricCard title="Riesgo" score={activeScore.subscores.risk} />
        <MetricCard title="Momentum" score={activeScore.subscores.momentum} />
      </section>

      <section className="rounded-lg border border-ink-900/10 bg-white p-6">
        <h2 className="text-lg font-semibold text-ink-950">Evolución histórica de los scores</h2>
        <p className="mt-2 text-sm text-ink-600">
          Aún no acumulamos histórico suficiente de puntuaciones mensuales para {company.ticker}. Esta sección se
          activará automáticamente en cuanto tengamos varios snapshots (ver{" "}
          <Link href="/metodologia" className="underline">
            metodología
          </Link>
          ).
        </p>
      </section>

      <DisclaimerBanner variant="full" />
    </div>
  );
}

function fmtPct(v: number) {
  return `${v >= 0 ? "+" : ""}${(v * 100).toFixed(1)}%`;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-ink-500">{label}</div>
      <div className="font-medium text-ink-900">{value}</div>
    </div>
  );
}

function MetricCard({
  title,
  score,
}: {
  title: string;
  score: { score: number; hasData: boolean; metrics: import("@/lib/scoring/types").MetricContribution[] };
}) {
  return (
    <div className="rounded-lg border border-ink-900/10 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-ink-950">{title}</h3>
        <ScoreBadge score={score.score} size="sm" />
      </div>
      <MetricTable metrics={score.metrics} />
    </div>
  );
}
