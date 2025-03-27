'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "585cdc2aa50eda5c470ba1a771245a72",
"flutter_bootstrap.js": "e4e9a41a2fcf33401c9af720ed0a7f2c",
"main.dart.js_79.part.js": "4ac3959bd8ad5750bc48e1cd085ae3ec",
"main.dart.js_69.part.js": "06cda469f5080d07f6711b14f18a98d8",
"main.dart.js_101.part.js": "6d8d773ff6e607ab36bdb6134143e468",
"main.dart.js_111.part.js": "e147581605cc56fb0398857367da7f04",
"main.dart.js_24.part.js": "b6e24dd7b9e9ad8a9028db0f29c7fb30",
"main.dart.js_34.part.js": "177bde007fb30acd21685c0d60f13bc9",
"main.dart.js_46.part.js": "6d253ab609800ad6da38b5ef1e2f4ff1",
"main.dart.js_56.part.js": "17cafc0258f8526b762da1c7134fd9e3",
"main.dart.js_163.part.js": "33c4986b6ccf1c03b62ab0f9343218be",
"main.dart.js_173.part.js": "feb9ab54794182fac3c3da2dc6fb13e8",
"main.dart.js_145.part.js": "c02264c61d2ac5175c39027e5cb9f58d",
"main.dart.js_155.part.js": "081b4a3215f887ae42fd305166dd4e7e",
"version.json": "764fbd1bb09fdd4946aa65e35a8fa946",
"main.dart.js_7.part.js": "47c1fb87a00f5f841d2792fa603d86dc",
"main.dart.js_60.part.js": "86ac36cd8ae2b350ebfc152d7f774467",
"main.dart.js_70.part.js": "bcaf9ca95ae8846b999c4936c75542f2",
"main.dart.js_12.part.js": "88ae717cf30780828f4adca311e7d9d6",
"main.dart.js_127.part.js": "d504b086b8241e1028c656b745e5f777",
"main.dart.js_137.part.js": "80535a100595434d3a36926b208d4799",
"main.dart.js_84.part.js": "c9b187f382eab14cce36690490de16d3",
"main.dart.js_94.part.js": "8d3fc137e594e3120f3aee47478f8ec5",
"main.dart.js_118.part.js": "b6f53e74a74e615006da44fdec29c1c3",
"main.dart.js_108.part.js": "341b1e26b895d55859f7fd862e29d84e",
"main.dart.js_154.part.js": "6381446e6863d5548cf1eadb08a88366",
"main.dart.js_144.part.js": "92cef86b23e31ac18b79a60ba26001b6",
"main.dart.js_71.part.js": "5fb845f4a34b3cb0fb25b9c9b3d39797",
"main.dart.js_61.part.js": "e8cd8419d06dfdb325556c0af8471a5b",
"main.dart.js_6.part.js": "02b6032171a5095ec2f1471881f4f58c",
"index.html": "958769728841b59e5331ec1ac4b666b7",
"/": "958769728841b59e5331ec1ac4b666b7",
"main.dart.js_136.part.js": "4b97236c7289b228421dd922d2b59206",
"main.dart.js_126.part.js": "46c5c3b5ff410056a2971a6f8df5ed61",
"main.dart.js_109.part.js": "759067ff0d402e1bb06cdca03a057e0e",
"main.dart.js_119.part.js": "0a038024c93bccb4b442e3bb0b5b2efb",
"main.dart.js_95.part.js": "57a35ea2945f990921fa9e4238e3efd5",
"main.dart.js_85.part.js": "5922c35f6a867fe7aae444fa1ad9bd30",
"main.dart.js_186.part.js": "5928903d34461b4c6e4ab8dff7a9ee83",
"main.dart.js_68.part.js": "8ff067add8ae2d582133810441465a9c",
"main.dart.js_78.part.js": "355c99a8461d38a1b4ac0e2c1989e9c0",
"main.dart.js_110.part.js": "51153937efac86932bf7b750d45254dd",
"main.dart.js_100.part.js": "1ecf460162c0452f35f7f52f882833d2",
"main.dart.js_35.part.js": "8c426b9914b4f9c66e63ef6b284d204f",
"main.dart.js_25.part.js": "114a6ce2fd58e46ae5889ae9b571f9cc",
"main.dart.js_57.part.js": "16a0a5e59cd2a67ef8a7de40d61a2652",
"main.dart.js_47.part.js": "7ba9bc49aaaf700f83799f469a577fdd",
"main.dart.js_172.part.js": "e5c11f6700cd3ccafcc14dcfdd8bba3a",
"main.dart.js_162.part.js": "395477488925e97deadf028ebe9b8e20",
"main.dart.js_124.part.js": "62694e52bee7262645de202caccffd3c",
"main.dart.js_134.part.js": "b37ad2e97554a1711e428e94fc53979d",
"main.dart.js_11.part.js": "0c7272d4276f896db802a25a132d05c9",
"main.dart.js_63.part.js": "3d9c8db5d47d04ef83733ea970b8cd94",
"main.dart.js_4.part.js": "73cd5885c3749fc5f854477701246ce3",
"main.dart.js_73.part.js": "a92b06f016f61249c33111a19f4762bc",
"main.dart.js_146.part.js": "86a8d40ef1bd5cb3583b894875310137",
"main.dart.js_156.part.js": "875b13745d889b01d902bae4f605e4f2",
"main.dart.js": "212efa794259cc47ebbf67dc47661c6a",
"main.dart.js_87.part.js": "3ecb51b5094d3cba97c416f092fd0469",
"main.dart.js_97.part.js": "4b347db0b0d3a63c4fb6027982a8f940",
"main.dart.js_179.part.js": "4747509aa67070a32dcb4348474d5f9a",
"main.dart.js_169.part.js": "7d427d81ac5fd564712641a85f50e884",
"main.dart.js_184.part.js": "eac7ab6d1460dbe1ab7ebc0d19651839",
"main.dart.js_160.part.js": "5fb2e139f26408cb9297436f1cf9fa2a",
"main.dart.js_170.part.js": "b5611ab7e54f33db4526c3a0fee6dc65",
"main.dart.js_45.part.js": "6e1efd82704d505943467baf3c1b64f2",
"main.dart.js_27.part.js": "29a8237456a77df482df7f73e74c5469",
"main.dart.js_37.part.js": "80f3be65c089fa04377c830b436e3bf7",
"main.dart.js_102.part.js": "ce9d337ece071d9068e9c906b3b3f643",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "29548f78173131b967c17254f4f396d9",
"main.dart.js_171.part.js": "87b0a92efd3de9b29f237dcd86dffe6b",
"main.dart.js_161.part.js": "31806c051299d4a879453eafb327155a",
"main.dart.js_54.part.js": "0e754fa755b4b92e71dd84a168e142b7",
"main.dart.js_44.part.js": "7b0669bbdf2a81719c7ab204b4584898",
"main.dart.js_36.part.js": "26583f949856337c192095f3f2fe6200",
"main.dart.js_26.part.js": "d39149b9f72e7685db3d32007f961f9c",
"main.dart.js_113.part.js": "5b22758825ff86dafaf1bd1143b679e2",
"main.dart.js_103.part.js": "868b37e114f984dfc005e42b7eb96c18",
"main.dart.js_135.part.js": "39ff53cce34fd01613a18f58de484bdc",
"main.dart.js_125.part.js": "3122705825d3b982c1ad74e09f1c1a11",
"main.dart.js_72.part.js": "26f687cd221fce4848656a2cd9ff3095",
"main.dart.js_5.part.js": "9384b1732f131da95dc4c40315657400",
"main.dart.js_157.part.js": "51dd8afe827a2dbc903fca28b7f571b2",
"main.dart.js_147.part.js": "7e615606d187d2d5d92293ecdff5d259",
"main.dart.js_96.part.js": "1d33e5413c38a8d73401d385555d8cab",
"main.dart.js_168.part.js": "1c656ff0fcf385d9a3677cce0015a980",
"main.dart.js_178.part.js": "0fd968834aeb675e34ff7b818bfc9d1c",
"main.dart.js_83.part.js": "477630eb60fb4858493eda69c0dc15d8",
"main.dart.js_93.part.js": "c252c091a6699b3aaa3c4065d04c6da1",
"main.dart.js_58.part.js": "33b1ebfbe4706d3df26b9bd7eae3d752",
"main.dart.js_15.part.js": "36d32daf6779cc5e0014710b60116496",
"main.dart.js_120.part.js": "0607a032c977df992191686c084f6cb6",
"main.dart.js_130.part.js": "3304ab12deeeff0555a240d85f7b77a7",
"main.dart.js_189.part.js": "fdada334cd72493182acf9fbad900054",
"main.dart.js_142.part.js": "603de8611407eb376c2fa452679e75ca",
"main.dart.js_152.part.js": "b3dfae547a5c6c1759b068a8d539582a",
"main.dart.js_67.part.js": "2cedd470ed15c2631b6bfa35fb0b4a38",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_51.part.js": "0bb12e44aa0b8f1fd6988c8158ab2fc4",
"main.dart.js_164.part.js": "ff5e7e9157119966db141ce3a6a7ce9d",
"main.dart.js_174.part.js": "75c32c7bad9c5c42ca050f408223b5a7",
"main.dart.js_106.part.js": "ba8a631a261d85954edb8aa7d7b0cd98",
"main.dart.js_116.part.js": "4a1c3f427922c8da206bc03bbba842a7",
"main.dart.js_23.part.js": "2e54e611b7cec818843e5de0b42d467b",
"main.dart.js_33.part.js": "3da7064c47abf8acfe8cc566aea1b0d2",
"main.dart.js_139.part.js": "b031d090972c2799b7da4f79918b058d",
"main.dart.js_129.part.js": "e3e0023c04defa44e79d533a851ac9e5",
"main.dart.js_180.part.js": "87af3c46f7c190f722d2f8628713d608",
"main.dart.js_50.part.js": "6bb6267c00c9c80302c0c2fda7c7ca2a",
"main.dart.js_40.part.js": "a9705bc79b91e6740a9cf28a2524b62b",
"main.dart.js_175.part.js": "1c2d598dde71cb44a3f8cde2715b33ac",
"main.dart.js_165.part.js": "716b58c56b8d2380e25c812f78e216b6",
"main.dart.js_117.part.js": "c693d9cf73de633f2cc970430bf0c564",
"main.dart.js_107.part.js": "41d685412dac2c4198245f10a3a7525b",
"main.dart.js_32.part.js": "f64ca248bfa422e9c85352716d91fbac",
"main.dart.js_8.part.js": "90456e0ac4aa142a93f41cf7b33a599d",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "4341347d438f713a82b25d981c8847b6",
"main.dart.js_128.part.js": "74c644945b40f6fc9bbc24f27723ab5f",
"main.dart.js_138.part.js": "c89c96f791b94408287d3972fc64fb04",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "b823ac00062d15d7cf530757cadff49a",
"main.dart.js_82.part.js": "18c09525e01589689f1ac8f8284f15c2",
"main.dart.js_49.part.js": "f374a785f9de5176e80fdae5344ac0bd",
"main.dart.js_188.part.js": "019edd836670e30fc717aa83faafe566",
"main.dart.js_14.part.js": "4ec94436124bd8c266598653f324bd52",
"main.dart.js_131.part.js": "13b40b74ebd094ce54a4f7a9056dbf6f",
"main.dart.js_121.part.js": "d6a5f1008a9e39b87f772ebcb9d158c5",
"main.dart.js_153.part.js": "1460544405ce0e41733f0a1a4d873b00",
"main.dart.js_143.part.js": "02059a6f333b118fde2e20e5cc29c6ca",
"main.dart.js_76.part.js": "77c2cc4a3743e48374b9e228e0dfc156",
"main.dart.js_66.part.js": "7a574f6d73798e7bdd0fd69a40b62c76",
"main.dart.js_1.part.js": "0e5dd123389353804e8f385b7f19737d",
"main.dart.js_20.part.js": "c1c52fa48ac3211703fa8084e5f0e9e0",
"main.dart.js_30.part.js": "f870550d6fb3b877f1f9337bca93cfbe",
"main.dart.js_105.part.js": "00f59c3eefbedfeab1d37604989a3a87",
"main.dart.js_115.part.js": "cc19a23640f702b13652dd28e522a8d4",
"main.dart.js_99.part.js": "a6c939782bf031e555c0c7d6bb30adf6",
"main.dart.js_89.part.js": "89ff298508e18bad52093ce6f61de9ed",
"main.dart.js_167.part.js": "a9112f8651b2ad8d76611849575248fa",
"main.dart.js_177.part.js": "257bd75baddcec94b30d9c7128a1b407",
"main.dart.js_42.part.js": "997e3348ca2ddf24a6dcc5a1abde51e1",
"main.dart.js_52.part.js": "9adcd1a1461d2aea092121d9a91cf376",
"main.dart.js_183.part.js": "61db34c222704d5472f38dbe19e4ea19",
"main.dart.js_158.part.js": "8b74ea4de966658e77606f3710c604e1",
"main.dart.js_148.part.js": "bfdf1c5907422e3c499ee9837c6532d8",
"main.dart.js_29.part.js": "8137157a427b898d9dbb341674813d8b",
"main.dart.js_80.part.js": "4cb0affb5604086be4e9db6bf1070bbc",
"main.dart.js_90.part.js": "ccaaa62634b5675d3c7ddb89b6742818",
"main.dart.js_64.part.js": "5992a87f99a7838197083ff56969a293",
"main.dart.js_74.part.js": "d1bb755acdf376f3868c640ae704e0a4",
"main.dart.js_141.part.js": "0437413136d7aafa9466190e73b90ea4",
"main.dart.js_151.part.js": "cc376dca939da34a124df90263cea70b",
"main.dart.js_123.part.js": "69449213df5311b14d4a6919ae0b54ac",
"main.dart.js_133.part.js": "500d64e77be63441a0a814b140f1471d",
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
"main.dart.js_91.part.js": "905c8e4e33595fe43fb16340f46d4e7a",
"main.dart.js_81.part.js": "f88efd1440f8e65da03a7a8ad2225be9",
"main.dart.js_28.part.js": "ff958e0babc24e4cf4eafd8a958489f9",
"main.dart.js_38.part.js": "89b6f383a2b1e6f0a0b3ccef98d28b42",
"main.dart.js_75.part.js": "e0ff877d89448ab7c404eb1b6b88c91a",
"main.dart.js_2.part.js": "3d0a28231a3fdfe903f02f1cf1121d9f",
"main.dart.js_65.part.js": "da92bd0a545af8d03d67c10db2a729a5",
"main.dart.js_150.part.js": "1da4b0d9cd669b75883e8aa253402d96",
"main.dart.js_140.part.js": "bee53cd1191ccdf01ee8257beed74c5f",
"main.dart.js_132.part.js": "818db65f087825497166d5d49fc48741",
"main.dart.js_122.part.js": "fc919031c154bda9d1899bc66cdcad5c",
"main.dart.js_17.part.js": "840855b13a61a1d3a721f2dafbd845ac",
"main.dart.js_88.part.js": "46111076c3cb1d1ebbfcbeaca45e6953",
"main.dart.js_98.part.js": "9bd7e1f76d200f998dff855e5c0d344e",
"main.dart.js_31.part.js": "f46e5d926c1d230f889fceded58addcf",
"main.dart.js_21.part.js": "93e72a4b646b45831ca4f847c16e00ff",
"main.dart.js_114.part.js": "e7c2b226816e903153eb37cec2a6083a",
"main.dart.js_104.part.js": "57950046009a0377c6507e0f431cc186",
"main.dart.js_176.part.js": "d242da121be992202629045002d067da",
"main.dart.js_166.part.js": "f86238951aed2a6452406aa1610083a6",
"main.dart.js_53.part.js": "1e5a9e42bbde501ebcdbbd7a525aa61d",
"main.dart.js_43.part.js": "d7461364a8b414be573944dba7889c1d",
"main.dart.js_182.part.js": "f6843ee723c51264b96503d988b88f0e",
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
"main.dart.js_149.part.js": "393367cf893354560cc5311f26684df9",
"main.dart.js_159.part.js": "42a06fd0315533619e8349fe76f918ed"};
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
