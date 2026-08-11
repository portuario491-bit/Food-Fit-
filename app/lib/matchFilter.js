/**
 * Filtro de emparejamiento por género/orientación y rango de edad.
 *
 * Esto es un FILTRO DURO, no una dimensión de compatibilidad: decide si dos
 * personas pueden llegar a verse entre sí. El algoritmo de compatibilidad
 * (lib/algorithm.js) solo se calcula después, entre personas que ya han
 * pasado este filtro. No se mezclan ambas cosas.
 *
 * Modelo (deliberadamente simple, ver Bloque 1.e/2.f — cerrado a parejas):
 *   - género:       'hombre' | 'mujer' | 'prefiero_no_decir'
 *   - a quién busca: 'hombres' | 'mujeres' | 'ambos'
 * No se pregunta la "orientación" como etiqueta aparte: heterosexual,
 * homosexual o bisexual son sencillamente lo que resulta de cruzar el
 * género de cada persona con a quién busca cada una.
 */

const GENDERS = [
  { value: 'mujer', label: 'Mujer' },
  { value: 'hombre', label: 'Hombre' },
  { value: 'prefiero_no_decir', label: 'Prefiero no especificarlo' },
];

const SEEKING_OPTIONS = [
  { value: 'mujeres', label: 'Mujeres' },
  { value: 'hombres', label: 'Hombres' },
  { value: 'ambos', label: 'Ambos' },
];

/** ¿La preferencia `seeking` de una persona acepta a alguien de `targetGender`? */
function seekingAcceptsGender(seeking, targetGender) {
  if (!seeking || !targetGender) return false;
  if (seeking === 'ambos') return true; // abierto a cualquier género, incluido "prefiero no decir"
  if (seeking === 'hombres') return targetGender === 'hombre';
  if (seeking === 'mujeres') return targetGender === 'mujer';
  return false;
}

/** ¿`targetAge` cae dentro del rango [ageMin, ageMax] de alguien? Rango vacío = sin restricción. */
function ageAccepts(ageMin, ageMax, targetAge) {
  if (targetAge === null || targetAge === undefined) return false;
  const lo = Number.isFinite(ageMin) ? ageMin : 18;
  const hi = Number.isFinite(ageMax) ? ageMax : 99;
  return targetAge >= lo && targetAge <= hi;
}

/**
 * ¿`a` y `b` pueden verse mutuamente? Comprueba género/orientación Y edad
 * en los dos sentidos — que a `a` le interese `b` no basta, tiene que ser
 * recíproco.
 */
function isMutualMatch(a, b) {
  if (!a || !b) return false;
  if (!a.gender || !a.seeking_gender || !b.gender || !b.seeking_gender) return false;

  const genderMutual =
    seekingAcceptsGender(a.seeking_gender, b.gender) && seekingAcceptsGender(b.seeking_gender, a.gender);

  const ageMutual =
    ageAccepts(a.age_min, a.age_max, b.age) && ageAccepts(b.age_min, b.age_max, a.age);

  return genderMutual && ageMutual;
}

module.exports = { GENDERS, SEEKING_OPTIONS, seekingAcceptsGender, ageAccepts, isMutualMatch };
