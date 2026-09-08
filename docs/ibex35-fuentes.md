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

---

## Ronda 3 (septiembre 2026): crecimiento, calidad, valoración y riesgo — ACS, Acciona, Acciona Energía, Acerinox, Aena, Amadeus, ArcelorMittal

Tercera ronda, centrada en las categorías que las rondas anteriores dejaron sin cubrir (crecimiento, calidad, valoración, riesgo) para ACS, ANA, ANE, ACX, AENA, AMS y MTS. Recopilación mediante Claude WebSearch el 8 de septiembre de 2026 (igual que en la Ronda 2, el fetch directo de páginas estuvo bloqueado por el proxy de salida para todos los dominios probados — stockanalysis.com, macrotrends.net, investing.com, marketscreener.com, companiesmarketcap.com, wsj.com, bolsamania.com, gurufocus.com, finance.yahoo.com, mlq.ai — así que los datos proceden de resúmenes/snippets de búsqueda, contrastados entre varias fuentes cuando ha sido posible). Donde varias fuentes daban cifras claramente incompatibles o implausibles, el campo se dejó en `null`.

### ACS
- Añadido: `dividendYield` (0,0187), `revenueGrowthCagr3y` (0,14), `revenueGrowthCagr5y` (0,12), `operatingMargin` (0,044) y `netMargin` (0,0195) — fuentes: nota de prensa oficial de Grupo ACS (resultados 1S2026, pressroom.grupoacs.com) para márgenes, fiscal.ai y simplywall.st para crecimiento de ingresos, cálculo propio payout/PER para dividendYield (coherente con una fuente que da 1,87% directamente).
- Dejado en null: `roic` (dispersión extrema entre fuentes, 5,6%-28,7%), `evEbitda` (1,0x-14,6x según fuente), `peg`, `epsGrowthCagr3y/5y` (distorsión por la plusvalía de la venta de la participación en Abertis), `interestCoverage`, `earningsStability`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying/Increasing`, `dividendCagr*`, `payoutRatioFCF`, `dividendCoverage`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`.

### Acciona (ANA)
- Añadido: `dividendYield` (0,0241, calculado sobre el dividendo oficial de 5,74867€/acción con cargo a 2025 según comunicado CNMV del 30/06/2026) y `netMargin` (0,037, TTM).
- Dejado en null: `roic` (una fuente daba un "ROI" del 17,8% idéntico al ROE ya registrado — probable conflación de métricas, descartada), `revenueGrowthCagr3y/5y` y `epsGrowthCagr3y/5y` (cifras de fuentes secundarias de 22%-26% CAGR implausibles frente al crecimiento interanual real oficial, +12,7% en 2024 y +5,5% en 2025), `operatingMargin`, `peg`, `evEbitda`, `priceToFcf`, `priceToSales`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `interestCoverage`.

### Acciona Energía (ANE)
- Añadido: `roe` (0,127), `beta` (0,53) y `netMargin` (0,165, 2025) — fuentes: simplywall.st "past performance" e investing.com/lightyear para beta.
- Advertencia de coherencia: `netMargin` (16,5% en 2025) está muy inflado por plusvalías puntuales de rotación de activos (venta de participaciones en parques renovables) — el margen del año anterior fue de solo el 5%; no se espera que se repita en 2026 (EBITDA guiado a la baja ~22%). Nota en `sourceNote`.
- Dejado en null: `operatingMargin`, `roic`, `revenueGrowthCagr3y/5y`, `epsGrowthCagr3y/5y`, `peg`, `evEbitda`, `priceToFcf`, `priceToSales`, `volatility3y`, `maxDrawdown5y` — el riesgo de confusión de fuentes entre ANA y ANE (dos cotizadas distintas) es muy alto y no se ha podido despejar con confianza para estas métricas.

### Acerinox (ACX)
- Añadido: `operatingMargin` (0,0265), `netMargin` (-0,008), `priceToSales` (0,5), `peg` (1,09, forward no-GAAP) y `evEbitda` (12,0x TTM) — fuente: agregados vía Seeking Alpha/stockanalysis (snippets de búsqueda), consulta 8-sep-2026.
- Descartado explícitamente: un dato de "volatilidad" del 3,2% (Seeking Alpha) por implausible para una acción cíclica del sector del acero (no se usó como `volatility3y`).
- Dejado en null: `roic`, `epsGrowthCagr3y/5y`, `revenueGrowthCagr3y/5y` (con beneficios TTM cerca de cero, cualquier CAGR no sería representativo), `interestCoverage`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying`.

### Aena (AENA)
- Añadido: `consecutiveYearsIncreasing` (4), `operatingMargin` (0,4553), `netMargin` (0,335), `roic` (0,1592), `priceToSales` (6,13), `peg` (3,03) y `evEbitda` (12,03) — fuentes: nota de prensa oficial de Aena (resultados 2025: beneficio neto 2.136,7M€, ingresos 6.379,2M€, dividendo 1,09€/acción), companiesmarketcap.com y stockanalysis.com (vía snippets) para el resto.
- Dejado en null: `revenueGrowthCagr3y/5y`, `epsGrowthCagr3y/5y` (la base de comparación de hace 3-5 años incluye 2020-2021, con pérdidas o resultados casi nulos por la pandemia — CAGR no representativo), `interestCoverage`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying`.

### Amadeus IT Group (AMS)
- Añadido: `dividendYield` (0,0359), `consecutiveYearsPaying` (2) y `consecutiveYearsIncreasing` (2) — calculados sobre los dividendos oficiales con cargo a 2024 (1,39€/acción) y 2025 (0,53€ interino + 1,54€ complementario = 2,07€/acción) tras la reanudación del dividendo en 2024 (suspendido 2020-2023 por la pandemia, según amadeus.com/en/investor-center/dividends). También `operatingMargin` (0,27, beneficio de explotación oficial FY2025), `netMargin` (0,2036 TTM), `roic` (0,0923, con lectura TTM alternativa de 0,1258), `peg` (1,57), `evEbitda` (9,71), `priceToSales` (3,4) e `interestCoverage` (24,14x = EBIT TTM 1.800M€ / gastos financieros TTM 74,4M€).
- Descartado explícitamente: un PEG de 0,15 (gurufocus) por incoherente con el PER ya registrado (19,08) y con la propia comparación del 93% por debajo de la mediana a 10 años que citaba la misma fuente.
- Dejado en null: `roe` (ya null previamente, fuentes contradictorias no reconciliadas), `epsGrowthCagr3y/5y`, `revenueGrowthCagr3y/5y` (misma razón que Aena: colapso del tráfico aéreo 2020-2021 distorsiona la base de comparación), `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`.

### ArcelorMittal (MTS)
- Añadido: `operatingMargin` (0,0272), `netMargin` (0,0514, verificado también como 3.152M$/61.352M$ de ingresos FY2025), `priceToSales` (0,62) y `evEbitda` (11,7x, rango 11,05x-12,36x según fuente) — todas las cifras en USD (divisa de reporte de la compañía).
- Descartado explícitamente: un PEG de 0,09 (fuente vía Seeking Alpha) por ser un artefacto de la base de comparación deprimida (el beneficio neto pasó de 1.339M$ en 2024 a 3.152M$ en 2025, +135%, por el ciclo del acero) — no se usó.
- Dejado en null: `roic`, `epsGrowthCagr3y/5y`, `revenueGrowthCagr3y/5y` (mismo motivo: ciclo del acero muy pronunciado), `interestCoverage` (no se encontró el gasto financiero TTM en una fuente fiable), `consecutiveYearsPaying/Increasing` (se confirmó un recorte de dividendo en 2009 pero no una cronología completa y fiable de la racha posterior), `volatility3y`, `maxDrawdown5y`.

### Limitación general de esta ronda
Igual que en la Ronda 2, el fetch directo de páginas no tuvo acceso a ningún dominio financiero probado, así que todos los datos proceden de resúmenes de búsqueda. Ha sido especialmente difícil encontrar `volatility3y` y `maxDrawdown5y` para acciones individuales (a diferencia de fondos/ETFs, raramente se publican como una cifra de texto indexable) — se han dejado en `null` para las 7 empresas de esta ronda. Se ha priorizado descartar explícitamente varias cifras concretas (PEG, ROIC, "volatilidad") que resultaban incoherentes con otros datos ya verificados de la misma empresa, en vez de dejarlas pasar sin más porque una sola fuente las mencionaba.

---

## Ronda 3 (septiembre 2026): crecimiento, calidad, valoración y riesgo — Inditex, Indra, Logista, Mapfre, Merlin, Naturgy, Puig

Tercera ronda de investigación centrada en las categorías que las rondas anteriores dejaron sin cubrir (crecimiento, calidad, valoración, riesgo) para ITX, IDR, LOG, MAP, MRL, NTGY y PUIG. Recopilación por búsqueda web (WebSearch) el 8 de septiembre de 2026; igual que en la ronda 2, el fetch directo de páginas siguió bloqueado por el proxy de red en todos los dominios probados (stockanalysis.com incluido), así que los datos proceden de resúmenes/snippets de búsqueda que citan agregadores (stockanalysis.com, Simply Wall St, alphaspread.com, valueinvesting.io, companiesmarketcap.com, marketscreener.com) y de notas de prensa/resultados oficiales de cada empresa. Donde dos fuentes independientes dieron cifras claramente incompatibles para el mismo concepto (frecuente en ROIC, EV/EBITDA y payout, por diferencias de fecha, metodología o listado), el campo se dejó en `null` documentando la dispersión encontrada, salvo cuando fue posible recalcular la cifra a partir de datos oficiales verificados de la propia empresa (p.ej. CAGR de ingresos de Puig, márgenes de Logista sobre ventas totales).

