# InvIeduca

Herramienta educativa de análisis, scoring y ranking de acciones para inversores de largo plazo. Ver el contexto completo del producto y las decisiones de arquitectura en `/docs/scoring-methodology.md` y en la página `/metodologia` de la propia app.

**Este contenido es educativo e informativo. Las puntuaciones no constituyen una recomendación de compra o venta ni asesoramiento financiero personalizado.**

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:3000
npm run typecheck
npm run check:scoring   # sanity-check del motor de scoring sobre el universo mock
npm run build
```

Sin variables de entorno configuradas, la app usa `MockProvider`: un universo de ~15 empresas ficticias (marcadas explícitamente como datos de demostración) diseñado para validar la metodología de scoring. Ver `.env.example` para conectar un proveedor de datos financieros real (EODHD, FMP) en el futuro.

## Estructura

- `app/` — rutas Next.js (App Router): landing, selector de perfil, rankings, ficha de empresa, radar mensual, metodología, watchlist.
- `lib/data/` — modelo de datos y capa de abstracción de proveedores financieros (`FinancialDataProvider`).
- `lib/scoring/` — motor de scoring: normalización, sub-scores, pesos por perfil, motor de explicación.
- `docs/scoring-methodology.md` — metodología completa del scoring, en lenguaje no técnico.
- `supabase/migrations/` — esquema de base de datos preparado para cuando se conecte un proyecto Supabase real.

## Nota sobre `food-and-fit.html`

El archivo `food-and-fit.html` en la raíz del repositorio es una aplicación estática anterior y no relacionada con este producto; se mantiene sin modificar.
