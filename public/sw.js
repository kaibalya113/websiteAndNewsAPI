self.addEventListener('install', function(event){ // self kayword means please give me service worker in backgroung process. then we execute add event listener
    console.log('[serviceWorker] Installing service worker...', event);
});

self.addEventListener('activate', function(event){
    console.log('[serviceWorker] activating service worker...', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function(event){
    console.log('[service worker] is fetching something...', event);
    event.respondWith(fetch(event.request));
});