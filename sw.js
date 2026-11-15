const CACHE='th-plants-57f295cd';
const ASSETS=["./", "index.html", "manifest.json", "icon-180.png", "icon-192.png", "icon-512.png", "img/10.jpg", "img/101.jpg", "img/103.jpg", "img/104.jpg", "img/108.jpg", "img/109.jpg", "img/11.jpg", "img/112.jpg", "img/113.jpg", "img/114.jpg", "img/115.jpg", "img/116.jpg", "img/117.jpg", "img/119.jpg", "img/12.jpg", "img/120.jpg", "img/121.jpg", "img/123.jpg", "img/124.jpg", "img/126.jpg", "img/128.jpg", "img/129.jpg", "img/13.jpg", "img/130.jpg", "img/134.jpg", "img/136.jpg", "img/137.jpg", "img/138.jpg", "img/139.jpg", "img/14.jpg", "img/140.jpg", "img/143.jpg", "img/144.jpg", "img/145.jpg", "img/146.jpg", "img/147.jpg", "img/15.jpg", "img/152.jpg", "img/154.jpg", "img/156.jpg", "img/157.jpg", "img/158.jpg", "img/16.jpg", "img/160.jpg", "img/17.jpg", "img/18.jpg", "img/19.jpg", "img/2.jpg", "img/20.jpg", "img/21.jpg", "img/22.jpg", "img/23.jpg", "img/24.jpg", "img/25.jpg", "img/26.jpg", "img/27.jpg", "img/28.jpg", "img/29.jpg", "img/3.jpg", "img/30.jpg", "img/31.jpg", "img/32.jpg", "img/33.jpg", "img/34.jpg", "img/35.jpg", "img/36.jpg", "img/37.jpg", "img/38.jpg", "img/39.jpg", "img/4.jpg", "img/40.jpg", "img/41.jpg", "img/42.jpg", "img/43.jpg", "img/44.jpg", "img/45.jpg", "img/46.jpg", "img/47.jpg", "img/48.jpg", "img/49.jpg", "img/5.jpg", "img/50.jpg", "img/51.jpg", "img/52.jpg", "img/53.jpg", "img/54.jpg", "img/55.jpg", "img/56.jpg", "img/57.jpg", "img/58.jpg", "img/59.jpg", "img/6.jpg", "img/60.jpg", "img/61.jpg", "img/62.jpg", "img/63.jpg", "img/64.jpg", "img/65.jpg", "img/66.jpg", "img/67.jpg", "img/68.jpg", "img/69.jpg", "img/7.jpg", "img/70.jpg", "img/71.jpg", "img/72.jpg", "img/73.jpg", "img/74.jpg", "img/75.jpg", "img/76.jpg", "img/77.jpg", "img/78.jpg", "img/79.jpg", "img/8.jpg", "img/80.jpg", "img/81.jpg", "img/82.jpg", "img/83.jpg", "img/84.jpg", "img/85.jpg", "img/86.jpg", "img/87.jpg", "img/88.jpg", "img/89.jpg", "img/9.jpg", "img/90.jpg", "img/91.jpg", "img/92.jpg", "img/93.jpg", "img/94.jpg", "img/95.jpg", "img/96.jpg", "img/97.jpg", "img/98.jpg", "img/99.jpg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const url=new URL(e.request.url);
  if(url.origin!==location.origin) return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(r=>{const c=r.clone(); caches.open(CACHE).then(x=>x.put('index.html',c)); return r;}).catch(()=>caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
