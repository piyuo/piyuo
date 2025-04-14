'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "585cdc2aa50eda5c470ba1a771245a72",
"flutter_bootstrap.js": "e89392a5628d7307bddec49c49633fa7",
"main.dart.js_79.part.js": "0150792b12321a8519a57a240ab6e746",
"main.dart.js_69.part.js": "7cc529a6daee847e22d63fa3ae12808c",
"main.dart.js_101.part.js": "f736ac4d8258fa503acfeecbcd84aaec",
"main.dart.js_111.part.js": "78048d50c8b23c4d7e644d8163ccb130",
"main.dart.js_24.part.js": "b6e24dd7b9e9ad8a9028db0f29c7fb30",
"main.dart.js_34.part.js": "177bde007fb30acd21685c0d60f13bc9",
"main.dart.js_46.part.js": "3cd691404dee2053856ed6039ce0c411",
"main.dart.js_56.part.js": "64a007d1844c614c36db8be9091d709b",
"main.dart.js_163.part.js": "7c5767aa537471a6330795748eaa7128",
"main.dart.js_173.part.js": "60d51b678692f17463b38364d83b3903",
"main.dart.js_145.part.js": "76229b023a901861071275a86933d091",
"main.dart.js_155.part.js": "efb691ce27402d86d4026ba9c156a183",
"version.json": "764fbd1bb09fdd4946aa65e35a8fa946",
"main.dart.js_7.part.js": "2155f3574e52fd34611c685489e63abf",
"main.dart.js_60.part.js": "86ac36cd8ae2b350ebfc152d7f774467",
"main.dart.js_70.part.js": "39d146c5652b37eaa2c4227747ed4155",
"main.dart.js_12.part.js": "88ae717cf30780828f4adca311e7d9d6",
"main.dart.js_127.part.js": "c8de082b6b770f9f62b83c7b13d5d938",
"main.dart.js_137.part.js": "474f3b25f3721d049b6087d66572951f",
"main.dart.js_84.part.js": "2ceb6d0657e18e418579a0828cb844ae",
"main.dart.js_94.part.js": "88b89914d4450553f5514124d519f05b",
"main.dart.js_118.part.js": "2258534a85dfa0bca739fdbd37be102a",
"main.dart.js_108.part.js": "d670a36dda6f65f3a8189e4aac5ddd03",
"main.dart.js_154.part.js": "17522fd50584ac3000b4907fa85f8af1",
"main.dart.js_144.part.js": "d091c4548c559ae39029c2fa3e7e1a88",
"main.dart.js_71.part.js": "4b174b943d71534634c66f591e7fae5e",
"main.dart.js_61.part.js": "ddacac032da39dc4b3b2c08d9a866a1d",
"main.dart.js_6.part.js": "02b6032171a5095ec2f1471881f4f58c",
"index.html": "958769728841b59e5331ec1ac4b666b7",
"/": "958769728841b59e5331ec1ac4b666b7",
"main.dart.js_136.part.js": "df335704945c95511010be8abd3d0854",
"main.dart.js_126.part.js": "bf6c0e317f6428b087e23b0d15228ed4",
"privacy/index.html": "cdef54c1cd1d1c6f8a40228cd236ab70",
"main.dart.js_109.part.js": "14bae410959698e03dd63f6672655dca",
"main.dart.js_119.part.js": "3193ced0c5eecd0e3bbd0f3b2aa316be",
"main.dart.js_95.part.js": "bf0bfc7ab285af6dfff939f7a8805d99",
"main.dart.js_85.part.js": "b8a4edf5362d7c12595ef41632ae581d",
"main.dart.js_186.part.js": "7ad70567f46f2ad7f822d26e4826670b",
"main.dart.js_68.part.js": "8ff067add8ae2d582133810441465a9c",
"main.dart.js_78.part.js": "9edf25b477b095815b1b5a8dbfa0792e",
"main.dart.js_110.part.js": "51153937efac86932bf7b750d45254dd",
"main.dart.js_100.part.js": "4192371fdd22340930bb9cdb79150ad7",
"main.dart.js_35.part.js": "7a3da745a327c8c16191a2f32b7cc5db",
"main.dart.js_25.part.js": "a09437010c54c652368c5c37024d5578",
"main.dart.js_57.part.js": "16a0a5e59cd2a67ef8a7de40d61a2652",
"main.dart.js_47.part.js": "107bdb5c89e26f0940006cb6c96d4de7",
"main.dart.js_172.part.js": "c56085babe55d5e705ceac25cb6f5c9e",
"main.dart.js_162.part.js": "cc58507aefb2ce6eef8f59af900ce803",
"main.dart.js_124.part.js": "72eb64e34bdec45989fabaeb315ded3a",
"main.dart.js_134.part.js": "29c18bf8de6a14c425db82ac3c1ec932",
"main.dart.js_11.part.js": "73188d90199734257de4a41ffd53a2f5",
"main.dart.js_63.part.js": "9f78e49288a523c0fe9b44654bbe9630",
"main.dart.js_4.part.js": "9eef366bc5c906720323449fb80be0fa",
"main.dart.js_73.part.js": "e0c05071b067e627c5897bfe87a7a755",
"main.dart.js_146.part.js": "7f4aaad4058ae0ffeeca2ad800f7311c",
"main.dart.js_156.part.js": "778399e6697fc6e92d1703c5a627f747",
"main.dart.js": "580aa2dea6d291765051b2eb3aa7e060",
"main.dart.js_87.part.js": "e9e5c8f11d8a52df3f5eb59b0ba2004c",
"main.dart.js_97.part.js": "4b347db0b0d3a63c4fb6027982a8f940",
"main.dart.js_179.part.js": "66b4a5a03858855597f58f148227aa4b",
"main.dart.js_169.part.js": "4bd94f17e468f68d4158ce2a9c842a5e",
"main.dart.js_184.part.js": "fca720792dfb4a99997187624fe6be67",
"main.dart.js_160.part.js": "82eb074f8e342512b4ae0cb02cf495f1",
"main.dart.js_170.part.js": "8a3899a7a6d09278813af8dd86ad53e2",
"main.dart.js_45.part.js": "6e1efd82704d505943467baf3c1b64f2",
"main.dart.js_27.part.js": "0392a6cf5a193f1533e5a85d4e1541a3",
"main.dart.js_37.part.js": "3a8e7fd063d3283752559c68c72211fa",
"main.dart.js_102.part.js": "76d816e2cb4144bdb1bc5538dfc13db1",
"terms/index.html": "7e0f5422c525b2ee7f5bf0d6e71f6439",
"main.dart.js_112.part.js": "6d313fbfff6ffbb9eb28f1528affb29c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "64c81b15e5beb3a54f832d95a079950d",
"main.dart.js_171.part.js": "789f8df2006aced2b7ff423627f26e28",
"main.dart.js_161.part.js": "311fadcae68d184f17575d7ee74bd1f0",
"main.dart.js_54.part.js": "0e754fa755b4b92e71dd84a168e142b7",
"main.dart.js_44.part.js": "a299b00825992de0e7785a6a10432114",
"main.dart.js_36.part.js": "26583f949856337c192095f3f2fe6200",
"main.dart.js_26.part.js": "d39149b9f72e7685db3d32007f961f9c",
"main.dart.js_113.part.js": "cb408ecf4b79362562ec7bcd99bb3cb4",
"main.dart.js_103.part.js": "0b9df3d0f7367ad992be65139337bd89",
"main.dart.js_135.part.js": "ac0cf1741a5a3798daa72b11a7618dd5",
"main.dart.js_125.part.js": "40be156eb5026ea2d9a3a6058f1f6cbd",
"main.dart.js_72.part.js": "2a47c312b2902f984ef5335735ad22cf",
"main.dart.js_5.part.js": "55dd64f1e457772cab758abf0067768c",
"main.dart.js_62.part.js": "c3911a139134dae52d19aa3082ceb0a5",
"main.dart.js_157.part.js": "1d19447968a2e181b22ea788fd1594ef",
"main.dart.js_147.part.js": "d4d9e24b38fd33b5b81420789f16b47d",
"main.dart.js_96.part.js": "82462d01594ce73f05334121b1f30968",
"main.dart.js_86.part.js": "07403605d9c9d56e2b4004f7b206f890",
"main.dart.js_168.part.js": "c415a216e9bf296d5f207dfd8c715cc5",
"main.dart.js_178.part.js": "4d5b5a92bda98587519ce2fcad4b4498",
"main.dart.js_83.part.js": "21c552fecba20dedb7f220b73ecedbe4",
"main.dart.js_93.part.js": "c252c091a6699b3aaa3c4065d04c6da1",
"main.dart.js_58.part.js": "0ac186d6a26d2e0c3110efc89588ed78",
"main.dart.js_15.part.js": "dddffb9abb1ead42a42c9654d26e5322",
"main.dart.js_120.part.js": "1c908617c875332bf2e226b90ebb825a",
"main.dart.js_130.part.js": "c097998838f6e8413585384af2b25c92",
"main.dart.js_189.part.js": "fdada334cd72493182acf9fbad900054",
"main.dart.js_142.part.js": "aaf8fb04a7145d3ae4ca999ae5af23ea",
"main.dart.js_152.part.js": "8ed0a5566b5efd7b23866777fcb340bc",
"main.dart.js_67.part.js": "c72ad488b019427c58b48041bb664c5c",
"main.dart.js_77.part.js": "38f90ad801dc1509f423731ccff38869",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_51.part.js": "2aa5deea27c963498e4d5856bc99699b",
"main.dart.js_164.part.js": "fe24ee2b6e1a4fb8ddd162a6bdfae31f",
"main.dart.js_174.part.js": "a4e22c6ddab22b0b07457a0ad30909b7",
"main.dart.js_106.part.js": "6a0dfa7f2327b0334e37e99b4b63cfbc",
"main.dart.js_116.part.js": "4a5da4b9ba3d139eef3b775fc14e560b",
"main.dart.js_23.part.js": "214592393ab2d3e962ec96e0b5cf2e85",
"main.dart.js_33.part.js": "d95eebc0258890a6ff3c784e323da5a3",
"main.dart.js_139.part.js": "71a2bd91bdd462626156ecd3f94987b9",
"main.dart.js_129.part.js": "dbc7118af25b70d2c97a1fd02a7c56bb",
"main.dart.js_180.part.js": "37a5e52b659dd71963365108b15b8216",
"main.dart.js_50.part.js": "6bb6267c00c9c80302c0c2fda7c7ca2a",
"main.dart.js_40.part.js": "00fe7082eebe0390f7c3c62b45a4eac2",
"main.dart.js_175.part.js": "3375441adf3b72ca981b69421b6fb473",
"main.dart.js_165.part.js": "21123629ef0d5566c8628a2a1313d7d0",
"main.dart.js_117.part.js": "c693d9cf73de633f2cc970430bf0c564",
"main.dart.js_107.part.js": "cc3344ee4bd84f810ca9b9ad52b12956",
"main.dart.js_32.part.js": "f64ca248bfa422e9c85352716d91fbac",
"main.dart.js_8.part.js": "90456e0ac4aa142a93f41cf7b33a599d",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "4eaaa1839edfcb8c3eda8c549a43cc6b",
"main.dart.js_128.part.js": "89325007f03fb4bdc0bb2f8b3c006d85",
"main.dart.js_138.part.js": "f950c87d4ae354833a9be5457dd356b3",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "efa1ecc9b2af80d0b7d3e98023996b57",
"main.dart.js_82.part.js": "dbc8956b125c775a38aeb65b66b2b224",
"main.dart.js_49.part.js": "0c058b85e4e1e827f1b95bacc274b031",
"main.dart.js_59.part.js": "6f44cd6ea695f89b8dea03c81f2a8386",
"main.dart.js_188.part.js": "019edd836670e30fc717aa83faafe566",
"main.dart.js_14.part.js": "b5c47218709132f6ab70cd0bdd22d17d",
"main.dart.js_131.part.js": "4145e737e0b5e4cf78a47e450a6a7d0f",
"main.dart.js_121.part.js": "93fd41209245297143129e740dc73c72",
"main.dart.js_153.part.js": "3dd1466b996bbd868e1803381cfd8a0e",
"main.dart.js_143.part.js": "a8cac3f4ec35f558fda3b013b79be2bb",
"main.dart.js_76.part.js": "f7a7ecdbfb0024680b87aa52aba66881",
"main.dart.js_66.part.js": "a0b889e4f8b004964967d246e60df5d7",
"main.dart.js_1.part.js": "e8b953577543541a8d33de47487b9bad",
"main.dart.js_20.part.js": "41fc1ee92a75883e0340f5a16f212f1d",
"main.dart.js_30.part.js": "f870550d6fb3b877f1f9337bca93cfbe",
"main.dart.js_105.part.js": "c9a1788140d7d758b7c8036f5619690d",
"main.dart.js_115.part.js": "bfdda15c07f9f03d69d52be027f96b05",
"main.dart.js_99.part.js": "a6c939782bf031e555c0c7d6bb30adf6",
"main.dart.js_89.part.js": "9556a9fe997855dee114bc567b4d5f05",
"main.dart.js_167.part.js": "d189b9aaf05e97264dc3092c0b1d5406",
"main.dart.js_177.part.js": "52152b5c5e17735af25612a60910cfa3",
"main.dart.js_42.part.js": "dc57d5ae6246fed3963ffec375b6855a",
"main.dart.js_52.part.js": "c642cfb0e725579feb6f3ceb6d322615",
"main.dart.js_183.part.js": "90da8abb6899b8656c7ce32d791cbbef",
"main.dart.js_158.part.js": "bd51c0187a0e3dc1ebd3bbefff3b5b25",
"main.dart.js_148.part.js": "0c148650ac76d98f05035fad719bc89c",
"main.dart.js_29.part.js": "e2a2eeefe16584519a90b1ba78e54477",
"main.dart.js_80.part.js": "20cbbb83aacb70f2c409cfa409798c72",
"main.dart.js_90.part.js": "f68b10f574fd53f2f375e93b503425f2",
"main.dart.js_64.part.js": "2962196fb984ca7cf3ccc3136b3588b3",
"main.dart.js_74.part.js": "25f7c46ed5245b8564c5651f9d3f432c",
"main.dart.js_141.part.js": "abe4000b85bce3045f60f75855f17d7e",
"main.dart.js_151.part.js": "3feb2b4e56202cfdb0f6f0b6e8471c86",
"main.dart.js_123.part.js": "a738e6a9f5f4b8ae6040548f44a3a2f6",
"main.dart.js_133.part.js": "38c16004699652a13feaef657b85ecfd",
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
"main.dart.js_75.part.js": "ef6fa1f4947b4912472b9d7ddac26255",
"main.dart.js_2.part.js": "82e74a0077314324e46256fa5328edc9",
"main.dart.js_65.part.js": "230b32b91eefdd1440502978ba405e3e",
"main.dart.js_150.part.js": "3662e5dc8b0655b84aedc4b03da148cc",
"main.dart.js_140.part.js": "975533a9305ba58141598de7bd40e2ac",
"main.dart.js_132.part.js": "ac093612a8d3a4135b5a27a2e95ac820",
"main.dart.js_122.part.js": "6c99b0910ea35b602bd69715b1d34592",
"main.dart.js_17.part.js": "eac0eecec465d576a6cddbebe3eef9a8",
"main.dart.js_88.part.js": "5e885907133e5615100397ec8f504867",
"main.dart.js_98.part.js": "cffe8b495055b0497881b64d544b459c",
"main.dart.js_31.part.js": "74f52677f5df76b8a0ba58ee2184705b",
"main.dart.js_21.part.js": "c96c0a02f549686b568017655aa5b617",
"main.dart.js_114.part.js": "46aaf6a11d9903df5491a62eef8b4981",
"main.dart.js_104.part.js": "45cad81689dd9dad983b10ba25566fc9",
"main.dart.js_176.part.js": "5a88a33d0716ae039b6e495746005dd9",
"main.dart.js_166.part.js": "5c40757b32c6452531a35875acb43081",
"main.dart.js_53.part.js": "1e5a9e42bbde501ebcdbbd7a525aa61d",
"main.dart.js_43.part.js": "3f9de81234f82399649fb636eea60377",
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
"main.dart.js_149.part.js": "a8c604da14650850d80cb92ea0c6a9b7",
"main.dart.js_159.part.js": "56baed1dbb8ebd4d55e71e057120cb47"};
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
