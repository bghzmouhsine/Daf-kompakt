/* DaF kompakt: offline support */
const SHELL='dafk-shell-v1', AUDIO='dafk-audio-v1', FONTS='dafk-fonts-v1';
const SHELL_FILES=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/favicon-48.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(SHELL).then(c=>c.addAll(SHELL_FILES)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>[SHELL,AUDIO,FONTS].indexOf(k)<0).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
function cacheFirst(name,req){ return caches.open(name).then(c=>c.match(req).then(r=>r||fetch(req).then(res=>{ if(res.ok||res.type==='opaque') c.put(req,res.clone()); return res; }))); }
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const u=new URL(req.url);
  if(u.origin===location.origin && u.pathname.indexOf('/audio/')>=0){ e.respondWith(cacheFirst(AUDIO,req)); return; }
  if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){ e.respondWith(cacheFirst(FONTS,req)); return; }
  if(u.origin===location.origin){
    e.respondWith(fetch(req).then(res=>{ if(res.ok){ const cl=res.clone(); caches.open(SHELL).then(c=>c.put(req,cl)); } return res; })
      .catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))));
  }
});
