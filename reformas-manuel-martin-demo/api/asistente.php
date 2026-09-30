<?php
// asistente.php — chat de orientación sobre reformas.
// Sin clave de Gemini configurada: responde en MODO DEMOSTRACIÓN con
// respuestas simuladas, claramente marcadas como tales (nunca se presentan
// como IA conectada). Con clave: llama a Gemini de verdad.

header('Content-Type: application/json; charset=utf-8');
require __DIR__ . '/gemini-common.php';
require __DIR__ . '/knowledge.php';

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
$message = trim((string) ($input['message'] ?? ''));
if ($message === '') { echo json_encode(['ok' => false, 'reason' => 'empty']); exit; }
if (mb_strlen($message) > 1200) $message = mb_substr($message, 0, 1200);

if (reformas_rate_limited('asistente', 8, 100, 1200)) {
  echo json_encode([
    'ok' => true, 'mode' => 'demo',
    'reply' => 'Estoy recibiendo muchas preguntas ahora mismo — dame un minuto y vuelve a intentarlo. Mientras tanto, puedes ir preparando tu solicitud con el formulario de presupuesto.'
  ]);
  exit;
}

$apiKey = reformas_gemini_key();

if ($apiKey === '') {
  echo json_encode(['ok' => true, 'mode' => 'demo', 'reply' => reformas_demo_reply($message)]);
  exit;
}

$reply = reformas_call_gemini($apiKey, reformas_system_prompt(), $message);
if ($reply === null) {
  echo json_encode(['ok' => true, 'mode' => 'demo', 'reply' => reformas_demo_reply($message)]);
  exit;
}
echo json_encode(['ok' => true, 'mode' => 'live', 'reply' => trim($reply)]);

/**
 * Respuestas simuladas de fallback, basadas en coincidencia de palabras clave.
 * No es IA real: es una demo transparente para cuando no hay clave configurada.
 */
function reformas_demo_reply($message) {
  $m = mb_strtolower($message);
  $has = function (array $words) use ($m) {
    foreach ($words as $w) if (mb_strpos($m, $w) !== false) return true;
    return false;
  };

  if ($has(['precio', 'cuesta', 'presupuesto', 'coste'])) {
    return "[Modo demostración] No puedo dar un precio sin conocer el estado real de la vivienda: eso solo se confirma con una visita técnica. Lo que sí puedo hacer es ayudarte a preparar tu solicitud con el formulario de esta web para que la primera valoración sea lo más precisa posible.";
  }
  if ($has(['permiso', 'licencia', 'ayuntamiento'])) {
    return "[Modo demostración] Depende del alcance: pintar o cambiar suelos normalmente no necesita permiso, pero mover tabiques o tocar la estructura suele requerir comunicación o licencia municipal. Esto se confirma caso por caso, nunca de forma genérica.";
  }
  if ($has(['tabique', 'estructura', 'derribar', 'tirar', 'pared'])) {
    return "[Modo demostración] Mover o tirar un tabique puede ser viable o no según si es de carga y el estado del edificio — eso no se puede confirmar sin una visita técnica. Te recomiendo anotarlo en el preparador de solicitud para que quede como punto a revisar in situ.";
  }
  if ($has(['tiempo', 'plazo', 'dura', 'cuanto tarda'])) {
    return "[Modo demostración] El plazo depende mucho del alcance y la superficie. Como referencia orientativa, una reforma integral suele necesitar varias semanas de obra, pero el plazo real solo se puede dar tras la visita técnica.";
  }
  if ($has(['cocina'])) {
    return "[Modo demostración] Para una reforma de cocina conviene tener claro si vas a mover la fontanería o la electricidad, y si quieres cambiar la distribución. Puedes indicarlo todo en el preparador de solicitud.";
  }
  if ($has(['baño'])) {
    return "[Modo demostración] En baños, lo habitual es revisar impermeabilización, plato de ducha y accesibilidad. Cuéntame más en el preparador de solicitud y quedará anotado para la visita técnica.";
  }
  return "[Modo demostración] Puedo orientarte sobre qué preparar antes de pedir presupuesto: tipo de reforma, superficie, estado actual y lo que te gustaría cambiar. Cuando quieras, usa el preparador de solicitud de esta web para dejarlo todo listo para una valoración profesional.";
}
