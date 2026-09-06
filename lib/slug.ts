import type { Sector } from "./data/types";

export const SECTOR_SLUGS: Record<Sector, string> = {
  Tecnología: "tecnologia",
  Salud: "salud",
  "Consumo defensivo": "consumo-defensivo",
  "Consumo cíclico": "consumo-ciclico",
  Industria: "industria",
  Energía: "energia",
  Financiero: "financiero",
  Utilities: "utilities",
  Materiales: "materiales",
  Comunicación: "comunicacion",
  Inmobiliario: "inmobiliario",
};

const SLUG_TO_SECTOR: Record<string, Sector> = Object.fromEntries(
  Object.entries(SECTOR_SLUGS).map(([sector, slug]) => [slug, sector as Sector])
);

export function sectorToSlug(sector: Sector): string {
  return SECTOR_SLUGS[sector];
}

export function slugToSector(slug: string): Sector | null {
  return SLUG_TO_SECTOR[slug] ?? null;
}
