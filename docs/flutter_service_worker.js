'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "585cdc2aa50eda5c470ba1a771245a72",
"flutter_bootstrap.js": "35343b72acc44b3a204eae348b1fc3e2",
"main.dart.js_79.part.js": "0150792b12321a8519a57a240ab6e746",
"main.dart.js_69.part.js": "fedf87cbf6958ae35f22ca8ad512d6aa",
"main.dart.js_101.part.js": "f3ab3d800307156363e358147f624d8b",
"main.dart.js_111.part.js": "6d645e0ed6cd29958c8e8c5302c400ee",
"main.dart.js_24.part.js": "b6e24dd7b9e9ad8a9028db0f29c7fb30",
"main.dart.js_34.part.js": "940154b970b3f57a60054558e0fda742",
"main.dart.js_46.part.js": "002a678ff1a4c3a3a07053a642a631f0",
"main.dart.js_56.part.js": "64a007d1844c614c36db8be9091d709b",
"main.dart.js_163.part.js": "5125bd19494c24bd30a767f21a5b4ca2",
"main.dart.js_173.part.js": "cb9d9f9bf2adb8aa5fdc297d042f7a31",
"main.dart.js_145.part.js": "41a5426e4ba3da6e4492ee84591c8cb4",
"main.dart.js_155.part.js": "c553d1e25c740a05ce2e3da0aa24bada",
"version.json": "e108e1c11104e2ec7cf9868c8c17c462",
"main.dart.js_7.part.js": "f68b3a517c298f087b275ed73447bea2",
"main.dart.js_60.part.js": "a2edeb611ed729eb6830bb1bc16bb10a",
"main.dart.js_70.part.js": "09cbe3606b9aa6ce1833c3f8f639adf8",
"main.dart.js_12.part.js": "b04fd5b876c1143c3e5e7150b915e79d",
"main.dart.js_127.part.js": "9cb52abbb04c8568054c6253ee6673cd",
"main.dart.js_137.part.js": "76213a7751d0d379026d0441fcdd635e",
"main.dart.js_84.part.js": "91fb4069bfe16b2fa834a19852fe3fa6",
"main.dart.js_94.part.js": "07093b289febfdcea84cc06f4c1b3ce7",
"main.dart.js_118.part.js": "f0377121e402ef6fcab18b8870837b30",
"main.dart.js_108.part.js": "e1646c48ffdda859bf95d0af019de899",
"main.dart.js_154.part.js": "9386c9b8ac4923edf31f5be06fa3d5ba",
"main.dart.js_144.part.js": "cd60bb52a3e59c1949b53f16148ee19b",
"main.dart.js_71.part.js": "e2a3e8b0ab48efb9a1408ebb7056ecd8",
"main.dart.js_61.part.js": "ddacac032da39dc4b3b2c08d9a866a1d",
"main.dart.js_6.part.js": "02b6032171a5095ec2f1471881f4f58c",
"index.html": "958769728841b59e5331ec1ac4b666b7",
"/": "958769728841b59e5331ec1ac4b666b7",
"main.dart.js_13.part.js": "373d8ddc671d0cabba10dd0edc1338df",
"main.dart.js_136.part.js": "d07ef7f58511a0635a42018b470805c7",
"main.dart.js_126.part.js": "0b2de26a09de85608a988354d4ebe1a7",
"privacy/index.html": "cdef54c1cd1d1c6f8a40228cd236ab70",
"main.dart.js_109.part.js": "4595449669dcc7a22cff67f2dd940792",
"main.dart.js_119.part.js": "3b168d32dd860a0cc57a423b36278ce4",
"main.dart.js_95.part.js": "31e5689e1eb87e653c29d7f0a558103d",
"main.dart.js_85.part.js": "bd70844b28bd7712d7ed81e3a25e4c33",
"main.dart.js_186.part.js": "7ad70567f46f2ad7f822d26e4826670b",
"test/1.mp4": "58f3a99b8821dce6ac732844f2bcbc2d",
"main.dart.js_68.part.js": "da9650905e47356f5c1df19e45ec6a7c",
"main.dart.js_78.part.js": "7b3f3ef2ece6856965f81fdb5325c6e3",
"main.dart.js_110.part.js": "4a1261dd2aa91243be857a04218b1d0f",
"main.dart.js_100.part.js": "e8190610f149d408cb983291b12372c3",
"main.dart.js_35.part.js": "1472c205121ab5d055f98629046cc725",
"main.dart.js_25.part.js": "b46612fac1742f71ed88feacec2bcfdd",
"main.dart.js_57.part.js": "a05d08be66e567651285e088d915e316",
"main.dart.js_47.part.js": "107bdb5c89e26f0940006cb6c96d4de7",
"main.dart.js_172.part.js": "dc1f19e0bd6ddec183e76403f4cffe4e",
"main.dart.js_162.part.js": "115092e9ccd0ba6dc6133214c8944e2e",
"main.dart.js_124.part.js": "96542c5caaea9afbe58685dcf1a317a3",
"main.dart.js_134.part.js": "ac482637d76b13332071d63134f3d554",
"main.dart.js_11.part.js": "73188d90199734257de4a41ffd53a2f5",
"main.dart.js_63.part.js": "da230005c63a5af8e19d360feff432cd",
"main.dart.js_4.part.js": "a609e8ee3c80513532fed7d02a41634f",
"main.dart.js_73.part.js": "5e9496fddceda74564933f280077870d",
"main.dart.js_146.part.js": "cc4991f1f0e49b179c373044ad3f4c7d",
"main.dart.js_156.part.js": "8dfa3739ae1fa5f98798b58cfa1e0d68",
"main.dart.js": "ce110766bc9edbeaa5a28ca49b9ec209",
"main.dart.js_87.part.js": "f782628c46ed2baed4e243bbf27410fd",
"main.dart.js_97.part.js": "e1cdb44d058f7e85dcf5787e6cc54730",
"main.dart.js_179.part.js": "66b4a5a03858855597f58f148227aa4b",
"main.dart.js_169.part.js": "1e3a7949dc74b0008c4d7987595309c3",
"main.dart.js_184.part.js": "fca720792dfb4a99997187624fe6be67",
"main.dart.js_160.part.js": "ba6cdf495581598c5d0ace078cea4a9a",
"main.dart.js_170.part.js": "099c8b332e10170910c8045e993c0069",
"main.dart.js_45.part.js": "1034a0ca7afe3a44226520c414682e44",
"main.dart.js_55.part.js": "bf90d78a7f7abc6d17c6151fee985adf",
"main.dart.js_27.part.js": "0392a6cf5a193f1533e5a85d4e1541a3",
"main.dart.js_37.part.js": "ef3d71797b735a5dc72792022fbe9a5d",
"main.dart.js_102.part.js": "55b774bcd9bd6f829a8fa9b8a175087a",
"terms/index.html": "7e0f5422c525b2ee7f5bf0d6e71f6439",
"main.dart.js_112.part.js": "44b8fdc611d84e3d76fee21e9d975479",
"main.dart.js_19.part.js": "97ba0177f40282e2d0dfe27bf3f214e2",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "64c81b15e5beb3a54f832d95a079950d",
"main.dart.js_171.part.js": "98dddbb4b367a4b4ddf5f2027f79a494",
"main.dart.js_161.part.js": "a778a313c09bca123d637258877065cc",
"main.dart.js_54.part.js": "88120349da42fbc83ac3be64bdee7a59",
"main.dart.js_44.part.js": "345a5d3d4ec9b3c1801c7b618e586732",
"main.dart.js_36.part.js": "dfcf1a127beb561bef7a664dd48b1eda",
"main.dart.js_26.part.js": "0cbf84ec0f4beff8ff329c6bcab8ba90",
"main.dart.js_113.part.js": "d3bc7421031202f9fd7d1312fa09437f",
"main.dart.js_103.part.js": "0b9df3d0f7367ad992be65139337bd89",
"main.dart.js_135.part.js": "ec34c2143d486aebc1cfd4eacb61c28a",
"main.dart.js_125.part.js": "ec1357ff62ffe538639cc781c37209e3",
"main.dart.js_72.part.js": "2beadd69af2f68fc3d22c2d4c0dcd4fe",
"main.dart.js_5.part.js": "55dd64f1e457772cab758abf0067768c",
"main.dart.js_62.part.js": "33fb99e7657f9f15b18a9a6c38faf0a2",
"main.dart.js_157.part.js": "67c7493f4b73ff62f79b9606af2f68a9",
"main.dart.js_147.part.js": "69ac88510bbbc9e812fe5ac2269fac0b",
"main.dart.js_96.part.js": "5f952d4585a8d5edd9bd834686219dde",
"main.dart.js_86.part.js": "283ee4f5ab35b6ecd25c416fe45e3bc7",
"main.dart.js_168.part.js": "b6ca3e0a162a2c00183162a059319482",
"main.dart.js_178.part.js": "4d5b5a92bda98587519ce2fcad4b4498",
"main.dart.js_83.part.js": "1d1f998cb13bdcf6fdd15c58193a2ab9",
"main.dart.js_93.part.js": "aa59a8dc8df0eb5690f48aad9b735ade",
"main.dart.js_58.part.js": "0a74b5c96ee18883940fb84945a620bc",
"main.dart.js_48.part.js": "386d271d1bfc4d91d03bed4da8838dd9",
"main.dart.js_15.part.js": "a289aabc73a7c345ac012734ba2ff3f7",
"main.dart.js_120.part.js": "40913b791104ecd3b5204d38e21be1ea",
"main.dart.js_130.part.js": "22dc935a1e6f4bcc9d5ab151001ca0b8",
"main.dart.js_189.part.js": "fdada334cd72493182acf9fbad900054",
"main.dart.js_142.part.js": "44352b9f146963c3c8128b4454e122d1",
"main.dart.js_152.part.js": "1b888912eca8a6dad6acc5b7085c8b08",
"main.dart.js_67.part.js": "bbeef304461e42b3431a8254e41df5af",
"main.dart.js_77.part.js": "38f90ad801dc1509f423731ccff38869",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_41.part.js": "362010a1843f37669498b53eea4ff837",
"main.dart.js_51.part.js": "b107d96dd91c18d84870e8e4cb8de80a",
"main.dart.js_164.part.js": "9e793eba0e406694b2a179719ffa237f",
"main.dart.js_174.part.js": "c7501bfd1253f09736b40fa8349ff975",
"main.dart.js_106.part.js": "64b60dce1513be594e65b0aaf2a2159b",
"main.dart.js_116.part.js": "2c481c940de21b4c9a87f3ee9abaf417",
"main.dart.js_23.part.js": "1ea4e799351c30a202f25fbd29372715",
"main.dart.js_33.part.js": "d5aae3364457c3d1463383b3415929fd",
"main.dart.js_9.part.js": "30b8b24b38ba0a25a4d8e7a9b693808d",
"main.dart.js_139.part.js": "b77e620add9cf985d70308bc2a60a5f1",
"main.dart.js_129.part.js": "df2773a5f0353e7185984f3a4f22177e",
"main.dart.js_180.part.js": "37a5e52b659dd71963365108b15b8216",
"main.dart.js_50.part.js": "4dafae0fbd425c8d608ed726d349dcf4",
"main.dart.js_40.part.js": "20e42edf56f1ab0ae89ce49a7a56eda1",
"main.dart.js_175.part.js": "e7db2fec87fdd449da5ec756d0ae6a77",
"main.dart.js_165.part.js": "01bd4b7964f50dcb3d72b6addb0f7323",
"main.dart.js_117.part.js": "c473b8120707cac543290d65168dd4bf",
"main.dart.js_107.part.js": "5d85f99ac28261d52aaacefec56fa7d2",
"main.dart.js_32.part.js": "5eb2ac78a35b5ac146d880913b5fec4b",
"main.dart.js_22.part.js": "b1a560c2631dea17b9d5f61a312fad6d",
"main.dart.js_8.part.js": "90456e0ac4aa142a93f41cf7b33a599d",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "4eaaa1839edfcb8c3eda8c549a43cc6b",
"main.dart.js_128.part.js": "e3a308659754eff5c161cc71a92a2db3",
"main.dart.js_138.part.js": "c6cc787ee305223632f49e80350f8289",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "577667d82b290bc4966850e89da783be",
"main.dart.js_82.part.js": "dbc8956b125c775a38aeb65b66b2b224",
"main.dart.js_49.part.js": "d136d8a1025a1b51699926cb74c9c0a5",
"main.dart.js_59.part.js": "2d1084c7227ee3937aface719bd45a39",
"main.dart.js_188.part.js": "019edd836670e30fc717aa83faafe566",
"main.dart.js_14.part.js": "240dcf573cef9f9d567fa6fd060c72b6",
"main.dart.js_131.part.js": "b4583517b08a7aafacf4d4728d523f7e",
"main.dart.js_121.part.js": "ecd793192ff9e02faa86305e4259a44d",
"main.dart.js_153.part.js": "613d1039b9a5235af861be4dc349a5a4",
"main.dart.js_143.part.js": "0f53e792123e6b6650437a776f992f1e",
"main.dart.js_76.part.js": "97441a094bb244ba3bad1506557279b1",
"main.dart.js_66.part.js": "159df1cc553ae50c98fa360d09424526",
"main.dart.js_1.part.js": "fb20a2a7d7ca4707917e950eb05b893a",
"main.dart.js_20.part.js": "a49a0c7f47706ef2d311341388238b72",
"main.dart.js_30.part.js": "e9088c67f5945a96f788cb345f4257b6",
"main.dart.js_105.part.js": "f186a68151ebe97ef0ef3338ccdd3f47",
"main.dart.js_115.part.js": "318317dc0f329943b6fcd715a1e0e5ce",
"main.dart.js_99.part.js": "c85157ea3726bda696d347cdab0171c2",
"main.dart.js_89.part.js": "36e1d530fddb63f66f115d21fe993d68",
"main.dart.js_167.part.js": "0163a9bc9864638f8eb6a233b33b0a0d",
"main.dart.js_177.part.js": "52152b5c5e17735af25612a60910cfa3",
"main.dart.js_42.part.js": "9f34f3db144c43f03242fbcad0638ca2",
"main.dart.js_52.part.js": "36695aae17164f34164651ae64ddac3b",
"main.dart.js_183.part.js": "90da8abb6899b8656c7ce32d791cbbef",
"main.dart.js_158.part.js": "154d4e349ca38547417a0d0d5618caae",
"main.dart.js_148.part.js": "e38e718a00180ec353462687f3bb2301",
"main.dart.js_39.part.js": "e10b326541e653a4bf42f81e1e494fb9",
"main.dart.js_29.part.js": "4941910caa9d32daee132244b2e4ebd0",
"main.dart.js_80.part.js": "f4ab82f358f95c7ddb9373afcf32600a",
"main.dart.js_90.part.js": "f4cddba4c81c7645948db2ab02327203",
"main.dart.js_64.part.js": "418fd7598eeb3be6c53f8424f6c8f3b1",
"main.dart.js_74.part.js": "25f7c46ed5245b8564c5651f9d3f432c",
"main.dart.js_141.part.js": "34f2cdf73734ca82b9cbe247b90d3ccb",
"main.dart.js_151.part.js": "68aa1a6dc3b310b20c2144787703d908",
"main.dart.js_123.part.js": "d72107d59787557f3306efb7b58009c6",
"main.dart.js_133.part.js": "bc053346c615351729e1b0bce5f916ad",
"main.dart.js_16.part.js": "b40c0fd569de7ee1710fa3bf3e84f63a",
"assets/AssetManifest.json": "75145026723eb9dd5be9629286d124d1",
"assets/NOTICES": "7c66f33488dd528453969ddca408efe8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "473dc1c32f0f1ee59ab596a7f5fa5357",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/libcli/images/mail.png": "c9172bdda51109489593c86da58f10e8",
"assets/packages/libcli/images/apple.png": "c82fbe8cbcecaa462da7bd30015b3565",
"assets/packages/libcli/images/facebookDark.png": "deface349f4fd6bece4039901e8c6c44",
"assets/packages/libcli/images/googleDark.png": "3a7df7781108618c2b3d05a5121abdfc",
"assets/packages/libcli/images/appleDark.png": "11238aa9e757b14b5e3460b467e6a2b4",
"assets/packages/libcli/images/google.png": "46039fa62c3167028c4fdb86816c3363",
"assets/packages/libcli/images/facebook.png": "f4dfe9871ac8cce8278c2aba8c897e1d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "57e60fdfe176d62d0b7b631aeb896779",
"assets/fonts/MaterialIcons-Regular.otf": "91665b0371d6bc0ed98129d7593c73fe",
"assets/assets/images/highlight-3.webp": "bc6b5c351ee2cf935014ee74c9cc2af2",
"assets/assets/images/google.webp": "5738e939e0f0cb94b49b7c1c7c3cf823",
"assets/assets/images/screenshot.webp": "beebee9a9b82c0a17b36fb2dfbdb19a9",
"assets/assets/images/store-microsoft.svg": "5ae87419c77bd36a7fba2318f34e2fe6",
"assets/assets/images/highlight-2.webp": "c273d9c661417500c80f3ec72b8b254d",
"assets/assets/images/desktop-2.webp": "ce0957835de77c516706280242400d3d",
"assets/assets/images/highlight-4.webp": "e903593c296bcb98a06db843e33ea126",
"assets/assets/images/icon.webp": "4e5aefd8d328bb0aed9cdfb8b8216395",
"assets/assets/images/store-apple.svg": "e564879549b892ede7fefac17768f2e1",
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
"main.dart.js_91.part.js": "c7e11b75b9eff2c6d594cd8b1de2de84",
"main.dart.js_81.part.js": "e3416a2a1733da2b2d1bcf02eccaaf68",
"main.dart.js_28.part.js": "dae1fdabe231261abaa5d8a415be6300",
"main.dart.js_38.part.js": "97d42c4946c8513080c7aede10cfd4b6",
"main.dart.js_75.part.js": "445f6e228618e1af04e1fb0b19b88339",
"main.dart.js_2.part.js": "bc762eeb6c787c30ae5ecbddb40fca42",
"main.dart.js_65.part.js": "0feced8881ee422dd8bf70f2e497bc80",
"main.dart.js_150.part.js": "ea1a21cf1f5231b1a88f42e9231b2b01",
"main.dart.js_140.part.js": "052c95b0c3ac7db581ace80dfa4da62c",
"main.dart.js_132.part.js": "047f5cd47d26e7bb6a82aa9153d0953a",
"main.dart.js_122.part.js": "ebd49d215c37602f4a99dd525a6e0ab1",
"main.dart.js_17.part.js": "0291cde6dcedf78602848da4418f263a",
"main.dart.js_88.part.js": "c8ecba43f0afb968a283ef89cc59b0fc",
"main.dart.js_98.part.js": "700da54f42d8a39238f3db4f8797e486",
"main.dart.js_31.part.js": "de529afb152e3e7eebc02bb948079c65",
"main.dart.js_21.part.js": "c96c0a02f549686b568017655aa5b617",
"main.dart.js_114.part.js": "1587f3009dfe237cccfe1aecdc8093ee",
"main.dart.js_104.part.js": "cabe2ce9d2a07e55914e0b8d8ce034fb",
"main.dart.js_176.part.js": "9a4dc89fb678953ea6dafb5a2092382e",
"main.dart.js_166.part.js": "923ddc2a5c1b81fa2747725a53fcd871",
"main.dart.js_53.part.js": "cf5314a68909ce9e32706ba55d02e661",
"main.dart.js_43.part.js": "403216d865be656a7c09c96e1825be13",
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
"main.dart.js_149.part.js": "0e2788c0e8c54aea92dbc769837c37c9",
"main.dart.js_159.part.js": "6ff56d7a1927018609b5a11b4709a440"};
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
