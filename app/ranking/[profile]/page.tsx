import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDataProvider } from "@/lib/data";
import { buildRanking } from "@/lib/ranking";
import { PROFILES } from "@/lib/scoring/profiles";
import type { ProfileKey } from "@/lib/scoring/types";
import { RankingTable } from "@/components/RankingTable";
import { FilterBar } from "@/components/FilterBar";
import { DisclaimerBanner, MockDataBanner } from "@/components/Disclaimer";
import type { Region, Sector } from "@/lib/data/types";

export function generateStaticParams() {
  return Object.keys(PROFILES).map((profile) => ({ profile }));
}

function isValidProfile(value: string): value is ProfileKey {
  return value in PROFILES;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ profile: string }>;
}): Promise<Metadata> {
  const { profile } = await params;
  if (!isValidProfile(profile)) return {};
  const meta = PROFILES[profile];
  return {
    title: `Ranking ${meta.label}`,
    description: `${meta.description} Ranking educativo, explicable y actualizado; no es una recomendación de compra.`,
    alternates: { canonical: `/ranking/${meta.key}` },
  };
}

export default async function RankingPage({
  params,
  searchParams,
}: {
  params: Promise<{ profile: string }>;
  searchParams: Promise<{
    region?: string;
    sector?: string;
    minYield?: string;
    minScore?: string;
    minMarketCapUSD?: string;
  }>;
}) {
  const { profile } = await params;
  const query = await searchParams;
  if (!isValidProfile(profile)) notFound();
  const meta = PROFILES[profile];

  const provider = getDataProvider();
  const universe = await provider.listUniverse();

  const rows = buildRanking(universe, profile, {
    region: query.region as Region | undefined,
    sector: query.sector as Sector | undefined,
    minYield: query.minYield ? Number(query.minYield) : undefined,
    minScore: query.minScore ? Number(query.minScore) : undefined,
    minMarketCapUSD: query.minMarketCapUSD ? Number(query.minMarketCapUSD) : undefined,
  });

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-accent-dark">Ranking · {meta.label}</p>
        <h1 className="mt-1 text-3xl font-semibold text-ink-950">Mejores acciones para {meta.label.toLowerCase()}</h1>
        <p className="mt-2 max-w-3xl text-ink-700">{meta.description}</p>
      </div>

      {provider.isMock && <MockDataBanner />}

      <FilterBar />
      <RankingTable rows={rows} />
      <DisclaimerBanner variant="full" />

      <section className="rounded-lg border border-ink-900/10 bg-white p-6">
        <h2 className="text-lg font-semibold text-ink-950">Preguntas frecuentes</h2>
        <div className="mt-4 space-y-4 text-sm text-ink-700">
          <div>
            <p className="font-medium text-ink-900">¿Qué significa el score de esta lista?</p>
            <p>
              Es una puntuación de 0 a 100 calculada como media ponderada de seis sub-scores (dividendo,
              crecimiento, calidad, valoración, riesgo y momentum), con pesos específicos para el perfil{" "}
              {meta.label}. Consulta el detalle completo en{" "}
              <a href="/metodologia" className="underline">
                metodología
              </a>
              .
            </p>
          </div>
          <div>
            <p className="font-medium text-ink-900">¿Debo comprar la empresa con mayor score?</p>
            <p>
              No. El score prioriza según tus criterios, pero no sustituye tu propio análisis ni constituye
              asesoramiento personalizado. Revisa la ficha de cada empresa para entender por qué obtiene esa
              puntuación.
            </p>
          </div>
          <div>
            <p className="font-medium text-ink-900">¿Para qué tipo de inversor encaja este perfil?</p>
            <p>Puede encajar mejor con {meta.fitFor}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
