/**
 * Recorta valores extremos a los percentiles indicados antes de rankear, para
 * que un outlier (p.ej. un yield del 40% de una empresa en apuros) no domine
 * la escala. Con universos pequeños (< ~30 empresas) el efecto es limitado;
 * gana relevancia según crece el universo (ver /docs/scoring-methodology.md).
 */
export function winsorize(values: number[], lowerPct = 0.05, upperPct = 0.95): number[] {
  if (values.length === 0) return values;
  const sorted = [...values].sort((a, b) => a - b);
  const lowerIdx = Math.floor(lowerPct * (sorted.length - 1));
  const upperIdx = Math.ceil(upperPct * (sorted.length - 1));
  const lowerBound = sorted[lowerIdx];
  const upperBound = sorted[upperIdx];
  return values.map((v) => Math.min(Math.max(v, lowerBound), upperBound));
}

/** Percentil (0-1) de cada valor dentro del array, con empates promediados. */
function percentileRanks(values: number[]): number[] {
  const n = values.length;
  if (n <= 1) return values.map(() => 0.5);

  const indexed = values.map((v, i) => ({ v, i }));
  indexed.sort((a, b) => a.v - b.v);

  const ranks = new Array<number>(n);
  let i = 0;
  while (i < n) {
    let j = i;
    while (j + 1 < n && indexed[j + 1].v === indexed[i].v) j++;
    const avgRank = (i + j) / 2 / (n - 1);
    for (let k = i; k <= j; k++) ranks[indexed[k].i] = avgRank;
    i = j + 1;
  }
  return ranks;
}

/**
 * Convierte una serie de valores crudos (algunos posiblemente null) en
 * puntuaciones 0-100 por percentil dentro del propio grupo. Los null se
 * preservan como null (la empresa no aporta ni resta por esa métrica).
 */
export function scoreByPercentile(rawValues: (number | null)[], higherIsBetter: boolean): (number | null)[] {
  const presentIdx: number[] = [];
  const presentValues: number[] = [];
  rawValues.forEach((v, idx) => {
    if (v !== null && Number.isFinite(v)) {
      presentIdx.push(idx);
      presentValues.push(v);
    }
  });

  if (presentValues.length === 0) return rawValues.map(() => null);

  const winsorized = winsorize(presentValues);
  const ranks = percentileRanks(winsorized);

  const result = new Array<number | null>(rawValues.length).fill(null);
  presentIdx.forEach((idx, i) => {
    const rank = higherIsBetter ? ranks[i] : 1 - ranks[i];
    result[idx] = Math.round(rank * 100);
  });
  return result;
}

/**
 * Transforma un valor con "rango ideal" (p.ej. payout ratio 30-70%) en una
 * penalización: 0 dentro del rango, creciente cuanto más se aleja por arriba
 * o por abajo. Se usa como entrada de scoreByPercentile con higherIsBetter=false.
 */
export function sweetSpotPenalty(value: number | null, low: number, high: number): number | null {
  if (value === null || !Number.isFinite(value)) return null;
  if (value < low) return low - value;
  if (value > high) return value - high;
  return 0;
}

/** Agrupa índices por una clave (p.ej. sector) para poder rankear dentro de cada grupo. */
export function groupIndicesBy<T>(items: T[], keyOf: (item: T) => string): Map<string, number[]> {
  const groups = new Map<string, number[]>();
  items.forEach((item, idx) => {
    const key = keyOf(item);
    const arr = groups.get(key) ?? [];
    arr.push(idx);
    groups.set(key, arr);
  });
  return groups;
}

/**
 * Igual que scoreByPercentile pero calcula el percentil dentro de cada grupo
 * (por ejemplo, el sector) en lugar de sobre el universo completo. Necesario
 * para valoración: un PER de 30 no significa lo mismo en tecnología que en
 * utilities.
 */
export function scoreByPercentileWithinGroups(
  rawValues: (number | null)[],
  higherIsBetter: boolean,
  groupIndices: Map<string, number[]>
): (number | null)[] {
  const result = new Array<number | null>(rawValues.length).fill(null);
  for (const indices of groupIndices.values()) {
    const groupRaw = indices.map((i) => rawValues[i]);
    const groupScores = scoreByPercentile(groupRaw, higherIsBetter);
    indices.forEach((originalIdx, i) => {
      result[originalIdx] = groupScores[i];
    });
  }
  return result;
}

export function weightedAverage(pairs: { value: number; weight: number }[]): number {
  const totalWeight = pairs.reduce((s, p) => s + p.weight, 0);
  if (totalWeight === 0) return 0;
  const sum = pairs.reduce((s, p) => s + p.value * p.weight, 0);
  return sum / totalWeight;
}
