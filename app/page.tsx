import Link from "next/link";
import { DisclaimerBanner } from "@/components/Disclaimer";
import { PROFILE_LIST } from "@/lib/scoring/profiles";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
            Analiza y prioriza acciones según tus propios objetivos de inversión.
          </h1>
          <p className="max-w-xl text-lg text-ink-700">
            Una herramienta educativa de análisis, scoring y ranking para inversores de largo plazo. Define tu
            estilo de inversión y descubre qué empresas encajan mejor con él — con la explicación completa de
            cada puntuación, sin recomendaciones simplistas de compra o venta.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/perfil"
              className="rounded-md bg-ink-950 px-5 py-3 text-sm font-medium text-white hover:bg-ink-800"
            >
              Elegir mi estilo de inversión
            </Link>
            <Link
              href="/metodologia"
              className="rounded-md border border-ink-900/20 px-5 py-3 text-sm font-medium text-ink-800 hover:border-ink-900/40"
            >
              Cómo calculamos los scores
            </Link>
          </div>
        </div>
        <DisclaimerBanner variant="full" />
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-ink-950">Seis estilos de inversión, seis rankings</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROFILE_LIST.map((profile) => (
            <Link
              key={profile.key}
              href={`/ranking/${profile.key}`}
              className="block rounded-lg border border-ink-900/10 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-ink-950">{profile.label}</h3>
              <p className="mt-1 text-sm text-ink-600">{profile.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-ink-900/10 bg-white p-8">
        <h2 className="text-2xl font-semibold text-ink-950">¿Qué es y qué NO es esta herramienta?</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium text-accent-dark">Sí es</h3>
            <ul className="space-y-1.5 text-sm text-ink-700">
              <li>Un sistema de análisis y puntuación explicable, basado en fundamentales.</li>
              <li>Una forma de comparar empresas según el estilo de inversión que tú definas.</li>
              <li>Contenido educativo para apoyar tu propio proceso de análisis.</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-red-700">No es</h3>
            <ul className="space-y-1.5 text-sm text-ink-700">
              <li>Una recomendación de compra o venta de ningún valor.</li>
              <li>Asesoramiento financiero personalizado.</li>
              <li>Una promesa de rentabilidad futura.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
