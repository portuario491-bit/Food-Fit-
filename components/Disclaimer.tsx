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
