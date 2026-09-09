import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { PROFILE_LIST } from "@/lib/scoring/profiles";
import { SECTOR_SLUGS } from "@/lib/slug";
import { getDataProvider } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const provider = getDataProvider();
  const universe = await provider.listUniverse();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/perfil`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/acciones`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/radar`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/metodologia`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/aviso-legal`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacidad`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const rankingRoutes: MetadataRoute.Sitemap = PROFILE_LIST.map((profile) => ({
    url: `${SITE_URL}/ranking/${profile.key}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const sectorRoutes: MetadataRoute.Sitemap = Object.values(SECTOR_SLUGS).map((slug) => ({
    url: `${SITE_URL}/sectores/${slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const companyRoutes: MetadataRoute.Sitemap = universe.map((company) => ({
    url: `${SITE_URL}/acciones/${company.ticker}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...rankingRoutes, ...sectorRoutes, ...companyRoutes];
}
