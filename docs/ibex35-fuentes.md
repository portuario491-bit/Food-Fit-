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

---

## Ronda 2 (septiembre 2026): crecimiento, calidad, valoración y riesgo — 7 financieras + Cellnex

Segunda ronda de investigación centrada en las categorías que la ronda 1 dejó sin cubrir (crecimiento, calidad, valoración, riesgo) para SAB, SAN, BKT, BBVA, CABK, CLNX y COL. Recopilación por búsqueda web (Claude WebSearch) el 7 de septiembre de 2026; en este entorno no fue posible hacer fetch directo de páginas (stockanalysis.com, macrotrends.net, investing.com, marketscreener.com, companiesmarketcap.com, wsj.com, bolsamania.com, la web corporativa de cada banco, sec.gov e incluso wikipedia.org devolvieron "EGRESS_BLOCKED" al intentar leerlos con la herramienta de fetch), así que los datos proceden de los resúmenes/snippets de búsqueda que citan esas mismas fuentes, y se han contrastado cuando ha sido posible. Donde distintas fuentes daban cifras claramente incompatibles (habitual al mezclar el ticker BME con ADRs en EEUU o listados en otras bolsas europeas, con divisas y bases de acciones distintas), el campo se dejó en `null` en vez de forzar un valor.

### Banco Sabadell (SAB)
- Añadido: `forwardPer` (10,49) y `epsGrowthCagr5y` (38,3%) — fuente: stockanalysis.com (BME:SAB, vía snippet) y Simply Wall St "past performance", consulta 7-sep-2026.
- Dejado en null tras búsqueda: `dividendYield` y `payoutRatioEarnings` — las fuentes dan cifras muy dispares (4,4% a más del 20% de yield; 37% a 77% de payout) por mezclar el extraordinario de la venta de TSB, distintos listados y distintas fechas; `revenueGrowthCagr3y/5y`, `netMargin`, `operatingMargin`, `roic`, `interestCoverage`, `peg`, `evEbitda`, `priceToFcf`, `priceToSales`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying/Increasing`, `dividendCagr*` — sin fuente fiable o coherente encontrada en el tiempo disponible.

### Banco Santander (SAN)
- Añadido: `per` (14,10, BME) y `epsGrowthCagr5y` (39,27%) — fuente: stockanalysis.com (BME:SAN) y Simply Wall St, consulta 7-sep-2026. `dividendYield` (1,86%) calculado como dividendo total cargado a 2025 (0,115€ a cuenta + 0,125€ complementario = 0,24€/acción, según nota de prensa oficial de Santander de septiembre 2025 y comunicado de la Junta de marzo 2026) dividido entre el precio de referencia de la ficha (12,88€).
- Dejado en null: `revenueGrowthCagr3y/5y`, `epsGrowthCagr3y`, `netMargin`, `operatingMargin`, `roic`, `peg`, `evEbitda`, `priceToFcf`, `priceToSales`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying/Increasing`, `dividendCagr*` — no se encontró una cifra consistente para el ticker BME concreto.

### Bankinter (BKT)
- Añadido: `forwardPer` (10,51), `epsGrowthCagr5y` (29,25%) y `revenueGrowthCagr5y` (15,3%, sobre margen bruto/ingresos totales) — fuente: stockanalysis.com (BME:BKT) y Simply Wall St "past performance", consulta 7-sep-2026.
- Dejado en null: `revenueGrowthCagr3y`, `epsGrowthCagr3y`, `netMargin` (fuentes dispares: 37%-40% según periodo), `operatingMargin`, `roic`, `peg`, `evEbitda`, `priceToFcf`, `priceToSales`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying/Increasing` (fuentes indican "al menos 10 años" pero sin cifra exacta verificable), `dividendCagr*`.

### BBVA
- Añadido: `beta` (0,89, BME, stockanalysis.com), `forwardPer` (9,01, específico del listado BME — se descartó el 10,27 de la ADR estadounidense por corresponder a otro listado), `payoutRatioEarnings` (0,40, coherente con la política de reparto 40-50% declarada por el propio banco) y `dividendYield` (0,0362 = dividendo total cargado a 2025 de 0,92€/acción [0,32€ a cuenta pagado en noviembre 2025 + 0,60€ complementario pagado en abril 2026, confirmado en los formularios 6-K de BBVA ante la SEC] dividido entre el precio de referencia de 25,40€).
- Dejado en null: `revenueGrowthCagr3y/5y`, `epsGrowthCagr3y/5y` (BBVA reporta guía de crecimiento de valor contable tangible + dividendo del 15% CAGR 2025-2028, pero eso no es EPS growth y no se usó), `netMargin`, `operatingMargin`, `roic`, `peg`, `evEbitda`, `priceToFcf`, `priceToSales`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying/Increasing`, `dividendCagr*`.