### Inditex (ITX)
- Añadido: `revenueGrowthCagr3y` (11,6%), `epsGrowthCagr5y` (17,5%), `operatingMargin` (20,2%), `netMargin` (15,3%), `peg` (4,37), `evEbitda` (15,0x), `priceToSales` (4,02x) — fuente: agregadores vía snippet (perfil tipo stockanalysis.com/Simply Wall St), consulta 8-sep-2026. `payoutRatioEarnings` (84%) y `dividendCagr5y` (40,4%) calculados sobre el dividendo total confirmado con cargo a 2025 (1,75€/acción: 1,20€ ordinario + 0,55€ extraordinario, finect.com/investing.com).
- Dejado en null tras búsqueda con nota de motivo: `roic` (dispersión 18%-44% según se descuente o no la caja neta del capital invertido), `operatingMarginTrend5y` (cifras de margen por año contradictorias entre fuentes), `fcfGrowthCagr3y` (solo 2 años de FCF verificados, no un tramo de 3), `consecutiveYearsPaying/Increasing` (una fuente afirma 22 años de subidas, pero Inditex aplazó/redujo el dividendo en 2020 por la pandemia — contradicción no resuelta), `interestCoverage`, `earningsStability`, `priceToFcf`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`.

### Indra Sistemas (IDR)
- Añadido: `revenueGrowthCagr5y` (11,5%), `epsGrowthCagr5y` (37,5%), `operatingMargin` (9,5%, EBIT FY2025 oficial de Indra Group), `netMargin` (7,8%), `peg` (1,12), `evEbitda` (11,57x), `priceToFcf` (4,96x, calculado en realidad como EV/FCF) — fuentes: Simply Wall St (past performance), indragroup.com FY2025 results, stockanalysis.com/valueinvesting.io/alphaspread.com vía snippet, consulta 8-sep-2026.
- Dejado en null: `roic` (dos fuentes dan 14,6% y 20,2%, dispersión no reconciliada), `per` (PER trailing calculado con el precio de esta ficha da ~26,2x frente a 21,6x-23,3x de agregadores con precio/fecha distintos), `revenueGrowthCagr3y`, `epsGrowthCagr3y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `interestCoverage`, `earningsStability`, `priceToSales`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`.

### Logista (LOG)
- Añadido: `roe` (38,6%, Simply Wall St, campo estaba en null), `revenueGrowthCagr5y` (5,5%), `epsGrowthCagr5y` (11,6%), `evEbitda` (7,92x) — fuente Simply Wall St/stockanalysis.com vía snippet. `operatingMargin` (2,8%) y `netMargin` (2,1%) calculados por Claude a partir del EBIT ajustado oficial (378M€) y el beneficio neto oficial (281M€) del ejercicio fiscal 2025 de Logista entre su cifra de negocio total oficial (13.536M€, logista.com/logisticaprofesional.com) — nótese que la propia Logista comunica un margen EBIT del 21,6% pero calculado sobre "ventas económicas" (netas de impuestos especiales, ~1.809M€), una base mucho menor no comparable con el resto de empresas de la ficha.
- Dejado en null: `roic` (el modelo de capital circulante negativo del negocio de distribución distorsiona el cálculo estándar; la única cifra encontrada, ROI 42,5%, no se considera suficientemente fiable/estándar), `priceToFcf` (una fuente da FCF negativo en el semestre y otra un múltiplo EV/FCF positivo, sin reconciliar), `consecutiveYearsPaying/Increasing` (una fuente indica reparto ininterrumpido desde la salida a bolsa de 2014, pero otra habla de que Logista "reactiva el calendario de dividendos" en 2026, sugiriendo una interrupción no confirmada; además el dividendo pasó de +13% en 2024 a plano en 2025), `revenueGrowthCagr3y`, `epsGrowthCagr3y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `interestCoverage`, `earningsStability`, `peg`, `priceToSales`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`.

### Mapfre (MAP)
- Añadido: `forwardPer` (10,38, campo estaba en null), `netMargin` (3,9%), `revenueGrowthCagr5y` (11,4%), `epsGrowthCagr5y` (13,3%), `roic` (18,72%, con salvedad de que el concepto no es estándar en aseguradoras), `peg` (2,19), `dividendCagr5y` (7,4%) — fuente: stockanalysis.com/digrin.com/Simply Wall St vía snippet, consulta 8-sep-2026.
- Dejado en null: `operatingMargin` (el ratio combinado no-vida, 92,8% en 2026, es la métrica de rentabilidad técnica relevante del sector, no un margen EBIT convencional), `evEbitda` (concepto no estándar para aseguradoras), `priceToSales` (fuentes incompatibles: 0,26x vs ~0,43-0,46x calculado con la capitalización/ingresos de esta ficha), `revenueGrowthCagr3y`, `epsGrowthCagr3y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `interestCoverage`, `earningsStability`, `priceToFcf`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying`, `dividendCagr3y`, `dividendCagr10y`, `dividendCoverage`.

### Merlin Properties (MRL)
- Añadido: `dividendYield` (3,3%, campo estaba en null; calculado sobre el dividendo total con cargo a 2025 de 0,44€/acción, +4,8% interanual, según nota de resultados de Merlin de febrero 2026, entre el precio de esta ficha), `roic` (3,11%, coherente con FFO/valor de empresa), `epsGrowthCagr5y` (5,1%, Simply Wall St, con salvedad por el extraordinario reciente), `evEbitda` (24,7x, cierre de 2025) — fuentes: estrategiasdeinversion.com/es.finance.yahoo.com resultados FY2025, Simply Wall St, stockanalysis.com vía snippet, consulta 8-sep-2026.
- Dejado en null: `netMargin` y `payoutRatioEarnings` (el BPA contable de 2025, 1,40€, está muy distorsionado por una plusvalía extraordinaria de ~362M€; un payout calculado sobre ese BPA, 31%, no reflejaría el mínimo legal del 80% de una SOCIMI, que se calcula sobre bases fiscales distintas), `revenueGrowthCagr3y/5y`, `operatingMargin`, `peg`, `priceToFcf`, `priceToSales`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `interestCoverage`, `earningsStability`, `consecutiveYearsIncreasing`, `dividendCagr*`, `dividendCoverage`.

### Naturgy (NTGY)
- Añadido: `revenueGrowthCagr5y` (-6%/año, por venta de activos internacionales), `epsGrowthCagr3y` (5%/año) y `epsGrowthCagr5y` (27,5%, con otra fuente citando 32,4%), `netMargin` (10%, coherente con el beneficio neto récord de 2025 de 2.023M€ sobre 19.455M€ de cifra de negocio), `roic` (8,41%, cifra actual de agregador; otra fuente da 11,3% para el cierre de 2025), `evEbitda` (7,81x), `consecutiveYearsPaying` (19 años, campo estaba en null) — fuentes: Simply Wall St, servimedia.es/naturgy.com resultados FY2025, bankinter.com dividendo Naturgy, stockanalysis.com vía snippet, consulta 8-sep-2026.
- Dejado en null: `peg` (única cifra encontrada es negativa, -3,49, no interpretable de forma estándar), `revenueGrowthCagr3y`, `fcfGrowthCagr3y`, `operatingMargin` (solo se encontró margen EBITDA, 27,4%, no un margen EBIT estándar), `operatingMarginTrend5y`, `priceToFcf`, `priceToSales`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `interestCoverage`, `earningsStability`, `dividendCagr*`, `dividendCoverage`. Nota de coherencia: el beta ya investigado en esta ficha (0,2) difiere notablemente del 0,46 encontrado en un agregador en esta ronda; no se ha reconciliado, se mantiene el valor de la ronda anterior.

### Puig Brands (PUIG)
- Añadido: `revenueGrowthCagr3y` (22,7%, cálculo propio de Claude a partir de la cifra de negocio oficial de Puig en sus notas de prensa: 2.590M€ en 2021 a 4.790M€ en 2024, un tramo real de 3 años), `netMargin` (11,8%), `evEbitda` (9,78x), `priceToSales` (1,96x), `peg` (2,04), `roic` (13,59%), `priceToFcf` (16,17x, calculado en realidad como EV/FCF) — fuentes: puig.com notas de prensa de resultados anuales 2022/2024, stockanalysis.com vía snippet, consulta 8-sep-2026.
- Dejado en null: `volatility3y`, `maxDrawdown5y` y `perVsHistoricalAvg5y` (Puig solo cotiza desde mayo de 2024, no hay suficiente historial de precio de la propia acción para calcularlos), `epsGrowthCagr3y/5y` (el cambio de estructura accionarial y de capital en la salida a bolsa hace que el BPA antes y después de la OPV no sea directamente comparable), `revenueGrowthCagr5y` (no se encontraron datos oficiales fiables anteriores a 2021), `operatingMargin` (solo se encontró margen EBITDA ajustado, no un margen EBIT estándar), `operatingMarginTrend5y`, `fcfGrowthCagr3y`, `interestCoverage`, `earningsStability`, `dividendCagr*`, `dividendCoverage`.

### Limitación general de esta ronda
Igual que en la ronda 2, el fetch directo de páginas siguió bloqueado por el proxy de red (se confirmó explícitamente con stockanalysis.com al inicio de esta ronda), así que todos los datos proceden de resúmenes de búsqueda. Se ha priorizado documentar la dispersión entre fuentes y dejar el campo en `null` antes que forzar un valor cuando dos fuentes independientes no coincidían razonablemente (ROIC de Inditex e Indra, EV/EBITDA de varias empresas, PEG negativo de Naturgy). Dos cifras de crecimiento (revenueGrowthCagr3y de Puig, operatingMargin/netMargin de Logista) se recalcularon directamente por Claude a partir de cifras oficiales de la propia empresa en vez de tomar un ratio ya calculado por un agregador, precisamente para evitar mezclar bases de cálculo (ventas totales vs. ventas económicas, BPA pre/post-OPV) incomparables entre sí.

## Ronda 3 (septiembre 2026): crecimiento, calidad, valoración y riesgo — ENG, ELE, FER, FDR, GRF, IAG, IBE

Tercera ronda de investigación centrada en las mismas categorías que las rondas 1-2 dejaron sin cubrir, esta vez para Enagás, Endesa, Ferrovial, Fluidra, Grifols, IAG e Iberdrola. Recopilación por búsqueda web (Claude WebSearch) el 8 de septiembre de 2026; igual que en la ronda 2, el fetch directo de páginas siguió bloqueado (`EGRESS_BLOCKED` en stockanalysis.com y otros dominios probados), así que todos los datos proceden de resúmenes/snippets de búsqueda citando esas fuentes. Cuando distintas fuentes daban cifras claramente incompatibles, o una cifra parecía un artefacto matemático de un año base anómalo (extraordinarios, ciclo COVID, plusvalías de venta de activos), el campo se dejó en `null` en vez de forzar un valor; varios ratios (evEbitda, priceToSales, priceToFcf, netMargin, roic, roe, per) se calcularon con datos propios a partir de cifras oficiales verificadas (ingresos, EBIT/EBITDA, beneficio neto, deuda neta, patrimonio neto, acciones en circulación) cuando las fuentes externas de ese ratio ya calculado eran contradictorias entre sí o no cuadraban con las cifras oficiales — el detalle de cada cálculo está en el `sourceNote` de la empresa correspondiente.

### Enagás (ENG)
- Añadido: `dividendYield` (6,1%, sobre dividendo confirmado de 1,00€/acción), `roe` (0,151, cálculo propio EAT/patrimonio), `per` (12,7, cálculo propio precio/BPA 1,29€), `forwardPer` (18,3, cálculo propio sobre guía de EAT recurrente 2026), `beta` (0,26, stockanalysis.com), `operatingMargin` (0,377), `netMargin` (0,347), `roic` (0,059, estimación propia), `evEbitda` (10,0, cálculo propio), `priceToSales` (4,4, cálculo propio). Fuentes: enagas.es (press-room, resultados 2025 y objetivos 2026), stockanalysis.com/quote/bme/ENG/statistics, gurufocus.com, simplywall.st, ocu.org (BPA 1,29€), digrin.com. Consulta: 8-sep-2026.
- Dejado en null: `revenueGrowthCagr3y/5y`, `epsGrowthCagr3y/5y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y` — el beneficio 2025 (339,1M€) está inflado por plusvalías no recurrentes (venta de activos + laudo arbitral peruano; BDI recurrente solo 266,3M€) frente a la pérdida de 2024 (-299,3M€ por rotación de activos internacionales), lo que hace que cualquier CAGR de 3-5 años no sea representativo. También `interestCoverage`, `earningsStability`, `volatility3y`, `maxDrawdown5y`, `peg`, `priceToFcf`, `perVsHistoricalAvg5y`, `consecutiveYearsPaying/Increasing`, `dividendCagr*`, `dividendCoverage` — sin fuente fiable o coherente.

### Endesa (ELE)
- Añadido: `roe` (0,124), `per` (16,9), `operatingMargin` (0,173), `netMargin` (0,122), `roic` (0,10), `evEbitda` (9,5), `priceToSales` (2,07), `revenueGrowthCagr5y` (0,015), `epsGrowthCagr5y` (0,073) — mayoría cálculos propios a partir de cifras oficiales (ingresos, EBITDA, beneficio neto FY2025 y TTM combinando FY2025 con 1S2025/1S2026, deuda neta implícita en netDebtToEbitda). Fuentes: endesa.com (press releases resultados 2025 y 1S2026), estrategiasdeinversion.com, elespanol.com/invertia, es.finance.yahoo.com/ELEZF, stockanalysis.com/quote/bme/ELE/statistics, simplywall.st, cronista.com (cotización 7-8 sept 2026). Consulta: 8-sep-2026.
- Advertencia de coherencia: se descartó un ROE externo (33,7%, gurufocus) por una base de patrimonio no reconciliable, y un "ROI" TTM (29%, stockanalysis) por metodología no verificable — se usó en su lugar un cálculo propio con datos oficiales.
- Dejado en null: `revenueGrowthCagr3y`, `epsGrowthCagr3y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `earningsStability`, `interestCoverage`, `peg`, `priceToFcf` (cifras de FCF muy dispares entre fuentes, 4.100M€ vs 2.506M€ TTM vs 3.437M€ a septiembre), `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying`, `dividendCagr*`, `dividendCoverage`.

