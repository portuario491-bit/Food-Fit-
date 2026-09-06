import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDataProvider } from "@/lib/data";
import { buildRanking } from "@/lib/ranking";
import { RankingTable } from "@/components/RankingTable";
import { MockDataBanner } from "@/components/Disclaimer";
import { sectorToSlug, slugToSector, SECTOR_SLUGS } from "@/lib/slug";

export function generateStaticParams() {
  return Object.values(SECTOR_SLUGS).map((slug) => ({ sector: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector: slug } = await params;
  const sector = slugToSector(slug);
  if (!sector) return {};
  return {
    title: `Mejores empresas de ${sector}`,
    description: `Ranking educativo (perfil equilibrado) de las empresas del sector ${sector} analizadas, con puntuación explicada. No es una recomendación de compra.`,
    alternates: { canonical: `/sectores/${sectorToSlug(sector)}` },
  };
}

export default async function SectorPage({ params }: { params: Promise<{ sector: string }> }) {
  const { sector: slug } = await params;
  const sector = slugToSector(slug);
  if (!sector) notFound();

  const provider = getDataProvider();
  const universe = await provider.listUniverse();
  const rows = buildRanking(universe, "equilibrado", { sector });

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-accent-dark">Sector</p>
        <h1 className="mt-1 text-3xl font-semibold text-ink-950">{sector}</h1>
        <p className="mt-2 max-w-3xl text-ink-700">
          Empresas del sector {sector} en nuestro universo, ordenadas según el perfil equilibrado. Las
          comparaciones de valoración de cada empresa (PER, EV/EBITDA...) ya tienen en cuenta a sus competidores
          de este mismo sector.
        </p>
      </div>
      {provider.isMock && <MockDataBanner />}
      <RankingTable rows={rows} />
    </div>
  );
}
