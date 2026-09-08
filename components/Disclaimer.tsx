import { GENERAL_DISCLAIMER, SHORT_DISCLAIMER } from "@/lib/constants";

export function DisclaimerBanner({ variant = "full" }: { variant?: "full" | "short" }) {
  return (
    <div className="rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-ink-800">
      <p>
        <span className="font-semibold">Aviso: </span>
        {variant === "full" ? GENERAL_DISCLAIMER : SHORT_DISCLAIMER}
      </p>
    </div>
  );
}

export function MockDataBanner() {
  return (
    <div className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-ink-800">
      <p>
        <span className="font-semibold">Datos de demostración: </span>
        el universo de empresas y sus cifras son ficticios (marcados como <code>mock</code>) y se usan solo para
        validar la metodología de scoring mientras no hay un proveedor de datos financieros real configurado.
        Nunca deben interpretarse como datos de mercado reales.
      </p>
    </div>
  );
}

export function RealCuratedDataBanner() {
  return (
    <div className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-ink-800">
      <p>
        <span className="font-semibold">Datos reales, actualizados manualmente: </span>
        el universo actual son las 35 empresas del IBEX35 más una selección de grandes empresas del S&amp;P 500, con
        cifras reales recopiladas de fuentes públicas
        (Investing.com, MarketScreener, informes de las propias empresas...) a fecha de principios de septiembre
        de 2026. No se actualizan en tiempo real ni de forma automática todavía. Cuando un dato no se ha podido
        verificar con confianza, se muestra como <span className="italic">sin dato</span> en vez de estimarse.
        Consulta <a href="/metodologia" className="underline">metodología</a> para más detalle y fuentes.
      </p>
    </div>
  );
}

export function DataQualityBanner({ isMock }: { isMock: boolean }) {
  return isMock ? <MockDataBanner /> : <RealCuratedDataBanner />;
}
