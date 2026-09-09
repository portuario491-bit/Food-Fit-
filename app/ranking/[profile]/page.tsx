import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDataProvider } from "@/lib/data";
import { buildRanking } from "@/lib/ranking";
import { PROFILES } from "@/lib/scoring/profiles";
import type { ProfileKey } from "@/lib/scoring/types";
import { RankingTable } from "@/components/RankingTable";
import { FilterBar } from "@/components/FilterBar";
import { DisclaimerBanner, DataQualityBanner } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";
import type { Region, Sector } from "@/lib/data/types";
import { SITE_URL } from "@/lib/constants";

const PROFILE_HERO_VARIANT: Record<ProfileKey, "accent" | "violet" | "gold"> = {
  dividendos: "accent",
  crecimiento: "accent",
  "dividend-growth": "accent",
  calidad: "gold",
  "calidad-precio": "gold",
  equilibrado: "violet",
};

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
    minMarketCap?: string;
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
    minMarketCap: query.minMarketCap ? Number(query.minMarketCap) : undefined,
  });

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "InvIeduca", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Perfiles", item: `${SITE_URL}/perfil` },
      { "@type": "ListItem", position: 3, name: `Ranking ${meta.label}`, item: `${SITE_URL}/ranking/${meta.key}` },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué significa el score de esta lista?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Es una puntuación de 0 a 100 calculada como media ponderada de seis sub-scores (dividendo, crecimiento, calidad, valoración, riesgo y momentum), con pesos específicos para el perfil ${meta.label}.`,
        },
      },
      {
        "@type": "Question",
        name: "¿Debo comprar la empresa con mayor score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. El score prioriza según tus criterios, pero no sustituye tu propio análisis ni constituye asesoramiento personalizado. Revisa la ficha de cada empresa para entender por qué obtiene esa puntuación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Para qué tipo de inversor encaja este perfil?",
        acceptedAnswer: { "@type": "Answer", text: `Puede encajar mejor con ${meta.fitFor}` },
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PageHero
        eyebrow={`Ranking · ${meta.label}`}
        title={`Mejores acciones para ${meta.label.toLowerCase()}`}
        description={meta.description}
        variant={PROFILE_HERO_VARIANT[profile]}
      />

      <DataQualityBanner isMock={provider.isMock} />

      <FilterBar />
      <RankingTable rows={rows} />
      <DisclaimerBanner variant="full" />

      <section className="rounded-xl border border-ink-900/10 bg-white p-6 shadow-card">
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
