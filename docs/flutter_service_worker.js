'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "721152eda8ba1bb93b2a396c5f91a4b6",
"flutter_bootstrap.js": "bbb0d5a50e47c47d33ed54e26d1209d8",
"main.dart.js_79.part.js": "0333f2e6a0aae30ce52839ad0b3ddcf3",
"main.dart.js_69.part.js": "5a97dab23a7c1503c48717c3e8a8311b",
"main.dart.js_101.part.js": "150a20c809281edab2c645b94ee29f25",
"main.dart.js_111.part.js": "70ae770eba6f5e3ba760174124ad3c5e",
"main.dart.js_24.part.js": "76f8a31b9c2005309c2a9a1f22ace2dd",
"main.dart.js_46.part.js": "ed737e0bf5b259d44c87a6b94cfb9d4e",
"main.dart.js_56.part.js": "ad64e78bc5c915bfb726b12c7f6a4fa2",
"main.dart.js_163.part.js": "79fc356356bd4b727b32e18a2f4c664a",
"main.dart.js_173.part.js": "26170e977f89c31339d6f5b41b61502c",
"main.dart.js_145.part.js": "16df6777c1da044ce08176173a16f458",
"main.dart.js_155.part.js": "7a3d170b05c8d5e34796f065f1b84d91",
"version.json": "764fbd1bb09fdd4946aa65e35a8fa946",
"main.dart.js_7.part.js": "b2e17c96b2b04c46fd24b58be4482626",
"main.dart.js_60.part.js": "77eaa196919dc68a9ff3bb8c8beba155",
"main.dart.js_70.part.js": "d337a40c932fcd46380c7635cf727483",
"main.dart.js_127.part.js": "57b4f3fa69c16ef085f4d8457953e570",
"main.dart.js_137.part.js": "e29837c382c3f03033331c93b1abf512",
"main.dart.js_84.part.js": "6318daf4c9386c241b0220b86443e7f4",
"main.dart.js_94.part.js": "0ee84d4cf104774aa45447c68382e608",
"main.dart.js_118.part.js": "bfaf88dc2c66e4ffe721014ac8784785",
"main.dart.js_108.part.js": "54dd0bb7e7b31fb3fe48055dfb5dc786",
"main.dart.js_154.part.js": "994034f3642c6fda5ef9f1954580f146",
"main.dart.js_144.part.js": "863e050fa7bdd00598fcc124583d0c6a",
"main.dart.js_71.part.js": "f25a13e0408e10bca280776626f6dbbf",
"main.dart.js_61.part.js": "22c94e62ae3369fdd984e640005fe12a",
"index.html": "958769728841b59e5331ec1ac4b666b7",
"/": "958769728841b59e5331ec1ac4b666b7",
"main.dart.js_136.part.js": "7d7fdf450bd26d37a5e0b6466e9372c1",
"main.dart.js_126.part.js": "7c0361ae541bcc20acce5b439fb0393c",
"main.dart.js_109.part.js": "ef9ec51872fc478f76c2578cc6b966e7",
"main.dart.js_119.part.js": "1e2ac84aea46797c23a47dfda0ea6124",
"main.dart.js_85.part.js": "931bf829dccc4cbdf24cc566d9627f33",
"main.dart.js_186.part.js": "d7d2bc3562e4230cbc8709758798b890",
"main.dart.js_68.part.js": "7d8818a2b4a9c69a5d94df3d8f3c756a",
"main.dart.js_78.part.js": "35c3e5f39f8ec8cb8ca144735bc5e3e2",
"main.dart.js_110.part.js": "7832445a15ce49a0fdf17a5726c0bdb8",
"main.dart.js_100.part.js": "3a14754d5e5875367c87bf7ebff6dd64",
"main.dart.js_35.part.js": "0580ff35709c6ed92748f7c95be009fd",
"main.dart.js_25.part.js": "b1ce5df4bc74b7b6a5f60ac132ef36c0",
"main.dart.js_57.part.js": "c68cb9b689cbfe10ec86c9e322b0dbee",
"main.dart.js_47.part.js": "7990b88d728c8cd912acdc4148881f76",
"main.dart.js_172.part.js": "e83c77af151138b373cf2192b4bfe557",
"main.dart.js_162.part.js": "b6fee76e2e408a2fa30c80b6a7fbbbe6",
"main.dart.js_124.part.js": "1318add457832ef17e5963c133be28c7",
"main.dart.js_134.part.js": "f8b5574cb99198e3b9ee69b426162958",
"main.dart.js_11.part.js": "4fb33eaa0fa0529c8d8ee48c3cc6e78d",
"main.dart.js_63.part.js": "35c78893417749f9f4963c865d88d1d3",
"main.dart.js_4.part.js": "a7506d684cad0d15f225b1dd08718f92",
"main.dart.js_73.part.js": "cb311d37feb586de11c4a0accc1a68bd",
"main.dart.js_146.part.js": "1e416dd8e249342d79d23810f894e25a",
"main.dart.js_156.part.js": "a757a5bfa4c44812659d37e8b28541cf",
"main.dart.js": "cd2a6c7a9ef1bb96d3e5f78e94803d8d",
"main.dart.js_87.part.js": "3328b94bfa7ae31c00e9afc6d7660a98",
"main.dart.js_97.part.js": "fb0188353ad1cfbed4f4db82b0229d40",
"main.dart.js_179.part.js": "291650454ef6736ec04829e04e01235a",
"main.dart.js_169.part.js": "f1d0b0a25c48c64280a473f2308d5379",
"main.dart.js_184.part.js": "ea69ff47a3d47bc114e85e3a4b3be73b",
"main.dart.js_18.part.js": "815edb60fb1fcf813aaa8ef45f571afc",
"main.dart.js_160.part.js": "4ff16b215eafc1e2cee63d32db740ec6",
"main.dart.js_170.part.js": "caa3bf1f8359ed4a070be8261dbe086c",
"main.dart.js_45.part.js": "9c923a8de22221d3fabcc6bd84c234a2",
"main.dart.js_27.part.js": "8c404757d25f4970cbb9180e2b1ccc8d",
"main.dart.js_37.part.js": "73d6da8455b4ecaba7d27ffef8675e57",
"main.dart.js_102.part.js": "fb03a6a19c3c6b7f54ce20f3162b1a33",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "4afcaf6f7de13fd8eeb58a27aeb88f01",
"main.dart.js_171.part.js": "385b3ac8d319c3f8aac5d35f19f31341",
"main.dart.js_161.part.js": "78067159b4758c2e83a2979764ec4113",
"main.dart.js_54.part.js": "f7cd4a726fe774e32a83ae2c429e9ecb",
"main.dart.js_44.part.js": "ae9a64919bb6f397dec84713448f4155",
"main.dart.js_36.part.js": "ec3b7ababbfb6ac8f6a253218e966034",
"main.dart.js_113.part.js": "79054f6e7bccff62ba562676068fd342",
"main.dart.js_103.part.js": "64c1ea4622fadb91ba4927b11519c3dc",
"main.dart.js_135.part.js": "5ae1c29366007b32b6c4290c0ec7f1e7",
"main.dart.js_125.part.js": "cc8b00d74f29878f50fa8f92dfe6ee64",
"main.dart.js_72.part.js": "976f09d2fb8e1d22e3cd29b0f7660d5d",
"main.dart.js_5.part.js": "654d5a9fc248d196ab54f875d623c086",
"main.dart.js_157.part.js": "b48368eff1c615e16a3623d9602a4f8f",
"main.dart.js_147.part.js": "aee9f358c651c5588919dbd52ad344ba",
"main.dart.js_96.part.js": "0ae3b57e591cbfbb5d9b28378c51e0e1",
"main.dart.js_168.part.js": "b643cc3b8e7fad9bdfb26eacd9546b94",
"main.dart.js_178.part.js": "4c27d73a30ad19bc86f12738f78ff8ba",
"main.dart.js_93.part.js": "37eec325fcd969aa0a5c96ed071248af",
"main.dart.js_58.part.js": "5abc4a22a73a272ee9e21001924244d8",
"main.dart.js_15.part.js": "a6b42e9b4fc1fcdca23d6fb414821142",
"main.dart.js_120.part.js": "f42e4282d5a75b4e38ff2cb6669c2809",
"main.dart.js_130.part.js": "30eafb3f10fbec5d0aeb73fed7537b89",
"main.dart.js_142.part.js": "e22bf101eeb3018d3c6f41759f67f91d",
"main.dart.js_152.part.js": "2f1ce7b84ef013d946fbd5ed6347e129",
"main.dart.js_67.part.js": "62a4ac4145b3eb674eed9c9ab5a4ae8a",
"main.dart.js_77.part.js": "923043bfc9be29bacc58396f93c56b89",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_51.part.js": "bad133cd1d343abfa08f3c8d6365cb2e",
"main.dart.js_164.part.js": "a526c834e0e0f4b07aa76500744a8f07",
"main.dart.js_174.part.js": "1a8d829df9db6179b7747bd828cb380b",
"main.dart.js_106.part.js": "d21b2c7c371923ddea9d4ad4d10d1184",
"main.dart.js_116.part.js": "8726b563595f50b132fd4baa9bae3edf",
"main.dart.js_23.part.js": "1f4087b837f6a7885aa81304ff7f12bc",
"main.dart.js_33.part.js": "812d9620d7020d18c74f486780a6d36b",
"main.dart.js_139.part.js": "92baf99dff1e987b2dff096f077fbc4b",
"main.dart.js_129.part.js": "0c2bda284f864a0c3e767cd49e97b04a",
"main.dart.js_180.part.js": "74602b7f06898f2cf6ea55d21a3ef088",
"main.dart.js_50.part.js": "cd45dc9b04e0edf0ba651686dbb6cccb",
"main.dart.js_40.part.js": "3a4fa5f94850e26c95c157dca102a4af",
"main.dart.js_175.part.js": "75627252f019ebacc0880c93b0e12bfe",
"main.dart.js_165.part.js": "9e5db76651aebe695540b132c54cbe88",
"main.dart.js_117.part.js": "8f02b436f1fa69dbf0049dbf87a1e929",
"main.dart.js_107.part.js": "a1bb639e7ca317672182723671e22dac",
"main.dart.js_22.part.js": "fcd899023f1c34140c2a3bc70d8b5045",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "3d79058d4ba28dc76b68b4b75f89c2f9",
"main.dart.js_128.part.js": "ba975618685011019cb38afbb3b65dbc",
"main.dart.js_138.part.js": "c3971cfd5d310ac96165074897d98dd1",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "66587aa76b6e66d9dea222c63dd3851f",
"main.dart.js_82.part.js": "4400b762340f547b58a155bd92f3c761",
"main.dart.js_49.part.js": "6e8ccf7436f8b6a00d0ad67571787091",
"main.dart.js_14.part.js": "02a7e2f64d814e6351f0213412c5cc5a",
"main.dart.js_131.part.js": "abae34168b12c281e50b96d1423e6a82",
"main.dart.js_121.part.js": "c9e10e6e38c581ca3959cc74e8458f51",
"main.dart.js_153.part.js": "2e9d8856c836777ab8f5d56424dad38e",
"main.dart.js_143.part.js": "fff5872c36d09252d0aa2cf991d54a40",
"main.dart.js_76.part.js": "8ada023812f7d61adeeec1cc44c9fbeb",
"main.dart.js_66.part.js": "119d079c82b596f39f6fc923fdb60fd2",
"main.dart.js_1.part.js": "e3ea52261079aa36839cd0980fea9008",
"main.dart.js_20.part.js": "586510d4f9f9507191947f0052442c8d",
"main.dart.js_105.part.js": "1487dae97bbe9a51407af224499797e2",
"main.dart.js_115.part.js": "1ace6e1f2f7ab5305b8722fd90b6abad",
"main.dart.js_99.part.js": "fe08b3b660131107575bd73abe13911e",
"main.dart.js_89.part.js": "e0cf6d975042b8d24205e8f2e6a1aa80",
"main.dart.js_167.part.js": "48173b8f031ef0c847c0d34be77923fe",
"main.dart.js_177.part.js": "122e119e4cccf887e624570fc85524ba",
"main.dart.js_42.part.js": "c3e2a50d537a8aa9a2652b9444a489a2",
"main.dart.js_52.part.js": "3df6a0dcd6a3628e9d54cd0fc5624679",
"main.dart.js_183.part.js": "ac02edfcdda34a7bba767562eec3c217",
"main.dart.js_158.part.js": "8ef2ed8ae96168bcf5de42a2338b2362",
"main.dart.js_148.part.js": "f50d2326f1520f3306201541c9d744e4",
"main.dart.js_29.part.js": "fa44a887922d6c56e03606282401cc8b",
"main.dart.js_80.part.js": "f61a6cae6ba7f48d5bfd33d4af78ba85",
"main.dart.js_90.part.js": "e22d088434e3021dfffdeff96d167e9d",
"main.dart.js_64.part.js": "53c1e24e46555273c714d58d98d6954b",
"main.dart.js_3.part.js": "aede855396515e8b052ea96d5a553895",
"main.dart.js_141.part.js": "2888b70bdb386baedea16d93620cffca",
"main.dart.js_151.part.js": "dae43b21df3a8db22e8deba29d36ca08",
"main.dart.js_123.part.js": "d07b32d84d73c8cdf57f4b94ac9ddb8c",
"main.dart.js_133.part.js": "c5c1516f06775b7fc0bae7a41adb2e38",
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
"main.dart.js_91.part.js": "ada7e5a665e583483e42eb05351b776e",
"main.dart.js_38.part.js": "8ab15b4ab18fef55dcf12f83dd03710e",
"main.dart.js_75.part.js": "be2d2b3196614c70182d8732d5340e56",
"main.dart.js_2.part.js": "cbfff051802c6eef2d168fbd16d78feb",
"main.dart.js_65.part.js": "689445e0fb560fdf30577df1574bfbb8",
"main.dart.js_150.part.js": "48fe2046c63aae4a76e76b0e205e044c",
"main.dart.js_140.part.js": "d0568aca69a257879f3d4f93ba4eb82c",
"main.dart.js_132.part.js": "0b310e89ac5f1e0eb5436bdb8b4a3f8c",
"main.dart.js_122.part.js": "41c979cce2dfbf9e0a0e85d53687c9bd",
"main.dart.js_17.part.js": "b4b040c99aa975702ca225a1542338bd",
"main.dart.js_88.part.js": "9e11e43b72dcbf3e9ba90fad689e022b",
"main.dart.js_98.part.js": "7ac81a93b6387f392029c597654195be",
"main.dart.js_31.part.js": "bbc1a252676f1ac342ec7b9895330665",
"main.dart.js_21.part.js": "456657a2c458afda4b045aba7a47b5ab",
"main.dart.js_114.part.js": "2c84448a21bfd6df230a2844872152fd",
"main.dart.js_104.part.js": "f388a3fc753e2b3a357a8d8d645f1b65",
"main.dart.js_176.part.js": "f67789ea0a40c4c8ea7743cc81a0257c",
"main.dart.js_166.part.js": "aa035ae89128c9555cd5a4a2cc941a87",
"main.dart.js_53.part.js": "2cf8f0d2d6e5495739838ae41d6b263c",
"main.dart.js_43.part.js": "23c715522dc98ae9d4da62500d06fafe",
"main.dart.js_182.part.js": "ed8334131522d2012839530cc582df50",
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
"main.dart.js_149.part.js": "9dc2841e2bdde49198b0528f1c1d6da7",
"main.dart.js_159.part.js": "e9698d6bee912d68a38b2528cd0d06fe"};
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
