<?php
// gemini-common.php — resolución de clave, límites de uso y llamada a Gemini.
// Compartido por asistente.php y resumen.php. La clave NUNCA se envía al navegador.

function reformas_key_paths() {
  return [
    __DIR__ . '/../../gemini_api_key.php', // fuera de public_html (recomendado)
    __DIR__ . '/secret_config.php',        // alternativa local si el hosting no permite salir de public_html
  ];
}

function reformas_gemini_key() {
  foreach (reformas_key_paths() as $path) {
    if (is_file($path)) {
      $v = @include $path;
      if (is_string($v) && trim($v) !== '' && trim($v) !== 'TU_CLAVE_AQUI') return trim($v);
    }
  }
  $env = getenv('GEMINI_API_KEY');
  if ($env) return trim($env);
  return '';
}

function reformas_same_origin_ok() {
  $host = $_SERVER['HTTP_HOST'] ?? '';
  $origin = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
  if ($origin === '') return true; // algunos navegadores no lo envían; no bloqueamos por eso solo
  $originHost = parse_url($origin, PHP_URL_HOST);
  return $originHost === null || $originHost === $host;
}

function reformas_rate_limited($bucket, $perMinute, $perDay, $globalDay) {
  $dir = sys_get_temp_dir() . '/reformas_rl';
  if (!is_dir($dir)) @mkdir($dir, 0700, true);
  $ip = preg_replace('/[^a-zA-Z0-9]/', '_', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
  $minuteKey = $dir . "/{$bucket}_{$ip}_min_" . floor(time() / 60) . '.cnt';
  $dayKey = $dir . "/{$bucket}_{$ip}_day_" . date('Ymd') . '.cnt';
  $globalKey = $dir . "/{$bucket}_global_day_" . date('Ymd') . '.cnt';

  $bump = function ($file) {
    $n = 0;
    if (is_file($file)) $n = (int) @file_get_contents($file);
    $n++;
    @file_put_contents($file, (string) $n, LOCK_EX);
    return $n;
  };

  if ($bump($minuteKey) > $perMinute) return true;
  if ($bump($dayKey) > $perDay) return true;
  if ($bump($globalKey) > $globalDay) return true;
  return false;
}

function reformas_call_gemini($apiKey, $systemPrompt, $userText, $temperature = 0.4, $maxTokens = 700, $jsonMode = false) {
  // gemini-2.5-* was retired for new API keys; gemini-flash-latest tracks
  // whatever Google's current fast model is, so this keeps working after
  // future renames too.
  $models = ['gemini-3.5-flash-lite', 'gemini-flash-latest', 'gemini-3.5-flash'];
  $body = [
    'system_instruction' => ['parts' => [['text' => $systemPrompt]]],
    'contents' => [['role' => 'user', 'parts' => [['text' => $userText]]]],
    'generationConfig' => [
      'temperature' => $temperature,
      'maxOutputTokens' => $maxTokens,
    ],
    'safetySettings' => [
      ['category' => 'HARM_CATEGORY_HARASSMENT', 'threshold' => 'BLOCK_ONLY_HIGH'],
      ['category' => 'HARM_CATEGORY_HATE_SPEECH', 'threshold' => 'BLOCK_ONLY_HIGH'],
      ['category' => 'HARM_CATEGORY_SEXUALLY_EXPLICIT', 'threshold' => 'BLOCK_ONLY_HIGH'],
      ['category' => 'HARM_CATEGORY_DANGEROUS_CONTENT', 'threshold' => 'BLOCK_ONLY_HIGH'],
    ],
  ];
  if ($jsonMode) $body['generationConfig']['responseMimeType'] = 'application/json';

  foreach ($models as $model) {
    $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key=" . urlencode($apiKey);
    $ch = curl_init($url);
    curl_setopt_array($ch, [
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_POST => true,
      CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
      CURLOPT_POSTFIELDS => json_encode($body),
      CURLOPT_TIMEOUT => 30,
    ]);
    $res = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($res === false || $code !== 200) { error_log("[reformas gemini] $model -> HTTP $code"); continue; }
    $data = json_decode($res, true);
    $text = $data['candidates'][0]['content']['parts'][0]['text'] ?? null;
    if ($text !== null) return $text;
  }
  return null;
}
