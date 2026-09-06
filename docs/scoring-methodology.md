# Metodología de scoring

Este documento explica, sin necesidad de saber programar, cómo calculamos las puntuaciones de cada empresa. Si prefieres la versión resumida y con ejemplos en pantalla, visita `/metodologia` en la aplicación.

## 1. Filosofía

Esta herramienta **no recomienda comprar ni vender ninguna acción**. Calcula puntuaciones de 0 a 100 que reflejan, de forma explicable, cuánto encaja una empresa con un estilo de inversión concreto (dividendos, crecimiento, calidad...). Cada puntuación va acompañada de las razones concretas que la explican. El objetivo es ayudar a un inversor de largo plazo a comparar y priorizar, no sustituir su análisis ni su decisión.

Tres reglas de diseño irrenunciables:

1. **El momentum de mercado nunca domina.** El sub-score de Momentum pesa como máximo un 15% en cualquier perfil, y en varios perfiles pesa 0%. Esto evita que el sistema degenere en "lo que más ha subido últimamente".
2. **Ninguna métrica se premia sin límite.** Un yield de dividendo altísimo, o un ratio de payout extremo, no generan automáticamente una puntuación alta: se contrastan contra el resto del universo y, en varios casos, contra un "rango razonable".
3. **Todo score debe ser explicable.** Cada empresa muestra qué métricas concretas empujaron su puntuación hacia arriba (fortalezas) y cuáles hacia abajo (debilidades).

## 2. Las seis sub-puntuaciones

Para cada empresa calculamos seis sub-puntuaciones independientes, cada una de 0 a 100:

| Sub-score | Qué mide | Métricas incluidas (v1) |
|---|---|---|
| **Dividendo** | Si el dividendo es atractivo y, sobre todo, sostenible | Rentabilidad por dividendo, payout sobre beneficio, payout sobre caja libre, años consecutivos pagando, años consecutivos aumentando, CAGR del dividendo a 5 años (o 3 si no hay 5), cobertura del dividendo con caja libre |
| **Crecimiento** | Si el negocio crece en ingresos, beneficios y caja | Crecimiento de ingresos (3 y 5 años), crecimiento del BPA (3 y 5 años), crecimiento de caja libre (3 años), evolución del margen operativo |
| **Calidad** | Si es un negocio rentable y financieramente sólido | ROIC, ROE, margen operativo, margen neto, estabilidad histórica de beneficios, deuda neta/EBITDA, cobertura de intereses |
| **Valoración** | Si el precio actual es razonable frente a sus propios fundamentales y a su sector | PER, PER estimado (forward), PEG, EV/EBITDA, precio/caja libre, PER actual frente a su media de 5 años |
| **Riesgo** | Cuánto riesgo asume quien invierte (más alto = *menos* riesgo) | Volatilidad a 3 años, beta, máxima caída (drawdown) a 5 años, apalancamiento, estabilidad de beneficios, tamaño de la empresa |
| **Momentum** | Tendencia reciente de precio (siempre secundario) | Rentabilidad 6 meses, 1 año y 3 años anualizada, distancia respecto a máximos de 52 semanas, si cotiza por encima de su media de 200 sesiones |

Cada métrica dentro de un sub-score tiene un peso propio (documentado en `lib/scoring/metrics.ts`); esos pesos suman 100% dentro de cada sub-score.

## 3. Cómo se normaliza cada métrica (evitar "peras con manzanas")

No usamos los valores en bruto directamente, por dos motivos: sus escalas son muy distintas entre sí (un PER de 20 y un ROIC del 15% no se pueden promediar sin más) y un valor extremo de una sola empresa podría distorsionar toda la escala.

**Paso 1 — Winsorización (control de outliers).** Antes de comparar, recortamos los valores más extremos de cada métrica a los percentiles 5 y 95 del universo. Así, una empresa con una cifra disparatada (por ejemplo, un yield del 40% justo antes de quebrar) no arrastra la escala completa. Con un universo pequeño (como los 50-100 valores iniciales) el efecto de este recorte es limitado; gana importancia real cuando el universo crece a varios cientos de empresas.

**Paso 2 — Percentil dentro del grupo.** Convertimos cada valor (ya recortado) en su posición relativa (percentil) dentro del universo: la empresa con el mejor dato de esa métrica se acerca a 100, la peor a 0. Para algunas métricas —los múltiplos de valoración y los márgenes— el percentil se calcula **dentro del sector**, no del universo completo, porque comparar el PER de un banco con el de una tecnológica no tiene sentido.

**Paso 3 — "Rango ideal" en vez de "cuanto más, mejor" (donde aplica).** Algunas métricas no deben premiarse de forma creciente sin límite. El caso más claro es el payout ratio del dividendo: un payout del 0% (no reparte nada) es tan poco deseable, para un perfil de Dividendos, como uno del 150% (reparte más de lo que gana, insostenible). Para estas métricas definimos un rango razonable (por ejemplo, 30%-70% de payout sobre beneficio) y penalizamos alejarse de él en cualquiera de las dos direcciones, antes de calcular el percentil. Lo mismo se aplica al PEG.

