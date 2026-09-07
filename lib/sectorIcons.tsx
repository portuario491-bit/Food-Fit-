import {
  Cpu,
  HeartPulse,
  ShoppingBasket,
  ShoppingBag,
  Factory,
  Flame,
  Landmark,
  Plug,
  Layers,
  Radio,
  Building2,
  type LucideIcon,
} from "lucide-react";
import type { Sector } from "./data/types";

export const SECTOR_ICONS: Record<Sector, LucideIcon> = {
  Tecnología: Cpu,
  Salud: HeartPulse,
  "Consumo defensivo": ShoppingBasket,
  "Consumo cíclico": ShoppingBag,
  Industria: Factory,
  Energía: Flame,
  Financiero: Landmark,
  Utilities: Plug,
  Materiales: Layers,
  Comunicación: Radio,
  Inmobiliario: Building2,
};

export const SECTOR_COLORS: Record<Sector, string> = {
  Tecnología: "#5b4de0",
  Salud: "#e0546b",
  "Consumo defensivo": "#0f7a5c",
  "Consumo cíclico": "#c8933f",
  Industria: "#44608c",
  Energía: "#dd6b20",
  Financiero: "#1e2f4d",
  Utilities: "#2f8f77",
  Materiales: "#7c6ff0",
  Comunicación: "#0891b2",
  Inmobiliario: "#9c711f",
};

export function SectorIcon({ sector, className }: { sector: Sector; className?: string }) {
  const Icon = SECTOR_ICONS[sector];
  const color = SECTOR_COLORS[sector];
  return <Icon className={className} style={{ color }} strokeWidth={2} aria-hidden />;
}
