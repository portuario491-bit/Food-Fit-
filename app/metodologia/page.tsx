import type { Metadata } from "next";
import { DisclaimerBanner } from "@/components/Disclaimer";
import { PROFILE_LIST } from "@/lib/scoring/profiles";
import { PROFILE_WEIGHTS } from "@/lib/scoring/weights";
import type { SubscoreKey } from "@/lib/scoring/types";

export const metadata: Metadata = {
  title: "Metodología",
  description:
    "Qué analizamos, cómo calculamos las puntuaciones, fuentes de datos, frecuencia de actualización y limitaciones del sistema de scoring.",
  alternates: { canonical: "/metodologia" },
};

const SUBSCORE_LABELS: Record<SubscoreKey, string> = {
  dividend: "Dividendo",
  growth: "Crecimiento",
  quality: "Calidad",
  valuation: "Valoración",
  risk: "Riesgo",
  momentum: "Momentum",
};

const SUBSCORE_ORDER = Object.keys(SUBSCORE_LABELS) as SubscoreKey[];

export default function MetodologiaPage() {
  return (
    <div className="prose prose-slate max-w-3xl">
      <h1 className="!mb-2 text-3xl font-semibold text-ink-950">Metodología</h1>
      <p className="text-ink-600">
        Explicación completa, en lenguaje llano, de qué analizamos y cómo calculamos cada puntuación. El detalle
        matemático completo está en el repositorio, en <code>/docs/scoring-methodology.md</code>.
      </p>

      <DisclaimerBanner variant="full" />

      <h2>Qué analizamos</h2>
      <p>
        Para cada empresa calculamos seis sub-puntuaciones de 0 a 100 — Dividendo, Crecimiento, Calidad,
        Valoración, Riesgo y Momentum — a partir de datos fundamentales (ingresos, beneficios, caja, deuda,
        dividendos) y de precio. Cada sub-puntuación combina varias métricas relacionadas; por ejemplo, Calidad
        combina rentabilidad sobre el capital (ROIC, ROE), márgenes, estabilidad de beneficios y solidez del
        balance.
      </p>

      <h2>Cómo calculamos la puntuación total</h2>
      <p>
        La puntuación total es una media ponderada de las seis sub-puntuaciones. Los pesos dependen del estilo de
        inversión elegido: un perfil de Dividendos pondera mucho más el sub-score de Dividendo que uno de
        Crecimiento, y viceversa. El Momentum nunca supera un peso del 15% en ningún perfil, precisamente para
        que el sistema no acabe premiando simplemente &ldquo;lo que más ha subido&rdquo;.
      </p>
      <div className="not-prose overflow-x-auto rounded-lg border border-ink-900/10">
        <table className="w-full min-w-[600px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-ink-900/10 bg-ink-950/[0.03] text-left">
              <th className="px-3 py-2">Perfil</th>
              {SUBSCORE_ORDER.map((k) => (
                <th key={k} className="px-3 py-2">
                  {SUBSCORE_LABELS[k]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PROFILE_LIST.map((p) => (
              <tr key={p.key} className="border-b border-ink-900/5 last:border-0">
                <td className="px-3 py-2 font-medium">{p.label}</td>
                {SUBSCORE_ORDER.map((k) => (
                  <td key={k} className="px-3 py-2">
                    {Math.round(PROFILE_WEIGHTS[p.key][k] * 100)}%
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Cómo normalizamos cada métrica</h2>
      <p>
        No comparamos valores en bruto: cada métrica se convierte en un percentil (0-100) dentro del universo
        analizado, o dentro de su propio sector cuando la comparación directa no tendría sentido (por ejemplo, el
        PER de un banco frente al de una tecnológica). Antes de rankear, recortamos los valores más extremos
        (winsorización) para que un dato atípico no distorsione la escala. Algunas métricas, como el ratio de
        payout del dividendo, tienen un &ldquo;rango ideal&rdquo;: penalizamos tanto un payout demasiado bajo como
        uno insosteniblemente alto, en lugar de premiar sin más &ldquo;cuanto más, mejor&rdquo;.
      </p>

      <h2>Cómo generamos las fortalezas y debilidades</h2>
      <p>
        Cada métrica que compone un sub-score guarda cuánto ha contribuido, en positivo o en negativo, a la
        puntuación total de esa empresa en el perfil elegido. Mostramos las contribuciones más relevantes como
        fortalezas (por encima de la mediana) y debilidades (por debajo), en lenguaje natural y con el dato
        concreto entre paréntesis.
      </p>

      <h2>Fuentes de datos y frecuencia de actualización</h2>
      <p>
        Mientras no haya un proveedor de datos financieros real configurado, la aplicación usa un universo de
        empresas <strong>ficticias marcadas explícitamente como datos de demostración</strong>, diseñadas para
        representar situaciones reales (una aristócrata del dividendo, una &ldquo;trampa de yield&rdquo;, una tecnológica
        cara y de alto crecimiento...) y así poder validar que la metodología se comporta como se espera. En
        producción, los datos fundamentales y de dividendos se actualizarán semanalmente y los precios a diario,
        siempre a través de un proveedor externo (nunca inventados), cacheados en base de datos para minimizar
        llamadas a la API.
      </p>

      <h2>Limitaciones conocidas</h2>
      <ul>
        <li>Con un universo pequeño, la normalización por percentil es menos robusta que con cientos de empresas.</li>
        <li>Las normas contables difieren entre países; algunas métricas (deuda neta/EBITDA en bancos, por ejemplo) no son directamente comparables entre sectores.</li>
        <li>Las estimaciones futuras (forward PER, crecimiento estimado) dependen de la cobertura de analistas del proveedor de datos.</li>
        <li>El cálculo de un score en una fecha determinada solo debe usar información disponible hasta esa fecha (para evitar look-ahead bias); a medida que acumulemos histórico documentaremos también qué empresas entran y salen del universo, para evitar survivorship bias.</li>
      </ul>

      <h2>Lo que este sistema no es</h2>
      <p>
        No es una recomendación de compra o venta de ningún valor, ni asesoramiento financiero personalizado. Las
        puntuaciones no garantizan ninguna rentabilidad futura. Es una herramienta de análisis y educación
        financiera: la decisión de inversión, y su responsabilidad, es siempre tuya.
      </p>
    </div>
  );
}
