"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import type { SubscoreKey } from "@/lib/scoring/types";

export type RadarChartSubscore = { score: number; hasData: boolean };

const SUBSCORE_LABELS: Record<SubscoreKey, string> = {
  dividend: "Dividendo",
  growth: "Crecimiento",
  quality: "Calidad",
  valuation: "Valoración",
  risk: "Riesgo",
  momentum: "Momentum",
};

const SUBSCORE_ORDER: SubscoreKey[] = ["dividend", "growth", "quality", "valuation", "risk", "momentum"];

function AxisTick({ payload, x, y, textAnchor, hasData }: any) {
  const key = payload.value as string;
  const missing = !hasData[key];
  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      className={missing ? "fill-ink-500 text-[11px] italic" : "fill-ink-800 text-[11px] font-medium"}
    >
      {SUBSCORE_LABELS[key as SubscoreKey]}
      {missing ? " (s/d)" : ""}
    </text>
  );
}

export function RadarScoreChart({ subscores }: { subscores: Record<SubscoreKey, RadarChartSubscore> }) {
  const data = SUBSCORE_ORDER.map((key) => ({ key, value: subscores[key].score }));
  const hasData = Object.fromEntries(SUBSCORE_ORDER.map((key) => [key, subscores[key].hasData]));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="72%">
          <PolarGrid stroke="#dde3ec" />
          <PolarAngleAxis dataKey="key" tick={<AxisTick hasData={hasData} />} />
          <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
          <Radar dataKey="value" stroke="#0f7a5c" fill="#0f7a5c" fillOpacity={0.35} strokeWidth={2} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
