# Fuentes de datos — universo IBEX35

Este documento registra, para auditoría y mantenimiento futuro, cómo se recopilaron los datos reales de las 35 empresas del IBEX35 usadas en `lib/data/providers/ibex35Companies.ts`, y las dudas/discrepancias encontradas. Recopilación manual realizada a lo largo de agosto-septiembre de 2026, mediante búsqueda web dirigida (sin proveedor de datos de pago).

**Regla seguida:** cuando una cifra no se pudo verificar con confianza en una fuente pública, o distintas fuentes se contradecían de forma relevante (no una simple variación menor entre proveedores), el campo se dejó en `null` (mostrado como "sin dato" en la app) en vez de estimarse o promediarse.

Composición del índice verificada como estable desde julio de 2024 (entrada de Puig) hasta la revisión del Comité Asesor Técnico del 10 de septiembre de 2026 (posterior a esta recopilación — conviene revalidar la composición si esa revisión introdujo cambios).

## ACS
- Precio y ratios con fuerte dispersión entre fuentes (año muy alcista, +150% a 1 año). Deuda neta/EBITDA contradictoria entre fuentes (una decía "sin deuda recurso", otra 8,00x) — se dejó en null.
- Fuentes: investing.com/equities/acs-cons-y-serv(+ratios), bolsamania.com/capitalbolsa/accion/ACS, idealista.com análisis mayo 2026, rankia.com blog, marketscreener.com informe resultados 2025, fiscal.ai net-debt-ebitda, merca2.es dividendo 2026, valueinvesting.io ROE.

## Acciona (ANA)
- No confundir con Acciona Energía (ANE), entidad cotizada distinta — fuentes mezclan ambas con frecuencia.
- Fuentes: investing.com ratios, finance.yahoo.com key-statistics, stockopedia.com, digrin.com, finanzas.yahoo.com dividendo, investing.com transcripts H1 2026.

## Acciona Energía (ANE)
- Recorte de dividendo muy relevante (0,44€→~0,03€/acción) dentro de un plan de desapalancamiento.
- Fuentes: investing.com corp-acciona-energias-renovables, marketscreener.com, investing.com comunicado dividendo, acciona-energia.com dividends, investing.com desinversiones-moderación-dividendo.

## Acerinox (ACX)
- PER trailing muy distorsionado por el ciclo del acero (beneficios deprimidos/negativos en trimestres recientes).
- Fuentes: eulerpool.com dividendo, tradingeconomics.com dy, finance.yahoo.com key-statistics, companiesmarketcap.com pe-ratio, marketscreener.com, macrotrends.net ROE.

## Aena (AENA)
- MUY IMPORTANTE: split de acciones 10x1 en junio de 2025; precios previos no comparables.
- Fuentes: finance.yahoo.com AENA.MC, aena.es press release resultados 2025, estrategiasdeinversion.com previsión 2026, ocu.org split, eleconomista.es dividendo récord.

## Amadeus IT Group (AMS)
- ROE y rentabilidad a 1 año con fuentes contradictorias no reconciliables (posible mezcla de métricas distintas).
- Fuentes: investing.com ratios, gurufocus.com pe-ratio, forbes.es resultados 2025, bankinter.com resultados Amadeus, amadeus.com investor-center (stock-chart, dividends).

## ArcelorMittal (MTS)
- Domiciliada en Luxemburgo; reporta y paga dividendo en USD.
- Fuentes: corporate.arcelormittal.com resultados Q4/FY2025, spain.arcelormittal.com resultados 2T2026, stockanalysis.com/quote/bme/MTS, gurufocus.com debt-to-ebitda, Moody's rating action (dic 2025), investing.com dividends.

## Enagás (ENG)
- Recortó su dividendo (1,74€→1,00€/acción) tras vender activos internacionales.
- Fuentes: enagas.es press-room (resultados 2025 y objetivos 2026, dividends), bolsamania.com reduce-deuda-dividendo, cronista.com apertura 4 sept 2026, gurufocus.com pe-ratio.

## Endesa (ELE)
- Resultados récord 2025 (2.198M€, +16%); dividendo +20%.
- Fuentes: cronista.com apertura 4 sept 2026, benzinga.com (es) resultados 2025 y dividendo julio 2026, bankinter.com resultados Endesa, gurufocus.com ROE.

