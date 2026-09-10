import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Sora({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — Análisis y scoring de acciones`, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "oB-rPmKfvYnpVhqCI2jgDLa9KlC6ltPb5B64iVVQvzg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Análisis y scoring de acciones`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Análisis y scoring de acciones`,
    description: SITE_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "es",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any (navegador web)",
      description: SITE_DESCRIPTION,
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      url: SITE_URL,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink-900">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
