if(!self.define){let e,r={};const s=(s,t)=>(s=new URL(s+".js",t).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let o={};const c=e=>s(e,n),l={module:{uri:n},exports:o,require:c};r[n]=Promise.all(t.map((e=>l[e]||c(e)))).then((e=>(i(...e),o)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"weatherww"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/weatherww/css/app.4d172e82.css",revision:null},{url:"/weatherww/index.html",revision:"e185b8d20acea83f3080f904e0009e6b"},{url:"/weatherww/js/app.6a7e310c.js",revision:null},{url:"/weatherww/js/chunk-vendors.fdbb49c1.js",revision:null},{url:"/weatherww/manifest.json",revision:"c3fc8e2bafdae8b32d4b3ea9df36743d"},{url:"/weatherww/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map