## Ferrovial (FER)
- Empresa neerlandesa (Ferrovial N.V.), cotiza en BME/Euronext Ámsterdam/Nasdaq. Estructura de deuda con project finance sin recurso, no comparable de forma estándar.
- Fuentes: investing.com grupo-ferrovial (+dividends), newsroom.ferrovial.com resultados 2025, bolsamania.com FERROVIAL-SE, sec.gov press release feb 2026.

## Fluidra (FDR)
- Precio de referencia de julio de 2026 (no se confirmó cotización de septiembre).
- Fuentes: investing.com fluidra-sa (+dividends), estrategiasdeinversion.com resultados 2025, stockanalysis.com/quote/bme/FDR, ocu.org julio 2026.

## Grifols (GRF)
- MUY IMPORTANTE: sin dividendo 2021-2025 (ataque Gotham City Research 2024, crisis de gobernanza); reanudado agosto 2025. Apalancamiento 4,2x deuda neta/EBITDA.
- Fuentes: bolsamania.com resultados 1S2026, democrata.es primer pago dividendos tras 4 años, grifols.com/en/dividends, investing.com/equities/grifols, gurufocus.com pe-ratio.

## IAG
- Dividendo reanudado de forma progresiva tras la suspensión por la pandemia (2020).
- Fuentes: pcbolsa.com cotización, bankinter.com resultados IAG y dividendo IAG, estrategiasdeinversion.com resultados.

## Iberdrola (IBE)
- Payout ratio con fuerte dispersión según se use la cifra ajustada o la contable (scrip dividend).
- Fuentes: cronista.com apertura 4 sept 2026, iberdrola.com nota resultados 2025 e informe anual FY2025, gurufocus.com debt-to-ebitda, marketscreener.com valuation-dividend.

## Inditex (ITX)
- Posición de caja neta (sin deuda).
- Fuentes: estrategiasdeinversion.com cotización, marketscreener.com valoración-dividendo, investing.com dividends, inditex.com resultados ejercicio 2025 (PDF), merca2.es julio 2026.

## Indra Sistemas (IDR)
- Suspendió el dividendo 2014-2022; yield actual bajo por revalorización del precio.
- Fuentes: investing.com indra-sistemas (+dividends), tradingview.com BME-IDR financials-dividends, xtb.com resultados.

## Logista (LOG)
- Dividendo plano (2,09€/acción) en 2024 y 2025; payout y yield varían según metodología.
- Fuentes: tikr.com blog yielding, logista.com press releases (feb y jul 2026), rankia.com.

## Mapfre (MAP)
- Aseguradora: reporta ratio de Solvencia II en vez de deuda neta/EBITDA.
- Fuentes: investing.com mapfre (+dividends), mapfre.com solvencia 2025, infobae.com sept 2026, eleconomista.es resultados 1T2026.

## Merlin Properties (MRL)
- ADVERTENCIA: discrepancia de precio no reconciliada entre fuentes de fechas cercanas (13,35€ vs 15,11-15,18€) — verificar en tiempo real antes de usar. SOCIMI con payout legal mínimo del 80%.
- Fuentes: rankia.com, investing.com merlin-properties-sa (+dividends), finance.yahoo.com resultados, estrategiasdeinversion.com previsiones.

## Naturgy (NTGY)
- Objetivo de payout del 95% es una meta futura; 85% es la cifra ya ejecutada en 2025.
- Fuentes: ad-hoc-news.de H1 2026, benzinga.com (es) dividendo mínimo 2026, megabolsa.com mayo 2026, companiesmarketcap.com, bankinter.com informe Naturgy.

## Puig Brands (PUIG)
- Salió a bolsa en mayo de 2024; historial de dividendo muy corto (2 pagos).
- Fuentes: estrategiasdeinversion.com cotización y resultados, lightyear.com PUIG:BME, bolsamania.com previo 1S26.

## Redeia (RED)
- Recorte significativo de dividendo dentro de un plan de reducción de deuda.
- Fuentes: investing.com red-electrica, bolsamania.com accion REDEIA-CORP, marketscreener.com valoración-dividendo, bolsamania.com noticia beneficio cae, bankinter.com broker PVAL REE.

