"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useWatchlist } from "@/lib/watchlist";
import { RankingTable } from "@/components/RankingTable";
import { MockDataBanner, DisclaimerBanner } from "@/components/Disclaimer";
import type { CompanyWithScore } from "@/lib/ranking";

export default function WatchlistPage() {
  const { tickers, ready, remove } = useWatchlist();
  const [rows, setRows] = useState<CompanyWithScore[]>([]);
  const [isMock, setIsMock] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!ready) return;
    if (tickers.length === 0) {
      setRows([]);
      return;
    }
    setLoading(true);
    fetch(`/api/watchlist?tickers=${encodeURIComponent(tickers.join(","))}`)
      .then((r) => r.json())
      .then((data) => {
        setRows(data.rows ?? []);
        setIsMock(data.isMock ?? true);
      })
      .finally(() => setLoading(false));
  }, [ready, tickers]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-ink-950">Mi watchlist</h1>
        <p className="mt-2 max-w-2xl text-ink-700">
          Guardada en este navegador (no en una cuenta todavía). Puntuaciones mostradas con el perfil equilibrado;
          entra en cada empresa para ver su encaje con otros perfiles.
        </p>
      </div>

      {isMock && rows.length > 0 && <MockDataBanner />}

      {!ready || loading ? (
        <p className="text-sm text-ink-500">Cargando…</p>
      ) : tickers.length === 0 ? (
        <p className="rounded-lg border border-dashed border-ink-900/20 p-6 text-center text-sm text-ink-600">
          Tu watchlist está vacía. Añade empresas desde su{" "}
          <Link href="/acciones" className="underline">
            ficha
          </Link>{" "}
          o desde cualquier ranking.
        </p>
      ) : (
        <>
          <RankingTable rows={rows} />
          <div className="flex flex-wrap gap-2">
            {tickers.map((t) => (
              <button
                key={t}
                onClick={() => remove(t)}
                className="rounded-md border border-ink-900/20 px-2.5 py-1 text-xs text-ink-600 hover:border-red-400 hover:text-red-700"
              >
                Quitar {t} ✕
              </button>
            ))}
          </div>
        </>
      )}

      <DisclaimerBanner variant="short" />
    </div>
  );
}
