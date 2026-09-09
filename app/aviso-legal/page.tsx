import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GENERAL_DISCLAIMER, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Titularidad del sitio, condiciones de uso y limitación de responsabilidad de InvIeduca.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <div className="space-y-8">
      <PageHero eyebrow="Legal" title="Aviso legal" variant="ink" />
      <div className="prose prose-slate max-w-3xl space-y-4">
        <p>
          {/* TODO (propietario del sitio): sustituir por los datos reales de titularidad
              (nombre/razón social, NIF, domicilio a efectos de notificaciones) una vez decidido
              qué domicilio profesional usar para esta actividad. */}
          Titular del sitio: {SITE_NAME}, un proyecto personal de Miguel Ángel Sánchez. Contacto:{" "}
          <a href="mailto:contacto@soymiguelangelsanchez.com">contacto@soymiguelangelsanchez.com</a>.
        </p>
        <p>{GENERAL_DISCLAIMER}</p>
        <p>
          {SITE_NAME} es una herramienta educativa e informativa de análisis de empresas cotizadas. El uso del
          sitio es gratuito y no requiere registro. Este sitio no presta servicios de asesoramiento financiero,
          gestión de carteras ni intermediación en la compraventa de valores.
        </p>
        <p>
          Los datos financieros mostrados se recopilan manualmente de fuentes públicas (ver{" "}
          <a href="/metodologia">metodología</a>) y pueden contener errores, omisiones o estar desactualizados.
          El titular no garantiza la exactitud, actualidad ni exhaustividad de la información y no se
          responsabiliza de las decisiones tomadas a partir de su consulta.
        </p>
      </div>
    </div>
  );
}
