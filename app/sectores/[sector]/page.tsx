import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDataProvider } from "@/lib/data";
import { buildRanking } from "@/lib/ranking";
import { RankingTable } from "@/components/RankingTable";
import { DataQualityBanner } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";
import { sectorToSlug, slugToSector, SECTOR_SLUGS } from "@/lib/slug";
import { SITE_URL } from "@/lib/constants";

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

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "InvIeduca", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Acciones", item: `${SITE_URL}/acciones` },
      { "@type": "ListItem", position: 3, name: sector, item: `${SITE_URL}/sectores/${sectorToSlug(sector)}` },
    ],
  };

  return (
    <div className="space-y-6">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageHero
        eyebrow="Sector"
        title={sector}
        description={`Empresas del sector ${sector} en nuestro universo, ordenadas según el perfil equilibrado. Las comparaciones de valoración de cada empresa (PER, EV/EBITDA...) ya tienen en cuenta a sus competidores de este mismo sector.`}
        variant="accent"
      />
      <DataQualityBanner isMock={provider.isMock} />
      <RankingTable rows={rows} />
    </div>
  );
}
