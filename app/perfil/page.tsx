import type { Metadata } from "next";
import { ProfileSelectorForm } from "@/components/ProfileSelectorForm";
import { DisclaimerBanner } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Elige tu estilo de inversión",
  description:
    "Selecciona tu estilo de inversión (dividendos, crecimiento, calidad, valoración...) y algunos criterios adicionales para ver el ranking de empresas que mejor encaja.",
};

export default function PerfilPage() {
  return (
    <div className="space-y-8">
      <PageHero
        eyebrow="Paso 1 de 2"
        title="¿Qué estás buscando en una inversión?"
        description="No existe un único “mejor perfil”: cada estilo pondera de forma distinta el dividendo, el crecimiento, la calidad del negocio, la valoración, el riesgo y el momentum de mercado."
        variant="violet"
      />
      <ProfileSelectorForm />
      <DisclaimerBanner variant="short" />
    </div>
  );
}
