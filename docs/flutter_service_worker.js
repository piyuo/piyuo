'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "585cdc2aa50eda5c470ba1a771245a72",
"flutter_bootstrap.js": "2fb9ddd46fcdc0a2c7cdcc9998fa06ed",
"main.dart.js_79.part.js": "0150792b12321a8519a57a240ab6e746",
"main.dart.js_69.part.js": "eb9d836db8ed2440930c42acad75bb84",
"main.dart.js_101.part.js": "f736ac4d8258fa503acfeecbcd84aaec",
"main.dart.js_111.part.js": "51a90062f7362f2ba384b4a1db2a3f06",
"main.dart.js_24.part.js": "b6e24dd7b9e9ad8a9028db0f29c7fb30",
"main.dart.js_34.part.js": "177bde007fb30acd21685c0d60f13bc9",
"main.dart.js_46.part.js": "d79d93233d08ea6f0d794fa06442c21e",
"main.dart.js_56.part.js": "64a007d1844c614c36db8be9091d709b",
"main.dart.js_163.part.js": "380101fa692208711b94ce7cdea55ff9",
"main.dart.js_173.part.js": "7285f39051e0d05c52f8c40c72a3b692",
"main.dart.js_145.part.js": "68eaf86b0d77bfd5aacf124f8b28b8b7",
"main.dart.js_155.part.js": "af9328f8a33162448edf0163aee662b4",
"version.json": "764fbd1bb09fdd4946aa65e35a8fa946",
"main.dart.js_7.part.js": "30c082d0dd177e46245d331b7eb6b7d4",
"main.dart.js_60.part.js": "86ac36cd8ae2b350ebfc152d7f774467",
"main.dart.js_70.part.js": "033e5e1ac5f483fa9aa85bdf1fa7ea93",
"main.dart.js_12.part.js": "88ae717cf30780828f4adca311e7d9d6",
"main.dart.js_127.part.js": "3f00602e8b1078e95d309ccd2996d78f",
"main.dart.js_137.part.js": "21b4fed938a4c892056a648365b875b3",
"main.dart.js_84.part.js": "2ceb6d0657e18e418579a0828cb844ae",
"main.dart.js_94.part.js": "ad4284c27bb8c0be6b85401021a44d43",
"main.dart.js_118.part.js": "68356afeb11165dc009ec9ebbae325ff",
"main.dart.js_108.part.js": "d670a36dda6f65f3a8189e4aac5ddd03",
"main.dart.js_154.part.js": "ffa603d3498855004a747b03de3d6338",
"main.dart.js_144.part.js": "d091c4548c559ae39029c2fa3e7e1a88",
"main.dart.js_71.part.js": "ebd7dc47c2f5dd83f3e5b523ff0788a2",
"main.dart.js_61.part.js": "ddacac032da39dc4b3b2c08d9a866a1d",
"main.dart.js_6.part.js": "02b6032171a5095ec2f1471881f4f58c",
"index.html": "958769728841b59e5331ec1ac4b666b7",
"/": "958769728841b59e5331ec1ac4b666b7",
"main.dart.js_13.part.js": "fde2d92645fa10b1b76cefe3d49e376b",
"main.dart.js_136.part.js": "8e8b12d9301e58675ce3421b07db4f13",
"main.dart.js_126.part.js": "002fc8cb23d4b3f0595b33aeaf74e119",
"privacy/index.html": "cdef54c1cd1d1c6f8a40228cd236ab70",
"main.dart.js_109.part.js": "b84153d8783e17fbeff4d364b41fd71d",
"main.dart.js_119.part.js": "3193ced0c5eecd0e3bbd0f3b2aa316be",
"main.dart.js_95.part.js": "bf0bfc7ab285af6dfff939f7a8805d99",
"main.dart.js_85.part.js": "22202e35db1bdec0b89a43b7750214b5",
"main.dart.js_186.part.js": "7ad70567f46f2ad7f822d26e4826670b",
"test/1.mp4": "58f3a99b8821dce6ac732844f2bcbc2d",
"main.dart.js_68.part.js": "b941e52e420bab07dfc1d53e7e50f694",
"main.dart.js_78.part.js": "6da984829fe3c8a83ff5ef98eda8b8ee",
"main.dart.js_110.part.js": "5ca0d339b685b9bd1de429557fad2612",
"main.dart.js_100.part.js": "2190a9d446c4b5038076783d116a8c56",
"main.dart.js_35.part.js": "40012d5af1fb9abce6aadf771f2ff486",
"main.dart.js_25.part.js": "8550df6847482b863a42317cdb72991a",
"main.dart.js_57.part.js": "e46a1208b14feb57583855c5929ccaf6",
"main.dart.js_47.part.js": "107bdb5c89e26f0940006cb6c96d4de7",
"main.dart.js_172.part.js": "15bb901fec698d62892bd679e8ac58e4",
"main.dart.js_162.part.js": "70ed11af612f80c711d6b4316b07868a",
"main.dart.js_124.part.js": "9b7e1633c5e3c3f3a1efc14d18ef1013",
"main.dart.js_134.part.js": "126c7a97beedcd50a856419cb24257fb",
"main.dart.js_11.part.js": "73188d90199734257de4a41ffd53a2f5",
"main.dart.js_63.part.js": "9f78e49288a523c0fe9b44654bbe9630",
"main.dart.js_4.part.js": "39e018d2ef0d8967274c67be81538872",
"main.dart.js_73.part.js": "6490096ad3f3240ae4adb9164d93480a",
"main.dart.js_146.part.js": "8eb5aed144aa5d04ebdb90c70392cf8d",
"main.dart.js_156.part.js": "778399e6697fc6e92d1703c5a627f747",
"main.dart.js": "79d0d006cff72892f78a5080901a43da",
"main.dart.js_87.part.js": "e9e5c8f11d8a52df3f5eb59b0ba2004c",
"main.dart.js_97.part.js": "4b347db0b0d3a63c4fb6027982a8f940",
"main.dart.js_179.part.js": "66b4a5a03858855597f58f148227aa4b",
"main.dart.js_169.part.js": "5e551d91fee96f2be4a58874200c8505",
"main.dart.js_184.part.js": "fca720792dfb4a99997187624fe6be67",
"main.dart.js_160.part.js": "ca3086a7cc69dab046bf6804ff220124",
"main.dart.js_170.part.js": "79c1b37e7ddfc227f9bdd60eb6117314",
"main.dart.js_45.part.js": "6e1efd82704d505943467baf3c1b64f2",
"main.dart.js_55.part.js": "764c441d270fb647a40733c8cb0eb365",
"main.dart.js_27.part.js": "0392a6cf5a193f1533e5a85d4e1541a3",
"main.dart.js_37.part.js": "c5e4e795fa3a8b01885b23510d84a3c8",
"main.dart.js_102.part.js": "73ce26eab3f6e311c227b7fd20db9a68",
"terms/index.html": "7e0f5422c525b2ee7f5bf0d6e71f6439",
"main.dart.js_112.part.js": "97494d95e67dec2bf4c6d083fcc296ae",
"main.dart.js_19.part.js": "6f1f9c03f9fb16479f9984a8a94cb130",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "64c81b15e5beb3a54f832d95a079950d",
"main.dart.js_171.part.js": "59a5a0a6dd5fcb0faffe7f9303d6a544",
"main.dart.js_161.part.js": "b7254fcefa01d073df28eed32760519a",
"main.dart.js_54.part.js": "0e754fa755b4b92e71dd84a168e142b7",
"main.dart.js_44.part.js": "a299b00825992de0e7785a6a10432114",
"main.dart.js_36.part.js": "26583f949856337c192095f3f2fe6200",
"main.dart.js_26.part.js": "d39149b9f72e7685db3d32007f961f9c",
"main.dart.js_113.part.js": "742404466bba28996648dce5b8ff02c5",
"main.dart.js_103.part.js": "0b9df3d0f7367ad992be65139337bd89",
"main.dart.js_135.part.js": "5cb5e888efad2987255818c780356594",
"main.dart.js_125.part.js": "76cd5bb920f152601360859fa27bcb72",
"main.dart.js_72.part.js": "acd56e9a45b29c64b62537767b48095b",
"main.dart.js_5.part.js": "55dd64f1e457772cab758abf0067768c",
"main.dart.js_62.part.js": "8075b0a1f103e96801dc93ee76b6a804",
"main.dart.js_157.part.js": "2a87dd4f0f17ffeb4ac863a2e0c5a346",
"main.dart.js_147.part.js": "b8870bed90b8b5472959507995a57f41",
"main.dart.js_96.part.js": "bf0301bd91de8f22c0bf538bc6aa92ef",
"main.dart.js_86.part.js": "860b895ed4d6ca735c36d017be5cab48",
"main.dart.js_168.part.js": "24732fbdddf9eac13af3e99a91460172",
"main.dart.js_178.part.js": "4d5b5a92bda98587519ce2fcad4b4498",
"main.dart.js_83.part.js": "2034034b3e3cf95f8393a88059600f28",
"main.dart.js_93.part.js": "108c7e6389b53f57042a80d74f534a65",
"main.dart.js_58.part.js": "dc44833c52d1f985a01b2f284d9fc5a2",
"main.dart.js_48.part.js": "c8debd65306276669380ae0e74c82a8f",
"main.dart.js_15.part.js": "dddffb9abb1ead42a42c9654d26e5322",
"main.dart.js_120.part.js": "4457092e585a75d555b2063026bf95ee",
"main.dart.js_130.part.js": "9c56698b03dd8793da6070b31ca65c80",
"main.dart.js_189.part.js": "fdada334cd72493182acf9fbad900054",
"main.dart.js_142.part.js": "8c65ba9ad54d2709c952efac66fd1044",
"main.dart.js_152.part.js": "997d8612299df934ca9edad4ed11c669",
"main.dart.js_67.part.js": "dc928a5f8892e9d0879ee63f93932c56",
"main.dart.js_77.part.js": "38f90ad801dc1509f423731ccff38869",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_41.part.js": "9f97c0910e840d3b447039d875b35ca0",
"main.dart.js_51.part.js": "2aa5deea27c963498e4d5856bc99699b",
"main.dart.js_164.part.js": "01d5846ef14b563885b41a1b223b75a8",
"main.dart.js_174.part.js": "c19329ba260bce3ac2da5de50a84d4fc",
"main.dart.js_106.part.js": "02f93b7aa5f23c36d42883ca4cb679a8",
"main.dart.js_116.part.js": "4a5da4b9ba3d139eef3b775fc14e560b",
"main.dart.js_23.part.js": "70712b7d286fed64069fd008006ed2d2",
"main.dart.js_33.part.js": "01bae6b25389e14f52f1fe91d5222e0f",
"main.dart.js_9.part.js": "0fe9200e3160301263a289a7a83699d3",
"main.dart.js_139.part.js": "47c939817326f7c6e9ac195097c7f5bc",
"main.dart.js_129.part.js": "dbc7118af25b70d2c97a1fd02a7c56bb",
"main.dart.js_180.part.js": "37a5e52b659dd71963365108b15b8216",
"main.dart.js_50.part.js": "238a98eae9373eeb63d0806d463553a3",
"main.dart.js_40.part.js": "00fe7082eebe0390f7c3c62b45a4eac2",
"main.dart.js_175.part.js": "e7dafe441f41cc5b4d7405841dc19efa",
"main.dart.js_165.part.js": "e9f089c5b8ade1e7a057b6d0423b7e6e",
"main.dart.js_117.part.js": "79937226aae2f6ce5e5e1a15f933b007",
"main.dart.js_107.part.js": "ae95c6768f9ac4ece6b9faf2a6744eb2",
"main.dart.js_32.part.js": "f64ca248bfa422e9c85352716d91fbac",
"main.dart.js_8.part.js": "90456e0ac4aa142a93f41cf7b33a599d",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "4eaaa1839edfcb8c3eda8c549a43cc6b",
"main.dart.js_128.part.js": "48488e7feb01239356c43859e6dc265c",
"main.dart.js_138.part.js": "89cdb67627f43cf32e517876214ed41c",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "39a3a8fed2b3f9c0e9ca298a4d1f7416",
"main.dart.js_82.part.js": "dbc8956b125c775a38aeb65b66b2b224",
"main.dart.js_49.part.js": "73fe37210e84740d579ef73e69f55f16",
"main.dart.js_59.part.js": "6f44cd6ea695f89b8dea03c81f2a8386",
"main.dart.js_188.part.js": "019edd836670e30fc717aa83faafe566",
"main.dart.js_14.part.js": "b5c47218709132f6ab70cd0bdd22d17d",
"main.dart.js_131.part.js": "af657d67110a8c2713c625efcceb3de3",
"main.dart.js_121.part.js": "7d89a64d934d28217c86dc6a7b657350",
"main.dart.js_153.part.js": "7c475d78a4c778fd370adb90f5037a3a",
"main.dart.js_143.part.js": "18c1720e807d146d39757783170889c9",
"main.dart.js_76.part.js": "672bf76744ddb356cc8c18598e90e21b",
"main.dart.js_66.part.js": "a0b889e4f8b004964967d246e60df5d7",
"main.dart.js_1.part.js": "fc4934fbc306da3bed6395d40a610bff",
"main.dart.js_20.part.js": "41fc1ee92a75883e0340f5a16f212f1d",
"main.dart.js_30.part.js": "f870550d6fb3b877f1f9337bca93cfbe",
"main.dart.js_105.part.js": "c9a1788140d7d758b7c8036f5619690d",
"main.dart.js_115.part.js": "bfdda15c07f9f03d69d52be027f96b05",
"main.dart.js_99.part.js": "a6c939782bf031e555c0c7d6bb30adf6",
"main.dart.js_89.part.js": "4ec956520d0507c9b7855b20b5ea7e48",
"main.dart.js_167.part.js": "0611d3618dfb8664e43711feafd0e49e",
"main.dart.js_177.part.js": "52152b5c5e17735af25612a60910cfa3",
"main.dart.js_42.part.js": "dc57d5ae6246fed3963ffec375b6855a",
"main.dart.js_52.part.js": "512ab88eb9ed2fd29b781ee43254c717",
"main.dart.js_183.part.js": "90da8abb6899b8656c7ce32d791cbbef",
"main.dart.js_158.part.js": "14f3928edcbdae2a9d09cc129a525c7b",
"main.dart.js_148.part.js": "a7477150107d492d21db1cc47d57e406",
"main.dart.js_39.part.js": "ee61ecf7e07acc3fe9270f507fbb8898",
"main.dart.js_29.part.js": "12591a72779e9b6948a3a819b9ae5a8d",
"main.dart.js_80.part.js": "8587bcc3793f0fb33891aaa78fbc15b9",
"main.dart.js_90.part.js": "5da010b241c3243d8d1681c1439bec3a",
"main.dart.js_64.part.js": "5b7620d8bc9989ab9223d0ec41ccd5ad",
"main.dart.js_74.part.js": "25f7c46ed5245b8564c5651f9d3f432c",
"main.dart.js_141.part.js": "f85864f40c82d51b00eac0f8dce2de08",
"main.dart.js_151.part.js": "ad81cb97fdad6c002d0eac8e61780052",
"main.dart.js_123.part.js": "a738e6a9f5f4b8ae6040548f44a3a2f6",
"main.dart.js_133.part.js": "38c16004699652a13feaef657b85ecfd",
"main.dart.js_16.part.js": "c94faeb52bfd1910d20a29051b2b9106",
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
"main.dart.js_81.part.js": "157654c43f537c1e5f25e592197c2d7c",
"main.dart.js_28.part.js": "ff958e0babc24e4cf4eafd8a958489f9",
"main.dart.js_38.part.js": "89b6f383a2b1e6f0a0b3ccef98d28b42",
"main.dart.js_75.part.js": "9df5ab68aefcded1064600d78c3e4364",
"main.dart.js_2.part.js": "82e74a0077314324e46256fa5328edc9",
"main.dart.js_65.part.js": "77670cbad0196130419bbe48ddbdb2dd",
"main.dart.js_150.part.js": "818d213f89940560cd9213b81db715e6",
"main.dart.js_140.part.js": "d639fba3a41634e8e9b88d5aaef30966",
"main.dart.js_132.part.js": "38244886f56373001af38aa537db074b",
"main.dart.js_122.part.js": "845b4dfee9eb5a90c5713983270821c2",
"main.dart.js_17.part.js": "b8cab29c5561dfb09db9b3b1b353945a",
"main.dart.js_88.part.js": "740c397cc80fea9eaca581761793d89c",
"main.dart.js_98.part.js": "b756fd8b7b2442d9a2d99b3ce067a5b2",
"main.dart.js_31.part.js": "0fcd9351191d7c5449fe1f7ecdbd9013",
"main.dart.js_21.part.js": "c96c0a02f549686b568017655aa5b617",
"main.dart.js_114.part.js": "4e02513e0a83bf6fe791453d37bf6846",
"main.dart.js_104.part.js": "d61f4c797e8ecb290bc57739516e6c7c",
"main.dart.js_176.part.js": "4315078ca72984015b67cc063b3772c6",
"main.dart.js_166.part.js": "fc7d4deb6f977f9e1217f66eb5ff7581",
"main.dart.js_53.part.js": "317bf77111e1506c6ce25ac0049484c7",
"main.dart.js_43.part.js": "177b1bda00a2b8c1a14b9f10e5a00835",
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
"main.dart.js_149.part.js": "024985b0b08320d860feb34c1a136302",
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
