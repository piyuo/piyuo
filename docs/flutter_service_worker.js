'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "585cdc2aa50eda5c470ba1a771245a72",
"flutter_bootstrap.js": "9b978874b3f2b8595bf9e6ec1a110cfa",
"main.dart.js_79.part.js": "4ac3959bd8ad5750bc48e1cd085ae3ec",
"main.dart.js_69.part.js": "03d687fab780f3e0543b91eeb99ec034",
"main.dart.js_101.part.js": "6d8d773ff6e607ab36bdb6134143e468",
"main.dart.js_111.part.js": "1a403d1d98d4904cea367b773f7b154b",
"main.dart.js_24.part.js": "b6e24dd7b9e9ad8a9028db0f29c7fb30",
"main.dart.js_34.part.js": "177bde007fb30acd21685c0d60f13bc9",
"main.dart.js_46.part.js": "77ac8b1079d2a3b0e7ee90e78f844f3a",
"main.dart.js_56.part.js": "abd6d9f4c1146f498915f3a75fd5facf",
"main.dart.js_163.part.js": "c18f1fb60fb0359bf17bd943f9348223",
"main.dart.js_173.part.js": "60d51b678692f17463b38364d83b3903",
"main.dart.js_145.part.js": "2020eee787a6a6ad8e4bb78cfb61a421",
"main.dart.js_155.part.js": "25adc7b139ad5a59356b6ca4e578d352",
"version.json": "764fbd1bb09fdd4946aa65e35a8fa946",
"main.dart.js_7.part.js": "e354cc6ebbdcc06906997853c6d8c7ba",
"main.dart.js_60.part.js": "86ac36cd8ae2b350ebfc152d7f774467",
"main.dart.js_70.part.js": "5c20fddd194f0b5334dfccb42492de64",
"main.dart.js_12.part.js": "88ae717cf30780828f4adca311e7d9d6",
"main.dart.js_127.part.js": "c8de082b6b770f9f62b83c7b13d5d938",
"main.dart.js_137.part.js": "c9a5b5549e5bcff3c7b3db9b29715da4",
"main.dart.js_84.part.js": "c9b187f382eab14cce36690490de16d3",
"main.dart.js_94.part.js": "203e38d791daa708bee18f45441a7332",
"main.dart.js_118.part.js": "b6f53e74a74e615006da44fdec29c1c3",
"main.dart.js_108.part.js": "6932c5357b4551c0080d788332634e77",
"main.dart.js_154.part.js": "7dca88bb08d850b64889c5a3ed628d4c",
"main.dart.js_144.part.js": "1310f587b73b4e538dacd2896ac9c1e8",
"main.dart.js_71.part.js": "4b174b943d71534634c66f591e7fae5e",
"main.dart.js_61.part.js": "c61bccb3bcb6fa428074e04b9dcfbe11",
"main.dart.js_6.part.js": "02b6032171a5095ec2f1471881f4f58c",
"index.html": "958769728841b59e5331ec1ac4b666b7",
"/": "958769728841b59e5331ec1ac4b666b7",
"main.dart.js_136.part.js": "4b97236c7289b228421dd922d2b59206",
"main.dart.js_126.part.js": "46c5c3b5ff410056a2971a6f8df5ed61",
"main.dart.js_109.part.js": "14bae410959698e03dd63f6672655dca",
"main.dart.js_119.part.js": "bb170b2bb0b8d0a40da703e856b159c5",
"main.dart.js_95.part.js": "bf0bfc7ab285af6dfff939f7a8805d99",
"main.dart.js_85.part.js": "b8a4edf5362d7c12595ef41632ae581d",
"main.dart.js_186.part.js": "7ad70567f46f2ad7f822d26e4826670b",
"main.dart.js_68.part.js": "8ff067add8ae2d582133810441465a9c",
"main.dart.js_78.part.js": "9edf25b477b095815b1b5a8dbfa0792e",
"main.dart.js_110.part.js": "51153937efac86932bf7b750d45254dd",
"main.dart.js_100.part.js": "cbec9e746d6484bc6c2399b14f53f67b",
"main.dart.js_35.part.js": "8f2eee24c5c5b3494b1e449181cd1dd4",
"main.dart.js_25.part.js": "8d776d3f3e9b8e0b1983d0f01f7781d7",
"main.dart.js_57.part.js": "16a0a5e59cd2a67ef8a7de40d61a2652",
"main.dart.js_47.part.js": "12200c2b765e0e73f1ea5ceb5d3ef502",
"main.dart.js_172.part.js": "c56085babe55d5e705ceac25cb6f5c9e",
"main.dart.js_162.part.js": "a8dc1c55229788e9fdf9e902a5283cb6",
"main.dart.js_124.part.js": "ddf5d8a3255cbe2111155ce5aa44e539",
"main.dart.js_134.part.js": "286604de24ed2481d65edd581175fef3",
"main.dart.js_11.part.js": "fc224aa04f54f888fe15118ac66769ed",
"main.dart.js_63.part.js": "73c725048b393fe0a7f142fdbd9fe842",
"main.dart.js_4.part.js": "47ccc1f1cc59d1be2c767deab3a2f2fd",
"main.dart.js_73.part.js": "e0c05071b067e627c5897bfe87a7a755",
"main.dart.js_146.part.js": "5696c0da0f50a36321c7d98ac4fb91cc",
"main.dart.js_156.part.js": "95badb07cb813c7fa4729ef968fa5e0d",
"main.dart.js": "315bf10c6954058c211e4c41c56e6991",
"main.dart.js_87.part.js": "991f71263bdd332bc44b8bcbab964ae2",
"main.dart.js_97.part.js": "4b347db0b0d3a63c4fb6027982a8f940",
"main.dart.js_179.part.js": "66b4a5a03858855597f58f148227aa4b",
"main.dart.js_169.part.js": "60673831812244ec20ad3f4acf5f03b5",
"main.dart.js_184.part.js": "fca720792dfb4a99997187624fe6be67",
"main.dart.js_160.part.js": "da8aa506e21328b046f85765b71e47f2",
"main.dart.js_170.part.js": "289ecc60f1e1a7454608148cb494b210",
"main.dart.js_45.part.js": "6e1efd82704d505943467baf3c1b64f2",
"main.dart.js_27.part.js": "f7797314d15bcf69ed46900fa58bbf60",
"main.dart.js_37.part.js": "883e2997b27476c8b1118f91a3f961ef",
"main.dart.js_102.part.js": "76d816e2cb4144bdb1bc5538dfc13db1",
"main.dart.js_112.part.js": "508d527be92e08bfed2198ba9f2e9eab",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "64c81b15e5beb3a54f832d95a079950d",
"main.dart.js_171.part.js": "789f8df2006aced2b7ff423627f26e28",
"main.dart.js_161.part.js": "31806c051299d4a879453eafb327155a",
"main.dart.js_54.part.js": "0e754fa755b4b92e71dd84a168e142b7",
"main.dart.js_44.part.js": "f651547b0abe1d76fd22f040e75bca3f",
"main.dart.js_36.part.js": "26583f949856337c192095f3f2fe6200",
"main.dart.js_26.part.js": "d39149b9f72e7685db3d32007f961f9c",
"main.dart.js_113.part.js": "cb408ecf4b79362562ec7bcd99bb3cb4",
"main.dart.js_103.part.js": "868b37e114f984dfc005e42b7eb96c18",
"main.dart.js_135.part.js": "3026e950f5247873f46d15c2fb3b16c6",
"main.dart.js_125.part.js": "5f86863a3895ca5db18613d02faca24d",
"main.dart.js_72.part.js": "26f687cd221fce4848656a2cd9ff3095",
"main.dart.js_5.part.js": "cc7d8604f36e050193ebe3a5c139e3cd",
"main.dart.js_62.part.js": "78bee39240a6e219bee064af7c27285c",
"main.dart.js_157.part.js": "67ef4dd8598195590407bb539315284e",
"main.dart.js_147.part.js": "7e615606d187d2d5d92293ecdff5d259",
"main.dart.js_96.part.js": "d1c3f7a7341f3017e7db28bed2329918",
"main.dart.js_86.part.js": "0171fd9de4188e8a7ef1fd1354882a19",
"main.dart.js_168.part.js": "f8474075baf0d6586fdd8cb32eb2e316",
"main.dart.js_178.part.js": "4d5b5a92bda98587519ce2fcad4b4498",
"main.dart.js_83.part.js": "ad7230ae2d9d19f08a1d20cda8f56efd",
"main.dart.js_93.part.js": "c252c091a6699b3aaa3c4065d04c6da1",
"main.dart.js_58.part.js": "1d26c5a7fd7d30f1d117925abf0fd530",
"main.dart.js_15.part.js": "e81391d9b8ef3441dd0a4363437af5ac",
"main.dart.js_120.part.js": "0607a032c977df992191686c084f6cb6",
"main.dart.js_130.part.js": "9bd4b51a006534f2ffa5ce988bee80e6",
"main.dart.js_189.part.js": "fdada334cd72493182acf9fbad900054",
"main.dart.js_142.part.js": "1b3a480fcc54f4b480f2583d0d9b4240",
"main.dart.js_152.part.js": "99c767e2b3c42653bf86e07a313009b8",
"main.dart.js_67.part.js": "ce9473256172ac62078b0a8cef6a8edc",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_51.part.js": "6b08eafa74e11110e8445b2a0e7ddcfe",
"main.dart.js_164.part.js": "ff5e7e9157119966db141ce3a6a7ce9d",
"main.dart.js_174.part.js": "a4e22c6ddab22b0b07457a0ad30909b7",
"main.dart.js_106.part.js": "f694c8b3ec9392eac547fc15e155f09f",
"main.dart.js_116.part.js": "56254f5544e7bab605fd8c2ed2794786",
"main.dart.js_23.part.js": "0178e9f96daf47fabd64cbd2eb088f19",
"main.dart.js_33.part.js": "43ca87f15eb0d79ad2e94b439d5916f2",
"main.dart.js_139.part.js": "8879464400eda65b706492616324620a",
"main.dart.js_129.part.js": "49d954b7885288a3af8d7bbbb82286c8",
"main.dart.js_180.part.js": "37a5e52b659dd71963365108b15b8216",
"main.dart.js_50.part.js": "6bb6267c00c9c80302c0c2fda7c7ca2a",
"main.dart.js_40.part.js": "c3e91e5abe0d4b4928ec891be9a6db09",
"main.dart.js_175.part.js": "3375441adf3b72ca981b69421b6fb473",
"main.dart.js_165.part.js": "716b58c56b8d2380e25c812f78e216b6",
"main.dart.js_117.part.js": "c693d9cf73de633f2cc970430bf0c564",
"main.dart.js_107.part.js": "41d685412dac2c4198245f10a3a7525b",
"main.dart.js_32.part.js": "f64ca248bfa422e9c85352716d91fbac",
"main.dart.js_8.part.js": "90456e0ac4aa142a93f41cf7b33a599d",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "4eaaa1839edfcb8c3eda8c549a43cc6b",
"main.dart.js_128.part.js": "d6a7f2756b6747687c268780a7df8d65",
"main.dart.js_138.part.js": "f950c87d4ae354833a9be5457dd356b3",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "74b4f297c5ba7af5ad4b21b4b2a6c794",
"main.dart.js_82.part.js": "b5f7400bc3903a44b6d2472b8e3044b2",
"main.dart.js_49.part.js": "cb36ce79380b946676410973f4e52ef4",
"main.dart.js_59.part.js": "51ed07e6634f1f3acf4b41c8bdd64b06",
"main.dart.js_188.part.js": "019edd836670e30fc717aa83faafe566",
"main.dart.js_14.part.js": "aeb7d769152d4b33352307f534e0a886",
"main.dart.js_131.part.js": "3f3aeb55730f66340b9cb40b0895e10b",
"main.dart.js_121.part.js": "f995fec9bb194e95a8af6236747da0ad",
"main.dart.js_153.part.js": "3dd1466b996bbd868e1803381cfd8a0e",
"main.dart.js_143.part.js": "b14d4e37575c080c5522f66d287bbd70",
"main.dart.js_76.part.js": "f7a7ecdbfb0024680b87aa52aba66881",
"main.dart.js_66.part.js": "7a574f6d73798e7bdd0fd69a40b62c76",
"main.dart.js_1.part.js": "b9a360f59d347083d8174a22c7dad93c",
"main.dart.js_20.part.js": "0c4c21fb9a98a8727c6fb2de8d92d27f",
"main.dart.js_30.part.js": "f870550d6fb3b877f1f9337bca93cfbe",
"main.dart.js_105.part.js": "00f59c3eefbedfeab1d37604989a3a87",
"main.dart.js_115.part.js": "2d968c8956cb4fd06821d88b3888ad91",
"main.dart.js_99.part.js": "a6c939782bf031e555c0c7d6bb30adf6",
"main.dart.js_89.part.js": "9556a9fe997855dee114bc567b4d5f05",
"main.dart.js_167.part.js": "a92808654d671856e2c5ed7b7a989db1",
"main.dart.js_177.part.js": "52152b5c5e17735af25612a60910cfa3",
"main.dart.js_42.part.js": "88ee275bf333eeb3d50d99a3861fb767",
"main.dart.js_52.part.js": "17dcd02aa8f3d2aa4939da2f5dc57753",
"main.dart.js_183.part.js": "90da8abb6899b8656c7ce32d791cbbef",
"main.dart.js_158.part.js": "e5bef7601f3c8d91b474e34aab81eb44",
"main.dart.js_148.part.js": "c90bc3e7e25ae4cdd26af6add673c9cd",
"main.dart.js_29.part.js": "1bcdd73e087899b0ee349443c033b3a9",
"main.dart.js_80.part.js": "1ad46b96d2e02357e1a33c2b3f130e16",
"main.dart.js_90.part.js": "d4a5a90752668ab908b84baa41e81634",
"main.dart.js_64.part.js": "7bec387acd07002779edf74383bb1b92",
"main.dart.js_74.part.js": "f8b0223433b1f1cbcb5970858541becd",
"main.dart.js_141.part.js": "98957306d7e298d2cfd5e1335415b56e",
"main.dart.js_151.part.js": "c61d217f36d7ef1601e8abbb4fe370a7",
"main.dart.js_123.part.js": "a738e6a9f5f4b8ae6040548f44a3a2f6",
"main.dart.js_133.part.js": "eaa1b6d12a0ce4aa1d0f98f8a364748e",
"assets/AssetManifest.json": "8738e817ff428c633838a4da6152e928",
"assets/NOTICES": "f076c84014e05ed80991fd55c68dae69",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a9e95d443363bc0eb4dfced9938144ff",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/libcli/images/mail.png": "c9172bdda51109489593c86da58f10e8",
"assets/packages/libcli/images/apple.png": "c82fbe8cbcecaa462da7bd30015b3565",
"assets/packages/libcli/images/facebookDark.png": "deface349f4fd6bece4039901e8c6c44",
"assets/packages/libcli/images/googleDark.png": "3a7df7781108618c2b3d05a5121abdfc",
"assets/packages/libcli/images/appleDark.png": "11238aa9e757b14b5e3460b467e6a2b4",
"assets/packages/libcli/images/google.png": "46039fa62c3167028c4fdb86816c3363",
"assets/packages/libcli/images/facebook.png": "f4dfe9871ac8cce8278c2aba8c897e1d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8ca2286e8ca8c5431066dcf03047e51f",
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
"assets/assets/images/Screenshot%25202025-04-08%2520at%25208.22.33%25E2%2580%25AFPM.jpg": "a5540239f5e1143d83bdfdefd4e25f52",
"assets/assets/images/highlight-1.webp": "3bada69f28c2efe71316fc6fdfa3b542",
"assets/assets/images/app.webp": "876b532240721c27424065335d8249c9",
"assets/assets/images/background.webp": "f8aa6a4e86dd6fa7b78fc854bebfe78c",
"assets/assets/images/apple.webp": "4aa34b98ca03fc9ae1601912311917ef",
"assets/assets/videos/screenshot.webm": "cd4b1b6447af95e9feddf881935055ee",
"assets/assets/videos/screenshot.mp4": "363dfda7cd037b81a92e472b64cd1539",
"assets/assets/icon/icon.png": "77bbbbcfb49bacf66d08d278b85bb43a",
"main.dart.js_91.part.js": "8dd173889771075495350e1af9fd478d",
"main.dart.js_81.part.js": "f88efd1440f8e65da03a7a8ad2225be9",
"main.dart.js_28.part.js": "ff958e0babc24e4cf4eafd8a958489f9",
"main.dart.js_38.part.js": "89b6f383a2b1e6f0a0b3ccef98d28b42",
"main.dart.js_75.part.js": "e0ff877d89448ab7c404eb1b6b88c91a",
"main.dart.js_2.part.js": "41a87801bcce32ef41b302c6adb2289e",
"main.dart.js_65.part.js": "ccde98959d30c11fd590106db50a39b9",
"main.dart.js_150.part.js": "3662e5dc8b0655b84aedc4b03da148cc",
"main.dart.js_140.part.js": "20348b4036b79bf9b1ea17a756c9abfc",
"main.dart.js_132.part.js": "818db65f087825497166d5d49fc48741",
"main.dart.js_122.part.js": "fc919031c154bda9d1899bc66cdcad5c",
"main.dart.js_17.part.js": "5025e4622418f2482ceae447a55ea855",
"main.dart.js_88.part.js": "46111076c3cb1d1ebbfcbeaca45e6953",
"main.dart.js_98.part.js": "8d2dc076cf3d3bcdc1d96c1e084a4ad0",
"main.dart.js_31.part.js": "c2ce640e89899abe11f687ac4bfd4b01",
"main.dart.js_21.part.js": "1cd3d177e557e118e68b3e35e6afe946",
"main.dart.js_114.part.js": "d74cc2c22c45c5206cefa9d2eb8977be",
"main.dart.js_104.part.js": "19708188f7a171d70361ba124172e376",
"main.dart.js_176.part.js": "5a88a33d0716ae039b6e495746005dd9",
"main.dart.js_166.part.js": "f86238951aed2a6452406aa1610083a6",
"main.dart.js_53.part.js": "1e5a9e42bbde501ebcdbbd7a525aa61d",
"main.dart.js_43.part.js": "f6ac56d43406200473291485a0af1669",
"main.dart.js_182.part.js": "df6997d89e604b4c0e1747852a4ab00e",
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
"main.dart.js_149.part.js": "bc0740d7e3abc109c291dfd307534f7a",
"main.dart.js_159.part.js": "735873287b0882577803c6c071731421"};
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
