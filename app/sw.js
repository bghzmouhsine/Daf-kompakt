self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k === "deutschstunde-v1"; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.registration.unregister(); })); });
