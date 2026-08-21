/**
 * Distancia física entre dos personas, aproximada por zona (Bloque 7.14.5)
 * — no coordenadas GPS. Las mismas zonas que ya se preguntaban en el
 * formulario de selección, para no inventar una segunda taxonomía.
 *
 * No es un filtro duro (a diferencia de género/edad): es solo información
 * de contexto junto a la compatibilidad, la persona sigue decidiendo.
 */
const ZONES = [
  { value: 'valencia_capital', label: 'Valencia capital', rank: 0 },
  { value: 'area_metropolitana', label: 'Área metropolitana de Valencia', rank: 1 },
  { value: 'provincia_valencia', label: 'Provincia de Valencia', rank: 2 },
  { value: 'otra_provincia_cv', label: 'Otra provincia de la Comunidad Valenciana', rank: 3 },
  { value: 'otra', label: 'Otra', rank: 4 },
];

const ZONE_LABEL = Object.fromEntries(ZONES.map((z) => [z.value, z.label]));
const ZONE_RANK = Object.fromEntries(ZONES.map((z) => [z.value, z.rank]));

const DISTANCE_LABELS = ['Misma zona', 'Muy cerca', 'Cerca', 'Distancia media', 'Lejos'];

/** Devuelve una descripción legible de la distancia entre dos zonas, o
 *  null si a alguna de las dos personas le falta este dato (no inventamos
 *  una distancia con información que no tenemos). */
function zoneDistanceLabel(zoneA, zoneB) {
  if (!zoneA || !zoneB || !(zoneA in ZONE_RANK) || !(zoneB in ZONE_RANK)) return null;
  if (zoneA === zoneB) return DISTANCE_LABELS[0];
  const diff = Math.abs(ZONE_RANK[zoneA] - ZONE_RANK[zoneB]);
  return DISTANCE_LABELS[Math.min(diff, DISTANCE_LABELS.length - 1)];
}

module.exports = { ZONES, ZONE_LABEL, zoneDistanceLabel };
