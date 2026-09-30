<?php
// estado.php — le dice al navegador si el asistente está en modo demostración
// o conectado de verdad a Gemini. No revela ni expone la clave en ningún caso.
header('Content-Type: application/json; charset=utf-8');
require __DIR__ . '/gemini-common.php';
$mode = reformas_gemini_key() !== '' ? 'live' : 'demo';
echo json_encode(['mode' => $mode]);
