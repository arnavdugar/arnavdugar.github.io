"use strict";(()=>{var t="minesweeper",i=e=>{e.waitUntil((async()=>{await(await self.caches.open(t)).addAll(["/minesweeper","/minesweeper/favicon.svg","/minesweeper/favicon/128.png","/minesweeper/favicon/144.png","/minesweeper/favicon/152.png","/minesweeper/favicon/192.png","/minesweeper/favicon/256.png","/minesweeper/favicon/512.png","/minesweeper/main.js","/minesweeper/style.css"])})())},o=e=>{let n=fetch(e.request),s=self.caches.open(t);e.respondWith((async()=>await(await s).match(e.request)||n)()),e.waitUntil((async()=>{let c=await s,a=await n;return c.put(e.request,a.clone())})())};self.addEventListener("install",i);self.addEventListener("fetch",o);var r=null;})();
