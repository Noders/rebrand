"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/140e6e4d033890a1c55a6040bed417fd.png","140e6e4d033890a1c55a6040bed417fd"],["/2f49c836a214ac81367169770f648fd0.jpg","2f49c836a214ac81367169770f648fd0"],["/assets/.DS_Store","6ab136ab594d7e2123958925ebda7321"],["/assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/assets/icons/android-chrome-192x192.png","59e221032ab061cad83b6ce2bcddbde8"],["/assets/icons/android-chrome-512x512.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/assets/icons/apple-touch-icon.png","a0e46feb3cc577478b127936e739dd08"],["/assets/icons/favicon-16x16.png","d712b605ed58419c7e6d4ab885d147b7"],["/assets/icons/favicon-32x32.png","2f7ce797cf8f198dedb9a9f38b7ef13b"],["/assets/icons/mstile-150x150.png","ba817517b2c4e1ba1ce802c4d4fafdb4"],["/assets/noders/bg.jpg","c0135d7d560a13ac694bbb26adf37be9"],["/assets/noders/bg2.jpg","be6727c5cfda23cedca90e6d3846abd0"],["/assets/noders/bg3-min.jpg","2f49c836a214ac81367169770f648fd0"],["/assets/noders/bg3.jpg","0b912cec85db20dbaba57f0fa042371b"],["/assets/noders/noderslogo-compressor.png","ae8e1270f99035e45fb51615a958364e"],["/assets/noders/noderslogo-min.png","e6942a8c523084bfd097aadb2f2d7831"],["/assets/noders/noderslogo.png","4186ed6e0f0f769b77b5d3ced9fd7257"],["/assets/noders/noderslogo_2.png","140e6e4d033890a1c55a6040bed417fd"],["/bundle.js","51b27c63d5a4150cfbc7aae56eadb18d"],["/favicon.ico","94eae66bebbd6bbfe48a669f245048ac"],["/index.html","79fdfc3e2c000231b8ad75712bc86889"],["/manifest.json","409a6ab1239000b8c4b64cf7c808d616"],["/polyfills.chunk.5aa45.js","b169385ec7ad88b0a6a4fa5af9ee2b30"],["/route-home.chunk.18ce0.js","e3f086b6385fa7b5e3c9c3e79bf4fd9e"],["/route-profile.chunk.1aadf.js","5834b97f7c099a1ccddad732eeb98beb"],["/style.css","dac5395cc4036baebf5b2d87afcfb795"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,a,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),s=createCacheKey(t,hashParamName,a,!1);return[t.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("index.html",self.location).toString(),n=urlsToCacheKeys.has(a)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});