import Link from "next/link";
import { GENERAL_DISCLAIMER, SITE_NAME } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-ink-900/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-ink-600">
        <p className="mb-4 max-w-3xl">{GENERAL_DISCLAIMER}</p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {SITE_NAME}
          </span>
          <Link href="/metodologia" className="underline hover:text-accent-dark">
            Metodología y fuentes de datos
          </Link>
        </div>
      </div>
    </footer>
  );
}
