// Service worker mínimo: permite instalar o portal como aplicativo.
// Não guarda nada em cache; toda requisição vai direto para a rede.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request)); });