### Ferrovial (FER)
- Añadido: `roe` (0,15, cálculo propio sobre patrimonio atribuible ~5.910M€), `operatingMargin` (0,10, sobre EBIT ajustado oficial 967M€), `netMargin` (0,092), `priceToSales` (3,71, cálculo propio), `revenueGrowthCagr5y` (0,086, Simply Wall St), `consecutiveYearsIncreasing` (2). Fuentes: newsroom.ferrovial.com (resultados FY2025), bolsamania.com, es-us.finanzas.yahoo.com, stockanalysis.com/stocks/fer/statistics, simplywall.st, companiesmarketcap.com (acciones en circulación ~717,7M), dividend.com. Consulta: 8-sep-2026.
- MUY IMPORTANTE: beneficio neto 2025 (888M€) cayó un 72,6% frente a 2024 (3.239M€, con plusvalías extraordinarias por rotación de activos); 2025 es el año "normalizado". Se descartó por implausible el `epsGrowthCagr5y` externo (69%/año, Simply Wall St, artefacto de esa plusvalía de 2024) y el `forwardPer` externo (57,81, stockanalysis, por la misma distorsión entre EPS trailing mixto y EPS 2026 guiado).
- Dejado en null: `roic` (estructura de project finance sin recurso hace que capital invertido no sea una base fiable), `epsGrowthCagr3y/5y`, `revenueGrowthCagr3y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `earningsStability`, `interestCoverage` (posición de caja neta), `evEbitda` (bases de EBITDA "ajustado" 1.457M€ vs "TTM/look-through" 3.957M€ no reconciliables), `peg`, `priceToFcf`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `forwardPer`, `dividendCagr*`, `dividendCoverage`.

### Fluidra (FDR)
- Añadido: `dividendYield` (3,63%, sobre dividendo 2025 de 0,65€/acción), `operatingMargin` (0,134), `netMargin` (0,077), `roic` (0,079), `evEbitda` (10,81), `priceToSales` (1,52, cálculo propio), `priceToFcf` (9,96, cálculo propio), `peg` (0,97), `revenueGrowthCagr5y` (0,037). Fuente principal: stockanalysis.com (BME:FDR, snapshot 22-jul-2026, coherente con el forwardPer 13,22 ya presente en la ficha), fluidra.com (dividendo 2025), simplywall.st, multiples.vc. Consulta: 8-sep-2026.
- Se descartó por implausible el `epsGrowthCagr5y` externo (76%/año, Simply Wall St), artefacto de una base de comparación muy deprimida (ciclo COVID de piscinas), inconsistente con el crecimiento de beneficio de doble dígito bajo (+27,5%) citado por la misma fuente para el último ejercicio.
- Dejado en null: `revenueGrowthCagr3y`, `epsGrowthCagr3y/5y` (descartado), `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `earningsStability`, `interestCoverage`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying/Increasing`, `dividendCagr*`, `dividendCoverage`.

### Grifols (GRF)
- Añadido: `roe` (0,0589), `per` (19,36), `forwardPer` (11,53), `beta` (1,19), `operatingMargin` (0,20), `netMargin` (0,0534, cálculo propio), `roic` (0,0695), `peg` (0,37), `evEbitda` (4,96), `priceToSales` (0,86, cálculo propio), `revenueGrowthCagr5y` (0,093), `epsGrowthCagr5y` (-0,171). Fuente principal: stockanalysis.com (BME:GRF), grifols.com (press release resultados 2025: ingresos 7.524M€, beneficio neto 402M€), simplywall.st. Consulta: 8-sep-2026.
- Advertencia de coherencia: coexisten cifras "oficiales" distintas de ROE (4,99%) y ROIC (5,03%) frente a las de stockanalysis (5,89%/6,95%) — se mantuvo el par de stockanalysis por ser internamente consistente con el resto de ratios añadidos de la misma instantánea. A diferencia de FER/FDR, no se descartó el `epsGrowthCagr5y` (-17,1%/año): es un reflejo fiel de la crisis de gobernanza y sobreendeudamiento 2021-2024 ya documentada en la ficha, no un artefacto de cálculo.
- Dejado en null: `revenueGrowthCagr3y`, `epsGrowthCagr3y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `earningsStability` (la serie de beneficio neto encontrada mezcla USD 2021-2022 y EUR 2023-2025 sin fuente que la homogeneice), `interestCoverage`, `priceToFcf`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `dividendYield/payoutRatioEarnings` (sin dividendo hasta agosto de 2025, historial insuficiente), `consecutiveYearsPaying/Increasing` (ya en 0 de ronda anterior), `dividendCagr*`, `dividendCoverage`.

### IAG
- Añadido: `dividendYield` (2,26%, cálculo propio), `per` (6,47), `forwardPer` (5,83), `beta` (1,96), `operatingMargin` (0,151, oficial FY2025), `netMargin` (0,1006, cálculo propio sobre cifras oficiales), `roic` (0,185, oficial FY2025), `evEbitda` (3,55), `priceToSales` (0,69, cálculo propio). Fuentes: iairgroup.com (resultados anuales 2025), airline92.com, bolsamania.com, cronista.com, stockanalysis.com/quote/bme/IAG/statistics. Consulta: 8-sep-2026.
- Se descartaron por no plausibles (distorsión del ciclo COVID-recuperación) el `revenueGrowthCagr5y` (30,6%/año) y `epsGrowthCagr5y` (71,1%/año) de Simply Wall St: reflejan la recuperación desde las pérdidas de la pandemia (2020-2021), no un crecimiento orgánico sostenible.
- Dejado en null: `revenueGrowthCagr3y`, `epsGrowthCagr3y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `earningsStability`, `interestCoverage`, `peg`, `priceToFcf`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying/Increasing`, `dividendCagr*`, `dividendCoverage`. `roe` y `netDebtToEbitda` ya estaban rellenos de rondas anteriores y no se han tocado pese a ver dispersión adicional en fuentes nuevas (roe entre 15,7% y 58,3% según fuente).

