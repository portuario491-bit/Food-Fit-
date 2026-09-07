import Link from "next/link";
import { Radar } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/perfil", label: "Perfiles" },
  { href: "/acciones", label: "Acciones" },
  { href: "/radar", label: "Radar mensual" },
  { href: "/watchlist", label: "Watchlist" },
  { href: "/metodologia", label: "Metodología" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-ink-900/10 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink-950">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-950 text-white">
            <Radar className="h-4 w-4" strokeWidth={2.2} />
          </span>
          {SITE_NAME}
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-ink-700">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-accent-dark">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
