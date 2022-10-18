'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "15c9f7102f1fec76fd8b25dd194b4a0c",
".git/config": "ae86115d231f7db47223a467c5e07f5b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "242162975363f769d5b12c8d52a6a15b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7b7b82ed5eaeb98e095d673b36cfb527",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e01321bf7d09ea102a0bd11627dd7174",
".git/logs/refs/heads/main": "e01321bf7d09ea102a0bd11627dd7174",
".git/logs/refs/remotes/origin/HEAD": "0e4ec5c861b38c74b060cd679abdd781",
".git/logs/refs/remotes/origin/main": "6620f616338448748b62ecb8a43f7b98",
".git/objects/02/f77230a9112dd139f398f9f9ed74db5b8988cf": "632fb142ff8edf5c255f38dc4ae26d37",
".git/objects/03/99edd6a3d4167b56924bae08b4fe32cc367fc5": "035fdf5c70b8b50a82cce01bfb471478",
".git/objects/03/f7f18ebc7721c9e3d42200fe0f51a9187688e9": "338d125923cea31e80c544250fb87d80",
".git/objects/0b/8e7958431c170f65e1d343a718fd390798e068": "b5fcb208bbb6ddccf80a1716356fabf8",
".git/objects/0b/eb23a57b6f881a51b0ca04575fe8b09b80a452": "3ff79ea6c06b30eb76b4561e425e8540",
".git/objects/0c/4ee874ca1f123eb039de1445a0ecd93c15f3b5": "1e719f379bdc76fa1fa5acf8b53aa099",
".git/objects/0d/24154ce80fedefd5c009807342d2b894b7f5ba": "fc1530fa13e2d93774007a377a48d78b",
".git/objects/0d/c0c6f62b724f69c613498e189c1cdc87f577ec": "32f9c82e997bf0f6a844e9b362795b97",
".git/objects/0f/964dc964789256ff107d35e3c25435250b1190": "33ea55c36e8898b8441e5e1fb2a13c2c",
".git/objects/16/7494e6435f38be767aa6ef0582474d82e02fda": "9c073f2c3b9c31009edb64520af31d52",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/515c018e7d0d045e297c7a2b6aa5a05f2bc4f6": "0e86aa3d5a000a93414ea085c4a809a2",
".git/objects/22/57742d6d68458d8e9ecb9a0e63da9a0ea14730": "f22648524c8cc0f5d3cb16e60d10bada",
".git/objects/23/0c8138a3ef61744b89cff344d9ca87d6530531": "e0c8c76a491cfc6f26023382d9ef9b1c",
".git/objects/24/c1f5a175008cd3cc76eb90956261bcdfa715f0": "ea75865a4ee3389b0acb9cc4d9f63569",
".git/objects/27/baba4407c3c89a38659ef62a284a17d6ceaf77": "b8d7fd5a2c988a4d860e28dddb566e0e",
".git/objects/27/cde0f99cc730156e28436ae97d8494533c172a": "07243b6c1b399f21fb6d53c4dd1321a6",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/1fc7385533a1f15a0c5901cc9d831d866d1be6": "65dcebcd728d7deb6c4c1d1942102627",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/abd57973c1777011878d80e522701254c21d9d": "0f834e7acd8cf0c193bf5ff59c5d952b",
".git/objects/56/dfb5a5ae6a90bccb0c3ed7207b097e60d0ce0b": "0e1f490037569691e974522df427e193",
".git/objects/58/094babe7be4312c61d6a0ae3d90ecc5e175262": "edfe5968703791788c61150131baac91",
".git/objects/59/ed11db07de67ee9e2c7353107c368f30fbdb54": "8a08c374b20fe7e4ec017650482dba0f",
".git/objects/5a/7b80c2f0e6cb72cb6c5dd230e9749d27b685ed": "bede5d6c8e2bdfa4afdd513593043765",
".git/objects/5a/d103ed2659d86e16b058d4e81444e2a5f1fddb": "8853335451634cf5516a3f1281351461",
".git/objects/5c/380607c64cc4df28e4e616059af7c7e1436171": "eb1b8a100b86706fa2249f1a678877bf",
".git/objects/5f/73415a0e32055c98313b4c4155355e7e59cc5f": "d9231b54e636fb7f897c5f23f43d4f83",
".git/objects/62/aad4f710acb7525430b785cb48d25975556a46": "99e5f41bb9854787a1e922e810d78840",
".git/objects/65/5fc6dbec1bdc7e064d604c52ce3ba7b3d7bc91": "1311420e19a26a506890eccef5a72c15",
".git/objects/66/afb7e54a22694e78f4262f5599d04f8d1c047b": "27f6ed420bbe0368fef214b7750e8ff8",
".git/objects/69/0a4c7ec134c9549ba76728e59d18ff2bf2a92f": "188f9785ddd923be5eb37be46c522e27",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/84/03a3dd09e40ee9e953d8be24ae1d0875cad9a3": "d95f550b578ad05f94b00bdb09c77820",
".git/objects/92/b43b3a493e743a8cef0853b0743c1e0d146ff4": "04242a4d08b70bbd47e7137301cb1b37",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9f/f8d23def12cd2040f2bc3984a2b20ad8eb48cb": "2021096b873b219521c9fb3808db70e1",
".git/objects/a8/58079a024d686173fece2367711333c3e8c9ac": "93ea9d44a87a53cb4e54e5904a8db6ec",
".git/objects/a9/af871623dfdd59d0640ee7bd9de3ad1224812d": "6e6e5daee5748d94a12167e8fad39c47",
".git/objects/b1/26ecc581231eaeeb8c494e01de87e3cd972ed1": "b8e98fa6e721fbdcab1d46fdb9e9ed40",
".git/objects/b6/bcce77d799a198b64569508705ed85af4babd6": "3a54ee4e056eb7bfd97b56906e43ac85",
".git/objects/c0/dfe608b4af686a3bce7d620c15db2bb92e13c4": "1c5d3e51e0149c10ccb166f7314ebeef",
".git/objects/c5/7662f41fcd4e566d951f309828f67749fac879": "2d0ee38ea14c9fb66f80b29b5a94439c",
".git/objects/c6/0600bb9e1ad7771642455399ca16139e35fdb5": "38f788273af1afafc9f6ebe44b4b60a9",
".git/objects/c8/7d9075e10eefa4e585599cc54c3d7df62c2cdf": "4625ce8f188d17f52941bcd185aa3308",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/cc5ec247c6cd425cb8dad9fb397678cb71b04c": "d9e23998a10c6cb2ce625e508d1cc88b",
".git/objects/ce/2d7f0d75a8afc0d1a0017584c438cfeac514d8": "a6825dd23958ce53b3c5f508157499f4",
".git/objects/cf/c45a2861673996f5d8121e67d67beddb9c287f": "024ba770e69fe6b7ca9ad14afbd46681",
".git/objects/d0/85c9ff939ade027f05d9dd123fe3c2f1bdd373": "7e19c469eae06fb707e14864e5ee2ad1",
".git/objects/d3/edc83bcda72a2bfe1d1f269a1f50b44dfcf4d6": "d2404bb8b2d327be12e46a2a1490abe4",
".git/objects/d6/a0247f20bcc50ce8fe27f857da5bdab218e8f9": "a03c4741c0a88900e0a177e62cf759a6",
".git/objects/df/724ec1fc31e8d31cb874c725e877f078f7d610": "be537b76265b5e641a1e83659f70df2a",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/eb/5838fd074fb8e2e96668198ac58780d28fb630": "5cd51be9c252d5a700a59e49a97767e1",
".git/objects/f1/f95d5e86248d140d410d3d6e07c8fa1080e4c1": "958a99a2978e84af9b1d53b3f2e5abbc",
".git/objects/f4/1b0322ffe0e960861df3f376b186d4f68deb75": "ec73cbcabbc7623be5dc3f3bd75c655b",
".git/objects/f8/518f717aad402b219364283159ef329d07b08a": "ebeb1b17f06d0a3ad3cfb36d324993c5",
".git/objects/pack/pack-10383cad719efd1732291a5ea1b027ec59a692e0.idx": "d2b1541e78e34d312928276a136cd021",
".git/objects/pack/pack-10383cad719efd1732291a5ea1b027ec59a692e0.pack": "d05b7c2719eacba69546319db8977ae2",
".git/packed-refs": "b8a9ba61b3fb8cf56422ec60ee4857b1",
".git/refs/heads/main": "70a69e380fa4ae6d7d88c058e0a5e22f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "70a69e380fa4ae6d7d88c058e0a5e22f",
"assets/AssetManifest.json": "823f44a55e36395bf2d69ca966631778",
"assets/assets/images/matrix.jpg": "cf81c63a2f397ab304ec35303b59717a",
"assets/assets/language/buttons.json": "3a6cff1c787a724dd2534c915d2ae544",
"assets/assets/language/page_texts.json": "805e62c3e44d49533c6b29fcc0a3162a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2cbcf66859d2f9eb975cd65faa453627",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "c329b25ddb8f8f7e816895422ba2873b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0041387a11d76ffcbdc22820528895f9",
"/": "0041387a11d76ffcbdc22820528895f9",
"main.dart.js": "5093d6d8c4a817fb13753f3600cc5dcc",
"manifest.json": "9583d9cb316699e12506497202a0528a",
"version.json": "186b801b6d3a593231ca6520392b5827"
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