### Iberdrola (IBE)
- Añadido: `forwardPer` (18,26), `operatingMargin` (0,22, cálculo propio sobre EBIT oficial 9.891,9M€), `netMargin` (0,14, cálculo propio), `roic` (0,0508, punto medio de un rango de fuentes 4,84%-5,44%), `peg` (2,81), `evEbitda` (12,88), `priceToSales` (2,82, cálculo propio), `revenueGrowthCagr5y` (0,021), `epsGrowthCagr5y` (0,077). Fuentes: iberdrola.com (resultados FY2025: ingresos 45.017,3M€, EBIT 9.891,9M€, beneficio neto 6.285M€), cronista.com, eleconomista.es, stockanalysis.com/quote/bme/IBE/statistics, simplywall.st, gurufocus.com. Consulta: 8-sep-2026.
- `payoutRatioEarnings` se mantiene en null tras esta ronda: las cifras nuevas encontradas (73,5%-75,9%) siguen sin distinguir con claridad si usan el beneficio neto reportado o el atribuible ajustado (la política oficial declarada del 65-75% es sobre el ajustado), la misma dispersión ya documentada en rondas anteriores.
- Se descartó por matemáticamente implausible un dato de crecimiento de dividendo a 10 años ("22,675% anual", que compondría el dividendo x29 en una década).
- Dejado en null: `revenueGrowthCagr3y`, `epsGrowthCagr3y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `earningsStability`, `interestCoverage`, `priceToFcf`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `consecutiveYearsPaying`, `dividendCagr*`, `dividendCoverage`.

### Limitación general de esta ronda
Igual que en la ronda 2, sin acceso a fetch directo de páginas. Varios ratios de valoración (evEbitda, priceToSales, priceToFcf, netMargin) se calcularon manualmente a partir de componentes oficiales verificados (ingresos, EBITDA/EBIT, beneficio neto, marketCap o precio x acciones en circulación) cuando las cifras del ratio ya calculado por fuentes externas eran contradictorias entre sí — el razonamiento y las cifras base de cada cálculo están documentados en el `sourceNote` de cada empresa para poder auditarlos o corregirlos en el futuro con acceso a datos primarios.

---

## Ronda 3 (septiembre 2026): crecimiento, calidad, valoración y riesgo — ROVI, SCYR, SLR, TEF, UNI

Tercera ronda de investigación centrada en las categorías que las rondas anteriores dejaron sin cubrir (crecimiento, calidad, valoración, riesgo) para Laboratorios Rovi, Sacyr, Solaria, Telefónica y Unicaja Banco. Recopilación por búsqueda web (Claude WebSearch) el 8-sep-2026; igual que en la ronda 2, el fetch directo de páginas (stockanalysis.com, macrotrends.net, etc.) devolvió "EGRESS_BLOCKED" en este entorno, así que todos los datos proceden de resúmenes/snippets de búsqueda que citan esas fuentes, contrastados entre sí cuando ha sido posible. Donde distintas fuentes daban cifras claramente incompatibles, el campo se dejó en `null`.

### Laboratorios Rovi (ROVI)
- Añadido: `revenueGrowthCagr3y` (-3,07%), `epsGrowthCagr5y` (-1%, aprox.), `operatingMargin` (21,61%), `netMargin` (17,79%), `roic` (17,42%), `peg` (1,39), `evEbitda` (14,58x) y `priceToSales` (4,14, marketCap/ingresos TTM) — fuente: stockanalysis.com (BME:ROVI, statistics), consulta 8-sep-2026. `priceToFcf` (25,58) calculado como marketCap/FCF FY2025 (120,0M€, resultados oficiales de Rovi, feb-2026). `consecutiveYearsPaying` (18 años) de fuente única (Simply Wall St), no verificado de forma cruzada.
- Los valores de crecimiento negativo reflejan el bache del negocio de fabricación por contrato (CDMO) en 2025, ya documentado en la ficha; no son un error.
- `beta` descartado por dispersión excesiva entre fuentes no reconciliable: 0,22 (stockanalysis.com) vs 0,74-0,80 (otra fuente vía investing.com) — diferencia de más de 3x.
- Dejado en null: `epsGrowthCagr3y`, `fcfGrowthCagr3y` (solo 2 años de FCF verificados, 59,9M€ 2023 y 76,2M€ 2024, insuficiente para un CAGR a 3 años), `operatingMarginTrend5y`, `interestCoverage`, `earningsStability`, `volatility3y`, `maxDrawdown5y`, `perVsHistoricalAvg5y`, `dividendCagr*`, `consecutiveYearsIncreasing` (fuentes contradictorias sobre si hubo o no un recorte reciente).

### Sacyr (SCYR)
- Añadido: `forwardPer` (22,24), `beta` (0,78), `peg` (0,92), `priceToFcf` (2,43), `priceToSales` (0,51), `operatingMargin` (22,76%), `netMargin` (2,04%), `roic` (6,83%) y `revenueGrowthCagr5y` (1,1%/año) — fuente: stockanalysis.com (BME:SCYR, statistics) y Simply Wall St "past performance", consulta 8-sep-2026. `evEbitda` (~8,9x) calculado a partir del enterprise value (11,83bn€) y el EBITDA TTM (1,33bn€) publicados en la misma página de stockanalysis. `consecutiveYearsPaying` (7 años) de fuente única (wisesheets.io).
- `epsGrowthCagr3y/5y` dejado en null pese a encontrarse cifras (17-38%/año según fuente): el beneficio neto pasó de una pérdida de -157,8M€ en 2023 a beneficios positivos en 2024-2025, lo que hace que cualquier CAGR no sea una medida de tendencia fiable.
- `dividendYield` y `payoutRatioEarnings` dejados en null: fuentes muy dispares sobre el dividendo por acción (0,045€ en efectivo vs 0,09-0,15€ total combinando tramos en efectivo y en scrip) y un payout ratio citado que va del ~75% a un 168% imposible de reconciliar.
- Dejado en null también: `revenueGrowthCagr3y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `interestCoverage`, `earningsStability`, `volatility3y`, `maxDrawdown5y`, `perVsHistoricalAvg5y`, `dividendCagr*`, `consecutiveYearsIncreasing`.

### Solaria Energía y Medio Ambiente (SLR)
- Añadido: `per` (12,04) y `forwardPer` (11,52) — fuente: stockanalysis.com (BME:SLR, statistics), consulta 8-sep-2026, junto con `peg` (0,56) y `roic` (7,52%).
- `revenueGrowthCagr3y` (21,8%/año) y `epsGrowthCagr3y` (31%/año → 15% real, ver nota) son estimaciones propias encadenando las variaciones porcentuales anuales publicadas por la propia Solaria en sus notas de prensa oficiales de resultados (ingresos ~167,9M€ 2022→230M€ 2023→239,4M€ 2024→303,4M€ 2025; beneficio neto ~90,3M€ 2022→107,5M€ 2023→88,6M€ 2024→137,4M€ 2025), no de una fuente que ya las calcule — el valor de 2022 en ambos casos es implícito (derivado de un % de variación publicado, no una cifra absoluta directa). `operatingMargin` (71,76%) y `netMargin` (45,3%) también de resultados oficiales FY2025 (EBIT 217,7M€, beneficio neto 137,4M€, ingresos 303,4M€). `evEbitda` (13,68x) calculado a partir del enterprise value de stockanalysis.com (3,64bn€) y el EBITDA oficial FY2025 (266,1M€). `priceToSales` (7,26) calculado como marketCap (2.202,46M€, ya en ficha) / ingresos FY2025 (303,4M€).
- ADVERTENCIA para futuras revisiones: varias búsquedas mezclaron datos de "Complete Solaria, Inc." (CSLR, empresa estadounidense no relacionada) con los de Solaria Energía y Medio Ambiente (BME:SLR); se descartaron los resultados que no citaban explícitamente el ticker BME:SLR.
- `netDebtToEbitda` NO se ha actualizado (se mantiene 6,8x de cierre de 2024 ya en ficha) pese a encontrarse cifras algo distintas y más recientes (4,5x-5,0x a cierre de 2025/1T2026, resultados oficiales), por no tratarse del mismo periodo exacto ya verificado en la ficha; se deja nota.
- Dejado en null: `revenueGrowthCagr5y`, `epsGrowthCagr5y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `interestCoverage`, `earningsStability`, `priceToFcf` (la empresa está en fase de capex muy intensivo, ~400M€ en 2025, que puede dejar el FCF negativo o muy reducido), `volatility3y`, `maxDrawdown5y`, `perVsHistoricalAvg5y`.

### Telefónica (TEF)
- Aclarada la advertencia de la ronda 1 sobre "noticias contradictorias" de dividendo: no había contradicción real — Telefónica recortó el dividendo en efectivo de 0,30€ a 0,15€/acción a partir del ejercicio 2026 (pagadero en un único plazo en junio de 2027, antes en dos plazos semestrales), fuente: benzinga.com (es) y eulerpool.com, consulta 8-sep-2026. `consecutiveYearsIncreasing` se fija en 0.
- Añadido: `netDebtToEbitda` (2,78x, cierre FY2025, resultados oficiales de Telefónica), `beta` (0,30, listado BME específico — no confundir con el 0,57 del ADR NYSE), `roic` (2,71%), `evEbitda` (7,37x) y `priceToSales` (0,60, marketCap/ingresos de continuadas 2025) — fuente: stockanalysis.com (BME:TEF, statistics). `volatility3y` (26,17%) — fuente: portfolioslab.com.
- Pérdida neta de -4.318M€ en 2025 (que ya explica el ROE -28,6% existente en ficha) es casi toda extraordinaria: -2.260M€ por venta de filiales en Argentina/Perú/Ecuador/Uruguay y -2.170M€ de costes de reestructuración (ERE); excluyendo extraordinarios, el beneficio de continuadas habría sido 2.120M€ (-19% interanual) — fuente: thecorner.eu, advanced-television.com, consulta 8-sep-2026. Por esta distorsión y el cambio de perímetro (venta de varias filiales), se dejó en null: `netMargin`, `operatingMargin`, `revenueGrowthCagr3y/5y`, `epsGrowthCagr3y/5y`, `earningsStability`, `payoutRatioEarnings`.
- Dejado en null también: `peg`, `priceToFcf` (solo se encontró EV/FCF, una métrica distinta que no debe confundirse con precio/FCF), `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `interestCoverage`, `maxDrawdown5y`, `perVsHistoricalAvg5y`, `consecutiveYearsPaying` (se confirmó al menos 3 años seguidos de 0,30€/acción 2023-2025, pero no una cifra total exacta y verificada desde la reanudación del dividendo en 2013-2014), `dividendCagr*`.

