"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { PricePoint } from "@/lib/data/types";

export function PriceChart({ prices, currency }: { prices: PricePoint[]; currency: string }) {
  const data = prices.map((p) => ({ date: p.date.slice(0, 7), close: p.close }));

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
          <XAxis dataKey="date" tick={{ fontSize: 11 }} interval={5} />
          <YAxis
            width={64}
            tick={{ fontSize: 11 }}
            domain={["auto", "auto"]}
            tickFormatter={(v: number) => v.toLocaleString("es-ES")}
          />
          <Tooltip
            formatter={(value: number) => [`${value.toLocaleString("es-ES")} ${currency}`, "Precio"]}
            labelFormatter={(label) => `Mes: ${label}`}
          />
          <Line type="monotone" dataKey="close" stroke="#1f6f5c" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
