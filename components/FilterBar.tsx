"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { Region, Sector } from "@/lib/data/types";

const REGIONS: Region[] = ["Estados Unidos", "Europa", "España"];
const SECTORS: Sector[] = [
  "Tecnología",
  "Salud",
  "Consumo defensivo",
  "Consumo cíclico",
  "Industria",
  "Energía",
  "Financiero",
  "Utilities",
  "Materiales",
  "Comunicación",
  "Inmobiliario",
];

export function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-3 rounded-lg border border-ink-900/10 bg-white p-4">
      <select
        className="rounded-md border border-ink-900/20 px-3 py-1.5 text-sm"
        defaultValue={searchParams.get("region") ?? ""}
        onChange={(e) => updateParam("region", e.target.value)}
      >
        <option value="">Todos los mercados</option>
        {REGIONS.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <select
        className="rounded-md border border-ink-900/20 px-3 py-1.5 text-sm"
        defaultValue={searchParams.get("sector") ?? ""}
        onChange={(e) => updateParam("sector", e.target.value)}
      >
        <option value="">Todos los sectores</option>
        {SECTORS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        className="rounded-md border border-ink-900/20 px-3 py-1.5 text-sm"
        defaultValue={searchParams.get("minYield") ?? ""}
        onChange={(e) => updateParam("minYield", e.target.value)}
      >
        <option value="">Cualquier yield</option>
        <option value="0.02">Yield ≥ 2%</option>
        <option value="0.03">Yield ≥ 3%</option>
        <option value="0.05">Yield ≥ 5%</option>
      </select>

      <select
        className="rounded-md border border-ink-900/20 px-3 py-1.5 text-sm"
        defaultValue={searchParams.get("minScore") ?? ""}
        onChange={(e) => updateParam("minScore", e.target.value)}
      >
        <option value="">Cualquier score</option>
        <option value="50">Score ≥ 50</option>
        <option value="65">Score ≥ 65</option>
        <option value="75">Score ≥ 75</option>
      </select>
    </div>
  );
}
