import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { DisclaimerBanner } from "@/components/Disclaimer";
import { ScoreBadge } from "@/components/ScoreBadge";
import { PROFILE_LIST } from "@/lib/scoring/profiles";
import { PROFILE_ICONS, PROFILE_COLORS } from "@/lib/profileIcons";
import { getDataProvider } from "@/lib/data";
import { computeUniverseScores } from "@/lib/scoring/engine";

export default async function HomePage() {
  const provider = getDataProvider();
  const universe = await provider.listUniverse();
  const scored = computeUniverseScores(universe, "equilibrado").sort((a, b) => b.totalScore - a.totalScore);
  const featured = scored[0];
  const featuredCompany = universe.find((c) => c.ticker === featured.ticker)!;

  return (
    <div className="space-y-20">
      <section className="-mx-4 rounded-b-3xl bg-hero-gradient px-4 pb-14 pt-10 sm:-mx-6 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-dark">
              Universo IBEX35 · Datos reales
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
              Analiza y prioriza acciones según tus propios objetivos de inversión.
            </h1>
            <p className="max-w-xl text-lg text-ink-700">
              Una herramienta educativa de análisis, scoring y ranking para inversores de largo plazo. Define tu
              estilo de inversión y descubre qué empresas encajan mejor — con la explicación completa de cada
              puntuación, sin recomendaciones simplistas de compra o venta.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/perfil"
                className="inline-flex items-center gap-2 rounded-lg bg-ink-950 px-5 py-3 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5 hover:bg-ink-800"
              >
                Elegir mi estilo de inversión
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/metodologia"
                className="inline-flex items-center rounded-lg border border-ink-900/15 bg-white px-5 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-900/30"
              >
                Cómo calculamos los scores
              </Link>
            </div>
          </div>

          <Link
            href={`/acciones/${featuredCompany.ticker}`}
            className="group block rounded-2xl border border-ink-900/10 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-500">
              Ejemplo real · perfil equilibrado
            </p>
            <div className="flex items-center gap-4">
              <ScoreBadge score={featured.totalScore} size="lg" />
              <div>
                <p className="font-display text-lg font-bold text-ink-950">{featuredCompany.name}</p>
                <p className="text-sm text-ink-600">
                  {featuredCompany.ticker} · {featuredCompany.sector}
                </p>
              </div>
            </div>
            {featured.strengths.length > 0 && (
              <ul className="mt-4 space-y-1.5 text-sm text-ink-700">
                {featured.strengths.slice(0, 2).map((s, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">+</span>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-sm font-semibold text-accent-dark group-hover:underline">
              Ver ficha completa →
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { value: "35", label: "empresas del IBEX35 analizadas" },
          { value: "6", label: "estilos de inversión distintos" },
          { value: "6", label: "sub-scores por empresa" },
          { value: "100%", label: "datos reales, fuentes citadas" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-ink-900/10 bg-white p-5 text-center shadow-card">
            <p className="font-display text-3xl font-bold text-accent-dark">{stat.value}</p>
            <p className="mt-1 text-xs text-ink-600">{stat.label}</p>
          </div>
        ))}
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
                className="group flex items-start gap-4 rounded-xl border border-ink-900/10 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${color}1a` }}
                >
                  <Icon className="h-5 w-5" style={{ color }} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-ink-950 group-hover:text-accent-dark">{profile.label}</h3>
                  <p className="mt-1 text-sm text-ink-600">{profile.tagline}</p>
                </div>
              </Link>
            );
          })}
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
