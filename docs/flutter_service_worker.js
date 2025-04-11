'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "585cdc2aa50eda5c470ba1a771245a72",
"flutter_bootstrap.js": "60fb90f8f11d6459da2f3b38284f2637",
"main.dart.js_79.part.js": "79fe30d85106c84f75e1c01bf19310b0",
"main.dart.js_69.part.js": "15e781a069ff2d2e5b4c63af964caa06",
"main.dart.js_101.part.js": "2397606abe2aea72e7cda76af293816b",
"main.dart.js_111.part.js": "a5b99f418ce09f6c468d9201531b0cae",
"main.dart.js_24.part.js": "b6e24dd7b9e9ad8a9028db0f29c7fb30",
"main.dart.js_34.part.js": "177bde007fb30acd21685c0d60f13bc9",
"main.dart.js_46.part.js": "7367211562e05b6969f373d57b8950be",
"main.dart.js_56.part.js": "4348deb0560fb7d4a26abfaea8f9ad1e",
"main.dart.js_163.part.js": "81540a47119852951ae698282c8a549a",
"main.dart.js_173.part.js": "60d51b678692f17463b38364d83b3903",
"main.dart.js_145.part.js": "489bac1ff8064dd4ae97876fa67b5b59",
"main.dart.js_155.part.js": "34e87e30cc295e368d2bf50743029426",
"version.json": "764fbd1bb09fdd4946aa65e35a8fa946",
"main.dart.js_7.part.js": "d586bcdd52cf5b94e12be46d489ded4c",
"main.dart.js_60.part.js": "86ac36cd8ae2b350ebfc152d7f774467",
"main.dart.js_70.part.js": "e220bf57fc4b95c8dd54bdea9f473c8e",
"main.dart.js_12.part.js": "88ae717cf30780828f4adca311e7d9d6",
"main.dart.js_127.part.js": "c8de082b6b770f9f62b83c7b13d5d938",
"main.dart.js_137.part.js": "976898e899239dacfef3e6eb914d1970",
"main.dart.js_84.part.js": "a9c26c68858978f48128e244737d1cf2",
"main.dart.js_94.part.js": "fa75f9e8ccd70b9b1b5896ff4be795e8",
"main.dart.js_118.part.js": "640fbb660b346062637aa36e0068bea0",
"main.dart.js_108.part.js": "99c08d05169bbfd1b4e5590f8ffd8407",
"main.dart.js_154.part.js": "c8afc9ff8c47b078ca43782d69aac915",
"main.dart.js_144.part.js": "3941bd44abf3d169a3b1eab9ba8df9d6",
"main.dart.js_71.part.js": "4b174b943d71534634c66f591e7fae5e",
"main.dart.js_61.part.js": "10f70648bfa5ce1c58f2586a21156723",
"main.dart.js_6.part.js": "02b6032171a5095ec2f1471881f4f58c",
"index.html": "958769728841b59e5331ec1ac4b666b7",
"/": "958769728841b59e5331ec1ac4b666b7",
"main.dart.js_136.part.js": "b53bd9cba290aa65e1b212ec871cfbb4",
"main.dart.js_126.part.js": "56ecda6b04ad5caad161ef6f649df116",
"main.dart.js_109.part.js": "14bae410959698e03dd63f6672655dca",
"main.dart.js_119.part.js": "d967974949a36eab9618b6d8c478019e",
"main.dart.js_95.part.js": "bf0bfc7ab285af6dfff939f7a8805d99",
"main.dart.js_85.part.js": "b8a4edf5362d7c12595ef41632ae581d",
"main.dart.js_186.part.js": "7ad70567f46f2ad7f822d26e4826670b",
"main.dart.js_68.part.js": "8ff067add8ae2d582133810441465a9c",
"main.dart.js_78.part.js": "9edf25b477b095815b1b5a8dbfa0792e",
"main.dart.js_110.part.js": "51153937efac86932bf7b750d45254dd",
"main.dart.js_100.part.js": "1b4b0ba5c341f61dc4ce79ac932fb1a2",
"main.dart.js_35.part.js": "a8b134dff75d18af30bbed80fec8949e",
"main.dart.js_25.part.js": "a7a4ee9bfd21ac6341537a0131ec24d3",
"main.dart.js_57.part.js": "16a0a5e59cd2a67ef8a7de40d61a2652",
"main.dart.js_47.part.js": "ba315e9a3116ec759912d35b4ed71bfc",
"main.dart.js_172.part.js": "c56085babe55d5e705ceac25cb6f5c9e",
"main.dart.js_162.part.js": "70fa97f6d19df86d73ad7fc6cbdb23e5",
"main.dart.js_124.part.js": "ada0bf00f6ff1e6fbec33b38c313e45c",
"main.dart.js_134.part.js": "7867898a04f8b34cc6a97554e699a564",
"main.dart.js_11.part.js": "3a79ff0243702e67054154c946b0337d",
"main.dart.js_63.part.js": "8a04db43a6d87ee6b82e61a99e638d0e",
"main.dart.js_4.part.js": "1adb6293fb6cd388e30237ab44136307",
"main.dart.js_73.part.js": "e0c05071b067e627c5897bfe87a7a755",
"main.dart.js_146.part.js": "9e813051f6a8c347d6113ae97471898f",
"main.dart.js_156.part.js": "00c9ce42308c7bf69762f3317b332741",
"main.dart.js": "3bdabd5c36a818a1b1e1ce96443062c5",
"main.dart.js_87.part.js": "225c76324bbb61aec392d4b11bd72936",
"main.dart.js_97.part.js": "4b347db0b0d3a63c4fb6027982a8f940",
"main.dart.js_179.part.js": "66b4a5a03858855597f58f148227aa4b",
"main.dart.js_169.part.js": "8c4e4fcbc56373f1bc9ceda0ef3a2f13",
"main.dart.js_184.part.js": "fca720792dfb4a99997187624fe6be67",
"main.dart.js_160.part.js": "5a881541a83dacc3492c8a36d69a4531",
"main.dart.js_170.part.js": "7dffd19bd5efe722a22bfa8aa5062e80",
"main.dart.js_45.part.js": "6e1efd82704d505943467baf3c1b64f2",
"main.dart.js_27.part.js": "58bb0616c3d8d2fe04d378e3b293aee8",
"main.dart.js_37.part.js": "05af4c97b9ade0840adfc2d2c9e7326d",
"main.dart.js_102.part.js": "76d816e2cb4144bdb1bc5538dfc13db1",
"main.dart.js_112.part.js": "851a34ea1b0b13d32a9d25b57cec7274",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "64c81b15e5beb3a54f832d95a079950d",
"main.dart.js_171.part.js": "789f8df2006aced2b7ff423627f26e28",
"main.dart.js_161.part.js": "effcbbacbe829e8fef6208c548d5716f",
"main.dart.js_54.part.js": "0e754fa755b4b92e71dd84a168e142b7",
"main.dart.js_44.part.js": "afb50c203f401bdb72f4e8795dc53ad9",
"main.dart.js_36.part.js": "26583f949856337c192095f3f2fe6200",
"main.dart.js_26.part.js": "d39149b9f72e7685db3d32007f961f9c",
"main.dart.js_113.part.js": "cb408ecf4b79362562ec7bcd99bb3cb4",
"main.dart.js_103.part.js": "25bfd5a2cdae06a7a0b1e6e5ef097581",
"main.dart.js_135.part.js": "8056d291260fe9b341f8e93c392536f3",
"main.dart.js_125.part.js": "90101d9fe10e3704dd6d5a676c304834",
"main.dart.js_72.part.js": "78b0f7c01eb889a5b3df439a2d0bcc9e",
"main.dart.js_5.part.js": "365322fd3adea783b6f9bfa7bf17a003",
"main.dart.js_62.part.js": "b9927028491e786cdea44a8b3794f77d",
"main.dart.js_157.part.js": "8e588b97cc97342e48d74e0d005fdbca",
"main.dart.js_147.part.js": "b793443d4c6d89ee5c20c4c304efc1ab",
"main.dart.js_96.part.js": "cb409373d7d530aeb8a396091d48283c",
"main.dart.js_86.part.js": "481ea46473a64c6926b87dc3611f240c",
"main.dart.js_168.part.js": "b2348fba156db98422b51929989f9ccc",
"main.dart.js_178.part.js": "4d5b5a92bda98587519ce2fcad4b4498",
"main.dart.js_83.part.js": "c2f88d71f064d1b48d1a540d1f5ad6f9",
"main.dart.js_93.part.js": "c252c091a6699b3aaa3c4065d04c6da1",
"main.dart.js_58.part.js": "39b18d56c0b99c0a909c2febf19b2e4c",
"main.dart.js_15.part.js": "92c277fda722eb4b4be5daf88f110912",
"main.dart.js_120.part.js": "92b1ca22e2f8d64c95b062f5899b4e1a",
"main.dart.js_130.part.js": "7ba55a0a919461e13b08ae959264af14",
"main.dart.js_189.part.js": "fdada334cd72493182acf9fbad900054",
"main.dart.js_142.part.js": "a4a603748f5a1aed43b12171527b9c9a",
"main.dart.js_152.part.js": "147fd788938a368dd3f03fc674acd837",
"main.dart.js_67.part.js": "944e6120d041a746307a8cefe9fbcbea",
"main.dart.js_77.part.js": "9b1217110cebdfac5829d3d104d839b4",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_51.part.js": "e81893918ddcf6e8eab7d26f87d2d7f3",
"main.dart.js_164.part.js": "fdc4a870f407a0c52772d21c6e82a4a1",
"main.dart.js_174.part.js": "a4e22c6ddab22b0b07457a0ad30909b7",
"main.dart.js_106.part.js": "348d2d5e30ee2ce65ec9961980b1d0bd",
"main.dart.js_116.part.js": "b99b9afd3343192a925e0439205fddbc",
"main.dart.js_23.part.js": "3f96adf0601226b4aa11aa6b0e3ece38",
"main.dart.js_33.part.js": "f48109fa2b63bb9e0b4f27efeddc060a",
"main.dart.js_139.part.js": "1b8645b06cadb610a5d4fdf9145e6edb",
"main.dart.js_129.part.js": "0038ac1780391db4034ddf134daa4274",
"main.dart.js_180.part.js": "37a5e52b659dd71963365108b15b8216",
"main.dart.js_50.part.js": "6bb6267c00c9c80302c0c2fda7c7ca2a",
"main.dart.js_40.part.js": "7503a8d42039452b3478ddea6ca19543",
"main.dart.js_175.part.js": "3375441adf3b72ca981b69421b6fb473",
"main.dart.js_165.part.js": "147a778555b95628b40d95b110acfe96",
"main.dart.js_117.part.js": "c693d9cf73de633f2cc970430bf0c564",
"main.dart.js_107.part.js": "266d2da5d0ce9884e359686743ef27e1",
"main.dart.js_32.part.js": "f64ca248bfa422e9c85352716d91fbac",
"main.dart.js_8.part.js": "90456e0ac4aa142a93f41cf7b33a599d",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "4eaaa1839edfcb8c3eda8c549a43cc6b",
"main.dart.js_128.part.js": "44e2c631732d140b39ca1ef810e17398",
"main.dart.js_138.part.js": "f950c87d4ae354833a9be5457dd356b3",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "53ef48473bfdc2784be3315b6d8f0ba8",
"main.dart.js_82.part.js": "919bf7bda02264322baafa2fe14f8c2e",
"main.dart.js_49.part.js": "6ac5ea628ca5870bc71475979564a5bd",
"main.dart.js_59.part.js": "351af71d3f608e3ea04b384143e1b3c1",
"main.dart.js_188.part.js": "019edd836670e30fc717aa83faafe566",
"main.dart.js_14.part.js": "8f0f7795b0a0fc1d0ceec7f75320d16b",
"main.dart.js_131.part.js": "0e992ab88003373b7077cdaeaae397c9",
"main.dart.js_121.part.js": "458c01a5702df6b0c3ef2805f4499bdd",
"main.dart.js_153.part.js": "3dd1466b996bbd868e1803381cfd8a0e",
"main.dart.js_143.part.js": "8e5b01b33aba7fbf9e61ecd3be003984",
"main.dart.js_76.part.js": "f7a7ecdbfb0024680b87aa52aba66881",
"main.dart.js_66.part.js": "5b6dd739e9c7bacece3ee510994f3652",
"main.dart.js_1.part.js": "6685a143f2224acbc79a4c21d4705368",
"main.dart.js_20.part.js": "82fb8926494d7cda12fd4ee05e5b0715",
"main.dart.js_30.part.js": "f870550d6fb3b877f1f9337bca93cfbe",
"main.dart.js_105.part.js": "7aa6905374812baff92c148b239b8ffe",
"main.dart.js_115.part.js": "fbec49c6a4f2e39bf3a9327b9264f130",
"main.dart.js_99.part.js": "a6c939782bf031e555c0c7d6bb30adf6",
"main.dart.js_89.part.js": "9556a9fe997855dee114bc567b4d5f05",
"main.dart.js_167.part.js": "14bec485e8a4e389dc0720a2f700cd55",
"main.dart.js_177.part.js": "52152b5c5e17735af25612a60910cfa3",
"main.dart.js_42.part.js": "5a739418069ad74f55e48b48a6d4239c",
"main.dart.js_52.part.js": "4ee99666e06ce66675b0508c97dc84f7",
"main.dart.js_183.part.js": "90da8abb6899b8656c7ce32d791cbbef",
"main.dart.js_158.part.js": "ffeaf227cb1de5f8613099cfe5ada2a6",
"main.dart.js_148.part.js": "54a43468c4cf48e14b296c062805c7f6",
"main.dart.js_29.part.js": "40e07210c924510e58275a9223bae50e",
"main.dart.js_80.part.js": "b504da5f0fbf3349572dc13d03495a6b",
"main.dart.js_90.part.js": "599c69b7879ee968f8bb8f0c1115cc98",
"main.dart.js_64.part.js": "7aa18db3ab24b078c4e4d1f6ec898204",
"main.dart.js_74.part.js": "ef8b652968aecb8862023ea65565a02f",
"main.dart.js_141.part.js": "aed77e8278b998718cea30ff268f2cc3",
"main.dart.js_151.part.js": "84be247f5ce4c3724873b839136df3a6",
"main.dart.js_123.part.js": "a738e6a9f5f4b8ae6040548f44a3a2f6",
"main.dart.js_133.part.js": "d56a6ebc2de1a79382c928ae3fdd935b",
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
"main.dart.js_75.part.js": "7d220a977a0c3634f413a45bd8e712f4",
"main.dart.js_2.part.js": "82e74a0077314324e46256fa5328edc9",
"main.dart.js_65.part.js": "2a644f554915b6bccf11944a73abdeee",
"main.dart.js_150.part.js": "3662e5dc8b0655b84aedc4b03da148cc",
"main.dart.js_140.part.js": "fb5b53ac2ba5ecaac86d45907aaa186f",
"main.dart.js_132.part.js": "5a07273206695526ba0a78c16f3eed55",
"main.dart.js_122.part.js": "d536e9908cb53a260375688ffce4af37",
"main.dart.js_17.part.js": "7ffce6ecf79539fd2428208c8ef854b1",
"main.dart.js_88.part.js": "d3c5e2598fb288bcf368afe11ea237d1",
"main.dart.js_98.part.js": "2a138c3f5a6d32693c86a096602ab968",
"main.dart.js_31.part.js": "c0afb1d1e604086cd2db861bbf3278c7",
"main.dart.js_21.part.js": "f50ea229edc636d82d1d867393ec79ff",
"main.dart.js_114.part.js": "5bab3e7a81eed188d98b898e7ac74382",
"main.dart.js_104.part.js": "45cad81689dd9dad983b10ba25566fc9",
"main.dart.js_176.part.js": "5a88a33d0716ae039b6e495746005dd9",
"main.dart.js_166.part.js": "3b83f3326eba750de27a14ae44a4b59b",
"main.dart.js_53.part.js": "1e5a9e42bbde501ebcdbbd7a525aa61d",
"main.dart.js_43.part.js": "f3ea09b13a4603f20190013222b78eaf",
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
"main.dart.js_149.part.js": "6d7466b87cab725c6547a6d6315bb867",
"main.dart.js_159.part.js": "0d6c4709e09f7b360e1b082424d7a943"};
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
