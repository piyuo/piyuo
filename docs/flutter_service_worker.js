'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "721152eda8ba1bb93b2a396c5f91a4b6",
"flutter_bootstrap.js": "12e0cf2d9fcff6b32bff21ff55c70f46",
"main.dart.js_79.part.js": "0333f2e6a0aae30ce52839ad0b3ddcf3",
"main.dart.js_69.part.js": "7d55483b03793509c4609aa2e7d3fd3d",
"main.dart.js_101.part.js": "150a20c809281edab2c645b94ee29f25",
"main.dart.js_111.part.js": "66c1a2cf8ed2f24eaf735cfc1d21cdbc",
"main.dart.js_24.part.js": "76f8a31b9c2005309c2a9a1f22ace2dd",
"main.dart.js_46.part.js": "f2a1501081693e94a39e3aa523af51a3",
"main.dart.js_56.part.js": "ad64e78bc5c915bfb726b12c7f6a4fa2",
"main.dart.js_163.part.js": "2634f48fef5ae001bf00131b8a426a12",
"main.dart.js_173.part.js": "ad31325246e4d1665ccbb6f939e1bcac",
"main.dart.js_145.part.js": "d53d9b2405e562d4f8429c60185e11de",
"main.dart.js_155.part.js": "2383d847cc6c38989191f19a790bb1f2",
"version.json": "764fbd1bb09fdd4946aa65e35a8fa946",
"main.dart.js_7.part.js": "30997b45759ae2e8fab21bbaea768e94",
"main.dart.js_60.part.js": "ebfc05f9551dbfa761972633b8e6fee8",
"main.dart.js_70.part.js": "d337a40c932fcd46380c7635cf727483",
"main.dart.js_127.part.js": "71b18fa619dd4b7dd836160cd8f4fd49",
"main.dart.js_137.part.js": "3993547fce6c18d6021b323b9e7a12c8",
"main.dart.js_84.part.js": "510cf6100fee6368e93e1f82a2eb0154",
"main.dart.js_94.part.js": "0c2a045a0292084536794992e0b52413",
"main.dart.js_118.part.js": "a5ae032e710547b142412788386b0ae5",
"main.dart.js_108.part.js": "affdff066aeec269380af6ff4a3054c9",
"main.dart.js_154.part.js": "04f44accf7c5f81ea443ac9a4b3130a5",
"main.dart.js_144.part.js": "c32d2b5dd744f454dacdfbcaf7a48b01",
"main.dart.js_71.part.js": "1c3ba46bbafd3cbb7a2654f9d4c7130c",
"main.dart.js_61.part.js": "daeab5334ba5d8428711d5b229a99cda",
"index.html": "ec4c9584778e07c5c8e11b5c4222c7d9",
"/": "ec4c9584778e07c5c8e11b5c4222c7d9",
"main.dart.js_136.part.js": "7862095e4cd3f59d916073869d374917",
"main.dart.js_126.part.js": "0f69dc9c2cd66b6916c47e279e890981",
"main.dart.js_109.part.js": "ef9ec51872fc478f76c2578cc6b966e7",
"main.dart.js_119.part.js": "1e2ac84aea46797c23a47dfda0ea6124",
"main.dart.js_85.part.js": "5319ec82eaa8c8d2e0303d5be9b21e50",
"main.dart.js_186.part.js": "d7d2bc3562e4230cbc8709758798b890",
"main.dart.js_68.part.js": "7d8818a2b4a9c69a5d94df3d8f3c756a",
"main.dart.js_78.part.js": "3f4d5d3dd2c805e1ea360e9267c97e94",
"main.dart.js_110.part.js": "2212d5d2a87a8fe4203689fd9ab08490",
"main.dart.js_100.part.js": "1404cfba39da1b73f0c663abf79676ce",
"main.dart.js_35.part.js": "b59019e51a73efc1b7b38359e623f5b5",
"main.dart.js_25.part.js": "e99035a5e66ac536eaa0e609e509e524",
"main.dart.js_57.part.js": "c68cb9b689cbfe10ec86c9e322b0dbee",
"main.dart.js_47.part.js": "cc2effbfdfd01c2f366ec9c79b398b2d",
"main.dart.js_172.part.js": "2275990124f6efc2dd285ac2bdef759e",
"main.dart.js_162.part.js": "b6fee76e2e408a2fa30c80b6a7fbbbe6",
"main.dart.js_124.part.js": "cc4409060066e8e3b8faab290955eb47",
"main.dart.js_134.part.js": "d45d66bd211d09796c8ba7c31ef25bd3",
"main.dart.js_11.part.js": "c96b08e38f114bd40d2d1d7f13a504ae",
"main.dart.js_63.part.js": "391d7d9005a098fed5a3b61ca948f567",
"main.dart.js_4.part.js": "2f7be4506e4595691cb72e9d0293d584",
"main.dart.js_73.part.js": "b6e102c92dbb0e788661d7ae96c41548",
"main.dart.js_146.part.js": "35a12d3e35b472163f3a8f77eaac2e8a",
"main.dart.js_156.part.js": "de146637b89d58f18d49e2e73f693fb0",
"main.dart.js": "a998dc6913a14b8c8871a0ce5cd0012e",
"main.dart.js_87.part.js": "73d84753c3af91e5e6d040c613e7f989",
"main.dart.js_97.part.js": "51b78651d1845b08b9e07c50357b4515",
"main.dart.js_179.part.js": "aff200fd5d4f59902b8050e312625459",
"main.dart.js_169.part.js": "167281ab934543572b37dbb2507db82d",
"main.dart.js_184.part.js": "ea69ff47a3d47bc114e85e3a4b3be73b",
"main.dart.js_18.part.js": "815edb60fb1fcf813aaa8ef45f571afc",
"main.dart.js_160.part.js": "4541581790584e1e4be8dc413c5cfcba",
"main.dart.js_170.part.js": "ae0efdc6ab96990f8a366b3e5d76fab8",
"main.dart.js_45.part.js": "9c923a8de22221d3fabcc6bd84c234a2",
"main.dart.js_27.part.js": "c4c9b21cb4800f814fc397841649d5da",
"main.dart.js_37.part.js": "1ce0879c9910c5742645235b882a4cd9",
"main.dart.js_102.part.js": "29aa68401236aa0818775e2de081f805",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "4afcaf6f7de13fd8eeb58a27aeb88f01",
"main.dart.js_171.part.js": "8ac91046ed8088cfcef067c054449373",
"main.dart.js_161.part.js": "78067159b4758c2e83a2979764ec4113",
"main.dart.js_54.part.js": "df023c5af5c32060fa4fa114d8552cf4",
"main.dart.js_44.part.js": "19c4b47dd84cec7d38bc277e4e33ef4d",
"main.dart.js_36.part.js": "ec3b7ababbfb6ac8f6a253218e966034",
"main.dart.js_113.part.js": "d4dd5ce9ae08c2e16c4c41fc35e197e3",
"main.dart.js_103.part.js": "64c1ea4622fadb91ba4927b11519c3dc",
"main.dart.js_135.part.js": "50f3e7be1d4eada741c62d9b5d6a6ca1",
"main.dart.js_125.part.js": "aca40edf13e13bf621c7aa266b7b0227",
"main.dart.js_72.part.js": "5730abef84932b134d3133929604dd43",
"main.dart.js_5.part.js": "a8bb596dfc1fd8a24ff237fb2d9b7c3f",
"main.dart.js_157.part.js": "91655972a850ad19f2a18ad2aee40d53",
"main.dart.js_147.part.js": "62360ee4e38b10a0f1bc40b5ec09e93a",
"main.dart.js_96.part.js": "fdc542c10012b7263061538233c48cd2",
"main.dart.js_168.part.js": "468dae70fc2b3e8304418d6485b07712",
"main.dart.js_178.part.js": "6647b36fe3d0d248907a511ac1469482",
"main.dart.js_93.part.js": "a6bf708041621752bef2f3f943a3a33b",
"main.dart.js_58.part.js": "6370acc331641792cee26664b9100332",
"main.dart.js_15.part.js": "b62c7e476ed2237c1cac84a0c8f40880",
"main.dart.js_120.part.js": "d0a894692378008c78db0cc1583d5048",
"main.dart.js_130.part.js": "33c6679ecac6da4e24e1b755677fa31c",
"main.dart.js_142.part.js": "10c041706ef7e861d578a9631c8df6b6",
"main.dart.js_152.part.js": "89b938ca8b036cee60ff63409635d98a",
"main.dart.js_67.part.js": "3aaf439519376a0fcb337d21aa325eb5",
"main.dart.js_77.part.js": "923043bfc9be29bacc58396f93c56b89",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_51.part.js": "f9bf1251382c42b8bf171bf9e1a8f239",
"main.dart.js_164.part.js": "f3427ae6479e9024a44453c77b8644dd",
"main.dart.js_174.part.js": "46d73227be2ab8b61d722148defa96ca",
"main.dart.js_106.part.js": "194a47ce75df718082c4a44305574e29",
"main.dart.js_116.part.js": "38ce52772a4a6d2be5309a02750840f2",
"main.dart.js_23.part.js": "9e34374dcf17ac406e1f756699a2b6ee",
"main.dart.js_33.part.js": "ddf68a8b17cf14aa1870b11610e0543b",
"main.dart.js_139.part.js": "c3d699c63c12acfcd24dea0feff00a79",
"main.dart.js_129.part.js": "18f87d6434c3c214b47cdb2a5b7c353e",
"main.dart.js_180.part.js": "00e8dda03bd7071b61e9bd3148140157",
"main.dart.js_50.part.js": "cd45dc9b04e0edf0ba651686dbb6cccb",
"main.dart.js_40.part.js": "93d2c3bf1dc792f0f89458c8fbc0992b",
"main.dart.js_175.part.js": "7b508bcbed829c972590544bbbe24f76",
"main.dart.js_165.part.js": "935b027b7b7192d05af986509b9aef9a",
"main.dart.js_117.part.js": "b7f6f231621887a1c571cd5e8d819014",
"main.dart.js_107.part.js": "a1bb639e7ca317672182723671e22dac",
"main.dart.js_22.part.js": "fcd899023f1c34140c2a3bc70d8b5045",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "1540d46ae6c5278be556eabb77bd5e4d",
"main.dart.js_128.part.js": "d62e9b354572c7b0262915f47386f243",
"main.dart.js_138.part.js": "50b85c1d52c667366921c41e7e26b0cc",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "d244d5f4d40d8bef3387700a7ad312e5",
"main.dart.js_82.part.js": "b102f64e3debbb768cb9a59ddbd53ccd",
"main.dart.js_49.part.js": "a6b799effc16f5a728a4e5f8f519de6b",
"main.dart.js_14.part.js": "6f04e62ace501fc8d45a318bde4a2d0f",
"main.dart.js_131.part.js": "f795349c919c7d22258d32de349bfc75",
"main.dart.js_121.part.js": "c9e10e6e38c581ca3959cc74e8458f51",
"main.dart.js_153.part.js": "6f99b79cd711626e00d98297cb37489a",
"main.dart.js_143.part.js": "a1940bd94d84c028299833dc7727be6f",
"main.dart.js_76.part.js": "27708cad30abc268847168b805b7c15c",
"main.dart.js_66.part.js": "074e703a8ed57ff85f96080273b59439",
"main.dart.js_1.part.js": "e689bf338a8d5ccd353415b05d8518c2",
"main.dart.js_20.part.js": "0d96ba4cc678793562eafd08551d2fc0",
"main.dart.js_105.part.js": "1487dae97bbe9a51407af224499797e2",
"main.dart.js_115.part.js": "d42603a45e2c85307ea7a453f9fce6e5",
"main.dart.js_99.part.js": "fe08b3b660131107575bd73abe13911e",
"main.dart.js_89.part.js": "307f36eda8a7be5ada616559f524dd2e",
"main.dart.js_167.part.js": "e795159e87feb17bda30b524183f93c1",
"main.dart.js_177.part.js": "bad3e2cb062cefe9a84ccd28a38a4752",
"main.dart.js_42.part.js": "5a71dd526e942c179f20e38803535b43",
"main.dart.js_52.part.js": "3df6a0dcd6a3628e9d54cd0fc5624679",
"main.dart.js_183.part.js": "ac02edfcdda34a7bba767562eec3c217",
"main.dart.js_158.part.js": "8513aee2486a5201a8457dc885dc5b78",
"main.dart.js_148.part.js": "0a221d686351b7bfc5bfcef3173030e4",
"main.dart.js_29.part.js": "19611df9ab4712cf43a51af9a47a0fd8",
"main.dart.js_80.part.js": "9766417feacf2e86e968d3cca5dfb86f",
"main.dart.js_90.part.js": "e22d088434e3021dfffdeff96d167e9d",
"main.dart.js_64.part.js": "7861d0127447a58d03cf0f3b854b4159",
"main.dart.js_3.part.js": "aede855396515e8b052ea96d5a553895",
"main.dart.js_141.part.js": "505ec523286cba70ab357a9fe783d06f",
"main.dart.js_151.part.js": "db26957b60ac065cac4c0e622806a068",
"main.dart.js_123.part.js": "d07b32d84d73c8cdf57f4b94ac9ddb8c",
"main.dart.js_133.part.js": "d5b8b02c4fa1a57e0b337fab14a51a46",
"main.dart.js_16.part.js": "d4755bf2c62ec646a78ba451c64564cb",
"assets/AssetManifest.json": "8e9ecef61c0d2430da60604bf91104c3",
"assets/NOTICES": "185eb31238faf8eae926d3b45434656c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f94b7c47933a1ee864552ad586940a84",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/libcli/images/mail.png": "c9172bdda51109489593c86da58f10e8",
"assets/packages/libcli/images/apple.png": "c82fbe8cbcecaa462da7bd30015b3565",
"assets/packages/libcli/images/facebookDark.png": "deface349f4fd6bece4039901e8c6c44",
"assets/packages/libcli/images/googleDark.png": "3a7df7781108618c2b3d05a5121abdfc",
"assets/packages/libcli/images/appleDark.png": "11238aa9e757b14b5e3460b467e6a2b4",
"assets/packages/libcli/images/google.png": "46039fa62c3167028c4fdb86816c3363",
"assets/packages/libcli/images/facebook.png": "f4dfe9871ac8cce8278c2aba8c897e1d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "95569f78904524187fb20aaa05c552b3",
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
"assets/assets/videos/screenshot.mp4": "363dfda7cd037b81a92e472b64cd1539",
"assets/assets/icon/icon.png": "77bbbbcfb49bacf66d08d278b85bb43a",
"main.dart.js_91.part.js": "522227ac44de73d66e5efbeb1904c223",
"main.dart.js_38.part.js": "8ab15b4ab18fef55dcf12f83dd03710e",
"main.dart.js_75.part.js": "69cb2744fb153a4b7ff652c87ad08061",
"main.dart.js_2.part.js": "61a9a0cf925aa80cdb7d38c4061ec65b",
"main.dart.js_65.part.js": "1ae4f9eedf13818ea6e299587dff0000",
"main.dart.js_150.part.js": "67f54412c60897a63d2da7e169250579",
"main.dart.js_140.part.js": "84450a0245834acdead8c9eb5aea9053",
"main.dart.js_132.part.js": "e096c58df1869468b7075c9d14cbbd95",
"main.dart.js_122.part.js": "e90c75f29c75e758ff7ba5c3459db916",
"main.dart.js_17.part.js": "e331514e2f83505de704112fb0a760e5",
"main.dart.js_88.part.js": "b87ebc3b27d091f999807b452143fc9e",
"main.dart.js_98.part.js": "b5134dd2e811a1ad2acaddc23b425978",
"main.dart.js_31.part.js": "30b841d333a95fa3c6dd9b10713257e0",
"main.dart.js_21.part.js": "f747f42b6b30f1c0eee27c227b086c90",
"main.dart.js_114.part.js": "b8c44395e5901a71bde5a89d7c992e94",
"main.dart.js_104.part.js": "22aba19e63619c141df60f8d0351d69b",
"main.dart.js_176.part.js": "df2d16a49e30fefddf6680ee0f78d01f",
"main.dart.js_166.part.js": "be79fa934479b375dea52a1e6fd96bf8",
"main.dart.js_53.part.js": "a0eaa031ab6757985c0c9c703df83c39",
"main.dart.js_43.part.js": "ba0c179e63629f18dec47fd4dece38af",
"main.dart.js_182.part.js": "fe25dc8c35a2f04b66cc0626ae6f2aef",
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
"main.dart.js_149.part.js": "390260d00a6366429cac1b7b63892cba",
"main.dart.js_159.part.js": "9c591b1a10a5129b92f0c98bcb7d4259"};
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
