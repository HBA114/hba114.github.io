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
"main.dart.js": "225d2ca39ed5ad21ed04709337f51f3e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "cded8d53732b766eb9436bd9e7056a26",
"/": "cded8d53732b766eb9436bd9e7056a26",
"manifest.json": "dc564d705ca617c020107b5c51236583",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
".git/config": "9676ec4f4fb3bb12d9f7827ed1bef9bc",
".git/packed-refs": "9a5e613d43aedfd0697c25d14d975878",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/pack/pack-37a34ff82e9a0565fe8db83184a975f8eda465ee.idx": "e6563e2c94d7cab9f4f0ded6c5b41de8",
".git/objects/pack/pack-37a34ff82e9a0565fe8db83184a975f8eda465ee.pack": "fc58c203c524facc73b5702529b9f738",
".git/objects/pack/pack-702f24d356f93eec592ddd8905839adf7781d36a.pack": "4c48a61b35b51b0c35e1f5beaecd3d07",
".git/objects/pack/pack-702f24d356f93eec592ddd8905839adf7781d36a.idx": "11d3284ba82ff93d8a3ffc817d495ae2",
".git/objects/68/2be9913fa94a9975c957bf0800381465e6558e": "e4661d780d852d48f3e5db38e700439f",
".git/objects/02/d627844b658c35729323bed0fc31cd7e5638c6": "db2e0e0ddcfa4bfa0b9ff5775db82908",
".git/objects/a9/f5a1ca3c642b22f09204c5bca9dc344c5786cd": "83229c5566af6fd5046380fd576be712",
".git/objects/27/e8e7731a5543f3897a681ee55b40695e909be0": "4e6e534df896393688e4888eaae10056",
".git/objects/74/17b7380f51e9e257b51099dcd3eff3de980cc6": "46d6049e822ffa1d1ff5987e727dd43a",
".git/objects/00/3ca21b49cf612748a54e7a3f63bc9457e8bf74": "b92647be274b7e29552a312d157f7aed",
".git/objects/6a/e5eb31867750739a81b7d019c10d0be52e4278": "f72a2edeee4b937a16c82964f3fd7bc5",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/22/fd5f9ad227774efc1b5d8de938f3cbd208eb5a": "0df5f2fe76907cc4d4e602531fe4bc74",
".git/objects/f2/aab8975fc8cd6defc93feaa2ce96d37bccc920": "f556851d777f466aa1201f4445167c08",
".git/objects/60/ed48ef0047c0fa13d988ee77b66898512cd2d4": "4d4cea63b3fcc7dfc6c509445073c705",
".git/objects/c6/5ef896d334c6a3d77d60043816acce9e494fcf": "c4e05d2704fe7b8e8d4d577e7c15e0a9",
".git/objects/15/7196d6230f6abe862c8a1c63df6e20862a84f8": "8e23c68edf08a29e9805334bf035798a",
".git/objects/ac/3adb3e672a4916404e0869d6eb0f965a25cf0a": "bb1d493f9c71452828538a370d398c84",
".git/objects/bb/30e272db936765f69a3c2e699df71bac7fec43": "e44bba31306deaa85516750238975779",
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
".git/FETCH_HEAD": "d35621dad6bf49baf57875a3611dbadb",
".git/COMMIT_EDITMSG": "30894d1f91ae1ddcaaf346901b08293a",
".git/index": "e2599bf6222fce2b644588d1da46ebce",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "f3eed65c332eec841f99a76a76daf8d5",
".git/logs/refs/remotes/origin/main": "56d1ae5cb0acc5b64186c2249da6f952",
".git/logs/refs/remotes/origin/HEAD": "f3eed65c332eec841f99a76a76daf8d5",
".git/logs/refs/heads/main": "f3eed65c332eec841f99a76a76daf8d5",
".git/refs/remotes/origin/main": "acb9ecb2513079f83788030cefff499c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/heads/main": "acb9ecb2513079f83788030cefff499c"
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
