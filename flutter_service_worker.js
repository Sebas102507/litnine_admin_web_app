'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6ea656154a20de80e3701f8c004a82d2",
"index.html": "e85816f06b56f30f504edcc923feeffa",
"/": "e85816f06b56f30f504edcc923feeffa",
"main.dart.js": "8e3efaf74e2ec4aedc50e3333133da1a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "71d196c860d4675b570cadefe5a95faf",
".git/config": "df3fc6d2098d1a90ac56d4458913b8a0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/fa472f89c149496095473cf9b9d9f85cab19c4": "f7d8920e2f588c647169ef81d78ff7a3",
".git/objects/50/9d59956f6c26f16d317f29db55a792deaccf52": "b737adf6489706e7d5593f2596b3571e",
".git/objects/3b/70a2f86eae683706712bcfd45c937ca3cd890a": "6119386dcc3e18a6999a9d3431d5ea21",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/51/d45942068a3fe24dc477433d9152d382828a4b": "c383e760d7382f6ee427eae4301e03cb",
".git/objects/0b/0af18d297f5c962d1b6e6cd28722ca5441cdc2": "790ed42b4f47b75cc8ade633c7c85ffd",
".git/objects/02/6eab109ec3d338d78b2f36d0181e8f768d7c86": "66e4660234b8309bec62711dfd358b26",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ac/1fcadde820673876577a037d2dd8b8453fd59a": "010a241dfa9e8ee525a73b40f7182d24",
".git/objects/d7/0d8897c5800b6e125a8b5c99c7bef9177e89c7": "e8ee7158b0bba0db8f4eefa0108c7065",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/29/38029434c4c8462b07801bf759da8c44bfa797": "6b50728ba9bbbc398d024fd939869e1b",
".git/objects/29/8bef18ec3623e2da3ec78d5da1023451c7a4b3": "202d772f58f478a5052446903cc3b186",
".git/objects/87/74f11199ef8693416f56a233e6b2e79f44256f": "fce89da7d251109ae162bf6bea07f403",
".git/objects/74/5815965fa2d8913ca19de6ab7744d600a012a9": "11700415dd53b0913428e99f31f667c6",
".git/objects/17/5d4e87538dbacf2d5772648cae4b33b0656d68": "f11f5f1fb79c93e0108639a7f65cfc3c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/19c797d52ddfcff57d5580be5c5f794372e237": "735631281082eb65074b6e0b46f1e94b",
".git/objects/26/ba9683eb8afced345aea8c0a138283fae6eb4a": "e0a279342a71b4e00e74a12c6d3d0736",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/08/28f91a10008286c49f0cf780229048dab2c48a": "3632d4ad52830da6e77806d61c337940",
".git/objects/dd/c7fa997c80ac6c4766c0fe43dd3f2de4e521fb": "80c607475b8192daeed3f5c6fa8bc980",
".git/objects/a9/7138f324e2835616527023f2b46214f6d14e7c": "2af8b345cc3a60441478e8d7fcb88759",
".git/objects/a9/2007c4555631260f0b524927f0c70ec4b12558": "df3026f9cd78bca40fa48780ab269a30",
".git/objects/d2/08d4dbc57181bc316bbe6865f4fa43572e3337": "b499ab4d260ebab974b0d6341811edf6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/be55208199218ce3631ef84561453598a91f0d": "78345ad053800ed754629cca1f575669",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/3d06256f17335fe32adfb540a505cf38522764": "803aea4f1a98efb8b0aa2050d6b71bb6",
".git/objects/f7/723d5a872b2184dd743fd0624a2dc645c5a822": "6d7fdb3258214e0a00e637797addaeb1",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/cb/b0ed8d5eaf5d0d41128b3054a09755ece9ac8c": "866ba8387ccf66f9355a2d6c860bedc1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/83/af12bf58593f8173d4122bed1250d634468630": "79746d2e363fde64df7c015130369cd8",
".git/objects/84/dcfd366422bc7262284268c79c16d01ac3b59e": "05d44a328d481ca87cf879ba8312df8e",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/85/a3df64822bd1208a1d8a5e6ddef48a30463377": "0583f8e0667018d5b4269403ae510d1f",
".git/objects/85/43aeeb592f41f3563b0cb781a8a25acef770cd": "3f16716ae5efcdd63f6208911847e8b2",
".git/objects/71/405d707f23840ced1b27bf79b2e970292c77d7": "6f7353ce55c13bd309dde91583dcab08",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/2e/3c60a0158a36fecdb44f42cf315669f91b1b23": "6f052a2fca735bf6f624638929555f53",
".git/objects/7f/865660b26c27d7b27245e007401a147d871091": "b77dffcb60821b22ac5bafaeb874a7d3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8aac6dc92a32adc438cf13c870d287a5",
".git/logs/refs/heads/main": "de1b91c6de3e29b1520e5df5b47779d8",
".git/logs/refs/remotes/origin/main": "50b5bfbde6df3e4cc78042cd634c677d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "22fa616e04ae99e94e80af96ba5cd97f",
".git/refs/remotes/origin/main": "22fa616e04ae99e94e80af96ba5cd97f",
".git/index": "0c09cb20c9e20c319a54e9695a72f73a",
".git/COMMIT_EDITMSG": "3606c92cef70d444d9252440dcb263d8",
"assets/AssetManifest.json": "9d86c122f5d749df8253dd5a562c450a",
"assets/NOTICES": "5a28064890b15343ffb0e4b8c8acb556",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/AgradecimientoCompra.html": "c2149d458728283a56ba57420285bfbe",
"assets/assets/IconoCargando.png": "cd42942e5f8649c4eae7f178d2aced16",
"assets/assets/BienvenidaCliente.html": "71e4cb2ed801a9947ea6384be63333fd",
"assets/assets/CorreoPedidoTienda.html": "517f5339b9570955c961b46127688313",
"assets/assets/LitnineLogoGreenWithoutName.png": "d44b236439b0b01a644fa5abcd486557",
"assets/assets/whatsapp.png": "047a9fcdda569235d20fe7be65a0cb5e",
"assets/assets/celebrate.png": "0b8f2e6ef4a2ae6ea4f49079f50a231c",
"assets/assets/SoporteImagen.png": "40a7dcabdfd9814b43668f7560d289bc",
"assets/assets/ImagenInicio.png": "412bb01f9532f0dca12530332024c13c",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
