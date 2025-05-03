self.addEventListener('install', function (e) {
    e.waitUntil(
      caches.open('fluffyfish-store').then(function (cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/script.js',
          '/manifest.json',
          '/assets/fish.png',
          '/assets/bg.mp3',
          '/assets/flap.wav',
          '/assets/hit.wav'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function (e) {
    e.respondWith(
      caches.match(e.request).then(function (response) {
        return response || fetch(e.request);
      })
    );
  });
  