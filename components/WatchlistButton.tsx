"use client";

import { useWatchlist } from "@/lib/watchlist";

export function WatchlistButton({ ticker }: { ticker: string }) {
  const { has, toggle, ready } = useWatchlist();
  const active = ready && has(ticker);

  return (
    <button
      type="button"
      onClick={() => toggle(ticker)}
      className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-accent bg-accent text-white hover:bg-accent-dark"
          : "border-ink-900/20 text-ink-800 hover:border-accent hover:text-accent-dark"
      }`}
    >
      {active ? "En watchlist ✓" : "Añadir a watchlist"}
    </button>
  );
}
