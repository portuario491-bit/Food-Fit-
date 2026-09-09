import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tu watchlist",
  description: "Empresas que has guardado para seguir. Se guarda solo en tu navegador, no en un servidor.",
  robots: { index: false, follow: true },
};

export default function WatchlistLayout({ children }: { children: React.ReactNode }) {
  return children;
}
