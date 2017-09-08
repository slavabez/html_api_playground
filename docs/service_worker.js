
var CACHE_NAME = 'slava-cache';
var urlsToCache = [
    '/',
    '/test_files/sample_image_large.jpg'
];


self.addEventListener('install', function(event){
    // Installation steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then( function(cache) {
                console.log('Cache opened');
                return cache.addAll(urlsToCache);
            })
    );
});


// try to respond wit ha cached resource

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Found in the cache
                if (response){
                    return response;
                }
                return fetch(event.request);
            })
    );
});