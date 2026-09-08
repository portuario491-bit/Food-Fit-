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
