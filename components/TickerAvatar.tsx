import { SECTOR_COLORS } from "@/lib/sectorIcons";
import type { Sector } from "@/lib/data/types";

/**
 * Avatar circular con las iniciales del ticker, coloreado por sector.
 * No pretende ser el logo real de la empresa (no hay fuente fiable de logos
 * en el proyecto y no se fabrica ninguna): es una identidad visual limpia y
 * consistente, pensada para que la ficha se vea bien "en cámara" (Fase 3).
 */
export function TickerAvatar({ ticker, sector, size = 56 }: { ticker: string; sector: Sector; size?: number }) {
  const color = SECTOR_COLORS[sector];
  const initials = ticker.replace(/[^A-Z]/gi, "").slice(0, 2).toUpperCase() || ticker.slice(0, 2).toUpperCase();

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-2xl font-display font-bold text-white shadow-card"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
      }}
      aria-hidden
    >
      {initials}
    </div>
  );
}
