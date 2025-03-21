'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "d951f00e046cbeaa8a9f20fcf3a8716a",
"flutter_bootstrap.js": "61fad42245494ff5bcc5a85f66c25a79",
"main.dart.js_79.part.js": "6193722d93b727be9bd66f864dbb2727",
"main.dart.js_69.part.js": "86d7e540cecff67ffe75def2db8addd0",
"main.dart.js_101.part.js": "adf5f48afc5327e80cd782c94b6b2467",
"main.dart.js_111.part.js": "baf89e2590118aa90f0ef2701787309e",
"main.dart.js_24.part.js": "7714b0afdb4c75ec6ecb146983a46a8a",
"main.dart.js_46.part.js": "d8e3179d88a676940f6e70948559f286",
"main.dart.js_56.part.js": "16af501099b54b5162520a03354df9b8",
"main.dart.js_163.part.js": "45284a57f69c8a3294a2d0c2c3a252aa",
"main.dart.js_173.part.js": "556b46d94a2648dd60135fa299fc9545",
"main.dart.js_145.part.js": "3f9bd610314357e86ac3d5d61b953c29",
"main.dart.js_155.part.js": "a24fc19c592eb2276ce8f16c802a4d6c",
"version.json": "764fbd1bb09fdd4946aa65e35a8fa946",
"main.dart.js_7.part.js": "b28199a715fa535fd3b7cd8e1de1bdb4",
"main.dart.js_70.part.js": "016a0c52bae668972cda6ada3ec4e339",
"main.dart.js_127.part.js": "a46f69cf97742831da0f17455502a697",
"main.dart.js_137.part.js": "257561fd487ea62416eec1f3b6c7c54e",
"main.dart.js_84.part.js": "cd8807a77717c797187028494664ad5f",
"main.dart.js_94.part.js": "08dffb9a7dd86d26e5fe7761c5157e30",
"main.dart.js_118.part.js": "b6438ae1f4125b40ab2ebc1230967b12",
"main.dart.js_154.part.js": "6e096dc515b93b71cd49ca4091547856",
"main.dart.js_144.part.js": "d213cb65e66039b18dd388a0bc2b4ffd",
"main.dart.js_71.part.js": "6b83c24b399978eebc50d94f91ecd38b",
"main.dart.js_61.part.js": "a15accf553db9c9f43327d8bb20146ee",
"index.html": "ec4c9584778e07c5c8e11b5c4222c7d9",
"/": "ec4c9584778e07c5c8e11b5c4222c7d9",
"main.dart.js_136.part.js": "feb83c58cdd12e5c3adc0e4b6ae32646",
"main.dart.js_109.part.js": "938d26e2b77f0b877b095ffe4f3cd46e",
"main.dart.js_119.part.js": "1e2ac84aea46797c23a47dfda0ea6124",
"main.dart.js_186.part.js": "9bfae318bb8de2c0f21942ce5023943d",
"main.dart.js_68.part.js": "f6af7d16acd3ac5359c6cda647ba3e58",
"main.dart.js_57.part.js": "ff2b4380d1ea3084cf40ec2146180536",
"main.dart.js_47.part.js": "e8b0132d80507166cbfb8b0735610284",
"main.dart.js_172.part.js": "e3c2da984b99d10bb3c11768dc5a420a",
"main.dart.js_162.part.js": "35d5ee5308c54337ba655fd0eab77444",
"main.dart.js_134.part.js": "aed285f760a14e3f8137edca7e25fa20",
"main.dart.js_11.part.js": "0711e7b4a189142d8dc127a52e514049",
"main.dart.js_4.part.js": "cf98c66c40c575c5c3b51ee2e4582e5e",
"main.dart.js_73.part.js": "7bf4ed5a7f069d07d4ca4d7c26ad9d36",
"main.dart.js_146.part.js": "996de82d4e724d17d9604cb566798dd2",
"main.dart.js_156.part.js": "15722a279428b9ad56c972d392d5d480",
"main.dart.js": "d07b5af0f5e28ec7c4eee5770e66d929",
"main.dart.js_87.part.js": "ca8abfe1b93df904600b8a9a8c9e65ff",
"main.dart.js_97.part.js": "81c7ed68293db535ff9b500b278a46e3",
"main.dart.js_179.part.js": "2d151e724a082e61c72eae3c7372f409",
"main.dart.js_169.part.js": "e712cc45ea90f0cb7ec0a38bcc438bef",
"main.dart.js_184.part.js": "61eedc74570ba24d8963e450795377e0",
"main.dart.js_18.part.js": "9fb29775aeaaa5601bfa52763c4c5656",
"main.dart.js_160.part.js": "2953961ef6a2eb2eb7a56bc214483bdd",
"main.dart.js_170.part.js": "283314da1fc1098343780a7b53e027ab",
"main.dart.js_45.part.js": "a843caf1109db86f2e12f480d3320745",
"main.dart.js_27.part.js": "7c3497ab4a82b120cf58c2512fe93a6d",
"main.dart.js_102.part.js": "2855de7f45a6974a2cb79afe11cd599c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "0102a5ab1ac3c94d14bd573f78e2f64a",
"main.dart.js_171.part.js": "48763e9a487b5b93e758eb11ed0fadf7",
"main.dart.js_161.part.js": "66fd5b797e42aea74b39c2c2dead584e",
"main.dart.js_54.part.js": "91036b894c0c807fe874c5979ca31964",
"main.dart.js_36.part.js": "ca1f441997c33851bcc64e0bb6fb4b6d",
"main.dart.js_113.part.js": "31b5032dc5ea70ad716fa947677e759a",
"main.dart.js_103.part.js": "c4340663d2dcd91a17402cad308ef918",
"main.dart.js_135.part.js": "c2fa21674c55373d3c92b0be028f78fe",
"main.dart.js_125.part.js": "6bceadcc2b08eeff5c1d99c2ee22cec5",
"main.dart.js_5.part.js": "e8a572ad3f3a2ab37826ac8412c2360e",
"main.dart.js_157.part.js": "7fe420b3ecf6e305f60021592f04f140",
"main.dart.js_147.part.js": "ba7f440ebddf46b4cfcd22b63404990c",
"main.dart.js_96.part.js": "cab5049f352827de56aaaf481bb73a93",
"main.dart.js_168.part.js": "73db40cc620d9da14d30c34e6caaf87b",
"main.dart.js_178.part.js": "731a0a90394e66be79e851c8c40d92f3",
"main.dart.js_93.part.js": "eee26fd396eac07966c6e3c524e87e15",
"main.dart.js_15.part.js": "116f06987e20a29ec08a820fcd59c55b",
"main.dart.js_120.part.js": "0c6496ecf529cd2899086e2d2006a7ff",
"main.dart.js_130.part.js": "d51d13bc96eceb9e453a60f22ff478c3",
"main.dart.js_142.part.js": "75f92ab089e9d687e1e7d7585f60e131",
"main.dart.js_152.part.js": "f01a99efef088e5b75a5ea831cba95da",
"main.dart.js_67.part.js": "05efd54cacfe9967d66e9c96366e1b85",
"main.dart.js_77.part.js": "20f68daa274dcf1ecc39d97702193e34",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_164.part.js": "0b72580b1eba3a3829dcb0d2aed9435e",
"main.dart.js_174.part.js": "67b7e139e21665190756201fbcbc5631",
"main.dart.js_116.part.js": "973f7f35a791a297827b9927387d1f16",
"main.dart.js_33.part.js": "ef81f1461a2a3377d767710d6906e9a6",
"main.dart.js_139.part.js": "1ba46a9948f357a28b95aa48af822a1d",
"main.dart.js_129.part.js": "3ad25ae32a518bfd3eac08c7b4de6753",
"main.dart.js_180.part.js": "8d126c7f1760f0d10d8ff66f0ef98027",
"main.dart.js_50.part.js": "882fdf9ca7e3f2748b1fa33bf9f704a5",
"main.dart.js_40.part.js": "d8ca9f542336ffc2a6e07dbe91c7079e",
"main.dart.js_175.part.js": "7f048ee29631ad3032d3d2bbfbca861a",
"main.dart.js_165.part.js": "0fcee405315733d17253129dd1b1f7ec",
"main.dart.js_107.part.js": "56d3b724a146c2c2fc4237bd4f9625c8",
"main.dart.js_22.part.js": "f8d64d5745fbdfd15cb540cfa8e0bec6",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "a9fa4d5c5242cb62f4a3e257d0cd5263",
"main.dart.js_138.part.js": "abacc05807ff4778455bd2b042349d7d",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "16cb67b86d0c47d913d776683c85d50d",
"main.dart.js_82.part.js": "fd3033b04ea1f8a571af4e21c9d7f05d",
"main.dart.js_49.part.js": "4def8c73ae288b6aa2bb60b633f81385",
"main.dart.js_131.part.js": "1eb02ede6fb2771bc098588f41e871a7",
"main.dart.js_121.part.js": "275928558ad6b3832ef14bdcea896462",
"main.dart.js_153.part.js": "a33aaf661c3f34d5a26c08071291e28b",
"main.dart.js_143.part.js": "a0bcf0d376c7c4925420e0656eedf6c4",
"main.dart.js_76.part.js": "7ed324c75bd931b6920c322710872108",
"main.dart.js_1.part.js": "1d247687d6cf788297814948355b57b3",
"main.dart.js_105.part.js": "4c2c4fa12d1e46e052d27b84ede4d208",
"main.dart.js_115.part.js": "e855fc0029bd0e0073ee334dc5da062b",
"main.dart.js_99.part.js": "e1b2b33ba378bd256f58782df92c5dfd",
"main.dart.js_89.part.js": "517cb82b207a29c715d2e27908fe5168",
"main.dart.js_177.part.js": "f249bf8a5c1a24f99ca3404d6aca57aa",
"main.dart.js_52.part.js": "7dc725332aece21ba2ed933f78c9eb89",
"main.dart.js_183.part.js": "b1bf264622ae2c204b7a69eb734e00a0",
"main.dart.js_158.part.js": "a03799b784f749d7d4ae1928bbda524f",
"main.dart.js_148.part.js": "dfa7cda92b175f710b24fbc566c1c664",
"main.dart.js_29.part.js": "93b3e9392234c18ef574e5d288455060",
"main.dart.js_80.part.js": "20714e42147917683d8d9a59b1376f8b",
"main.dart.js_90.part.js": "db240c97dcf12870f368cb9d8c05cbb3",
"main.dart.js_64.part.js": "2aabe452d7576f472287a885698542ec",
"main.dart.js_3.part.js": "aede855396515e8b052ea96d5a553895",
"main.dart.js_141.part.js": "43dbb1b708f253409c746c2b71dde58a",
"main.dart.js_151.part.js": "8322117036ba4a25c48ba5f726da3ce4",
"main.dart.js_123.part.js": "eaac2cf17176333de4260ad608dc2d29",
"main.dart.js_133.part.js": "112a015581abe7322e85e460bfbbe94f",
"main.dart.js_16.part.js": "b976f574b2d2c6b3fa2033fa24ca18f5",
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
"main.dart.js_38.part.js": "265e93031b1929cc9fef2b01d3e5d503",
"main.dart.js_75.part.js": "941b7b182ae14b4ccd5eab8c691efb30",
"main.dart.js_2.part.js": "61a9a0cf925aa80cdb7d38c4061ec65b",
"main.dart.js_65.part.js": "cef13961751d3ef2d84e932d9cedb038",
"main.dart.js_150.part.js": "d15a995081d798c22cd7d4fe2b454ae3",
"main.dart.js_140.part.js": "36a57d2fa7e6f45cc4a5c4a0da83cd60",
"main.dart.js_132.part.js": "953e1e3a6e5ca06d6fe632c55c85e147",
"main.dart.js_122.part.js": "15299f364361d8c56a54cf169dda5037",
"main.dart.js_98.part.js": "27da15838745f34e8d0f1f51f102c404",
"main.dart.js_31.part.js": "313118dc8c4d1d0655baa09eb197e270",
"main.dart.js_21.part.js": "f1208082639141e347fb7645fdc4e7e1",
"main.dart.js_176.part.js": "fe0e88765edd8c06c452c4c87388b045",
"main.dart.js_43.part.js": "b40a17c552b5a6c0904cd5a4cdb1dae6",
"main.dart.js_182.part.js": "9df66330e6bcd3910a5f593bf1a8f1b9",
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
"main.dart.js_149.part.js": "eda5dbadd40892962ab9725bc1456824",
"main.dart.js_159.part.js": "178f7bd97f1b2dd1ea9592c4bab96b1a"};
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
