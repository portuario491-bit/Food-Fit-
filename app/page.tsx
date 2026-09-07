import type { ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, SlidersHorizontal, ListOrdered, BookOpenCheck } from "lucide-react";
import { DisclaimerBanner } from "@/components/Disclaimer";
import { ScoreBadge } from "@/components/ScoreBadge";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { PROFILE_LIST } from "@/lib/scoring/profiles";
import { PROFILE_ICONS, PROFILE_COLORS } from "@/lib/profileIcons";
import { SectorIcon } from "@/lib/sectorIcons";
import { getDataProvider } from "@/lib/data";
import { computeUniverseScores } from "@/lib/scoring/engine";

export default async function HomePage() {
  const provider = getDataProvider();
  const universe = await provider.listUniverse();
  const scored = computeUniverseScores(universe, "equilibrado").sort((a, b) => b.totalScore - a.totalScore);
  const featured = scored[0];
  const featuredCompany = universe.find((c) => c.ticker === featured.ticker)!;
  const top8 = scored.slice(0, 8).map((s) => ({ score: s, company: universe.find((c) => c.ticker === s.ticker)! }));

  const subscoreEntries = Object.values(featured.subscores);

  return (
    <div className="space-y-20">
      <section className="relative -mx-4 overflow-hidden rounded-b-3xl bg-ink-950 px-4 pb-16 pt-12 sm:-mx-6 sm:px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-[26rem] w-[26rem] animate-float rounded-full bg-violet opacity-40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] animate-float-slow rounded-full bg-accent opacity-30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-6rem] left-1/3 h-72 w-72 animate-float rounded-full bg-gold opacity-30 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex animate-fade-up items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
              Universo IBEX35 · Datos reales · Actualización manual
            </span>
            <h1 className="animate-fade-up delay-1 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Descubre qué acciones <span className="text-gradient-bright">encajan de verdad</span> con tu forma de invertir.
            </h1>
            <p className="max-w-xl animate-fade-up delay-2 text-lg text-white/75">
              Una herramienta educativa de análisis, scoring y ranking para inversores de largo plazo. Define tu
              estilo de inversión y descubre qué empresas encajan mejor — con la explicación completa de cada
              puntuación, sin recomendaciones simplistas de compra o venta.
            </p>
            <div className="flex animate-fade-up delay-3 flex-wrap gap-3">
              <Link
                href="/perfil"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-accent-light"
              >
                Elegir mi estilo de inversión
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/metodologia"
                className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/40 hover:bg-white/10"
              >
                Cómo calculamos los scores
              </Link>
            </div>
          </div>

          <Link
            href={`/acciones/${featuredCompany.ticker}`}
            className="group relative block animate-fade-up delay-2 rounded-2xl border border-white/10 bg-white p-6 shadow-glow transition-all hover:-translate-y-1"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-500">
              Mejor encaje ahora mismo · perfil equilibrado
            </p>
            <div className="flex items-center gap-4">
              <ScoreBadge score={featured.totalScore} size="lg" />
              <div>
                <p className="font-display text-lg font-bold text-ink-950">{featuredCompany.name}</p>
                <p className="flex items-center gap-1.5 text-sm text-ink-600">
                  <SectorIcon sector={featuredCompany.sector} className="h-4 w-4" />
                  {featuredCompany.ticker} · {featuredCompany.sector}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2 border-t border-ink-900/10 pt-4">
              {subscoreEntries.map((s) => (
                <div key={s.key} className="flex items-center gap-3 text-xs">
                  <span className="w-20 shrink-0 text-ink-500">{SUBSCORE_LABELS[s.key]}</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-950/[0.06]">
                    <span
                      className="block h-full origin-left animate-bar-grow rounded-full bg-accent"
                      style={{ width: `${s.hasData ? s.score : 0}%` }}
                    />
                  </span>
                  <span className="w-7 shrink-0 text-right font-medium text-ink-800">
                    {s.hasData ? s.score : "–"}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm font-semibold text-accent-dark group-hover:underline">
              Ver ficha completa →
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { value: 35, suffix: "", label: "empresas del IBEX35 analizadas" },
          { value: 6, suffix: "", label: "estilos de inversión distintos" },
          { value: 6, suffix: "", label: "sub-scores por empresa" },
          { value: 100, suffix: "%", label: "datos reales, fuentes citadas" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`animate-fade-up delay-${i + 1} rounded-xl border border-ink-900/10 bg-white p-5 text-center shadow-card transition-transform hover:-translate-y-0.5`}
          >
            <p className="font-display text-3xl font-bold text-accent-dark">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs text-ink-600">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-950">Top del ranking · perfil equilibrado</h2>
            <p className="mt-1 max-w-xl text-ink-600">
              Las 8 empresas del IBEX35 mejor puntuadas hoy con un perfil equilibrado. Cada perfil tiene su propio
              ranking completo.
            </p>
          </div>
          <Link href="/ranking/equilibrado" className="text-sm font-semibold text-accent-dark hover:underline">
            Ver ranking completo →
          </Link>
        </div>

        <div className="divide-y divide-ink-900/5 overflow-hidden rounded-xl border border-ink-900/10 bg-white shadow-card">
          {top8.map(({ score, company }, idx) => (
            <Link
              key={company.ticker}
              href={`/acciones/${company.ticker}`}
              className={`flex animate-fade-up delay-${Math.min(idx + 1, 6)} items-center gap-4 px-4 py-3 transition-colors hover:bg-accent-soft/40 sm:px-6`}
            >
              <span className="w-5 shrink-0 text-sm font-semibold text-ink-400">{idx + 1}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink-950/5">
                <SectorIcon sector={company.sector} className="h-4 w-4 text-ink-600" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-ink-950">{company.name}</p>
                <p className="text-xs text-ink-500">{company.ticker}</p>
              </div>
              <span className="hidden h-1.5 w-32 shrink-0 overflow-hidden rounded-full bg-ink-950/[0.06] sm:block">
                <span
                  className="block h-full origin-left animate-bar-grow rounded-full bg-accent"
                  style={{ width: `${score.totalScore}%` }}
                />
              </span>
              <ScoreBadge score={score.totalScore} size="sm" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl">
        <h2 className="mb-2 font-display text-2xl font-bold text-ink-950">Seis estilos de inversión, seis rankings</h2>
        <p className="mb-6 max-w-2xl text-ink-600">
          Empezamos con el universo del <strong>IBEX35</strong>, con datos reales recopilados manualmente. Iremos
          ampliando a más mercados según crezca el proyecto.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROFILE_LIST.map((profile) => {
            const Icon = PROFILE_ICONS[profile.key];
            const color = PROFILE_COLORS[profile.key];
            return (
              <Link
                key={profile.key}
                href={`/ranking/${profile.key}`}
                className="group flex items-start gap-4 rounded-xl border p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                style={{ backgroundColor: `${color}12`, borderColor: `${color}35` }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${color}2a` }}
                >
                  <Icon className="h-5 w-5" style={{ color }} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-ink-950" style={{ color }}>
                    {profile.label}
                  </h3>
                  <p className="mt-1 text-sm text-ink-600">{profile.tagline}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink-950 px-6 py-12 sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-float-slow rounded-full bg-violet/30 blur-3xl"
        />
        <h2 className="relative font-display text-2xl font-bold text-white">Cómo funciona, en 3 pasos</h2>
        <div className="relative mt-8 grid gap-8 sm:grid-cols-3">
          <Step
            icon={<SlidersHorizontal className="h-5 w-5" />}
            title="1. Eliges tu estilo"
            text="Dividendos, crecimiento, calidad, valoración o una mezcla equilibrada: tú decides qué pesa más."
          />
          <Step
            icon={<ListOrdered className="h-5 w-5" />}
            title="2. Exploras el ranking"
            text="Vemos las 35 empresas del IBEX35 ordenadas según tu perfil, con filtros por sector, yield y capitalización."
          />
          <Step
            icon={<BookOpenCheck className="h-5 w-5" />}
            title="3. Entiendes el porqué"
            text="Cada score llega con sus fortalezas y debilidades explicadas — nunca una señal de compra o venta."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-2xl border border-ink-900/10 bg-white p-8 shadow-card">
        <h2 className="font-display text-2xl font-bold text-ink-950">¿Qué es y qué NO es esta herramienta?</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-display font-bold text-accent-dark">
              <CheckCircle2 className="h-5 w-5" /> Sí es
            </h3>
            <ul className="space-y-2.5 text-sm text-ink-700">
              <li>Un sistema de análisis y puntuación explicable, basado en fundamentales.</li>
              <li>Una forma de comparar empresas según el estilo de inversión que tú definas.</li>
              <li>Contenido educativo para apoyar tu propio proceso de análisis.</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-display font-bold text-red-700">
              <XCircle className="h-5 w-5" /> No es
            </h3>
            <ul className="space-y-2.5 text-sm text-ink-700">
              <li>Una recomendación de compra o venta de ningún valor.</li>
              <li>Asesoramiento financiero personalizado.</li>
              <li>Una promesa de rentabilidad futura.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl">
        <DisclaimerBanner variant="full" />
      </section>
    </div>
  );
}

const SUBSCORE_LABELS: Record<string, string> = {
  dividend: "Dividendo",
  growth: "Crecimiento",
  quality: "Calidad",
  valuation: "Valoración",
  risk: "Riesgo",
  momentum: "Momentum",
};

function Step({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-accent-light">
        {icon}
      </span>
      <h3 className="mt-4 font-display font-bold text-white">{title}</h3>
      <p className="mt-1.5 text-sm text-white/70">{text}</p>
    </div>
  );
}