### Unicaja Banco (UNI)
- Añadido: `forwardPer` (11,58), `roe` (9,03%) y `netMargin` (31,4%, beneficio neto/ingresos totales TTM, misma metodología usada con CaixaBank en la ronda 2) — fuente: stockanalysis.com (BME:UNI, statistics), consulta 8-sep-2026. `consecutiveYearsPaying` (5) y `consecutiveYearsIncreasing` (3) — fuente: Simply Wall St "dividend".
- `epsGrowthCagr3y` (31%/año) es una estimación propia encadenando el beneficio neto oficial 2022→2025 (~278,1M€ [implícito] → 267M€ 2023 → 573M€ 2024 → 625,5M€ 2025, bolsamania.com y stockanalysis.com); el salto de 2024 refleja en gran parte la normalización tras el impuesto extraordinario a la banca de 2023 (sin ese impuesto, 2023 habría sido 330M€, +19% vs 2022) y la subida de tipos, no crecimiento orgánico puro — se documenta el matiz en `sourceNote` sin descartar el dato.
- ADVERTENCIA de coherencia: se encontraron cifras de `beta` (0,44) y `per` (11,54) de stockanalysis.com sensiblemente distintas de las ya existentes en la ficha (1,13 y 12,87 respectivamente, de la ronda 1); siguiendo la regla de "rellenar solo si está en null", NO se han sobrescrito, pero se deja constancia de la dispersión en `sourceNote` para una futura revisión.
- Dejado en null (no aplican bien al modelo de negocio bancario, o no se encontró cifra fiable): `revenueGrowthCagr3y/5y`, `operatingMargin`, `roic`, `evEbitda`, `peg`, `priceToFcf`, `priceToSales`, `volatility3y`, `maxDrawdown5y`, `perVsHistoricalAvg5y`, `interestCoverage`, `earningsStability`, `dividendCagr*`, `netDebtToEbitda` (banco: aplica CET1, ya señalado en la ficha).

### Limitación general de esta ronda
Igual que en la ronda 2, el fetch directo de páginas no tuvo acceso a los dominios financieros habituales en este entorno (EGRESS_BLOCKED), así que todos los datos proceden de resúmenes de búsqueda. Varias cifras de crecimiento a 3 años (Solaria, Unicaja) son estimaciones propias construidas encadenando variaciones porcentuales anuales oficiales en vez de leerse ya calculadas de una fuente — se han documentado explícitamente como tales en cada `sourceNote`. Se recomienda, en una futura ronda con acceso a fetch directo, verificar `volatility3y`, `maxDrawdown5y` e `interestCoverage` para las 5 empresas, que se han dejado en null de forma generalizada por falta de una fuente fiable encontrada por búsqueda.

## Ampliación del universo — S&P 500 (salud, consumo, energía)

Investigación de 7 empresas del S&P 500 en `lib/data/providers/globalCompanies.ts` (LLY, AVGO, PG, XOM, UNH, WMT, TSLA), previamente en el fichero como esqueleto con solo campos de identidad. Recopilación por búsqueda web (Claude WebSearch) el 8-sep-2026; el fetch directo de páginas (stockanalysis.com, macrotrends.net, wsj.com, marketwatch.com, gurufocus.com) devolvió "EGRESS_BLOCKED" o error de acceso en este entorno, así que todos los datos proceden de resúmenes/snippets de búsqueda que citan esas fuentes, contrastados entre sí cuando ha sido posible. Donde distintas fuentes daban cifras claramente incompatibles o dispersas sin poder reconciliarlas, el campo se dejó en `null`. El detalle completo de fuentes y discrepancias por campo está en el `sourceNote` de cada ficha; aquí solo un resumen.

### Eli Lilly (LLY)
Investigado: price (1.149,36$) y marketCap (~1,02 billón USD) de stockanalysis.com/investing.com, consulta 8-sep-2026. roic (42,24%), roe (102,29%), operatingMargin (49,72%), netMargin (34,99%), per (38,58), forwardPer (28,18), peg (1,33), evEbitda (25,65x), priceToSales (12,03x), beta (0,35), return1y (44,61%) y distanceFromHigh52w (11,1%) de financecharts.com/stockanalysis.com. consecutiveYearsPaying (55) y consecutiveYearsIncreasing (12) de tipranks.com/globalandmail.com. Dejado en null por dispersión extrema entre fuentes o falta de cifra fiable: payoutRatioEarnings, dividendCagr3y/10y, dividendCoverage, revenueGrowthCagr3y/5y, epsGrowthCagr3y/5y, netDebtToEbitda, interestCoverage (210x vs 30,2x, no reconciliable), priceToFcf, volatility3y, maxDrawdown5y, return6m, return3yCagr, aboveSma200.

### Broadcom (AVGO)
Investigado: price (357,90$) y marketCap (~1,77 billón USD) de stockanalysis.com. roic (24,22%), roe (37,28%), operatingMargin (41,27%), netMargin (36,20%), revenueGrowthCagr3y/5y (36,3%/27,4%) y epsGrowthCagr3y/5y (21,5%/49,4%) de financecharts.com/investing.com/simplywall.st — crecimiento muy elevado real por la demanda de semiconductores de IA. dividendCagr3y (13,4%), dividendCagr10y (31%, con cautela), payoutRatioEarnings (49,52%), consecutiveYearsPaying (17) y consecutiveYearsIncreasing (14) de seekingalpha.com/marketbeat.com. netDebtToEbitda (1,6x), per (61,83x), forwardPer (23,55x), beta (1,47), return6m (9,02%), return1y (24,67%), return3yCagr (64,76%) y distanceFromHigh52w (27,7%) de gurufocus.com/financecharts.com/stockanalysis.com. Dejado en null: peg, evEbitda, priceToFcf, priceToSales (no localizados con fiabilidad), earningsStability, interestCoverage, volatility3y, maxDrawdown5y, aboveSma200.

### Procter & Gamble (PG)
Confirmado como Dividend King: dividendo ininterrumpido desde 1890 (136 años, simplysafedividends.com) y 70 subidas consecutivas (finance.yahoo.com/AOL, abril 2026) — se descartó una cifra alternativa de "54 años" por parecer el rango de un gráfico y no un conteo real de subidas. Investigado: price (146,44$), marketCap (~343.000M USD), dividendYield (2,96%), payoutRatioEarnings (63,38%) de stockanalysis.com/dividend.com. revenueGrowthCagr3y/5y (2,25%/2,38%), dividendCagr5y (4,58%), roic (21,54%), roe (30,29%), operatingMargin (24,81%), netMargin (18,44%), netDebtToEbitda (1,54x), per (22,13x), forwardPer (20,98x), evEbitda (14,78x), priceToSales (3,93x), beta (0,38), return1y (-4,45%) y return3yCagr (~-0,01%, plano) de financecharts.com/gurufocus.com/seekingalpha.com. Dejado en null: epsGrowthCagr3y/5y, fcfGrowthCagr3y, earningsStability, interestCoverage, peg, priceToFcf, volatility3y, maxDrawdown5y, return6m, aboveSma200.

### ExxonMobil (XOM)
Petrolera cíclica: revenueGrowthCagr5y (12,62%/año) refleja en gran parte la recuperación desde el colapso del petróleo de 2020, se mantiene por ser cifra real pero se advierte del sesgo cíclico; epsGrowthCagr3y/5y se dejaron en null por mezclar recuperación poscovid con la caída reciente del ciclo del petróleo sin base comparable fiable. Investigado: price (159,47$), marketCap (~472.070M USD), dividendYield (2,48%), consecutiveYearsPaying/Increasing (44 años) y dividendCagr5y (3,00%) de gurufocus.com/stockanalysis.com/finance.yahoo.com. payoutRatioEarnings (53,1%) es cálculo propio (dividendo 4,12$ / BPA TTM 7,76$, ambos sourced). roic (10,02%), roe (12,58%), operatingMargin (11,16%), netMargin (9,07%), per (21,42x), forwardPer (13,76x), evEbitda (10,52x), return1y (29,18%) y return3yCagr (18,08%) de financecharts.com/gurufocus.com/portfolioslab.com. beta dejado en null por dispersión extrema e inconsistente (-0,31/0,17/0,29 según fuente, incluyendo un valor negativo poco plausible). netDebtToEbitda dejado en null por contradicción entre "posición de caja neta" citada y las cifras de deuda/caja subyacentes, que implican deuda neta positiva. Dejado en null también: revenueGrowthCagr3y, priceToSales, earningsStability, interestCoverage, peg, volatility3y, maxDrawdown5y, return6m, aboveSma200.