**Paso 4 — Media ponderada dentro del sub-score.** El sub-score final es la media ponderada de los percentiles de sus métricas. Si a una empresa le falta un dato para alguna métrica (por ejemplo, el ratio de payout sobre caja libre no es comparable en un banco), esa métrica simplemente no participa y el resto de pesos se reajustan proporcionalmente — nunca se penaliza a una empresa por un dato que no aplica a su modelo de negocio.

## 4. Cómo se calcula la puntuación total

La puntuación total (0-100) es la media ponderada de las seis sub-puntuaciones, con pesos que dependen del **perfil de inversión** elegido:

| Perfil | Dividendo | Crecimiento | Calidad | Valoración | Riesgo | Momentum |
|---|---|---|---|---|---|---|
| Dividendos | 35% | 10% | 25% | 20% | 10% | 0% |
| Crecimiento | 0% | 35% | 25% | 15% | 10% | 15% |
| Crecimiento de dividendos | 25% | 25% | 25% | 15% | 10% | 0% |
| Calidad | 0% | 20% | 40% | 20% | 15% | 5% |
| Calidad a precio razonable | 10% | 15% | 30% | 30% | 10% | 5% |
| Equilibrado | 20% | 20% | 20% | 20% | 15% | 5% |

Los pesos de los cuatro primeros perfiles y de "Calidad" reproducen exactamente los indicados en el encargo original del producto. "Calidad a precio razonable" y "Equilibrado" no venían con cifras predefinidas y los hemos diseñado nosotros siguiendo la misma lógica (calidad+valoración a partes similares en el primer caso; reparto uniforme en el segundo). Están definidos en `lib/scoring/weights.ts`, son configurables desde código hoy y está prevista su edición desde un panel de administración en una fase posterior.

El **Radar mensual** (ver más abajo) usa un séptimo esquema de pesos propio, sin Momentum en absoluto.

## 5. Cómo se generan las fortalezas y debilidades

Para cada métrica de cada sub-score calculamos su "impacto" sobre la puntuación total:

```
impacto = (percentil_de_la_métrica − 50) × peso_de_la_métrica_en_su_subscore × peso_del_subscore_en_el_perfil
```

Un percentil por encima de 50 aporta impacto positivo (fortaleza); por debajo de 50, negativo (debilidad). Ordenamos todas las métricas de la empresa por el valor absoluto de su impacto y mostramos las 3-4 más relevantes de cada signo, en una frase en español con el dato concreto entre paréntesis (por ejemplo: "Payout sobre beneficio fuera de un rango sano (135.0%)"). Esto significa que la explicación no es genérica: depende del perfil de inversión elegido, porque el mismo dato pesa distinto según el perfil.

## 6. Radar mensual

El Radar mensual no usa ninguno de los seis perfiles de inversión: usa un esquema de pesos propio (Calidad 25%, Crecimiento 25%, Dividendo 20%, Valoración 20%, Riesgo 10%, **Momentum 0%**) para mostrar las 10 empresas con la combinación más interesante de fundamentales *en este momento*, sin que la tendencia reciente del precio influya en absoluto. Deliberadamente no se llama "qué comprar este mes": es una lista de encaje relativo con esos cinco factores, con su explicación, no una señal de compra.

## 7. Sesgos que vigilamos explícitamente

- **Look-ahead bias:** el cálculo de un score en una fecha determinada solo debe usar información que ya era pública en esa fecha. El modelo de datos guarda cada snapshot de fundamentales con su propia fecha de publicación (`fetchedAt`) precisamente para poder reconstruir el histórico sin usar información "del futuro".
- **Survivorship bias:** cuando ampliemos el histórico de scores, documentaremos explícitamente qué empresas entran y salen del universo analizado y por qué, para no ocultar los casos de empresas que lo hicieron mal (quiebras, exclusiones de índices, etc.).
- **Sobreajuste a métricas extremas:** de ahí la winsorización (paso 1) y los "rangos ideales" (paso 3) descritos arriba.

## 8. Limitaciones conocidas

- Con un universo pequeño (50-100 empresas en el MVP), la normalización por percentil es menos estadísticamente robusta que con varios cientos; mejora con el tamaño del universo.
- Las normas contables difieren entre países y sectores; algunas métricas (por ejemplo, deuda neta/EBITDA en un banco) no son comparables de forma directa y se marcan como "sin dato" en esos casos en lugar de forzarlas.
- Las estimaciones a futuro (PER forward, crecimiento estimado) dependen de la cobertura de analistas del proveedor de datos y pueden no existir para empresas pequeñas o poco seguidas.
- El sistema no conoce la situación personal del usuario (fiscalidad, otros activos, objetivos concretos): el "encaje" que calcula es con un estilo de inversión declarado, no una recomendación personalizada.

## 9. Datos de demostración

Mientras no haya un proveedor de datos financieros real configurado (ver `/docs` del repositorio y `.env.example`), la aplicación usa un universo de empresas **completamente ficticias**, marcadas con `isMock: true`, diseñadas para representar arquetipos reales (una aristócrata del dividendo, una "trampa de yield" con payout insostenible, una tecnológica cara de alto crecimiento, un banco con métricas no comparables, etc.) y así poder validar que la metodología reacciona como se espera ante cada caso. Estos datos nunca deben interpretarse como información de mercado real.
