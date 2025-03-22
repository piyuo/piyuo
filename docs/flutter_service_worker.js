'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ddedb111b17126cf466096dc84097afd",
"main.dart.js_79.part.js": "4ac3959bd8ad5750bc48e1cd085ae3ec",
"main.dart.js_69.part.js": "712c007037ff5d39a2af3edf22fcd411",
"main.dart.js_101.part.js": "6d8d773ff6e607ab36bdb6134143e468",
"main.dart.js_111.part.js": "a3916c6985d149c481db632c8057e540",
"main.dart.js_24.part.js": "b6e24dd7b9e9ad8a9028db0f29c7fb30",
"main.dart.js_34.part.js": "177bde007fb30acd21685c0d60f13bc9",
"main.dart.js_46.part.js": "58a789b8a89d73a457630dbd5d3d22db",
"main.dart.js_56.part.js": "17cafc0258f8526b762da1c7134fd9e3",
"main.dart.js_163.part.js": "67b445195c7b89661bce3e0930e3b96f",
"main.dart.js_173.part.js": "6f7663ec833a9228ed941671695de5a7",
"main.dart.js_145.part.js": "b21986476310c83e5b35e724a8178a43",
"main.dart.js_155.part.js": "09f66d1116f26f56966271eb82c63dd5",
"version.json": "764fbd1bb09fdd4946aa65e35a8fa946",
"main.dart.js_7.part.js": "3a0825b5e17459523c30601a89ebc78b",
"main.dart.js_60.part.js": "c77394fdf20330f52d172e5be11ebb9a",
"main.dart.js_70.part.js": "bcaf9ca95ae8846b999c4936c75542f2",
"main.dart.js_12.part.js": "88ae717cf30780828f4adca311e7d9d6",
"main.dart.js_127.part.js": "f4ad576eae10fb013e5d4465a7186ef0",
"main.dart.js_137.part.js": "c20c586989c9d9a41c5a1154b72d0427",
"main.dart.js_84.part.js": "1c7d78b840b45cb100b25c6731bc99c7",
"main.dart.js_94.part.js": "e3b5c390a407ec9e2e7ac2edbfa61276",
"main.dart.js_118.part.js": "6805e682ba6b2e93f5fd029dd4a4e46c",
"main.dart.js_108.part.js": "501f2b388f651bb2f1f7b4e2afc34857",
"main.dart.js_154.part.js": "7796d69fc54c2a6eb2e0d83a6cf4f410",
"main.dart.js_144.part.js": "830366a3fa44cfdd5bb3f02fa68d8d2c",
"main.dart.js_71.part.js": "54e859b85476c03f382b624bdd217242",
"main.dart.js_61.part.js": "01617c2b91d8d921566fd002018a5705",
"main.dart.js_6.part.js": "02b6032171a5095ec2f1471881f4f58c",
"index.html": "958769728841b59e5331ec1ac4b666b7",
"/": "958769728841b59e5331ec1ac4b666b7",
"main.dart.js_136.part.js": "e363b4409b8f45170268837112e355ea",
"main.dart.js_126.part.js": "7319ef4baffdbeb2e73855ab77585ea8",
"main.dart.js_109.part.js": "759067ff0d402e1bb06cdca03a057e0e",
"main.dart.js_119.part.js": "0a038024c93bccb4b442e3bb0b5b2efb",
"main.dart.js_95.part.js": "57a35ea2945f990921fa9e4238e3efd5",
"main.dart.js_85.part.js": "bf067d81ac045510f431ce52c81f16f4",
"main.dart.js_68.part.js": "8ff067add8ae2d582133810441465a9c",
"main.dart.js_78.part.js": "b4081b8b6834168f73cac5f781291613",
"main.dart.js_110.part.js": "b57bf10106f85240060c17110442f7e1",
"main.dart.js_100.part.js": "8267e0267c4e82ce7e1f5740956e8565",
"main.dart.js_35.part.js": "50ef2821b773420d19e39192b8da0ad2",
"main.dart.js_25.part.js": "c54f26b00b598c9fd599fa4a8c6d93b9",
"main.dart.js_57.part.js": "16a0a5e59cd2a67ef8a7de40d61a2652",
"main.dart.js_47.part.js": "c7d9e7a02454fc9bf6ef4351acce9a2d",
"main.dart.js_172.part.js": "49065db890e437de39ddacded7ab4aba",
"main.dart.js_162.part.js": "6b0c0341b7637b806540dc274df2519e",
"main.dart.js_124.part.js": "62694e52bee7262645de202caccffd3c",
"main.dart.js_134.part.js": "b37ad2e97554a1711e428e94fc53979d",
"main.dart.js_11.part.js": "76e8612906f797cc8ba2dd1461193e3f",
"main.dart.js_63.part.js": "76ee2e8b988e280b25b9ba374a7f50c5",
"main.dart.js_4.part.js": "c7d2c601642e4081b1b0f4196985440d",
"main.dart.js_73.part.js": "3ebcd2f56ef1660c8370bd70b0188630",
"main.dart.js_146.part.js": "66aee36d31e284597ba0ee88c25eb01b",
"main.dart.js_156.part.js": "f447315e283bf4d4529e42179301efc2",
"main.dart.js": "9e0c92d65433f82211cf720773a5742a",
"main.dart.js_87.part.js": "1bdb100cefca465add858d816ff0227a",
"main.dart.js_97.part.js": "8451056ca6580f2ceb53da774cc8c35b",
"main.dart.js_179.part.js": "82171cf69b77801312de9cbfcb393600",
"main.dart.js_169.part.js": "7d427d81ac5fd564712641a85f50e884",
"main.dart.js_184.part.js": "287fef85357a3ea1aa15d16137f36c4c",
"main.dart.js_160.part.js": "6dfcfb027ad494de48b06f6124c21e64",
"main.dart.js_170.part.js": "73cb656b6429b67c99889df98d6a0aab",
"main.dart.js_45.part.js": "6e1efd82704d505943467baf3c1b64f2",
"main.dart.js_27.part.js": "48db9749cd3907ad39c7bf5263e8a671",
"main.dart.js_37.part.js": "e1bd15fc286e74aa0d9eacb41629ff07",
"main.dart.js_102.part.js": "1cd790de9f278f5cbd74e970c3899179",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "65941abf692518b988c14ec50d4e9d17",
"main.dart.js_171.part.js": "b3f70efcfd87aa1823eeaa78c587de23",
"main.dart.js_161.part.js": "bc6f29dda3df81357aa9b40b6dac5bf7",
"main.dart.js_54.part.js": "985a7c08ade82bdb4e431943060c246e",
"main.dart.js_44.part.js": "ef7d7aaf13c33b7a947701ac5899bef5",
"main.dart.js_36.part.js": "26583f949856337c192095f3f2fe6200",
"main.dart.js_26.part.js": "d39149b9f72e7685db3d32007f961f9c",
"main.dart.js_113.part.js": "2bf38b5ca0fc1aeca3d6498008107142",
"main.dart.js_103.part.js": "868b37e114f984dfc005e42b7eb96c18",
"main.dart.js_135.part.js": "8f01a1a24e3a90ad04235e5703090944",
"main.dart.js_125.part.js": "c3c4b994dc9af25de0602486558efd4d",
"main.dart.js_72.part.js": "5b6011c006a7c51a32a80824fd0851fe",
"main.dart.js_5.part.js": "a4c2bcdddb7e9cafb550ced1e51457db",
"main.dart.js_157.part.js": "dc302877938ee1e603de2a7fd02e329b",
"main.dart.js_147.part.js": "fa3613aa3459ee40e066b4baa3cc6241",
"main.dart.js_96.part.js": "209d141b6a799a84611e432baafe0f11",
"main.dart.js_168.part.js": "1c656ff0fcf385d9a3677cce0015a980",
"main.dart.js_178.part.js": "17c1c4c1da293ca71ec6ead20df132bd",
"main.dart.js_83.part.js": "477630eb60fb4858493eda69c0dc15d8",
"main.dart.js_93.part.js": "2869fde1de6dbd2b9bd6fd2f410cc510",
"main.dart.js_58.part.js": "5d99950cb5b5554dd3b33649b752ebe0",
"main.dart.js_15.part.js": "3fc61d62eea7229917043d32fad24954",
"main.dart.js_120.part.js": "0607a032c977df992191686c084f6cb6",
"main.dart.js_130.part.js": "c8f178a2ca5d10a0e700d1e2412a8ce3",
"main.dart.js_142.part.js": "2cedfd16dc7a3babcf68d63871b2e11b",
"main.dart.js_152.part.js": "e4d9cc1ecb0406fd174a18ffab61b412",
"main.dart.js_67.part.js": "17dd0f4138f7334f63314b878c458bd0",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_51.part.js": "8f9d169dfa4c76f0ef74f284de4b53fc",
"main.dart.js_164.part.js": "ff5e7e9157119966db141ce3a6a7ce9d",
"main.dart.js_174.part.js": "fdc750052408d5a196d397bbdc93b018",
"main.dart.js_106.part.js": "d4b623a9ba30d8e5dad6cae841f913cc",
"main.dart.js_116.part.js": "9b2371775a99d6943cc6502262219da6",
"main.dart.js_23.part.js": "c8508623a1d3f185ab5255b9754d8012",
"main.dart.js_33.part.js": "f733a377866197d6fca6243fc5102440",
"main.dart.js_139.part.js": "ba7110452419ac8d205ef3c02dac626f",
"main.dart.js_129.part.js": "6674cdca0091793b0d17ab28f5ad076a",
"main.dart.js_180.part.js": "65609958e9bdbde59368bf190e3b2ed0",
"main.dart.js_50.part.js": "6bb6267c00c9c80302c0c2fda7c7ca2a",
"main.dart.js_40.part.js": "d879e02b403f1bed7d000eb404e77b55",
"main.dart.js_175.part.js": "eb1a466d3e071f6cc5db331fd6b8ec7b",
"main.dart.js_165.part.js": "2b4a609fb1db5a559a1e8fc73912150b",
"main.dart.js_117.part.js": "f0515419dfe6deca6891518d1ee298b4",
"main.dart.js_107.part.js": "41d685412dac2c4198245f10a3a7525b",
"main.dart.js_32.part.js": "f64ca248bfa422e9c85352716d91fbac",
"main.dart.js_8.part.js": "90456e0ac4aa142a93f41cf7b33a599d",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "f1e972dbe8db64ffc66b437551734f38",
"main.dart.js_128.part.js": "74c644945b40f6fc9bbc24f27723ab5f",
"main.dart.js_138.part.js": "c89c96f791b94408287d3972fc64fb04",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "1784f2dc7a493fd584bd5e0de849ea60",
"main.dart.js_82.part.js": "e00a7d54b57c7c67887253f2d1108670",
"main.dart.js_49.part.js": "09fc6ba936980e041642f8a0c77b4b5c",
"main.dart.js_14.part.js": "2ef5eb24632222c2bba416f34f19c993",
"main.dart.js_131.part.js": "3d9cf9c19aed1c59ba7a5b7da9df9449",
"main.dart.js_121.part.js": "e68c149eacb8fbc58d715730c21e0217",
"main.dart.js_153.part.js": "374baeaea331104697541b9ee2bca7f5",
"main.dart.js_143.part.js": "17e483ac01d3efab8daa3b9e4434386f",
"main.dart.js_76.part.js": "49c0d5e75717d4abfa6b2faf0fdac4f4",
"main.dart.js_66.part.js": "9e8db8db2d723f65ef0f98007885c46b",
"main.dart.js_1.part.js": "89fb99ad96039ba871075f08f5c43bdc",
"main.dart.js_20.part.js": "4dceb49a964ac5a0c54efbc6a400e1e6",
"main.dart.js_30.part.js": "f870550d6fb3b877f1f9337bca93cfbe",
"main.dart.js_105.part.js": "00f59c3eefbedfeab1d37604989a3a87",
"main.dart.js_115.part.js": "cb31692c050b659a97a73cb855c2ac5d",
"main.dart.js_99.part.js": "a6c939782bf031e555c0c7d6bb30adf6",
"main.dart.js_89.part.js": "dc4d907780e474ad784f5f9340281717",
"main.dart.js_167.part.js": "a9112f8651b2ad8d76611849575248fa",
"main.dart.js_177.part.js": "28116c55a6d19d630274ddf14cbac16b",
"main.dart.js_42.part.js": "73393e1003b1c4bf324e9f7a7b40717b",
"main.dart.js_52.part.js": "9adcd1a1461d2aea092121d9a91cf376",
"main.dart.js_183.part.js": "ed6c0d34be68495816391769d269ad46",
"main.dart.js_158.part.js": "bf9dac4ac992e5123d74af87632e53ed",
"main.dart.js_148.part.js": "217e8ed34b08fa4a8470da782fe30620",
"main.dart.js_29.part.js": "b5a7733926bb0b186da245961437d029",
"main.dart.js_80.part.js": "e7997829d5154101174fa152179e36a1",
"main.dart.js_90.part.js": "ccaaa62634b5675d3c7ddb89b6742818",
"main.dart.js_64.part.js": "cb64e3de4c1adf78ba6dfefb6c90eb96",
"main.dart.js_74.part.js": "d1bb755acdf376f3868c640ae704e0a4",
"main.dart.js_141.part.js": "a48d5e70b521a1c927ab51b9ddc620cf",
"main.dart.js_151.part.js": "71bfa99fa02db27844aa1d5a3113889b",
"main.dart.js_123.part.js": "5d5a5447e1c164dd29cb3d0a84d0205c",
"main.dart.js_133.part.js": "0ab7bd119671ebf091e27f0987a9bee2",
"assets/AssetManifest.json": "8e9ecef61c0d2430da60604bf91104c3",
"assets/NOTICES": "f076c84014e05ed80991fd55c68dae69",
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
"main.dart.js_91.part.js": "1968265bacf2d65700d142073d756d06",
"main.dart.js_81.part.js": "f88efd1440f8e65da03a7a8ad2225be9",
"main.dart.js_28.part.js": "ff958e0babc24e4cf4eafd8a958489f9",
"main.dart.js_38.part.js": "89b6f383a2b1e6f0a0b3ccef98d28b42",
"main.dart.js_75.part.js": "3fdc4de9978a039e083f030dd9f832b2",
"main.dart.js_2.part.js": "b2048d0376aa10772f41e2b3a0aeaa61",
"main.dart.js_65.part.js": "57dd19488680dcb9b7df261b3ede9594",
"main.dart.js_150.part.js": "1da4b0d9cd669b75883e8aa253402d96",
"main.dart.js_140.part.js": "82364acb74f0117153d3c02c21cc8731",
"main.dart.js_132.part.js": "c55d0e42c6f0c773fdc907efdeda549e",
"main.dart.js_122.part.js": "fc919031c154bda9d1899bc66cdcad5c",
"main.dart.js_17.part.js": "e68cd57e65ec249b64157db044342557",
"main.dart.js_88.part.js": "c7a5baa16c98ccfc66513b20604869d4",
"main.dart.js_98.part.js": "2badfa2d4dd12225c9aadd7c34a14c1e",
"main.dart.js_31.part.js": "8705d692ccbbfb149cf1f89b535c381b",
"main.dart.js_21.part.js": "43d1da4807a52a680b759f9ecc127dcd",
"main.dart.js_114.part.js": "24905253634d99f95699fcd3ad71fc0c",
"main.dart.js_104.part.js": "5a06e343a0bc21e272cd9309cc613b14",
"main.dart.js_176.part.js": "23718b72e70483c34d0bdcfb701c4a1d",
"main.dart.js_166.part.js": "c0bca579a8f561ec17f186c8325290ed",
"main.dart.js_53.part.js": "d59f5c09737b4dfffdec20752190395a",
"main.dart.js_43.part.js": "f89ed148c302a12287c2c9e70dfbbb04",
"main.dart.js_182.part.js": "3e93f95ad454a6f89e88b9275405d897",
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
"main.dart.js_149.part.js": "72a22979e7a300f5a7a5bdd2fb45c455",
"main.dart.js_159.part.js": "03b79396bb3e78aba71557c9c7fe0b80"};
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
