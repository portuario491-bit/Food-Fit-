# Motor de Compatibilidad BlueHeart — v0.1.0

Implementación del algoritmo descrito en `docs/blueheart/bloque-6-algoritmo.md`.
Sustituye a la versión demo simplificada que usaba `blueheart-demo.html`.

## Cómo se usa

```js
const { computeCompatibility } = require('./lib/algorithm');

const result = computeCompatibility(
  { answers: { 0: 3, 1: 4, /* ... */ }, hijosNoNegociable: true },
  { answers: { 0: 2, 1: 3, /* ... */ }, hijosNoNegociable: false }
);
```

`answers` es un mapa `{ [índice de pregunta]: índice de respuesta (0-4) }`, tal
como lo devuelve `db.getAnswers(userId)`. El resultado sigue el esquema
conceptual del Bloque 6.33 ("Resultado global"): `compatibility_percentage`,
`confidence_score`/`confidence_label`, `coverage_score`, `eligibility_status`,
`dimension_results`, `critical_conflicts`, `strengths`, `frictions`,
`variable_results`, `algorithm_version`, `configuration_version`.

## Estructura (Bloque 6.32.2)

| Archivo | Motor | Responsabilidad |
|---|---|---|
| `config.js` | — | Configuración versionada: catálogo de variables, pesos de dimensión, matriz de hijos, regla crítica, umbrales (Bloque 6.26/6.33) |
| `variableEngine.js` | Variable Comparison Engine | Compara variable a variable (Bloque 6.7) |
| `criticalRulesEngine.js` | Critical Rules Engine | Evalúa incompatibilidades críticas, independiente de los pesos (Bloque 6.12/6.13) |
| `dimensionEngine.js` | Dimension Engine | Agrega variables en un resultado por dimensión (Bloque 6.17) |
| `compatibilityEngine.js` | Compatibility + Confidence Engine | Porcentaje global y confianza, calculados por separado (Bloque 6.18/6.19) |
| `eligibilityEngine.js` | Eligibility Engine | Decide si la comparación puede recomendarse (Bloque 6.18.6/6.22) |
| `index.js` | Orquestador | Une todo, único punto de entrada para el resto de la app |

Solo `index.js` debería importarse desde fuera de esta carpeta.

## Qué implementa fielmente del Bloque 6

- Separación estricta entre "cuánto pesa" (config) y "cómo se calcula" (motores) — 6.26.
- Una variable sin respuesta nunca se trata como 0 ni como 50%: se excluye del
  cálculo y reduce la cobertura — 6.17.4 / 6.20.2.
- Reglas críticas evaluadas **antes** de cualquier compensación, y con
  capacidad de bloqueo independiente del porcentaje descriptivo — 6.13.7/6.13.8.
- La regla crítica de hijos es **unilateral**: basta con que una persona la
  marque como no negociable para que se active frente a una posición
  confirmada opuesta de la otra — 6.13.4. (Comprobado con test: el conflicto
  se activa igual si es "A" o "B" quien puso el límite.)
- Confianza y compatibilidad son números separados, nunca `compatibilidad × confianza` — 6.19.
- Motor de elegibilidad con los 5 estados documentados en 6.18.6, evaluados en
  el orden que especifica 6.18.7.
- Cada resultado incluye `algorithm_version` y `configuration_version`
  (6.26.3) y conserva el detalle por variable para el panel "ver cómo se ha
  calculado" (trazabilidad, 6.27).

## Qué NO implementa todavía (simplificaciones conscientes, no bugs)

- **Importancia, necesidad de correspondencia y flexibilidad por variable**
  (Bloque 6.2.6-6.2.9): el cuestionario piloto actual solo recoge una
  posición (0-4) por pregunta, no estos tres modificadores por separado. Por
  eso `adjusted_score = base_score` sin ajustar — la comparación es hoy una
  distancia ordinal pura. Esto requiere ampliar el cuestionario, no solo el
  motor, así que se deja para cuando llegue el manual completo.
- **Interacciones entre variables o entre dimensiones** (6.14): no hay
  ninguna implementada en v0.1.0. El Bloque 6 pide que sean "pocas, bien
  justificadas y con efecto limitado" — mejor no inventar ninguna hasta
  tener una razón metodológica concreta que documentar.
- **Mecanismos de compensación explícitos** (6.15) más allá de la propia
  media ponderada: no hay compensación cruzada entre dimensiones todavía.
- **Solo una regla crítica implementada** (hijos). El Bloque 6 deja abierto
  que existan más combinaciones estructurales críticas — se añadirán cuando
  estén definidas con la misma claridad que la de hijos (6.13.6: "las
  incompatibilidades críticas automáticas deberán ser pocas, claras y
  justificables").
- **Pesos, umbral de recomendación y bandas de confianza son una hipótesis
  v0.1.0**, no un resultado validado (6.29) — están pensados para poder
  probar el motor con datos reales del piloto y así poder calibrarlos, tal
  como pide el propio Bloque 6.
- **Sin persistencia de resultados ni recálculo automático** (6.28): cada
  comparación se calcula al vuelo cuando se visita `/matches`; no se
  almacena `comparison_id` ni historial todavía.
