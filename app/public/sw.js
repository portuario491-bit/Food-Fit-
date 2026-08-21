self.addEventListener('push', (event) => {
  let data = { title: 'BlueHeart', body: 'Tienes una notificación nueva.', url: '/chat' };
  try {
    if (event.data) data = event.data.json();
  } catch (e) {
    // si no viniera como JSON, usamos los valores por defecto de arriba
  }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/blueheart-icon.png',
      data: { url: data.url },
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || '/chat';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url.includes(url) && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