### UnitedHealth Group (UNH)
2025-2026 muy distorsionado por problemas regulatorios/legales (investigación DOJ, escándalo de codificación de riesgo en Medicare Advantage): EPS cayó de 15,64$ (2024) a 13,28$ (2025), margen neto se hundió a 2,72% y ROIC/ROE cayeron a la mitad en dos años (sec.gov 8-K FY2025, gurufocus.com). Por esto epsGrowthCagr3y (0,75%) y roic (5,98% TTM) reflejan una base muy deprimida; earningsStability se dejó en null precisamente por esta inestabilidad. Investigado: price (395,85$), marketCap (~356.470M USD) de stockanalysis.com. dividendYield (2,25%), payoutRatioEarnings (57,33%), consecutiveYearsIncreasing (17, otra fuente da 19) y dividendCagr5y (11,47%) de dividendmax.com/koyfin.com. revenueGrowthCagr3y/5y (11,58%/12,42%), epsGrowthCagr5y (5,94%), operatingMargin (4,54%, cierre 2025), netMargin (2,72%, cierre 2025), per (32,11x), forwardPer (22,37x), beta (0,62), return6m (39,4%, fuerte rebote tras el suelo de marzo de 2026) y return1y (30,42%) de financecharts.com/motleyfool.com/dividendmax.com. distanceFromHigh52w (14,3%) calculado sobre un rango de 52 semanas extremadamente amplio (255,97$-461,62$), reflejo directo de la volatilidad del año. netDebtToEbitda dejado en null por dispersión no reconciliada (1,2x vs 3,76x). Dejado en null también: payoutRatioFCF, dividendCagr3y/10y, dividendCoverage, fcfGrowthCagr3y, operatingMarginTrend5y, interestCoverage, peg, evEbitda, priceToFcf, priceToSales, volatility3y, maxDrawdown5y, return3yCagr, aboveSma200.

### Walmart (WMT)
Confirmado como Dividend King: primer dividendo en 1974, subido cada año durante 52 años consecutivos (thestreet.com/suredividend.com). Investigado: price (107,14$), marketCap (~850.020M USD) de stockanalysis.com/macrotrends.net. dividendYield (0,92%), payoutRatioEarnings (36,16%), dividendCagr3y (9,17%), roic (13,31%), roe (22,31%), operatingMargin (3,94%) y netMargin (3,00%, coherentes con el modelo de bajo margen de la distribución minorista), epsGrowthCagr5y (15,56%), netDebtToEbitda (1,59x), interestCoverage (12x), per (38,82x), forwardPer (35,74x), evEbitda (20,73x), beta (0,58), return1y (7,74%) de stockanalysis.com/financecharts.com/gurufocus.com/macrotrends.net. distanceFromHigh52w recalculado directamente en 20,7% (máximo 135,16$, precio 107,14$); una fuente citaba "26,2%", aritméticamente inconsistente con sus propios datos, no usada. epsGrowthCagr3y descartado (47,77% encontrado, implausible para 3 años en una empresa de este tamaño, probable distorsión por año base anómalo). Dejado en null también: revenueGrowthCagr3y/5y, dividendCagr5y/10y, dividendCoverage, earningsStability, peg, priceToFcf, priceToSales, volatility3y, maxDrawdown5y, return3yCagr, return6m, aboveSma200.

### Tesla (TSLA)
Verificado que Tesla no paga ni ha pagado nunca dividendo en efectivo y no prevé hacerlo (seekingalpha.com/gurufocus.com, payout ratio 0,00) — por eso dividendYield, payoutRatioEarnings, payoutRatioFCF, consecutiveYearsPaying y consecutiveYearsIncreasing se fijan en 0 (hecho verificado), no en null. Investigado: price (368,91$) y marketCap (~1,45 billón USD, 3.950M acciones, cifras coherentes entre sí) de stockanalysis.com. roic (3,34%), roe (4,38%, junio 2026), netMargin (3,67%) de gurufocus.com/financecharts.com/webull.com — reflejan la fuerte compresión de márgenes de 2026 (margen operativo GAAP 1,4% en Q2). per (341,58x) y forwardPer (186,01x) de gurufocus.com/stockanalysis.com (múltiplos extremos por el bajo beneficio actual, no un error). priceToSales (12,26x), beta (1,84), return6m (-11,06%), return1y (5,33%) y distanceFromHigh52w (26,0%) de stockanalysis.com/tradingview.com. netDebtToEbitda dejado en null: Tesla tiene posición de caja neta (43,52bn$ caja vs 16,08bn$ deuda), el ratio no es una medida de apalancamiento relevante aquí. operatingMargin y evEbitda dejados en null por dispersión no reconciliada entre fuentes. Dejado en null también: revenueGrowthCagr3y/5y, epsGrowthCagr3y/5y (cifras recientes muy negativas/dispersas), fcfGrowthCagr3y, earningsStability, interestCoverage, peg, priceToFcf, volatility3y, maxDrawdown5y, return3yCagr, aboveSma200.

### Limitación general de esta ronda
Igual que en rondas anteriores del IBEX35, el fetch directo de páginas no tuvo acceso a los dominios financieros habituales en este entorno (EGRESS_BLOCKED / error de acceso), así que todos los datos proceden de resúmenes de búsqueda (Claude WebSearch), citando en cada caso la fuente que aparece en el snippet. Varias métricas de riesgo y calidad más difíciles de sourcear de forma pública y fiable (volatility3y, maxDrawdown5y, perVsHistoricalAvg5y, earningsStability, interestCoverage, priceToFcf) se han dejado en null de forma generalizada para las 7 empresas por no encontrarse una fuente fiable o por dispersión excesiva entre fuentes — igual criterio aplicado en las rondas del IBEX35.

## Ampliación del universo — S&P 500 (grandes empresas)

Recopilación realizada el 8 de septiembre de 2026 en `lib/data/providers/globalCompanies.ts` para las 7 empresas estadounidenses del bloque "selección adicional de grandes empresas": AAPL, NVDA, AMZN, META, BRKB, JPM, V. Igual que en las rondas anteriores, el fetch directo estuvo bloqueado (EGRESS_BLOCKED) para prácticamente todos los dominios financieros habituales (stockanalysis.com, macrotrends.net, gurufocus.com, wsj.com, marketwatch.com, sec.gov), así que todos los datos proceden de resúmenes de búsqueda (WebSearch), citando la fuente que aparece en cada snippet.

### Apple (AAPL)
- Precio (319,97$, 4-sep-2026) y market cap (4,61 billones $) — fuente: stockanalysis.com/finance.yahoo.com vía snippet de búsqueda. PER (36,69x) y forward PER (34,73x) — financecharts.com/public.com.
- ROE con dispersión notable entre fuentes (111,36% GuruFocus vs 151,9% otra fuente) por el patrimonio neto muy reducido tras años de recompras; se usa 111,36%. ROIC (51,01%) — mlq.ai.
- Márgenes (operativo ~32%, neto 26,9%) y crecimiento (ingresos 7%/6% a 3/5 años, BPA +17,7% a 5 años) — artificall.com, stockstory.org, csimarket.com.
- Deuda: neta prácticamente nula/caja neta; interestCoverage (673x) y netDebtToEbitda (dato contradictorio, se deja en null) — finance.yahoo.com, stock-analysis-on.net.
- Dividendo: yield 0,34%, racha de incrementos 14-15 años según fuente (se usa 14) — 247wallst.com.
- Riesgo/momentum: beta 0,93-1,09 (se usa 1,09), 52w high 344,57$, retorno 1a +37%, 6m +37,9%, por encima de SMA200 — gurufocus.com, financecharts.com, barchart.com.

### Nvidia (NVDA)
- Precio (230,36$) y market cap (5,67 billones $) — fuente snippet de búsqueda (tradingeconomics/robinhood), 8-sep-2026. Cifras ya ajustadas al split 10x1 de junio de 2024.
- PER (29,12x, GuruFocus) y forward PER (19,10 vs 24,50 según fuente; se usa 24,50). ROE (112-117%), ROIC (92,03%), márgenes operativo/neto (65,21%/63,66%) — nvidianews.nvidia.com, gurufocus.com, stock-analysis-on.net.
- Crecimiento explosivo por el boom de IA: ingresos +125%/71% CAGR 3/5 años, BPA diluido +209%/100% CAGR 3/5 años — financecharts.com.
- Dividendo mínimo (yield 0,43%, 14 años pagando, solo 3 años de incrementos tras la gran subida de 2024) — fullratio.com, investsnips.com.
- Deuda mínima/caja neta (interestCoverage e netDebtToEbitda no informativos, se dejan en null) — gurufocus.com.
- Riesgo/momentum: beta 2,22, PEG 0,37, EV/EBITDA 27,52, 52w high 236,54$, retorno 1a +34,2%, por encima de SMA200 — gurufocus.com, investing.com.

### Amazon (AMZN)
- Precio (256,45$) y market cap (2,79 billones $) — fullratio.com/tipranks.com. Amazon NO reparte dividendo (confirmado, dividendYield=0) — dividendpedia.com.
- PER con fuerte dispersión (20,8x con BPA TTM que incluye partidas no recurrentes vs 35,3x con BPA FY2025 GAAP; se usa esta última) — financecharts.com, macrotrends.net.
- Crecimiento: ingresos +11,3%/15,8% CAGR 3/5 años; BPA se deja en null por la distorsión de la pérdida neta de 2022 en el cálculo de CAGR (fuentes muy dispares 27,9%-106,9%) — macrotrends.net, finbox.com.
- ROE 30,56%, ROIC 11,94%, margen operativo 11,2%, margen neto 12,2% — tipranks.com. FCF de los últimos 12 meses negativo por el capex de IA/AWS; priceToFcf y fcfGrowthCagr3y en null.
- netDebtToEbitda 0,3x (mínimo de 5 años, dic-2025), interestCoverage 43,55x — finbox.com, valuesense.io.
- Riesgo/momentum: beta 1,45, 52w high 258,60$, retorno 1a +14,53% — financecharts.com, totalrealreturns.com.

