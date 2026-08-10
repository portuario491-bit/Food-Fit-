// Service worker de Food&Fit: permite que la app abra sin conexión.
// Estrategia "red primero": si hay internet, siempre se usa la versión
// más reciente del servidor (y se guarda en caché). Solo si la red falla
// (sin conexión) se sirve la última copia guardada. Así nunca se muestra
// una versión vieja teniendo internet disponible.

const CACHE_NAME = 'foodfit-v1';
const CORE_ASSETS = [
  'food-and-fit.html',
  'index.html',
  'manifest.json',
  'icon-512.png',
  'privacidad.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(
        names.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;

  // Nunca interceptar peticiones que no sean GET (ej: guardar datos en
  // Supabase), para no interferir jamás con el guardado de información.
  if(req.method !== 'GET') return;

  event.respondWith(
    fetch(req)
      .then(res => {
        if(res && (res.ok || res.type === 'opaque')){
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then(cached => cached || caches.match('food-and-fit.html')))
  );
});
