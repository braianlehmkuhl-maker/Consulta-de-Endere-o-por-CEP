const CACHE_NAME = "consulta-endereco-v1";

const arquivos = [
    "./",
    "./index.html",
    "./style.css",
    "./index.js",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

self.addEventListener("install", function(event) {

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(arquivos);
        })
    );

});

self.addEventListener("fetch", function(event) {

    event.respondWith(
        caches.match(event.request)
        .then(function(resposta) {

            return resposta || fetch(event.request);

        })
    );

});