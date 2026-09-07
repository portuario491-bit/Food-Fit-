"use client";

import { useWatchlist } from "@/lib/watchlist";

export function WatchlistButton({ ticker, dark = false }: { ticker: string; dark?: boolean }) {
  const { has, toggle, ready } = useWatchlist();
  const active = ready && has(ticker);

  const inactiveClasses = dark
    ? "border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/50 hover:bg-white/10"
    : "border-ink-900/20 text-ink-800 hover:border-accent hover:text-accent-dark";

  return (
    <button
      type="button"
      onClick={() => toggle(ticker)}
      className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
        active ? "border-accent bg-accent text-white hover:bg-accent-dark" : inactiveClasses
      }`}
    >
      {active ? "En watchlist ✓" : "Añadir a watchlist"}
    </button>
  );
}
