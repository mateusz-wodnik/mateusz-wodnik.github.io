"use strict";var precacheConfig=[["/index.html","b08e976e46c2f13be6112f98a7cd9482"],["/static/css/main.7e7df6cf.css","36e492653bed2c6bc6036f0579da7689"],["/static/js/main.244854c1.js","af31c31e9defb6fe7c72f9072a6e23e9"],["/static/media/LeagueSpartan-Bold.a6509aa3.otf","a6509aa3161205ebe01c0f7e2f209b44"],["/static/media/Roboto-Black.ec4c9962.ttf","ec4c9962ba54eb91787aa93d361c10a8"],["/static/media/angular-original.db12f97b.svg","db12f97bda8cd0682f2c1daa1396daa3"],["/static/media/aside-bg.f8d45348.svg","f8d4534855d4f1b742e9c51423ea14b0"],["/static/media/backbone-original.39eac6f4.svg","39eac6f48bf88a110cf4a56186a48c00"],["/static/media/css3-original.a70a7e3e.svg","a70a7e3e545f3ddc5707d4c4da8cfa17"],["/static/media/es6-original.bfc684a1.svg","bfc684a1c97ff311559bc896d7653ef0"],["/static/media/express-original.c3af8b67.svg","c3af8b67d896ace3528c7f109750e875"],["/static/media/git-original.c02b7da9.svg","c02b7da93fea7f472b89583e23f12759"],["/static/media/gulp-original.3b309d8d.svg","3b309d8dc61a691b3ed514f62c2f8bcc"],["/static/media/html5-original.7997c424.svg","7997c4244e7a8cf2b160803e1c741502"],["/static/media/jasmine-original.87220f71.svg","87220f713630c403715767b24fd37dde"],["/static/media/javascript-original.de79c8f1.svg","de79c8f14c2b0d692ae215d7e6eccd54"],["/static/media/mongodb-original.52783a2f.svg","52783a2f8043e237279093badadc9cf1"],["/static/media/nodejs-original.ccb43d34.svg","ccb43d3400fb05951c89ad3ba6acd9d5"],["/static/media/react-original.e9f3d01c.svg","e9f3d01c242e086f895bde131803b451"],["/static/media/udacity.be96fb8a.png","be96fb8af89d3b3002e84bbce8368479"],["/static/media/ue.3cdfaa5f.png","3cdfaa5f01b0cbdef2a49c3719198c74"],["/static/media/webpack-original.9a7a86a8.svg","9a7a86a89b95d03d85686fad1578790e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});