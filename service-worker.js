const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/manifest.json',
  '/Icons/icons/icon-72x72.png',
  '/Icons/icons/icon-96x96.png',
  '/Icons/icons/icon-128x128.png',
  '/Icons/icons/icon-144x144.png',
  '/Icons/icons/icon-152x152.png',
  '/Icons/icons/icon-192x192.png',
  '/Icons/icons/icon-256x256.png',
  '/Icons/icons/icon-384x384.png',
  '/Icons/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
