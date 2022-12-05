'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/assets/images/matrix.jpg": "cf81c63a2f397ab304ec35303b59717a",
"assets/assets/language/buttons.json": "c4c473cda111b29be62b1979d13ba41a",
"assets/assets/language/page_texts.json": "420a09704b7ff654741a9db52207e424",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "021ac7b4150a45f3acfcb8c8de857f31",
"assets/AssetManifest.json": "823f44a55e36395bf2d69ca966631778",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "3f272031232451652f597bdeacbf9676",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"version.json": "186b801b6d3a593231ca6520392b5827",
"main.dart.js": "87b9c1fe67786145d7d6b913c8c6108c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "97a684ed293e61b1a1fb4a955283c0af",
"/": "97a684ed293e61b1a1fb4a955283c0af",
"manifest.json": "dc564d705ca617c020107b5c51236583",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
".git/config": "9676ec4f4fb3bb12d9f7827ed1bef9bc",
".git/packed-refs": "9a5e613d43aedfd0697c25d14d975878",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/pack/pack-37a34ff82e9a0565fe8db83184a975f8eda465ee.idx": "e6563e2c94d7cab9f4f0ded6c5b41de8",
".git/objects/pack/pack-37a34ff82e9a0565fe8db83184a975f8eda465ee.pack": "fc58c203c524facc73b5702529b9f738",
".git/objects/0d/2d9502a6e2ff451fc5645c331ac4ba21562d90": "84d6fed91e9373e5c0821efd19ef3ac0",
".git/objects/4b/47761ee0a77f507af92441ea9a809b05fcb225": "546c9929096710d3038572a98e54eea9",
".git/objects/26/b8a38cd39fd37ef911c076ce6bba33db5b0448": "f320753f14fa1a276a2d602185a7b398",
".git/objects/8c/5013c1fb9785d5b3561b00dc9eb5f8cf73cf9f": "ec7587571130ab734f5bbfc024a51a33",
".git/objects/de/0767e087104e83c977022e86247d6e731037ae": "d1a8a745f009aada33ba2aace9292f00",
".git/objects/d5/26207de0d7da449bd211438449c80e9c129789": "995d6a0ed1cd384733b7dc3e4fad861d",
".git/objects/8b/2c5c86c694975d857d881aacf236cd32a87896": "0794f1fbf7361a8e81e9b7d650e7d320",
".git/objects/f8/c95f1051581af1fc6177a1ce79f11a6d8fde6d": "376b632eb0e96a421a4d0a6629309f67",
".git/objects/15/02c630756c7b97558a77569971774f71271fd0": "8b2bfc63f8f9592846cd45873b716cc9",
".git/objects/15/7196d6230f6abe862c8a1c63df6e20862a84f8": "8e23c68edf08a29e9805334bf035798a",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "115c7cd8f68daf191f0bab68a98e1633",
".git/COMMIT_EDITMSG": "60369157fccd9a373028e9e7cf43a0e4",
".git/index": "05da1f9f1fc39531b7b5e327d3865818",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "ead33b2d9d8aae76045f9949072238e8",
".git/logs/refs/remotes/origin/main": "be23cf4680d51d8b53256ba7c5cdf7fc",
".git/logs/refs/remotes/origin/HEAD": "f3eed65c332eec841f99a76a76daf8d5",
".git/logs/refs/heads/main": "ead33b2d9d8aae76045f9949072238e8",
".git/ORIG_HEAD": "acb9ecb2513079f83788030cefff499c",
".git/refs/remotes/origin/main": "cdaa19cf19289b2a36e7fafa1aea1a23",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/heads/main": "cdaa19cf19289b2a36e7fafa1aea1a23"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
