import type { Metadata } from "next";
import { ProfileSelectorForm } from "@/components/ProfileSelectorForm";
import { DisclaimerBanner } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Elige tu estilo de inversión",
  description:
    "Selecciona tu estilo de inversión (dividendos, crecimiento, calidad, valoración...) y algunos criterios adicionales para ver el ranking de empresas que mejor encaja.",
};

export default function PerfilPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-ink-950">¿Qué estás buscando en una inversión?</h1>
        <p className="mt-2 max-w-2xl text-ink-700">
          No existe un único &ldquo;mejor perfil&rdquo;: cada estilo pondera de forma distinta el dividendo, el crecimiento,
          la calidad del negocio, la valoración, el riesgo y el momentum de mercado.
        </p>
      </div>
      <ProfileSelectorForm />
      <DisclaimerBanner variant="short" />
    </div>
  );
}