### Meta Platforms (META)
- Precio (613,26$) y market cap (1,57 billones $, con una fuente alternativa de 1,42 billones) — stockanalysis.com/robinhood.com.
- PER 22,8-23,2x, forward PER 17,3-17,9x — financecharts.com, gurufocus.com.
- Meta inició su primer dividendo en febrero de 2024 (yield 0,35%); solo ~2 años de historial, 1 incremento hasta ahora — investor.atmeta.com, 24/7wallst vía snippet.
- ROE con fuerte dispersión (25,11% GuruFocus jun-2026 vs 29,85% stockanalysis vs 34,88% FY2024); se usa 25,11%. Margen operativo 41%, margen neto 30,1% — gurufocus.com, stock-analysis-on.net.
- Crecimiento: ingresos +22,4%/18,5% CAGR 3/5 años; BPA diluido +68%/25,93% CAGR 3/5 años — financecharts.com.
- Deuda: caja (~90.300M$) similar a deuda LP (~83.700M$) a mediados de 2026; netDebtToEbitda se deja en null por no reflejar bien la posición neta el ratio bruto (1,08x); interestCoverage 71,5x (2025) — macrotrends.net, gurufocus.com.
- Riesgo/momentum: beta 1,24, PEG 0,92, EV/EBITDA 13,77, priceToFcf 32,15, 52w range 520,26$-790,80$, retorno 1a -17,61%, 6m -4,80%; aboveSma200 se deja en null por datos contradictorios entre fuentes (610,79 vs 623,79 de SMA200 frente a precio 613,26) — gurufocus.com, nasdaq.com.

### Berkshire Hathaway (BRKB / BRK.B)
- Ticker real de mercado: BRK.B (sin puntuación en la ficha por compatibilidad de URLs). Precio (505,93$) y market cap (1,08 billones $, con una fuente alternativa de 1,09 billones) — fullratio.com/investing.com.
- Es un holding diversificado (seguros, ferrocarril, energía, cartera de acciones cotizadas), no una empresa operativa típica: se dejaron en null operatingMargin, netMargin, evEbitda, priceToFcf, priceToSales, netDebtToEbitda e interestCoverage por no ser métricas comparables de forma estándar en este modelo de negocio.
- revenueGrowthCagr y epsGrowthCagr en null: las fuentes citan cifras de ingresos muy dispares (de -3,2% a +77,7%) por la volatilidad de las plusvalías/minusvalías no realizadas de la cartera bajo US GAAP — financecharts.com, wallstreetzen.com.
- Berkshire NO reparte dividendo (el consejo revisa la política cada año) — fool.com. PER muy volátil entre fuentes (12,6x-16,3x) por el mismo motivo de plusvalías/minusvalías en el resultado GAAP; forwardPer 22,94x de una única fuente.
- ROE 12,12% y ROIC 19,28% incluidos como aproximación best-effort — gurufocus.com/stockanalysis.com. Beta con dispersión fuerte (0,1464 vs 0,61; se usa 0,61) — gurufocus.com.
- Book value por acción B usado para contexto de P/B: 348,26$ (jun-2026) — gurufocus.com. Retorno 1a +3,64% — según snippet de totalrealreturns.com.

### JPMorgan Chase (JPM)
- Precio (358,64$) y market cap (944.560M$) — investing.com/robinhood.com vía snippet, 8-sep-2026. PER (15,36x) y forward PER (14,34x) — fullratio.com, gurufocus.com.
- Banco comercial/de inversión: se dejaron en null operatingMargin, netMargin, netDebtToEbitda, interestCoverage, evEbitda, priceToFcf, priceToSales y peg por no ser métricas estándar/comparables para un banco (mismo criterio usado con bancos y aseguradoras del IBEX35).
- ROE oficial de la compañía para 2025: 17% (ROTCE 20%); GuruFocus cita 18,16% en otra fecha — jpmorganchase.com (comunicado 4T25), gurufocus.com.
- Crecimiento: ingresos +13,65%/17,84% CAGR 3/5 años; BPA +18,3%/17,7% promedio anual 3/5 años — financecharts.com.
- Dividendo: yield 1,67%, payout ~29%, racha de incrementos citada como 14 años (streak explícito en el anuncio de subida de abril 2026) o 16 según otra fuente (se usa 14); consecutiveYearsPaying se deja en null por el recorte de dividendo de 2009 (crisis financiera) que hace ambigua esa cuenta sin una fuente que la calcule explícitamente — 247wallst.com, kavout.com.
- Riesgo/momentum: beta 0,9266, 52w range 279,10$-366,50$, retorno 1a +27,37%, 6m -7,65%, por encima de SMA200 — gurufocus.com, financecharts.com.

### Visa (V)
- Precio (382,41$, 24-ago-2026) y market cap (700.270M$) — fullratio.com/tipranks.com. PER (32,49x) y forward PER (24,96x) — fullratio.com, gurufocus.com.
- Dividendo: yield 0,74%, payout sobre beneficio ~22,5% y sobre FCF ~21,5% (FCF 21.600M$ vs dividendos pagados 4.600M$, dividendCoverage ~4,7x), racha de incrementos citada como 17 o 18 años según fuente (se usa 17), dividendCagr3y 14,16% y dividendCagr5y 15,93% — finance.yahoo.com, financecharts.com, simplywall.st.
- ROE 61,19%; ROIC con dispersión notable entre fuentes (28,17%-54,82%; se usa 33,43% de GuruFocus jun-2026). Margen neto ~50,8% — gurufocus.com, financecharts.com. operatingMargin no se encontró con cifra fiable y se deja en null.
- Crecimiento: ingresos +14,45% CAGR 5 años; BPA básico +14,78% CAGR 3 años, +20,1% promedio anual 5 años — finbox.com, tikr.com.
- Deuda: neta 8.010M$ (sep-2025), debt/EBITDA bruto 0,88-0,93x; netDebtToEbitda se deja en null por cifras de EBITDA demasiado dispares entre fuentes para un cálculo fiable. interestCoverage 35,74x (Q3 2026, con tendencia decreciente desde 43,60x) — gurufocus.com, businessquant.com.
- Riesgo/momentum: beta 0,76, PEG 1,87, EV/EBITDA 21,82, priceToSales 15,74 (calculado de ingresos LTM 44.490M$ y capitalización), 52w range 293,89$-385,57$, retorno 1a -6,86%, por encima de SMA200 — financecharts.com, tikr.com.

### Limitación general de esta ronda (ampliación S&P 500)
El fetch directo estuvo bloqueado (EGRESS_BLOCKED) para todos los dominios financieros probados (stockanalysis.com, macrotrends.net, gurufocus.com, sec.gov, wsj.com, marketwatch.com), por lo que todos los datos proceden de resúmenes de búsqueda (WebSearch), citando la fuente que aparece en el snippet. Varias métricas quedaron en null de forma deliberada por: (a) contradicción relevante entre fuentes sin forma de reconciliarlas (p. ej. netDebtToEbitda en META y V, aboveSma200 en META, beta en BRKB), (b) distorsión de la cifra base por eventos puntuales (pérdida neta 2022 de Amazon, plusvalías/minusvalías de la cartera de Berkshire), o (c) el concepto no siendo comparable de forma estándar para el modelo de negocio (bancos: JPM; holding de seguros/industrial: BRKB). Se recomienda, en una futura ronda con acceso a fetch directo a fuentes primarias (10-K/10-Q en sec.gov, IR de cada compañía), verificar en particular `volatility3y`, `maxDrawdown5y`, `perVsHistoricalAvg5y` y `earningsStability`, que se dejaron en null de forma generalizada en las 7 empresas por no encontrarse una fuente fiable vía búsqueda.

---

## Ampliación del universo — empresas españolas fuera del IBEX35

Primera investigación de datos reales para las 4 empresas españolas cotizadas en BME que no forman parte del IBEX35 añadidas a `lib/data/providers/globalCompanies.ts` (VIS, EBRO, TRE, GEST). Recopilación por búsqueda web (Claude WebSearch) el 8 de septiembre de 2026. Igual que en las rondas anteriores del IBEX35, el fetch directo de páginas (`WebFetch`) estuvo bloqueado por el proxy de salida para todos los dominios probados en esta sesión (stockanalysis.com, investing.com, marketscreener.com, bolsamania.com, google.com/finance, tecnicasreunidas.es), así que todos los datos proceden de resúmenes/snippets de búsqueda que citan esas fuentes, contrastados entre varios agregadores cuando fue posible. Donde distintas fuentes daban cifras claramente incompatibles, o una cifra parecía un artefacto de un año base anómalo (pérdidas puntuales, provisiones extraordinarias), el campo se dejó en `null` en vez de forzar un valor.

