/* Deutschstunde service worker: offline cache + daily reminder (periodic background sync) */
const CACHE = "deutschstunde-v1";
const ASSETS = ["./", "index.html", "data.js", "app.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // network first (so updates arrive), cache fallback (offline)
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res; })
      .catch(() => caches.match(req).then((r) => r || caches.match("index.html"))));
    return;
  }
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(CACHE).then((c) => c.match(req).then((hit) => {
      const net = fetch(req).then((res) => { c.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    })));
  }
});

/* --- tiny IndexedDB helpers (shared with the page) --- */
function idb() {
  return new Promise((res, rej) => {
    const r = indexedDB.open("deutschstunde", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("kv");
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
  });
}
async function get(k) { const db = await idb(); return new Promise((res) => { const q = db.transaction("kv").objectStore("kv").get(k); q.onsuccess = () => res(q.result); q.onerror = () => res(null); }); }
async function put(k, v) { const db = await idb(); return new Promise((res) => { const tx = db.transaction("kv", "readwrite"); tx.objectStore("kv").put(v, k); tx.oncomplete = () => res(); tx.onerror = () => res(); }); }
function key(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }

async function maybeRemind() {
  const r = await get("reminder");
  if (!r || !r.remind) return;
  const now = new Date();
  if (!(r.days || []).includes(now.getDay())) return;
  const [h, m] = String(r.time || "19:00").split(":").map(Number);
  const t = new Date(); t.setHours(h, m, 0, 0);
  if (now < t) return;
  const today = key(now);
  if (r.today === today && (r.todaySec || 0) / 60 >= (r.goal || 60) * 0.5) return;
  if ((await get("lastNotified")) === today) return;
  await put("lastNotified", today);
  return self.registration.showNotification("Deutschstunde", {
    body: "حان موعد درس الألمانية اليومي (" + (r.goal || 60) + " دقيقة). Los geht's!",
    icon: "icons/icon-192.png", badge: "icons/icon-192.png", tag: "daily-lesson", lang: "ar", dir: "rtl", renotify: false
  });
}
self.addEventListener("periodicsync", (e) => { if (e.tag === "daily-reminder") e.waitUntil(maybeRemind()); });
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((cs) => {
    for (const c of cs) if ("focus" in c) return c.focus();
    return self.clients.openWindow("./");
  }));
});
