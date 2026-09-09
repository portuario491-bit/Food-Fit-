import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Qué datos trata InvIeduca, dónde se guardan y cómo funciona la watchlist.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <div className="space-y-8">
      <PageHero eyebrow="Legal" title="Privacidad" variant="ink" />
      <div className="prose prose-slate max-w-3xl space-y-4">
        <p>
          {SITE_NAME} está diseñado para funcionar sin cuentas de usuario ni registro. No usamos cookies de
          seguimiento ni herramientas de analítica o publicidad en este sitio.
        </p>
        <h2>Tu watchlist</h2>
        <p>
          Las empresas que guardas en tu watchlist se almacenan únicamente en el almacenamiento local de tu
          propio navegador (<code>localStorage</code>), en tu dispositivo. Nunca se envían a nuestros servidores
          ni a ningún tercero; si borras los datos de navegación de tu navegador, o usas otro dispositivo o
          navegador, tu watchlist no estará disponible. La página <code>/watchlist</code> no se indexa en
          buscadores por tratarse de una vista personal, no de contenido para el público general.
        </p>
        <h2>Qué se envía a nuestro servidor</h2>
        <p>
          Al abrir tu watchlist, tu navegador solicita al servidor los datos de las empresas guardadas (mediante
          los tickers, p. ej. &ldquo;SAN&rdquo; o &ldquo;BBVA&rdquo;) para poder mostrarlos; el servidor no guarda
          esa petición ni la asocia a ti de ninguna forma. El resto de la navegación por el sitio
          (fichas de empresas, rankings, radar) funciona igual para cualquier visitante, sin datos personales
          de por medio.
        </p>
        <h2>Alojamiento</h2>
        <p>Este sitio está alojado en Vercel. Consulta la política de privacidad de Vercel para el tratamiento técnico de las peticiones (direcciones IP, logs de infraestructura) inherente a cualquier servicio de hosting.</p>
        <h2>Contacto</h2>
        <p>
          Para cualquier consulta sobre privacidad, escribe a{" "}
          <a href="mailto:contacto@soymiguelangelsanchez.com">contacto@soymiguelangelsanchez.com</a>.
        </p>
      </div>
    </div>
  );
}
