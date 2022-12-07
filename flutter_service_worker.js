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
"assets/assets/images/github.png": "dcf16ddd7921830ac42ade17aca0679b",
"assets/assets/images/matrix.jpg": "cf81c63a2f397ab304ec35303b59717a",
"assets/assets/images/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/language/buttons.json": "c4c473cda111b29be62b1979d13ba41a",
"assets/assets/language/page_texts.json": "420a09704b7ff654741a9db52207e424",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "021ac7b4150a45f3acfcb8c8de857f31",
"assets/AssetManifest.json": "6df8c6b0c789e9948b9e62ecbcb12487",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "3f272031232451652f597bdeacbf9676",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"version.json": "186b801b6d3a593231ca6520392b5827",
"main.dart.js": "b365ca4082d2ed3264b456b048f6011d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "3b96bc69104c3081313cfe17d67f8084",
"/": "3b96bc69104c3081313cfe17d67f8084",
"manifest.json": "dc564d705ca617c020107b5c51236583",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
".git/config": "9676ec4f4fb3bb12d9f7827ed1bef9bc",
".git/packed-refs": "9a5e613d43aedfd0697c25d14d975878",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/4a/821ea4c2eb6ef3a20db0df2fca85a625819a01": "f5ae80d9009e0c70515772865454e175",
".git/objects/pack/pack-37a34ff82e9a0565fe8db83184a975f8eda465ee.idx": "e6563e2c94d7cab9f4f0ded6c5b41de8",
".git/objects/pack/pack-37a34ff82e9a0565fe8db83184a975f8eda465ee.pack": "fc58c203c524facc73b5702529b9f738",
".git/objects/99/0f9876329fc40f88e52a03accd61b4598f46ca": "4042f6bdf37009a5b87487030139a17e",
".git/objects/88/e764a6af6504ebba92c1471f320a5daa5bbff5": "bbc478578e6350f6acd37cc51581ec16",
".git/objects/5f/676c3d2515129d727f4175f9caac9cf1784fd7": "bf44179bed37ee7257ee53faf779d2c6",
".git/objects/d9/85749b77d2f9a23ec557da92e8fb592f1e2b56": "4600c8278951c4ca90e209e8e0efbdeb",
".git/objects/0d/2d9502a6e2ff451fc5645c331ac4ba21562d90": "84d6fed91e9373e5c0821efd19ef3ac0",
".git/objects/87/7ec2062db45ab86e3ff7720daa5769f19aa6be": "e25757397d010a48596b979886240075",
".git/objects/ef/852896aa986a10d765fdcc6aac1599b17c6e75": "57df8ab6fc1e53e1b9a216ae0b1dfb84",
".git/objects/f3/68cffe7a6a5fd28af581b741e01296bbd40b91": "b4c2949dbda829c6b2e3f3459749be04",
".git/objects/ae/76b2f7278ae5ea1b235b1ff5ff36df36c7df39": "7a9525302f167f84c7280f614a06f9fc",
".git/objects/2e/0104b106a819335e6771679edd0dea8048d340": "421bb242512dbc5268d6c11d30ccc0ef",
".git/objects/2e/e03e400e5c0f2de01e0a06263cdf0d6196d005": "f57a6982023e3756fdf14bb48c085db9",
".git/objects/e2/65a1d9c07db9ef6984028f512036f8855e3411": "6ba516ad4904a4b11560e32e52eb24da",
".git/objects/ba/d02c8f494c05230532fa349d9ae4a8e839baa4": "4d7e6c9761da91942079eaa937a854ce",
".git/objects/4b/47761ee0a77f507af92441ea9a809b05fcb225": "546c9929096710d3038572a98e54eea9",
".git/objects/26/b8a38cd39fd37ef911c076ce6bba33db5b0448": "f320753f14fa1a276a2d602185a7b398",
".git/objects/ad/efd5501ea76ee787e4130ca3bddecbf94f9295": "1dd17070cf4450ae441cd10621f330a2",
".git/objects/fa/a32fd4518d36b3589f67b6f5346534d4bf09d6": "ea8f6956a58424705d26548bd02bdc33",
".git/objects/4d/2d431be379846923ac600e36086a8e94932541": "ea29dcf2059c6e96199a36b1845dba2d",
".git/objects/f6/f2ccefe3ce867bc0e289ca2a317d5d48b0aea4": "4549d363ddbf6ce9f47162a341de65d2",
".git/objects/8c/5013c1fb9785d5b3561b00dc9eb5f8cf73cf9f": "ec7587571130ab734f5bbfc024a51a33",
".git/objects/59/aa962e081a3d473795e1ed8c46dcaba6e5ae87": "3c9c8b89b41141bb99a1cb022b86de88",
".git/objects/8a/afcc6fb74112b86fbb9ecfa3e04a1b4a354404": "5c7d9334913924ee96115e8fc1f94c37",
".git/objects/d1/23b055b9694ae81854cf0418ff04af73bb0fef": "aa4b9832503f349a59f6141507aacc9c",
".git/objects/de/0767e087104e83c977022e86247d6e731037ae": "d1a8a745f009aada33ba2aace9292f00",
".git/objects/a2/12df975527b20f262dc9135a5fcbc90ad6920e": "ba5a1644487abef5008c6c6320bf0da7",
".git/objects/71/6d8ff1862cab2a6508cb24cff6d2712f21d524": "3a10f657dcb6cbb81aaa60e4a7c84b35",
".git/objects/d5/26207de0d7da449bd211438449c80e9c129789": "995d6a0ed1cd384733b7dc3e4fad861d",
".git/objects/8b/2c5c86c694975d857d881aacf236cd32a87896": "0794f1fbf7361a8e81e9b7d650e7d320",
".git/objects/42/4a817769076fa500f6cf3fffb8f38dbbb0ef1f": "67d1897e2ad88682adf3063b371d1a66",
".git/objects/86/1cf90c4cf121925b12752a2ae8569c402312ce": "551a3d06ccb035d53d50b9d1c48a9766",
".git/objects/62/f63f7c4ed3a498e32a1ea889a0e2590757f920": "a88e747bc4f81985e725ab363a1dcfb1",
".git/objects/f8/c95f1051581af1fc6177a1ce79f11a6d8fde6d": "376b632eb0e96a421a4d0a6629309f67",
".git/objects/81/7bfd6cc6b9d8382485c2c2f3be32b751b3adbe": "a3e7725a6fd16d7215cab32b57910fc6",
".git/objects/15/54319280cee8a02435ce5fe1c8ce1f114a15c3": "63d0dc81eec7433afca1bd2d6508ce6a",
".git/objects/15/02c630756c7b97558a77569971774f71271fd0": "8b2bfc63f8f9592846cd45873b716cc9",
".git/objects/15/7196d6230f6abe862c8a1c63df6e20862a84f8": "8e23c68edf08a29e9805334bf035798a",
".git/objects/15/5698e7b2bf5511e324e317d553476fbd198ce0": "4bb37b6be7dac2a7283359789bedc3c0",
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
".git/COMMIT_EDITMSG": "67a1a0ccd0ba691144e33440611d1a2e",
".git/index": "e395aae5e6b4bf251e4aa3ee86f71bc9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "8c786e58d8482602b56a877ffa0f57a4",
".git/logs/refs/remotes/origin/main": "f8d74e7d1c8ef008a3d6e9652475eda3",
".git/logs/refs/remotes/origin/HEAD": "f3eed65c332eec841f99a76a76daf8d5",
".git/logs/refs/heads/main": "8c786e58d8482602b56a877ffa0f57a4",
".git/ORIG_HEAD": "acb9ecb2513079f83788030cefff499c",
".git/refs/remotes/origin/main": "bc3aa047e22561102d0dd7bca99ccb0e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/heads/main": "bc3aa047e22561102d0dd7bca99ccb0e"
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
