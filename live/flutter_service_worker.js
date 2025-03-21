'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "6cc7aff2ed093fe31a880cb68647d4f7",
"flutter_bootstrap.js": "58922fe25d5d3731346f740a9fcb30ef",
"main.dart.js_79.part.js": "9fbfdefeab0663e634eee9879b02849f",
"main.dart.js_69.part.js": "10bd84f626febddd876b73c822eff611",
"main.dart.js_101.part.js": "1f7466e7f6b93d5e5746aeac44d4adf5",
"main.dart.js_111.part.js": "83c8f9c61f5748d37a3e75c964936757",
"main.dart.js_24.part.js": "804413ee2c73b93df19cc77618512ffc",
"main.dart.js_46.part.js": "a7eb60d248f87440fc47f1bea72170f8",
"main.dart.js_56.part.js": "8fe80bafeac18b5f129c3c3b8af4e6ce",
"main.dart.js_163.part.js": "4e45861c6d9e59b5de62acfb13fba45a",
"main.dart.js_173.part.js": "bfc4a9829b2f6605566cd2a8c4c93148",
"main.dart.js_145.part.js": "7c4ce9ef76db1dec13007314a3d6c11f",
"main.dart.js_155.part.js": "f15ecf1a5bc0b02a4dee70bb07a34d9f",
"version.json": "764fbd1bb09fdd4946aa65e35a8fa946",
"main.dart.js_7.part.js": "9be2523520cae1887a9ce2b121024455",
"main.dart.js_70.part.js": "6717e24f282ad1958f9a1f74e511c9cf",
"main.dart.js_127.part.js": "5f969ca5f72e8d42a4f21dcc98d570fd",
"main.dart.js_137.part.js": "d2aafe8bebd9b695c2b4a8d64c997410",
"main.dart.js_84.part.js": "6d7cafd54741088ff3385a3690e6a49d",
"main.dart.js_94.part.js": "8af664f52e12e7bf7498c3db6c622978",
"main.dart.js_118.part.js": "8355e60e7e3c7013e3acbc64e56fa5ba",
"main.dart.js_154.part.js": "1afcb6f27810b528c63a0dcf09833d65",
"main.dart.js_144.part.js": "d0cb8bd293874c1b5ceb6c694a707551",
"main.dart.js_71.part.js": "f051b6829abe474ac5c2e2e2985a37ea",
"main.dart.js_61.part.js": "9457b25ab33f0dafd4cfa2055382926e",
"index.html": "ec4c9584778e07c5c8e11b5c4222c7d9",
"/": "ec4c9584778e07c5c8e11b5c4222c7d9",
"main.dart.js_136.part.js": "7cafe7ace3a17ba58f5c739442e2d838",
"main.dart.js_109.part.js": "8efc0d102e6b6851b67265d01fb220ad",
"main.dart.js_119.part.js": "1e2ac84aea46797c23a47dfda0ea6124",
"main.dart.js_186.part.js": "cb15d6157e7c73534d6a59bb2fd93409",
"main.dart.js_68.part.js": "fde1be886fb76e526fda743c3ff7d65a",
"main.dart.js_57.part.js": "247afb733fdc3e2e57a1f5f5cbe055a7",
"main.dart.js_47.part.js": "dbd3e7d16b0c4d08f4b54b3b96fd664c",
"main.dart.js_172.part.js": "213684ba201952a068477e70dc64f771",
"main.dart.js_162.part.js": "2f4432cb0c7635882834ce2bdce26029",
"main.dart.js_134.part.js": "351b81b9b562ba86f0bd305778a9e621",
"main.dart.js_11.part.js": "d622b3e1bd58e7d6d1f503fb1e9b31d8",
"main.dart.js_4.part.js": "43713b4136df90dc8802c3fb55b5b795",
"main.dart.js_73.part.js": "50d4c2925926fd45fe37ba062916a0d2",
"main.dart.js_146.part.js": "5bfde90342a88d20bcd9ba8a9e1c568a",
"main.dart.js_156.part.js": "426d128df8e90daf514529b80b0b8264",
"main.dart.js": "2200e3f79f2259a23215d786aaf19c99",
"main.dart.js_87.part.js": "3bb1e6cc9c86c9e9872abd2987987105",
"main.dart.js_97.part.js": "8a282bdc3355af6ce7d1e5270f5efefa",
"main.dart.js_179.part.js": "522a4119e7719c03a09226e54540b070",
"main.dart.js_169.part.js": "2a24e9296f320df5812924a18b42bb73",
"main.dart.js_184.part.js": "b2e8cb57ebe80fc4455b2585faccba0f",
"main.dart.js_18.part.js": "f8d5efe29acd14b5d12de3c1c19512c2",
"main.dart.js_160.part.js": "cbfd9bfeb010c4df6f961de99226486a",
"main.dart.js_170.part.js": "654441fc10b133703c76b52a6ed41879",
"main.dart.js_45.part.js": "678f6c510756983682fafb5f569b30e7",
"main.dart.js_27.part.js": "fbd9c47ecca7d36668ab9937ce462d02",
"main.dart.js_102.part.js": "6123edc1328717ab8456d4604920de6f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "bc335cfc599e42d6b7fa9aaeafe16c6f",
"main.dart.js_171.part.js": "991d17c6f4d17a20b3b3ddac13fee2ea",
"main.dart.js_161.part.js": "287ec8c4d5af8c418eeb7af23aae9b3d",
"main.dart.js_54.part.js": "bfb33360131c43e2bfde5b068009afdc",
"main.dart.js_36.part.js": "bec261c070186576e417f278435826bb",
"main.dart.js_113.part.js": "d7a33067f59329d77ec202a5f3fd8028",
"main.dart.js_103.part.js": "4d0ba95f89af3c4ab751e31d442d1d4c",
"main.dart.js_135.part.js": "41bb510395499334e6b5f5d70a4b1e5c",
"main.dart.js_125.part.js": "e1d974f6dcfbfebcb0c50a5c6b7edd57",
"main.dart.js_5.part.js": "22d1bdd02c73256ba9079de5bd01a0da",
"main.dart.js_157.part.js": "40285bde182736b4a2af7924588e0fdb",
"main.dart.js_147.part.js": "3e4bb3a32ec8b98920902689e3dd05da",
"main.dart.js_96.part.js": "7c4b18a1ca19ce6ed421a2dc23e4876e",
"main.dart.js_168.part.js": "8d1ad7655ddf87da550855533b092cc6",
"main.dart.js_178.part.js": "0381c352298283f649b3056550c35035",
"main.dart.js_93.part.js": "4f346b2042a908f59e41bb10be5be65f",
"main.dart.js_15.part.js": "b417134ce99977fd246778e5aecbe87c",
"main.dart.js_120.part.js": "ad148317df91ea65534dad29800f3e92",
"main.dart.js_130.part.js": "fb19ea45d8cd463d8743d1f61b3cb7d5",
"main.dart.js_142.part.js": "8f6579dd96cd4f46a8b54f7993eeaf8f",
"main.dart.js_152.part.js": "64dfcf1340a35fba05c446ed4415f79f",
"main.dart.js_67.part.js": "a25a5a0d69d5f2f14fed4eb6f70b5705",
"main.dart.js_77.part.js": "91e3464b4821627ffe2788879b87fb6c",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_164.part.js": "d19f67baa3d9d0b02d858ec61a430615",
"main.dart.js_174.part.js": "993c0803ba4ce53ddf22747d01357baf",
"main.dart.js_116.part.js": "13abcbd68fa9043ba5a5512188dc57f8",
"main.dart.js_33.part.js": "33d33bf3f75e3259b578917c60bd5340",
"main.dart.js_139.part.js": "46d81f68a47eb25a6afe87a1a4f74a1f",
"main.dart.js_129.part.js": "32fb1cd0fa649bf7f3d2345853487e75",
"main.dart.js_180.part.js": "27c4ae6f2b682a56f061d0237fb805d1",
"main.dart.js_50.part.js": "a4eb56e444739c6b984b090f7bb7292c",
"main.dart.js_40.part.js": "5174c8c2f7f330425cff5f41c9d029be",
"main.dart.js_175.part.js": "4ffe7438e788d232dda159a955540d3f",
"main.dart.js_165.part.js": "f5f02897a06c5b37b167ab8950375558",
"main.dart.js_107.part.js": "346528176500ecdd9e18ba041e8f0433",
"main.dart.js_22.part.js": "c64f75d0110c3043e8e5a57c57477072",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "9f56ba05978257a30c036a4c31d5b8c7",
"main.dart.js_138.part.js": "074f7c47c31c9a39fafef1d7d5ab80f5",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "d6a6ca2654fe63d1184d644036b4ec10",
"main.dart.js_82.part.js": "fb33001798014b3e35358dd0d214ec6b",
"main.dart.js_49.part.js": "a0d275fa905b2c9652af055954a7bc7a",
"main.dart.js_131.part.js": "42b065285916d6d2ab2f2118ba8695c2",
"main.dart.js_121.part.js": "c9428d91188d8294a47600e1b7041b7a",
"main.dart.js_153.part.js": "aaf270726e4f38d518e270cc9f700535",
"main.dart.js_143.part.js": "1d50651954e2384028de03859dd0bafa",
"main.dart.js_76.part.js": "fd64c3042c668fc348acefcdecf470ee",
"main.dart.js_1.part.js": "69b2e54c7f36f40f075623c361c230e4",
"main.dart.js_105.part.js": "7b52ab1fbf6fdfbfab9bce43a90b3e08",
"main.dart.js_115.part.js": "82647eab6bee5466c93fe494aa3bdcbd",
"main.dart.js_99.part.js": "82a83a035b2cd4f29f3dfd1e08b88b96",
"main.dart.js_89.part.js": "4941b58f7d28d31b4696071da23c1010",
"main.dart.js_177.part.js": "a9f48b3ee33740a4d96cf6560cdcdb7b",
"main.dart.js_52.part.js": "e740782312f893b1a2542f3c52fede7a",
"main.dart.js_183.part.js": "da9d20300ac4f8ce6b02e528d8ea0c17",
"main.dart.js_158.part.js": "5c64099b6dce8429d424e5da76245833",
"main.dart.js_148.part.js": "d3f1035f764293eba58aca9dc44bdab4",
"main.dart.js_29.part.js": "c9276a5e5d400f7bf6d7bba35114a185",
"main.dart.js_80.part.js": "6cfd738a6e783595eb799e1c465b06ea",
"main.dart.js_90.part.js": "29769d7b0210f859cb30472084ec79f2",
"main.dart.js_64.part.js": "155c5cd89bcb5dc391a3a38a8d00042c",
"main.dart.js_3.part.js": "aede855396515e8b052ea96d5a553895",
"main.dart.js_141.part.js": "4bcaa46fd66d1ae12e53972fd06073d6",
"main.dart.js_151.part.js": "7fd6427d60f873e1223445c912fc4a67",
"main.dart.js_123.part.js": "c1ebb96841e23371cb9ed58830889090",
"main.dart.js_133.part.js": "935b656a0611ff248e4b52ba26560370",
"main.dart.js_16.part.js": "0266da41b9074ecec6dadb2241239114",
"assets/AssetManifest.json": "5e36c6cad51d703f32d6c093130d1ba7",
"assets/NOTICES": "185eb31238faf8eae926d3b45434656c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b3ab14987491b199e9fe3b88acdf515a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/libcli/images/mail.png": "c9172bdda51109489593c86da58f10e8",
"assets/packages/libcli/images/apple.png": "c82fbe8cbcecaa462da7bd30015b3565",
"assets/packages/libcli/images/facebookDark.png": "deface349f4fd6bece4039901e8c6c44",
"assets/packages/libcli/images/googleDark.png": "3a7df7781108618c2b3d05a5121abdfc",
"assets/packages/libcli/images/appleDark.png": "11238aa9e757b14b5e3460b467e6a2b4",
"assets/packages/libcli/images/google.png": "46039fa62c3167028c4fdb86816c3363",
"assets/packages/libcli/images/facebook.png": "f4dfe9871ac8cce8278c2aba8c897e1d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "96b375dea61c1f1f51a46a72cc28b627",
"assets/fonts/MaterialIcons-Regular.otf": "91665b0371d6bc0ed98129d7593c73fe",
"assets/assets/images/highlight-3.webp": "bc6b5c351ee2cf935014ee74c9cc2af2",
"assets/assets/images/google.webp": "5738e939e0f0cb94b49b7c1c7c3cf823",
"assets/assets/images/screenshot.webp": "beebee9a9b82c0a17b36fb2dfbdb19a9",
"assets/assets/images/highlight-2.webp": "c273d9c661417500c80f3ec72b8b254d",
"assets/assets/images/desktop-2.webp": "ce0957835de77c516706280242400d3d",
"assets/assets/images/highlight-4.webp": "e903593c296bcb98a06db843e33ea126",
"assets/assets/images/icon.webp": "4e5aefd8d328bb0aed9cdfb8b8216395",
"assets/assets/images/windows.webp": "3ef88f7d1bc40ddef9e245f507b622ce",
"assets/assets/images/desktop-1.webp": "c45b534f19fe72ddab76d32c061efd2b",
"assets/assets/images/highlight-1.webp": "3bada69f28c2efe71316fc6fdfa3b542",
"assets/assets/images/app.webp": "876b532240721c27424065335d8249c9",
"assets/assets/images/background.webp": "f8aa6a4e86dd6fa7b78fc854bebfe78c",
"assets/assets/images/apple.webp": "4aa34b98ca03fc9ae1601912311917ef",
"assets/assets/videos/screenshot.webm": "cd4b1b6447af95e9feddf881935055ee",
"assets/assets/icon/icon.png": "77bbbbcfb49bacf66d08d278b85bb43a",
"main.dart.js_38.part.js": "cac8d77a0f59191701086e292b5597d4",
"main.dart.js_75.part.js": "7a3b0541c131fc54e81b97a4cd3cb65f",
"main.dart.js_2.part.js": "61a9a0cf925aa80cdb7d38c4061ec65b",
"main.dart.js_65.part.js": "6d4f1baa5f531321ebdea04a7c2eaef1",
"main.dart.js_150.part.js": "567bd922175a24f8ea7360087cc11f8d",
"main.dart.js_140.part.js": "b8438b1fc6d15f6c575bea85d979d665",
"main.dart.js_132.part.js": "fddc7bcee7317cc067d585b9f04abc24",
"main.dart.js_122.part.js": "1186fd7610d4fa091d3e0d66173475bb",
"main.dart.js_98.part.js": "1f7f5fbaced39f244927c9135737b6fc",
"main.dart.js_31.part.js": "39007017597d0192df1273bc08b00a4c",
"main.dart.js_21.part.js": "12b0665fc1e1f4c0f3d7adc32f5327df",
"main.dart.js_176.part.js": "965f6a839e9258f6c174f883d4e4ece6",
"main.dart.js_43.part.js": "59bbf61096b4e98d6379e08a981f04e5",
"main.dart.js_182.part.js": "6b37936ae443a18fec0d03b329e81b06",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"main.dart.js_149.part.js": "1567b1628526cf4c5b1b639511486b5c",
"main.dart.js_159.part.js": "5f77ebae762150e3c4e9420b8774887e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
