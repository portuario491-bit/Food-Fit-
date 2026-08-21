/**
 * Notificaciones push del navegador (Bloque 7.32) — segundo canal, además
 * del email. Solo funciona si la persona ha activado las notificaciones
 * en su dispositivo (requiere un gesto explícito del usuario, no se puede
 * activar solo). En iPhone, Safari solo permite esto si la web se ha
 * añadido a la pantalla de inicio — es una limitación de Apple, no de la app.
 */
const webpush = require('web-push');
const db = require('./db');

const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || '';
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || '';
const pushEnabled = !!(VAPID_PUBLIC_KEY && VAPID_PRIVATE_KEY);

if (pushEnabled) {
  webpush.setVapidDetails(
    process.env.VAPID_SUBJECT || 'mailto:contacto@blueheart.local',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
  );
} else {
  console.warn(
    '[BlueHeart] Aviso: no se han definido VAPID_PUBLIC_KEY/VAPID_PRIVATE_KEY — no se enviarán notificaciones push.'
  );
}

/** No revela el contenido del mensaje en la notificación, solo avisa de
 *  que hay uno nuevo (Bloque 7.32.4). */
async function sendNewMessagePush(userId, { title, body, url }) {
  if (!pushEnabled) return;
  const subs = db.listPushSubscriptionsFor(userId);
  await Promise.all(
    subs.map(async (sub) => {
      const subscription = {
        endpoint: sub.endpoint,
        keys: { p256dh: sub.p256dh, auth: sub.auth },
      };
      try {
        await webpush.sendNotification(subscription, JSON.stringify({ title, body, url }));
      } catch (err) {
        // 404/410 = el navegador ha invalidado esa suscripción (desinstaló, expiró...)
        if (err.statusCode === 404 || err.statusCode === 410) {
          db.deletePushSubscription(sub.endpoint);
        } else {
          console.error('[BlueHeart] Error enviando push:', err.message);
        }
      }
    })
  );
}

module.exports = { sendNewMessagePush, pushEnabled, VAPID_PUBLIC_KEY };
