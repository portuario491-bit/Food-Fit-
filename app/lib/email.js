/**
 * Notificaciones por email (Bloque 7.32) — mensajes de chat nuevos.
 * Usa una cuenta de Gmail normal como remitente vía SMTP (con una
 * "contraseña de aplicación"), en vez de un servicio de envío masivo que
 * exigiría verificar un dominio propio — no lo necesitamos para el
 * volumen de un piloto pequeño.
 *
 * Si EMAIL_USER / EMAIL_PASS no están configuradas, el envío se salta con
 * un aviso por consola en vez de romper la app (igual que SESSION_SECRET).
 */
const nodemailer = require('nodemailer');

let transporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });
} else {
  console.warn(
    '[BlueHeart] Aviso: no se ha definido EMAIL_USER/EMAIL_PASS — no se enviarán notificaciones por email.'
  );
}

/** No revela el contenido del mensaje en el email, solo avisa de que hay
 *  uno nuevo (Bloque 7.32.4 — no revelar información sensible en notificaciones). */
async function sendNewMessageEmail({ to, recipientName, senderName, chatUrl }) {
  if (!transporter) return;
  try {
    await transporter.sendMail({
      from: `"BlueHeart" <${process.env.EMAIL_USER}>`,
      to,
      subject: `${senderName} te ha escrito en BlueHeart`,
      text:
        `Hola ${recipientName},\n\n` +
        `${senderName} te ha escrito un mensaje en el piloto de BlueHeart.\n\n` +
        `Entra para leerlo y responder: ${chatUrl}\n\n` +
        `— BlueHeart`,
    });
  } catch (err) {
    console.error('[BlueHeart] Error enviando email de notificación:', err.message);
  }
}

module.exports = { sendNewMessageEmail };