### CaixaBank (CABK)
- Añadido: `forwardPer` (12,92), `epsGrowthCagr5y` (13,90%), `revenueGrowthCagr5y` (14,5%) y `netMargin` (37,7%) — fuente: stockanalysis.com (BME:CABK) y Simply Wall St, consulta 7-sep-2026. `dividendYield` (0,038) calculado como dividendo total con cargo a 2025 (0,50€/acción, +15% interanual, según nota de resultados oficial de CaixaBank de enero 2026) dividido entre el precio de referencia (13,17€).
- Advertencia de coherencia: `revenueGrowthCagr5y` y `epsGrowthCagr5y` a 5 años están inflados por la fusión con Bankia (2021), que amplió de golpe balance, ingresos y beneficio — no reflejan crecimiento orgánico puro; se ha dejado nota en `sourceNote`.
- Dejado en null: `revenueGrowthCagr3y`, `epsGrowthCagr3y`, `operatingMargin`, `roic`, `peg`, `evEbitda`, `priceToFcf`, `priceToSales`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying/Increasing`, `dividendCagr*`.

### Cellnex Telecom (CLNX)
- Añadido: `netDebtToEbitda` (6,28x, 1S2026, mejorando desde 6,39x — fuente: resultados oficiales de Cellnex 1S2026, cellnex.com) y `evEbitda` (~11,1x — fuente: guía de múltiplos de mercado 2026, consulta 7-sep-2026).
- Dejado en null: `roic`, `per`, `operatingMargin`, `netMargin` (con beneficio neto negativo estas métricas no son informativas o no se reportan de forma directa), `peg`, `priceToFcf` y `priceToSales` (no se pudo obtener con confianza una capitalización bursátil y una cifra de ingresos anuales de la misma fecha y divisa — las fuentes mezclan USD y EUR, y distintos listados ADR/BME), `revenueGrowthCagr3y/5y` (se encontró crecimiento orgánico ~5% interanual pero no un CAGR a 3-5 años fiable), `volatility3y`, `maxDrawdown5y`, `perVsHistoricalAvg5y`.

### Inmobiliaria Colonial (COL)
- Añadido: `beta` (1,23 — fuente: investing.com, página dedicada "Beta (5 años)", consulta 7-sep-2026), `forwardPer` (15,88) y `payoutRatioEarnings` (0,93). Ambos calculados sobre la guía de BPA recurrente de la propia Colonial para 2026 (0,34-0,35€/acción) y el dividendo anunciado para 2026 (0,32€/acción) — no sobre el BPA contable, que la propia compañía advierte que está distorsionado por revalorizaciones de activos. Un payout tan alto es coherente con la obligación legal de reparto de las SOCIMI (mínimo 80% del beneficio fiscal aplicable).
- Deuda neta a cierre de 2025 (~4.973M€, resultados oficiales de Colonial) confirma por qué `netDebtToEbitda` se mantiene en null pese a conocerse la cifra: la propia compañía usa LTV como métrica de apalancamiento y el EBITDA de rentas no es directamente comparable entre fuentes (319M€ TTM según una fuente, 371M€ "rental EBITDA" FY2025 según otra).
- Dejado en null: `roic`, `per` (contable), `operatingMargin`, `netMargin`, `evEbitda` (no se pudo reconciliar una cifra de EBITDA consistente con el EV), `priceToFcf`, `priceToSales`, `peg`, `revenueGrowthCagr3y/5y`, `epsGrowthCagr3y/5y`, `volatility3y`, `maxDrawdown5y`, `perVsHistoricalAvg5y`, `consecutiveYearsPaying/Increasing`, `dividendCagr*`.

### Limitación general de esta ronda
La herramienta de fetch directo de páginas no tuvo acceso a ningún dominio probado (agregadores financieros, webs corporativas de los bancos, SEC, CNMV, incluso Wikipedia), por lo que todos los datos de esta ronda proceden de resúmenes de búsqueda en vez de la lectura directa de la fuente primaria. Se ha priorizado dejar en `null` cualquier cifra con corroboración débil o contradictoria antes que forzar un dato. Se recomienda, en una futura ronda con acceso a fetch, verificar directamente en stockanalysis.com/macrotrends.net las cifras de volatilidad, máximo drawdown, PEG y márgenes que se han dejado en null.
