import { PiggyBank, TrendingUp, Repeat, ShieldCheck, Scale, Blend, type LucideIcon } from "lucide-react";
import type { ProfileKey } from "./scoring/types";

export const PROFILE_ICONS: Record<ProfileKey, LucideIcon> = {
  dividendos: PiggyBank,
  crecimiento: TrendingUp,
  "dividend-growth": Repeat,
  calidad: ShieldCheck,
  "calidad-precio": Scale,
  equilibrado: Blend,
};

export const PROFILE_COLORS: Record<ProfileKey, string> = {
  dividendos: "#0f7a5c",
  crecimiento: "#5b4de0",
  "dividend-growth": "#0891b2",
  calidad: "#c8933f",
  "calidad-precio": "#dd6b20",
  equilibrado: "#44608c",
};
