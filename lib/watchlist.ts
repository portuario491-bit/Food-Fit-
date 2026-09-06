"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "invieduca:watchlist";

function readStorage(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeStorage(tickers: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tickers));
  } catch {
    // localStorage no disponible (modo privado, etc.): la watchlist no persiste en esta sesión.
  }
}

/**
 * Watchlist persistida en localStorage (por navegador, no compartida entre
 * dispositivos). Es una solución MVP: cuando se active la autenticación de
 * Supabase, se migrará a la tabla `watchlist_items` por usuario.
 */
export function useWatchlist() {
  const [tickers, setTickers] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTickers(readStorage());
    setReady(true);
  }, []);

  const add = useCallback((ticker: string) => {
    setTickers((prev) => {
      if (prev.includes(ticker)) return prev;
      const next = [...prev, ticker];
      writeStorage(next);
      return next;
    });
  }, []);

  const remove = useCallback((ticker: string) => {
    setTickers((prev) => {
      const next = prev.filter((t) => t !== ticker);
      writeStorage(next);
      return next;
    });
  }, []);

  const toggle = useCallback((ticker: string) => {
    setTickers((prev) => {
      const next = prev.includes(ticker) ? prev.filter((t) => t !== ticker) : [...prev, ticker];
      writeStorage(next);
      return next;
    });
  }, []);

  return { tickers, ready, add, remove, toggle, has: (t: string) => tickers.includes(t) };
}