### Viscofan (VIS)
- `price` (57,30€) y `marketCap` (2.635,8M€) calculados con 46.000.000 de acciones en circulación (capital social oficial de la página de relación con inversores de Viscofan) y el precio de cierre más reciente encontrado (finales de agosto de 2026).
- Añadido con base en resultados oficiales FY2025 (ingresos 1.252M€, EBITDA 290M€, EBIT 204,8M€, beneficio neto 159,9M€, EPS 3,50€): `operatingMargin` (0,164), `netMargin` (0,128), `per` (16,37), `evEbitda` (9,69), `priceToSales` (2,11), `netDebtToEbitda` (0,71, deuda neta bancaria 206,1M€/EBITDA 290M€).
- Añadido de agregadores (gurufocus.com, Yahoo Finance): `roic` (0,147), `roe` (0,168), `beta` (0,14, beta 5Y mensual de Yahoo Finance — se descartaron valores muy dispares de otros widgets, entre 0,08 y 1,20, por poca fiabilidad metodológica), `epsGrowthCagr3y` (0,06).
- Añadido de fuentes de dividendo (rankia.com, quantic.es): `dividendYield` (0,0553, sobre el dividendo total FY2025 de 3,171€/acción), `payoutRatioEarnings` (0,90, calculado; una fuente reporta 92,4%), `consecutiveYearsIncreasing` (4), `dividendCagr3y` (0,2011), `dividendCagr5y` (0,0609).
- Fuentes: rankia.com análisis fundamental jul-2026, viscofan.com nota de resultados FY2025, forbes.es/noticiasdenavarra.com resultados 2025, gurufocus.com (ROIC/ROE), Yahoo Finance key-statistics (beta, 52w range), stockanalysis.com (vía snippet, márgenes/EV-EBITDA/price-to-sales), quantic.es dividendo.
- Dejado en null: `consecutiveYearsPaying` (se sabe que reparte dividendo desde hace décadas pero no se encontró una cifra exacta y verificada), `dividendCagr10y`, `dividendCoverage`, `payoutRatioFCF` (una fuente indicó FCF TTM ~0, dato poco fiable), `revenueGrowthCagr3y/5y` (solo se encontraron cifras de 13 años históricos y una proyección a 3 años, ninguna es un CAGR histórico de 3 o 5 años), `epsGrowthCagr5y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `forwardPer`, `peg`, `priceToFcf`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `return6m`, `return1y`, `return3yCagr`, `aboveSma200`, `interestCoverage`, `earningsStability`.

### Ebro Foods (EBRO)
- `price` (18,24€) y `marketCap` (2.806,5M€) calculados con 153.865.392 acciones en circulación (capital social oficial confirmado en la convocatoria de la Junta General de junio 2026) y el precio de cierre del 3 de septiembre de 2026.
- Añadido: `netMargin` (0,071, FY2025 — cayó desde ~9,8% por la deflación de precios de arroz y pasta), `netDebtToEbitda` (0,54), `per` (12,57), `priceToSales` (0,94), `roic` (0,066), `beta` (0,16, beta 5Y mensual de Yahoo Finance para el listado BME específico), `dividendYield` (0,0378, sobre el dividendo total FY2025 realmente pagado de 0,69€/acción), `payoutRatioEarnings` (0,51, sobre el beneficio de 2024), `consecutiveYearsPaying` (23), `consecutiveYearsIncreasing` (8), `dividendCagr10y` (0,033).
- Fuentes: eleconomista.es dividendo histórico jun-2025, rankia.com análisis fundamental 2015-2024, dividendpedia.com historial de dividendo, Yahoo Finance key-statistics (PER, EPS TTM, beta por listado), stockanalysis.com (vía snippet, price-to-sales), simplywall.st/rankia ROIC.
- Dejado en null: `roe`, `operatingMargin`, `evEbitda`, `dividendCagr3y/5y` (solo se encontró un yield promedio a 5/10 años, que no es un CAGR de dividendo por acción y no se usó para no conflacionar métricas), `revenueGrowthCagr3y/5y` y `epsGrowthCagr3y/5y` (los datos encontrados — crecimiento a 19 años del 1,1%/año y a 2015-2024 del 3,1%/año — no corresponden a una ventana limpia de 3 o 5 años terminada en 2025), `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `forwardPer`, `peg`, `priceToFcf`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `return6m`, `return1y`, `return3yCagr`, `aboveSma200`, `interestCoverage`, `earningsStability`, `payoutRatioFCF`, `dividendCoverage`.

### Técnicas Reunidas (TRE)
- MUY IMPORTANTE: el dividendo de TRE está suspendido desde el ejercicio 2018. La compañía ha confirmado que lo reanudará con cargo a los resultados de FY2026 (a pagar en 2027) con un payout objetivo del 30%, pero esto es una guía futura, no un dividendo ya distribuido — por eso `dividendYield`, `payoutRatioEarnings`, `consecutiveYearsPaying/Increasing` y `dividendCagr*` se dejaron en `null` en vez de usar la cifra objetivo del 30%.
- `price` (25,44€, cotización del 7 de septiembre de 2026) y `marketCap` (2.043,3M€) calculados con 80.301.265 acciones (capital social según estatutos sociales oficiales de TR de 2025). La acción ha sido muy volátil en 2026 (rango 52 semanas ~21,14€-38,66€, Yahoo Finance) tras una provisión de 45M€ en el 1T2026 por circunstancias operativas en Oriente Próximo.
- Añadido con base en resultados oficiales FY2025 (ingresos 6.465,9M€, EBITDA 329,7M€, EBIT 291,1M€, beneficio neto 156,4M€, patrimonio neto 564M€, caja neta 332M€ tras amortizar anticipadamente el préstamo SEPI): `operatingMargin` (0,045), `netMargin` (0,024), `roe` (0,277, beneficio neto FY2025/patrimonio neto FY2025; stockanalysis.com cita 32,48% con otra metodología), `netDebtToEbitda` (-1,01, negativo porque la empresa tiene caja neta, no deuda neta), `evEbitda` (5,19, con EV = marketCap - caja neta), `priceToSales` (0,32).
- Añadido de Yahoo Finance: `per` (12,71, TTM), `beta` (1,22, 5Y mensual; otra fuente da 1,77, no reconciliado), `distanceFromHigh52w` (0,342).
- Fuentes: tecnicasreunidas.es notas de resultados oficiales (FY2025, 1T2026, 1S2026) y estatutos sociales 2025, eleconomista.es/forbes.es/elperiodicodelaenergia.com resultados FY2025 y anuncio de reanudación de dividendo, Yahoo Finance key-statistics (TRE.MC), GuruFocus/TipRanks/stockanalysis.com (ROIC, vía snippet, descartado por dispersión).
- Dejado en null: `roic` (dispersión no reconciliable entre fuentes: 11,88% TipRanks, 22,78% GuruFocus, 64,19% stockanalysis), `revenueGrowthCagr3y/5y` y `epsGrowthCagr3y/5y` (la empresa venía de pérdidas/resultados casi nulos en 2022, lo que invalida cualquier CAGR calculado sobre esa base), `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `forwardPer` (no se encontró una estimación de BPA forward suficientemente fiable), `peg`, `priceToFcf`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y` (el mínimo histórico de 5,22€ de agosto de 2022 sí cae dentro de la ventana de 5 años, pero el máximo relevante de esa misma ventana no se pudo determinar con confianza), `return6m`, `return1y` (una fuente citaba +110,98% a 12 meses pero en un contexto de precio distinto, ~30€, no reconciliado con el precio de 25,44€ usado en esta ficha), `return3yCagr`, `aboveSma200`, `interestCoverage`, `earningsStability`.

### Gestamp (GEST)
- `price` (2,98€, dato más reciente localizado, 26 de junio de 2026) y `marketCap` (1.715,0M€) calculados con 575.514.360 acciones en circulación (capital social oficial: 287.757.180€ / 0,50€ nominal).
- Añadido con base en resultados oficiales FY2025 (ingresos 11.349M€, EBITDA 1.323M€, beneficio neto 152,21M€, deuda neta 1.821M€): `netMargin` (0,0134), `netDebtToEbitda` (1,38, "mínimo desde su salida a bolsa en 2017" según la propia Gestamp), `evEbitda` (2,67), `priceToSales` (0,151), `per` (11,3, coherente con el 11,43 TTM de investing.com).
- `revenueGrowthCagr3y` (0,0189) y `revenueGrowthCagr5y` (0,0876) calculados por Claude a partir de ingresos anuales oficiales de la propia Gestamp (2020: 7.460M€; 2021: 8.090M€; 2022: 10.730M€; 2023: 12.274M€; 2024: 12.001M€; 2025: 11.349M€) — no de una fuente que ya los calcule.
- `epsGrowthCagr3y` (-0,164) usa el beneficio neto (2022 ≈260,2M€ implícito de "+8% en 2023" → 281M€ 2023 → 152,21M€ 2025) como proxy de BPA asumiendo acciones en circulación estables; no se calculó a 5 años porque 2020 fue un año de pérdidas (-71M€), que invalida un CAGR.
- Añadido con salvedades documentadas en el propio dato: `roe` (0,067 — desajuste temporal: usa el beneficio neto FY2025 sobre el patrimonio neto atribuible de cierre de FY2024, 2.283,6M€, única cifra de patrimonio atribuible verificada con confianza; otra fuente cita 8,9% con datos TTM a junio de 2025), `roic` (0,0807 — en realidad una métrica de investing.com etiquetada "ROI", puede no seguir exactamente la metodología estándar de ROIC), `operatingMargin` (0,048, TTM, investing.com), `dividendYield` (0,0287, con otra fuente citando 2,76%), `payoutRatioEarnings` (0,508).
- Fuentes: gestamp.com comunicados de prensa oficiales (resultados FY2020-FY2025, capital social), bolsamania.com cotización jun-2026, investing.com ratios (ROI, PER, margen operativo, debt-to-equity), simplywall.st ROE, marketscreener.com equity Q1-2025/FY2025, infobae.com/latribunadeautomocion.es beneficio neto histórico, servimedia.es beneficio 2020-2021.
- Dejado en null: `beta` (la única cifra encontrada, 0,61, proviene de un agregador que dio valores de beta poco fiables para otras empresas de esta misma tanda de búsquedas — contrastados y corregidos con Yahoo Finance en VIS/EBRO/TRE — y no se encontró una fuente alternativa fiable específica para Gestamp), `epsGrowthCagr5y`, `fcfGrowthCagr3y`, `operatingMarginTrend5y`, `forwardPer`, `peg`, `priceToFcf`, `perVsHistoricalAvg5y`, `volatility3y`, `maxDrawdown5y`, `return6m`, `return1y`, `return3yCagr`, `aboveSma200`, `interestCoverage`, `earningsStability`, `consecutiveYearsPaying/Increasing`, `dividendCagr*`, `dividendCoverage`, `payoutRatioFCF`.

### Limitación general de esta ampliación
El fetch directo de páginas (`WebFetch`) no tuvo acceso a ningún dominio financiero probado en esta sesión (`EGRESS_BLOCKED` en stockanalysis.com, investing.com, marketscreener.com, bolsamania.com, google.com/finance y hasta la propia web corporativa de Técnicas Reunidas), así que todos los datos proceden de resúmenes de búsqueda (`WebSearch`), contrastando entre varias fuentes cuando fue posible. El presupuesto de búsquedas de la sesión se agotó antes de poder completar algunos campos de "momentum" (`return6m`, `return1y`, `return3yCagr`, `aboveSma200`) para las 4 empresas y algunos de calidad/valoración de Ebro Foods (`roe`, `operatingMargin`, `evEbitda`) — quedan documentados como pendientes de una futura ronda con más presupuesto de búsqueda o acceso a fetch directo. El caso de Técnicas Reunidas requiere especial atención en revisiones futuras: es una empresa en plena reconstrucción de márgenes tras años de pérdidas, con el dividendo aún no reanudado en la práctica, lo que limita mucho las métricas de crecimiento y dividendo que se pueden rellenar con confianza hoy.
