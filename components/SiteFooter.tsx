import Link from "next/link";
import { GENERAL_DISCLAIMER, SITE_NAME } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-ink-900/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-ink-600">
        <p className="mb-4 max-w-3xl">{GENERAL_DISCLAIMER}</p>
        <div className="mb-4 flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/metodologia" className="underline hover:text-accent-dark">
            Metodología y fuentes de datos
          </Link>
          <Link href="/aviso-legal" className="underline hover:text-accent-dark">
            Aviso legal
          </Link>
          <Link href="/privacidad" className="underline hover:text-accent-dark">
            Privacidad
          </Link>
          <a
            href="https://utilix.uno/interes-compuesto.html"
            target="_blank"
            rel="noopener"
            className="underline hover:text-accent-dark"
          >
            ClaroCalc · calculadora de interés compuesto
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {SITE_NAME} — un proyecto de{" "}
            <a
              href="https://soymiguelangelsanchez.com"
              target="_blank"
              rel="noopener"
              className="underline hover:text-accent-dark"
            >
              Miguel Ángel Sánchez
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
