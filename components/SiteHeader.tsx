import Link from "next/link";
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
    <header className="border-b border-ink-900/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink-950">
          {SITE_NAME}
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-ink-700">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent-dark">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