## Repsol (REP)
- Compromiso de subir el dividendo en efectivo ~3% anual 2026-2028.
- Fuentes: cronista.com, eleconomista.es beneficio 1.899M€, macrotrends.net ROE, repsol.com shareholder remuneration, infrontanalytics.com beta.

## Laboratorios Rovi (ROVI)
- Posición de caja neta; bache de beneficios en 2025, recuperación esperada desde 2026 (acuerdo Roche).
- Fuentes: estrategiasdeinversion.com cotización, stockanalysis.com/quote/bme/ROVI/statistics, estrategiasdeinversion.com dividendo, eulerpool.com dividendo.

## Sacyr (SCYR)
- El 99% de su deuda neta total es financiación de proyecto "sin recurso" en concesionales.
- Fuentes: investing.com sacyr-valle, investing.com FY2025 flujo de caja, tipranks.com statistics, gurufocus.com debt-to-ebitda.

## Solaria Energía y Medio Ambiente (SLR)
- Única empresa del IBEX35 que no reparte dividendo en 2026 (no distribuye desde 2011).
- Fuentes: estrategiasdeinversion.com cotización y análisis IBEX35 dividendos, simplywall.st ROE, stocksreport.ai seguimiento agosto 2026.

## Telefónica (TEF)
- IMPORTANTE: contradicción relevante entre fuentes sobre su política de dividendo (recorte a la mitad en 2026 vs. dividendo confirmado de 0,15€ pagadero en 2027) — verificar directamente con la compañía.
- Fuentes: investing.com telefonica, es.finance.yahoo.com recorte dividendo, alphaspread.com ROE, cronicaglobal.elespanol.com metas dividendo.

## Unicaja Banco (UNI)
- Banco: métrica relevante es ROTE (no ROE) y CET1 (no deuda/EBITDA).
- Fuentes: investing.com unicaja-banco-sa, estrategiasdeinversion.com beneficio, marketscreener.com valoración, investing.com Q2 2026 slides, benzinga.com (es) máximos dividendo.

## Banco Sabadell (SAB)
- Dividendo 2026 incluye extraordinario de 0,50€/acción por venta de TSB, que distorsiona el yield simple.
- Fuentes: cronista.com apertura 4 sept 2026, investing.com RoTE y dividendo, benzinga.com (es) dividendos IBEX 2026, estrategiasdeinversion.com RoTE.

## Banco Santander (SAN)
- ROE mostrado es RoTE ordinario (15,6%); con extraordinarios, ROE reportado 17,4%.
- Fuentes: bloomberglinea.com evolución 2026, investing.com T1 2026, merca2.es resultados 2026, estrategiasdeinversion.com cotización.

## Bankinter (BKT)
- Precio de referencia de junio de 2026 (no se confirmó cotización de septiembre).
- Fuentes: bankinter.com resultados 1S2026, murciadiario.com resultados, roams.es récord beneficio, investing.com dividends, bankinter.com ratios IBEX35.

## BBVA
- ROE oficial (21,1%) distinto del ROTE (22,2%) del mismo periodo. Beta y rentabilidad a 1 año descartadas por dispersión excesiva entre fuentes.
- Fuentes: bbva.com earnings 2Q2026, cronicadecantabria.com previsión RoTE, estrategiasdeinversion.com récord beneficios, rankia.com, benzinga.com (es) dividendo.

## CaixaBank (CABK)
- ROE mostrado es RoTE (18,0% a 12 meses); guía propia >18% para el año completo.
- Fuentes: caixabank.com profit 1S2026, xtb.com resultados, cronista.com apertura 2 sept 2026, companiesmarketcap.com.

## Cellnex Telecom (CLNX)
- IMPORTANTE: no reparte dividendo tradicional (pérdidas netas); el "yield" reportado es una distribución de prima de emisión, no un dividendo ordinario.
- Fuentes: cellnex.com nota tramo dividendo julio 2026, estrategiasdeinversion.com resultados 1S2026, elespanol.com/invertia pérdidas 1S2026, marketscreener.com deuda/EBITDA CFO.

## Inmobiliaria Colonial (COL)
- SOCIMI: usa LTV en vez de deuda neta/EBITDA.
- Fuentes: idealista.com cartera Colonial, estrategiasdeinversion.com resultados y cotización, tradersunion.com COL-EUR.
