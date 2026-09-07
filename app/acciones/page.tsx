import type { Metadata } from "next";
import { getDataProvider } from "@/lib/data";
import { buildRanking } from "@/lib/ranking";
import { RankingTable } from "@/components/RankingTable";
import { FilterBar } from "@/components/FilterBar";
import { DataQualityBanner } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";
import type { Region, Sector } from "@/lib/data/types";

export const metadata: Metadata = {
  title: "Acciones — universo analizado",
  description:
    "Listado completo de empresas analizadas, con su puntuación en el perfil equilibrado y filtros por mercado, sector, dividendo y score mínimo.",
  alternates: { canonical: "/acciones" },
};

export default async function AccionesPage({
  searchParams,
}: {
  searchParams: Promise<{ region?: string; sector?: string; minYield?: string; minScore?: string }>;
}) {
  const query = await searchParams;
  const provider = getDataProvider();
  const universe = await provider.listUniverse();

  const rows = buildRanking(universe, "equilibrado", {
    region: query.region as Region | undefined,
    sector: query.sector as Sector | undefined,
    minYield: query.minYield ? Number(query.minYield) : undefined,
    minScore: query.minScore ? Number(query.minScore) : undefined,
  });

  return (
    <div className="space-y-6">
      <PageHero
        title="Universo de empresas analizadas"
        description={
          <>
            {universe.length} empresas, ordenadas aquí según el perfil <strong>equilibrado</strong>. Para un ranking
            orientado a un objetivo concreto, elige un{" "}
            <a href="/perfil" className="underline">
              estilo de inversión
            </a>
            .
          </>
        }
        variant="accent"
      />
      <DataQualityBanner isMock={provider.isMock} />
      <FilterBar />
      <RankingTable rows={rows} />
    </div>
  );
}
