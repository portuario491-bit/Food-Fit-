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

/**
 * Puntos de referencia aproximados (no la dirección real de nadie) para
 * cada zona, usados solo para dar una cifra orientativa en km. "otra" no
 * tiene un punto fijo — con ese valor no se calculan km, solo se mantiene
 * la etiqueta cualitativa ("Lejos").
 */
const ZONE_COORDS = {
  valencia_capital: { lat: 39.4699, lon: -0.3763 },
  area_metropolitana: { lat: 39.437, lon: -0.453 },
  provincia_valencia: { lat: 38.9891, lon: -0.5197 },
  otra_provincia_cv: { lat: 39.9864, lon: -0.0513 },
};

function haversineKm(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

/** Devuelve una distancia aproximada en km (número redondeado) entre las
 *  zonas de dos personas, calculada entre puntos de referencia de cada
 *  zona — no la ubicación exacta de nadie. Null si falta el dato, la zona
 *  no es reconocida, o alguna de las dos es "otra" (sin punto de referencia). */
function zoneDistanceKm(zoneA, zoneB) {
  const a = ZONE_COORDS[zoneA];
  const b = ZONE_COORDS[zoneB];
  if (!a || !b) return null;
  if (zoneA === zoneB) return 0;
  return Math.round(haversineKm(a, b));
}

module.exports = { ZONES, ZONE_LABEL, zoneDistanceLabel, zoneDistanceKm };
