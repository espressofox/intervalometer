
const CACHE = 'intervalometer-v3';

const FILES = [
    './',
    './index.html',
    './manifest.webmanifest',
    './icon-192.png',
    './icon-512.png'
];

// Cache the app files for offline use.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE)
            .then(cache => cache.addAll(FILES))
            .then(() => self.skipWaiting())
    );
});

// Remove outdated caches.
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys
                    .filter(key => key !== CACHE)
                    .map(key => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

// Prefer the latest HTML when online.
// Fall back to the cached version when offline.
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);

    if (
        request.method !== 'GET' ||
        url.origin !== self.location.origin
    ) {
        return;
    }

    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then(response => {
                    if (response.ok) {
                        const copy = response.clone();

                        event.waitUntil(
                            caches.open(CACHE)
                                .then(cache => cache.put('./index.html', copy))
                        );
                    }

                    return response;
                })
                .catch(() => caches.match('./index.html'))
        );
    } else {
        event.respondWith(
            caches.match(request)
                .then(cached => cached || fetch(request))
        );
    }
});
