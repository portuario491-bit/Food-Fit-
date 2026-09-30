<?php
// setup.php — activar la clave de Gemini para el asistente de reformas.
// UNA sola vez, desde el navegador. Se valida contra Google y se guarda en el
// servidor, fuera de la carpeta pública si es posible. Nunca se muestra ni se
// registra en ningún sitio. Bórralo del servidor cuando termines.

$OUT = __DIR__ . '/../gemini_api_key.php'; // fuera de public_html
$IN  = __DIR__ . '/api/secret_config.php'; // alternativa si el hosting no lo permite

function read_key($out, $in) {
  $k = '';
  if (is_file($out)) { $v = @include $out; if (is_string($v)) $k = trim($v); }
  if ($k === '' && is_file($in)) { $v = @include $in; if (is_string($v)) $k = trim($v); }
  return $k;
}
function is_set_key($k) { return ($k !== '' && $k !== 'TU_CLAVE_AQUI'); }
function write_key($out, $in, $key) {
  $content = "<?php return '" . str_replace("'", "\\'", $key) . "';\n";
  if (@file_put_contents($out, $content) !== false) return true;
  return (@file_put_contents($in, $content) !== false);
}
function validate_gemini($key) {
  if (!function_exists('curl_init')) return false;
  $ch = curl_init('https://generativelanguage.googleapis.com/v1beta/models?key=' . urlencode($key));
  curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 20]);
  $r = curl_exec($ch); $c = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE); curl_close($ch);
  return ($r !== false && $c === 200);
}

$key = read_key($OUT, $IN); $isSet = is_set_key($key);
$msg = ''; $tone = 'info';

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST' && !$isSet) {
  $k = trim((string) ($_POST['gemini_key'] ?? ''));
  if ($k === '') { $msg = 'Pega la clave de Gemini antes de enviar.'; $tone = 'warn'; }
  elseif (!validate_gemini($k)) { $msg = 'No he podido validar la clave con Google. Comprueba que la copiaste bien.'; $tone = 'warn'; }
  elseif (write_key($OUT, $IN, $k)) { $isSet = true; $msg = '¡Clave activada! El asistente y el preparador de presupuesto ya usan Gemini de verdad.'; $tone = 'ok'; }
  else { $msg = 'La clave es válida pero no se pudo guardar (revisa permisos de escritura).'; $tone = 'warn'; }
} elseif (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST' && $isSet) {
  $msg = 'Ya había una clave configurada. Por seguridad no se puede cambiar desde aquí.'; $tone = 'info';
}
?><!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Activar asistente de IA · Manuel Martín Reformas</title>
<style>
  :root{--bg:#211c17;--ink:#f6efe4;--mut:#c9bda8;--em:#b95c2e;--brd:rgba(255,255,255,.12)}
  *{box-sizing:border-box;margin:0}
  body{font-family:Inter,system-ui,-apple-system,'Segoe UI',sans-serif;background:
    radial-gradient(45% 45% at 15% 12%,rgba(185,92,46,.22),transparent 60%),var(--bg);
    color:var(--ink);min-height:100vh;display:grid;place-items:center;padding:24px;line-height:1.6}
  .box{width:100%;max-width:460px;background:rgba(255,255,255,.05);border:1px solid var(--brd);
    border-radius:22px;padding:30px;backdrop-filter:blur(18px);box-shadow:0 30px 60px -25px rgba(0,0,0,.7)}
  h1{font-size:1.4rem;letter-spacing:-.02em;margin-bottom:8px}
  .sub{color:var(--mut);font-size:.92rem;margin-bottom:20px}
  .pill{font-size:.72rem;padding:3px 9px;border-radius:999px;border:1px solid var(--brd);display:inline-block;margin-bottom:14px}
  .pill.ok{background:rgba(76,122,90,.22);color:#c9ffe0;border-color:rgba(76,122,90,.5)}
  .pill.no{background:rgba(185,92,46,.16);color:#ffd9c0;border-color:rgba(185,92,46,.4)}
  .hint{color:var(--mut);font-size:.85rem;margin:6px 0 14px}
  .hint a{color:var(--em)}
  input{width:100%;padding:12px 13px;border-radius:11px;border:1px solid var(--brd);
    background:rgba(0,0,0,.25);color:var(--ink);font:inherit}
  input:focus{outline:none;border-color:var(--em);box-shadow:0 0 0 3px rgba(185,92,46,.2)}
  button{width:100%;margin-top:10px;padding:12px;border:0;border-radius:999px;cursor:pointer;
    font-weight:700;color:#221a12;background:linear-gradient(115deg,#e3a67e,#b95c2e)}
  .msg{margin-top:14px;padding:11px 13px;border-radius:11px;font-size:.9rem;border:1px solid var(--brd)}
  .ok{background:rgba(76,122,90,.16);color:#c9ffe0}
  .warn{background:rgba(255,180,80,.12);color:#ffe4bd}
  .info{background:rgba(255,255,255,.05);color:var(--mut)}
  .foot{margin-top:16px;font-size:.78rem;color:var(--mut)}
  code{background:rgba(255,255,255,.08);padding:2px 6px;border-radius:6px}
</style>
</head>
<body>
  <main class="box">
    <span class="pill <?php echo $isSet?'ok':'no'; ?>"><?php echo $isSet?'Gemini configurado ✓':'Gemini pendiente'; ?></span>
    <h1>Activar el asistente de IA</h1>
    <p class="sub">Ahora mismo la web funciona en <strong>modo demostración</strong> (respuestas simuladas, claramente marcadas). Al activar una clave de Gemini, el asistente y el preparador de presupuesto pasan a usar IA real, en su capa gratuita.</p>

    <?php if (!$isSet): ?>
      <p class="hint">Crea una clave gratis en <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a> (empieza por <code>AIza…</code>) y pégala aquí.</p>
      <form method="post" autocomplete="off">
        <input name="gemini_key" type="password" placeholder="AIza..." required>
        <button type="submit">Activar Gemini</button>
      </form>
    <?php else: ?>
      <div class="msg ok">✅ Todo listo. Puedes borrar este archivo (<code>setup.php</code>) del servidor por seguridad.</div>
    <?php endif; ?>
    <?php if ($msg): ?><div class="msg <?php echo $tone; ?>"><?php echo htmlspecialchars($msg, ENT_QUOTES, 'UTF-8'); ?></div><?php endif; ?>
    <p class="foot">La clave se guarda en el servidor y no se muestra ni se registra en ningún sitio. Esta web es gratuita en su capa básica de Gemini; si recibe mucho tráfico o va a leer documentos con datos personales reales, conviene pasar a una clave de pago.</p>
  </main>
</body>
</html>
