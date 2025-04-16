'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "585cdc2aa50eda5c470ba1a771245a72",
"flutter_bootstrap.js": "3ae8ce7b49c35cb40dacd1124610ab7b",
"main.dart.js_79.part.js": "0150792b12321a8519a57a240ab6e746",
"main.dart.js_69.part.js": "fedf87cbf6958ae35f22ca8ad512d6aa",
"main.dart.js_101.part.js": "f736ac4d8258fa503acfeecbcd84aaec",
"main.dart.js_111.part.js": "6d645e0ed6cd29958c8e8c5302c400ee",
"main.dart.js_24.part.js": "b6e24dd7b9e9ad8a9028db0f29c7fb30",
"main.dart.js_34.part.js": "177bde007fb30acd21685c0d60f13bc9",
"main.dart.js_46.part.js": "fdfa39bacb7c67a8aed91790cf34e7a5",
"main.dart.js_56.part.js": "64a007d1844c614c36db8be9091d709b",
"main.dart.js_163.part.js": "76b128727e9c25edf4f827d125133bf5",
"main.dart.js_173.part.js": "cb9d9f9bf2adb8aa5fdc297d042f7a31",
"main.dart.js_145.part.js": "55237c5172008b2ea568ae628555886b",
"main.dart.js_155.part.js": "c1abcbee541c468e8760c3ed73209756",
"version.json": "e108e1c11104e2ec7cf9868c8c17c462",
"main.dart.js_7.part.js": "6b1eded4afcf659ff846c789853253c3",
"main.dart.js_60.part.js": "86ac36cd8ae2b350ebfc152d7f774467",
"main.dart.js_70.part.js": "dc1c435bc3deed05af842390aa23717a",
"main.dart.js_12.part.js": "88ae717cf30780828f4adca311e7d9d6",
"main.dart.js_127.part.js": "37a10f4a9019e78c6087c266c2df659b",
"main.dart.js_137.part.js": "0c9e7df5d03c4e9fa8ca6ef941be2aa3",
"main.dart.js_84.part.js": "2ceb6d0657e18e418579a0828cb844ae",
"main.dart.js_94.part.js": "07093b289febfdcea84cc06f4c1b3ce7",
"main.dart.js_118.part.js": "f0377121e402ef6fcab18b8870837b30",
"main.dart.js_108.part.js": "d670a36dda6f65f3a8189e4aac5ddd03",
"main.dart.js_154.part.js": "9386c9b8ac4923edf31f5be06fa3d5ba",
"main.dart.js_144.part.js": "d091c4548c559ae39029c2fa3e7e1a88",
"main.dart.js_71.part.js": "f320c4a2b30893c37c7f1d3a5cc0b6d2",
"main.dart.js_61.part.js": "ddacac032da39dc4b3b2c08d9a866a1d",
"main.dart.js_6.part.js": "02b6032171a5095ec2f1471881f4f58c",
"index.html": "958769728841b59e5331ec1ac4b666b7",
"/": "958769728841b59e5331ec1ac4b666b7",
"main.dart.js_13.part.js": "373d8ddc671d0cabba10dd0edc1338df",
"main.dart.js_136.part.js": "8f02087857a95cb045946c4b543f3013",
"main.dart.js_126.part.js": "4d6ad6349cbc5b9b7742e95be542dc3c",
"privacy/index.html": "cdef54c1cd1d1c6f8a40228cd236ab70",
"main.dart.js_109.part.js": "e52b788c38cd124f5abca0ef889d7358",
"main.dart.js_119.part.js": "3193ced0c5eecd0e3bbd0f3b2aa316be",
"main.dart.js_95.part.js": "bf0bfc7ab285af6dfff939f7a8805d99",
"main.dart.js_85.part.js": "10387c39adddda1d904738a655d7fed5",
"main.dart.js_186.part.js": "7ad70567f46f2ad7f822d26e4826670b",
"test/1.mp4": "58f3a99b8821dce6ac732844f2bcbc2d",
"main.dart.js_68.part.js": "a7591d1a88d3c77139c9de79cfbaaa38",
"main.dart.js_78.part.js": "6e5f48bdf06f70a6dc5ac1440cff2fcb",
"main.dart.js_110.part.js": "4a1261dd2aa91243be857a04218b1d0f",
"main.dart.js_100.part.js": "e8190610f149d408cb983291b12372c3",
"main.dart.js_35.part.js": "1472c205121ab5d055f98629046cc725",
"main.dart.js_25.part.js": "b46612fac1742f71ed88feacec2bcfdd",
"main.dart.js_57.part.js": "592838a19a54352277c3cdcf456635e5",
"main.dart.js_47.part.js": "107bdb5c89e26f0940006cb6c96d4de7",
"main.dart.js_172.part.js": "dc1f19e0bd6ddec183e76403f4cffe4e",
"main.dart.js_162.part.js": "782850eece1a5199f79173154c8657c6",
"main.dart.js_124.part.js": "96542c5caaea9afbe58685dcf1a317a3",
"main.dart.js_134.part.js": "5a35873587588c6ae373173725a1572f",
"main.dart.js_11.part.js": "73188d90199734257de4a41ffd53a2f5",
"main.dart.js_63.part.js": "9f78e49288a523c0fe9b44654bbe9630",
"main.dart.js_4.part.js": "43a9bb87df3425c2d54ff8c8cf7f6308",
"main.dart.js_73.part.js": "cb8d9b16990ebed8fade71c3c6e54fee",
"main.dart.js_146.part.js": "a21ff8ad933f3a8e9d59617d970fa397",
"main.dart.js_156.part.js": "778399e6697fc6e92d1703c5a627f747",
"main.dart.js": "ce3412e8fa6d193484b80ced39ff0a7f",
"main.dart.js_87.part.js": "e9e5c8f11d8a52df3f5eb59b0ba2004c",
"main.dart.js_97.part.js": "4b347db0b0d3a63c4fb6027982a8f940",
"main.dart.js_179.part.js": "66b4a5a03858855597f58f148227aa4b",
"main.dart.js_169.part.js": "1e49c9fbb56aa5e70615e239e4fa2a70",
"main.dart.js_184.part.js": "fca720792dfb4a99997187624fe6be67",
"main.dart.js_160.part.js": "ba19819282ee48fa83b8bea2d5b8f400",
"main.dart.js_170.part.js": "f76c75ab1c3beaca2b3ecd0d99c85388",
"main.dart.js_45.part.js": "6e1efd82704d505943467baf3c1b64f2",
"main.dart.js_55.part.js": "bf90d78a7f7abc6d17c6151fee985adf",
"main.dart.js_27.part.js": "0392a6cf5a193f1533e5a85d4e1541a3",
"main.dart.js_37.part.js": "ef3d71797b735a5dc72792022fbe9a5d",
"main.dart.js_102.part.js": "0ea9bf138ee0f9739c9c5f91cec71806",
"terms/index.html": "7e0f5422c525b2ee7f5bf0d6e71f6439",
"main.dart.js_112.part.js": "4d32b61707457b49180afef0e31d1f37",
"main.dart.js_19.part.js": "97ba0177f40282e2d0dfe27bf3f214e2",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "64c81b15e5beb3a54f832d95a079950d",
"main.dart.js_171.part.js": "283d293a584e7c6269607d59b0c5f8fb",
"main.dart.js_161.part.js": "7abe08ddf85e87865aadd929e71a8d58",
"main.dart.js_54.part.js": "0e754fa755b4b92e71dd84a168e142b7",
"main.dart.js_44.part.js": "a299b00825992de0e7785a6a10432114",
"main.dart.js_36.part.js": "26583f949856337c192095f3f2fe6200",
"main.dart.js_26.part.js": "d39149b9f72e7685db3d32007f961f9c",
"main.dart.js_113.part.js": "d3053e5a95a93c7312eb8b13f7041e04",
"main.dart.js_103.part.js": "0b9df3d0f7367ad992be65139337bd89",
"main.dart.js_135.part.js": "10b169b3c144b6d91e01efea0370c93c",
"main.dart.js_125.part.js": "4ba478dbd345caed98d0a16984ff97ce",
"main.dart.js_72.part.js": "2beadd69af2f68fc3d22c2d4c0dcd4fe",
"main.dart.js_5.part.js": "55dd64f1e457772cab758abf0067768c",
"main.dart.js_62.part.js": "dddb1b6710c1e793ff542f5ec5ee9b50",
"main.dart.js_157.part.js": "9ae96232dec5c6a288f3a80d0d529110",
"main.dart.js_147.part.js": "2b24e46eaefc928745663617bd769d4b",
"main.dart.js_96.part.js": "5f952d4585a8d5edd9bd834686219dde",
"main.dart.js_86.part.js": "283ee4f5ab35b6ecd25c416fe45e3bc7",
"main.dart.js_168.part.js": "36435890c3279d6d8117d0c84c199beb",
"main.dart.js_178.part.js": "4d5b5a92bda98587519ce2fcad4b4498",
"main.dart.js_83.part.js": "02c480d2cfd54beebf651acd07ae6e34",
"main.dart.js_93.part.js": "baf31281affde81b4e956b4a1ffb80b6",
"main.dart.js_58.part.js": "0a74b5c96ee18883940fb84945a620bc",
"main.dart.js_48.part.js": "aecd5fb9dd72ac91a600cfd8ac0bcf9a",
"main.dart.js_15.part.js": "dddffb9abb1ead42a42c9654d26e5322",
"main.dart.js_120.part.js": "67ef51c97e2dd5a704961b7ca4a70703",
"main.dart.js_130.part.js": "02676a8fe971df175d64a5c48925a464",
"main.dart.js_189.part.js": "fdada334cd72493182acf9fbad900054",
"main.dart.js_142.part.js": "9ddbb666a5b51bc2ce606698a289dd26",
"main.dart.js_152.part.js": "ac0ec24b5adef408e85fbfb0731484d3",
"main.dart.js_67.part.js": "1df182b9cc793184402190166cf7272d",
"main.dart.js_77.part.js": "38f90ad801dc1509f423731ccff38869",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_41.part.js": "362010a1843f37669498b53eea4ff837",
"main.dart.js_51.part.js": "2aa5deea27c963498e4d5856bc99699b",
"main.dart.js_164.part.js": "985ce5ba74a643dc73d10a2e718aeeb4",
"main.dart.js_174.part.js": "c7501bfd1253f09736b40fa8349ff975",
"main.dart.js_106.part.js": "54d04b30bd8d4cc44dbf3e821767a6a9",
"main.dart.js_116.part.js": "4a5da4b9ba3d139eef3b775fc14e560b",
"main.dart.js_23.part.js": "1ea4e799351c30a202f25fbd29372715",
"main.dart.js_33.part.js": "d5aae3364457c3d1463383b3415929fd",
"main.dart.js_9.part.js": "c51bf288aa2aec5409d61b48158d852f",
"main.dart.js_139.part.js": "b77e620add9cf985d70308bc2a60a5f1",
"main.dart.js_129.part.js": "dbc7118af25b70d2c97a1fd02a7c56bb",
"main.dart.js_180.part.js": "37a5e52b659dd71963365108b15b8216",
"main.dart.js_50.part.js": "4dafae0fbd425c8d608ed726d349dcf4",
"main.dart.js_40.part.js": "00fe7082eebe0390f7c3c62b45a4eac2",
"main.dart.js_175.part.js": "e7db2fec87fdd449da5ec756d0ae6a77",
"main.dart.js_165.part.js": "905515cf513f310e559431bf55383457",
"main.dart.js_117.part.js": "fccdbc65065fdb845e972e0e389f469c",
"main.dart.js_107.part.js": "1e98da4236bcc0f99a8e4465161dd3c3",
"main.dart.js_32.part.js": "f64ca248bfa422e9c85352716d91fbac",
"main.dart.js_8.part.js": "90456e0ac4aa142a93f41cf7b33a599d",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "4eaaa1839edfcb8c3eda8c549a43cc6b",
"main.dart.js_128.part.js": "e3a308659754eff5c161cc71a92a2db3",
"main.dart.js_138.part.js": "963b9dc2efe943feb0695c075b8a0bc0",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "577667d82b290bc4966850e89da783be",
"main.dart.js_82.part.js": "dbc8956b125c775a38aeb65b66b2b224",
"main.dart.js_49.part.js": "e473cea6864ceae83277036f8e312620",
"main.dart.js_59.part.js": "6f44cd6ea695f89b8dea03c81f2a8386",
"main.dart.js_188.part.js": "019edd836670e30fc717aa83faafe566",
"main.dart.js_14.part.js": "b5c47218709132f6ab70cd0bdd22d17d",
"main.dart.js_131.part.js": "2c63899b10b441268e96da3298aa9291",
"main.dart.js_121.part.js": "9ec919c420876680c436b3caf2e93c19",
"main.dart.js_153.part.js": "5557b1a7b4ec3682fc6815e05ccf14de",
"main.dart.js_143.part.js": "0433ba06799c2a85fa1bef553a5c5395",
"main.dart.js_76.part.js": "d0765d24efa52e6951032786c40fa47c",
"main.dart.js_66.part.js": "a0b889e4f8b004964967d246e60df5d7",
"main.dart.js_1.part.js": "4bfc251f90af51e88119171fbaac7391",
"main.dart.js_20.part.js": "41fc1ee92a75883e0340f5a16f212f1d",
"main.dart.js_30.part.js": "f870550d6fb3b877f1f9337bca93cfbe",
"main.dart.js_105.part.js": "c9a1788140d7d758b7c8036f5619690d",
"main.dart.js_115.part.js": "bfdda15c07f9f03d69d52be027f96b05",
"main.dart.js_99.part.js": "a6c939782bf031e555c0c7d6bb30adf6",
"main.dart.js_89.part.js": "4eda43c181d92f9d39d9db15945b1114",
"main.dart.js_167.part.js": "b9548975e55b8f013018f21bfdd57958",
"main.dart.js_177.part.js": "52152b5c5e17735af25612a60910cfa3",
"main.dart.js_42.part.js": "dc57d5ae6246fed3963ffec375b6855a",
"main.dart.js_52.part.js": "36695aae17164f34164651ae64ddac3b",
"main.dart.js_183.part.js": "90da8abb6899b8656c7ce32d791cbbef",
"main.dart.js_158.part.js": "0ae697c864db663bfb7da668de5faf26",
"main.dart.js_148.part.js": "3b024dff8282e49cf13b0b7259d41b9d",
"main.dart.js_39.part.js": "e10b326541e653a4bf42f81e1e494fb9",
"main.dart.js_29.part.js": "4941910caa9d32daee132244b2e4ebd0",
"main.dart.js_80.part.js": "a35ad1374c8d5688a7bb13c2c8405faa",
"main.dart.js_90.part.js": "f4cddba4c81c7645948db2ab02327203",
"main.dart.js_64.part.js": "57a4cabd7dedaffe5969e857a77b3a9b",
"main.dart.js_74.part.js": "25f7c46ed5245b8564c5651f9d3f432c",
"main.dart.js_141.part.js": "2bf14d45de254ad17c44bfc0d5c7d313",
"main.dart.js_151.part.js": "68aa1a6dc3b310b20c2144787703d908",
"main.dart.js_123.part.js": "a738e6a9f5f4b8ae6040548f44a3a2f6",
"main.dart.js_133.part.js": "38c16004699652a13feaef657b85ecfd",
"main.dart.js_16.part.js": "b40c0fd569de7ee1710fa3bf3e84f63a",
"assets/AssetManifest.json": "e0f1e278b7a43e7527ea75ebf66508c9",
"assets/NOTICES": "7c66f33488dd528453969ddca408efe8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bd5a08b2e2df6350533f1953b0cef084",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/libcli/images/mail.png": "c9172bdda51109489593c86da58f10e8",
"assets/packages/libcli/images/apple.png": "c82fbe8cbcecaa462da7bd30015b3565",
"assets/packages/libcli/images/facebookDark.png": "deface349f4fd6bece4039901e8c6c44",
"assets/packages/libcli/images/googleDark.png": "3a7df7781108618c2b3d05a5121abdfc",
"assets/packages/libcli/images/appleDark.png": "11238aa9e757b14b5e3460b467e6a2b4",
"assets/packages/libcli/images/google.png": "46039fa62c3167028c4fdb86816c3363",
"assets/packages/libcli/images/facebook.png": "f4dfe9871ac8cce8278c2aba8c897e1d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "16fff7032ae6c44a1d88ac305b0c72bf",
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
"assets/assets/images/app-store.svg": "e564879549b892ede7fefac17768f2e1",
"assets/assets/images/highlight-1.webp": "3bada69f28c2efe71316fc6fdfa3b542",
"assets/assets/images/app.webp": "876b532240721c27424065335d8249c9",
"assets/assets/images/background.webp": "f8aa6a4e86dd6fa7b78fc854bebfe78c",
"assets/assets/images/apple.webp": "4aa34b98ca03fc9ae1601912311917ef",
"assets/assets/videos/screenshot.webm": "cd4b1b6447af95e9feddf881935055ee",
"assets/assets/videos/screenshot.mp4": "363dfda7cd037b81a92e472b64cd1539",
"assets/assets/icon/icon.png": "77bbbbcfb49bacf66d08d278b85bb43a",
"main.dart.js_91.part.js": "8dd173889771075495350e1af9fd478d",
"main.dart.js_81.part.js": "bbf4e0dff318a620af8b267a4df30ad3",
"main.dart.js_28.part.js": "ff958e0babc24e4cf4eafd8a958489f9",
"main.dart.js_38.part.js": "89b6f383a2b1e6f0a0b3ccef98d28b42",
"main.dart.js_75.part.js": "d53cfc163fd314461617f51cc41574a6",
"main.dart.js_2.part.js": "bc762eeb6c787c30ae5ecbddb40fca42",
"main.dart.js_65.part.js": "5d9773d72e30bd18c6b62b05d7cc1ebf",
"main.dart.js_150.part.js": "06ecddf196d30300258502978dfa2e6b",
"main.dart.js_140.part.js": "11851255422a24648995ebc9c9422a2a",
"main.dart.js_132.part.js": "e90222499553c186cce5809e15e9558d",
"main.dart.js_122.part.js": "1bc141145b4ac4178f1fc55b320fb536",
"main.dart.js_17.part.js": "9efb4213c7d45abc2eba2c44679f5146",
"main.dart.js_88.part.js": "2699c779e626e4a27bb48df2b818b57c",
"main.dart.js_98.part.js": "700da54f42d8a39238f3db4f8797e486",
"main.dart.js_31.part.js": "de529afb152e3e7eebc02bb948079c65",
"main.dart.js_21.part.js": "c96c0a02f549686b568017655aa5b617",
"main.dart.js_114.part.js": "1587f3009dfe237cccfe1aecdc8093ee",
"main.dart.js_104.part.js": "0fa000476f6eaa7e5494a21b188d231f",
"main.dart.js_176.part.js": "9a4dc89fb678953ea6dafb5a2092382e",
"main.dart.js_166.part.js": "5b57fbd1de4fecb4e07b121e9094da2d",
"main.dart.js_53.part.js": "aded772f8f9c5bf58e2eba590d1a6441",
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
"main.dart.js_149.part.js": "f2bf3bef5609446c47807c3efc154074",
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
