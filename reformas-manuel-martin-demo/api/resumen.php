<?php
// resumen.php — organiza las respuestas del preparador de presupuesto en un
// resumen de proyecto legible. NO calcula precios. NO envía ni guarda nada:
// solo devuelve texto para que la persona lo copie o descargue.

header('Content-Type: application/json; charset=utf-8');
require __DIR__ . '/gemini-common.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'reason' => 'method']);
  exit;
}
if (!reformas_same_origin_ok()) {
  http_response_code(403);
  echo json_encode(['ok' => false, 'reason' => 'origin']);
  exit;
}

$input = json_decode(file_get_contents('php://input'), true) ?: [];
$clean = function ($v, $max = 400) {
  $v = trim((string) $v);
  return mb_substr($v, 0, $max);
};
$fields = [
  'tipo' => $clean($input['tipo'] ?? ''),
  'zona' => $clean($input['zona'] ?? ''),
  'superficie' => $clean($input['superficie'] ?? ''),
  'plazo' => $clean($input['plazo'] ?? ''),
  'descripcion' => $clean($input['descripcion'] ?? '', 1500),
  'presupuesto' => $clean($input['presupuesto'] ?? ''),
  'nombre' => $clean($input['nombre'] ?? ''),
  'email' => $clean($input['email'] ?? ''),
  'telefono' => $clean($input['telefono'] ?? ''),
  'archivosCount' => (int) ($input['archivosCount'] ?? 0),
];

if (reformas_rate_limited('resumen', 6, 60, 400)) {
  echo json_encode(['ok' => false, 'reason' => 'rate_limited']);
  exit;
}

$apiKey = reformas_gemini_key();
if ($apiKey === '') {
  echo json_encode(['ok' => true, 'mode' => 'demo', 'resumen' => reformas_local_resumen($fields)]);
  exit;
}

$prompt = <<<PROMPT
Organiza estos datos de una solicitud de reforma de vivienda en un RESUMEN DE
PROYECTO claro, en español, en texto plano (sin markdown, sin ```). Estructura:
un encabezado con el tipo de reforma y la zona, luego los datos en líneas
"Campo: valor" (si un dato falta, escribe "No indicado" — NO inventes nada),
y termina con una lista de 3 a 5 "Aspectos pendientes de valorar en una visita
técnica" razonables para ese tipo de reforma. Cierra SIEMPRE con esta frase
exacta en su propio párrafo: "Esta es una preparación de la solicitud para
valoración profesional, no un presupuesto cerrado ni un envío real todavía."
No calcules ni sugieras ningún precio o franja de precio.

Datos del formulario:
Tipo de reforma: {$fields['tipo']}
Zona o código postal: {$fields['zona']}
Superficie aproximada: {$fields['superficie']}
Plazo deseado: {$fields['plazo']}
Presupuesto previsto (si lo dieron): {$fields['presupuesto']}
Estado actual y cambios deseados: {$fields['descripcion']}
Archivos adjuntos (no enviados, solo referencia): {$fields['archivosCount']}
Nombre de contacto: {$fields['nombre']}
Email de contacto: {$fields['email']}
Teléfono de contacto: {$fields['telefono']}
PROMPT;

$reply = reformas_call_gemini($apiKey, 'Eres un asistente que organiza solicitudes de reforma en resúmenes claros, honestos y sin inventar datos.', $prompt, 0.3, 900);

if ($reply === null) {
  echo json_encode(['ok' => true, 'mode' => 'demo', 'resumen' => reformas_local_resumen($fields)]);
  exit;
}
echo json_encode(['ok' => true, 'mode' => 'live', 'resumen' => trim($reply)]);

function reformas_local_resumen($f) {
  $na = function ($v) { return $v === '' ? 'No indicado' : $v; };
  $checklist = [
    "Estado real de instalaciones (agua, luz, gas) detrás de paredes y suelos.",
    "Viabilidad de mover tabiques o instalaciones según la estructura del edificio.",
    "Necesidad de permiso o comunicación al ayuntamiento según el alcance final.",
    "Medición exacta de la superficie y elección de materiales y acabados.",
  ];
  $lines = [];
  $lines[] = "SOLICITUD DE PRESUPUESTO — {$na($f['tipo'])}";
  $lines[] = "Reformas Manuel Martín · Valencia (modo demostración)";
  $lines[] = "";
  $lines[] = "Zona o código postal: {$na($f['zona'])}";
  $lines[] = "Superficie aproximada: " . ($f['superficie'] !== '' ? $f['superficie'] . ' m²' : 'No indicado');
  $lines[] = "Plazo deseado: {$na($f['plazo'])}";
  $lines[] = "Presupuesto previsto: {$na($f['presupuesto'])}";
  $lines[] = "Estado actual y cambios deseados: {$na($f['descripcion'])}";
  $lines[] = "Archivos adjuntos: " . ($f['archivosCount'] > 0 ? $f['archivosCount'] . " archivo(s) (no enviados, solo referencia local)" : "Ninguno");
  $lines[] = "";
  $lines[] = "Contacto: {$na($f['nombre'])} · {$na($f['email'])}" . ($f['telefono'] !== '' ? " · {$f['telefono']}" : "");
  $lines[] = "";
  $lines[] = "Aspectos pendientes de valorar en una visita técnica:";
  foreach ($checklist as $c) $lines[] = "- $c";
  $lines[] = "";
  $lines[] = "Esta es una preparación de la solicitud para valoración profesional, no un presupuesto cerrado ni un envío real todavía.";
  return implode("\n", $lines);
}
