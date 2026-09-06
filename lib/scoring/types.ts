import type { CompanyFundamentals } from "../data/types";

export type SubscoreKey = "dividend" | "growth" | "quality" | "valuation" | "risk" | "momentum";

export type ProfileKey =
  | "dividendos"
  | "crecimiento"
  | "dividend-growth"
  | "calidad"
  | "calidad-precio"
  | "equilibrado";

export interface MetricDefinition {
  key: string;
  label: string;
  extract: (c: CompanyFundamentals) => number | null;
  /** true = un valor crudo más alto es mejor. Ignorado si se define sweetSpot. */
  higherIsBetter: boolean;
  /** Rango ideal (p.ej. payout ratio 30-70%): penaliza alejarse por arriba o por abajo. */
  sweetSpot?: { low: number; high: number };
  /** Si es true, el percentil se calcula dentro del sector de la empresa, no del universo completo. */
  sectorRelative?: boolean;
  /** Peso relativo dentro de su sub-score (los pesos de un grupo suman 1). */
  weight: number;
  format: (value: number) => string;
  /** Frase descriptiva en español para el motor de explicación. */
  describe: (formatted: string, isPositive: boolean) => string;
}

export interface MetricContribution {
  key: string;
  label: string;
  rawValue: number | null;
  formattedValue: string;
  /** 0-100, null si la empresa no tiene dato para esta métrica. */
  normalizedScore: number | null;
  /** Peso ya renormalizado entre las métricas con dato disponible. */
  weight: number;
  describe: (isPositive: boolean) => string;
}

export interface SubscoreResult {
  key: SubscoreKey;
  score: number; // 0-100
  metrics: MetricContribution[];
  hasData: boolean;
}

export interface ExplanationItem {
  label: string;
  subscore: SubscoreKey;
}

export interface CompanyScoreResult {
  ticker: string;
  /** Clave del perfil de inversión, o "radar-mensual" para el Radar. */
  profile: ProfileKey | "radar-mensual";
  totalScore: number;
  subscores: Record<SubscoreKey, SubscoreResult>;
  strengths: ExplanationItem[];
  weaknesses: ExplanationItem[];
}
