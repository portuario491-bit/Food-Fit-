"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PROFILE_LIST } from "@/lib/scoring/profiles";
import type { ProfileKey } from "@/lib/scoring/types";
import type { Region } from "@/lib/data/types";

const REGIONS: Region[] = ["Estados Unidos", "Europa", "España"];

export function ProfileSelectorForm() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileKey>("equilibrado");
  const [region, setRegion] = useState("");
  const [minYield, setMinYield] = useState("");
  const [minMarketCapUSD, setMinMarketCapUSD] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (region) params.set("region", region);
    if (minYield) params.set("minYield", minYield);
    if (minMarketCapUSD) params.set("minMarketCapUSD", minMarketCapUSD);
    const qs = params.toString();
    router.push(`/ranking/${profile}${qs ? `?${qs}` : ""}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="mb-4 text-lg font-semibold text-ink-950">1. Elige tu estilo de inversión</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROFILE_LIST.map((p) => (
            <label
              key={p.key}
              className={`cursor-pointer rounded-lg border p-4 transition-colors ${
                profile === p.key ? "border-accent bg-accent/5" : "border-ink-900/10 bg-white hover:border-ink-900/25"
              }`}
            >
              <input
                type="radio"
                name="profile"
                value={p.key}
                checked={profile === p.key}
                onChange={() => setProfile(p.key)}
                className="sr-only"
              />
              <div className="font-medium text-ink-950">{p.label}</div>
              <div className="mt-1 text-xs text-ink-600">{p.tagline}</div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-ink-950">2. Criterios adicionales (opcional)</h2>
        <div className="flex flex-wrap gap-3">
          <select
            className="rounded-md border border-ink-900/20 px-3 py-2 text-sm"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">Cualquier mercado</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>

          <select
            className="rounded-md border border-ink-900/20 px-3 py-2 text-sm"
            value={minYield}
            onChange={(e) => setMinYield(e.target.value)}
          >
            <option value="">Sin preferencia de dividendo</option>
            <option value="0.02">Yield mínimo 2%</option>
            <option value="0.03">Yield mínimo 3%</option>
            <option value="0.05">Yield mínimo 5%</option>
          </select>

          <select
            className="rounded-md border border-ink-900/20 px-3 py-2 text-sm"
            value={minMarketCapUSD}
            onChange={(e) => setMinMarketCapUSD(e.target.value)}
          >
            <option value="">Cualquier capitalización</option>
            <option value="10000000000">Mínimo 10.000 M$</option>
            <option value="100000000000">Mínimo 100.000 M$</option>
            <option value="500000000000">Mínimo 500.000 M$</option>
          </select>
        </div>
        <p className="mt-3 text-xs text-ink-500">
          El horizonte temporal y la tolerancia al riesgo orientan qué estilo elegir arriba; en una próxima
          versión ajustarán también los pesos del scoring de forma personalizada.
        </p>
      </div>

      <button type="submit" className="rounded-md bg-ink-950 px-6 py-3 text-sm font-medium text-white hover:bg-ink-800">
        Ver ranking
      </button>
    </form>
  );
}
