'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "585cdc2aa50eda5c470ba1a771245a72",
"flutter_bootstrap.js": "aa6d4fa59b9d60caf2b5e303aaf926d4",
"main.dart.js_79.part.js": "0150792b12321a8519a57a240ab6e746",
"main.dart.js_69.part.js": "fedf87cbf6958ae35f22ca8ad512d6aa",
"main.dart.js_101.part.js": "0aedc25cf7e45263f71788ee98fae652",
"main.dart.js_111.part.js": "6d645e0ed6cd29958c8e8c5302c400ee",
"main.dart.js_24.part.js": "b6e24dd7b9e9ad8a9028db0f29c7fb30",
"main.dart.js_34.part.js": "80d4f75928b9bea2b5acf482e6b70e8b",
"main.dart.js_46.part.js": "ffb7a2bbff79d6a8fa7037ccf4efa721",
"main.dart.js_56.part.js": "64a007d1844c614c36db8be9091d709b",
"main.dart.js_163.part.js": "975b28d82c534c58bc14b61ffebd91dc",
"main.dart.js_173.part.js": "cb9d9f9bf2adb8aa5fdc297d042f7a31",
"main.dart.js_145.part.js": "309bbbd4e79d46c55ff79fcdff963f73",
"main.dart.js_155.part.js": "609f9dba2252d2dff55180116527ffc9",
"version.json": "e108e1c11104e2ec7cf9868c8c17c462",
"main.dart.js_7.part.js": "9349d34904d14150710335d070a353d0",
"main.dart.js_60.part.js": "a98550942f9093f7815fc3c6f9372669",
"main.dart.js_70.part.js": "68f58b6c3460b089f940727cc2eb33ec",
"main.dart.js_12.part.js": "fa0abcc503703c8b7d9fbb989c12ea6d",
"main.dart.js_127.part.js": "a53e1fea5e2143c96f10550ecb6d16ba",
"main.dart.js_137.part.js": "eaa15516828129412de0bc78fb8280d5",
"main.dart.js_84.part.js": "299d6a484f07f96f81b9185b16adb921",
"main.dart.js_94.part.js": "07093b289febfdcea84cc06f4c1b3ce7",
"main.dart.js_118.part.js": "f0377121e402ef6fcab18b8870837b30",
"main.dart.js_108.part.js": "aacd9974f570f5ebb5850acb3ddb831b",
"main.dart.js_154.part.js": "9386c9b8ac4923edf31f5be06fa3d5ba",
"main.dart.js_144.part.js": "563d91551e5a83a1d445011641bb94bb",
"main.dart.js_71.part.js": "132d06eb1414f96e9a6f5dc9f0696f68",
"main.dart.js_61.part.js": "ddacac032da39dc4b3b2c08d9a866a1d",
"main.dart.js_6.part.js": "02b6032171a5095ec2f1471881f4f58c",
"index.html": "958769728841b59e5331ec1ac4b666b7",
"/": "958769728841b59e5331ec1ac4b666b7",
"main.dart.js_13.part.js": "373d8ddc671d0cabba10dd0edc1338df",
"main.dart.js_136.part.js": "78e7fe9d6e3d8ec8f2922b7d9b9f117d",
"main.dart.js_126.part.js": "3d3f5a9e468b9cd894f7c5318c693455",
"privacy/index.html": "cdef54c1cd1d1c6f8a40228cd236ab70",
"main.dart.js_109.part.js": "698d5893ec858f01e2ca169793f5ca81",
"main.dart.js_119.part.js": "39a971137a996de43028a9b7511f0764",
"main.dart.js_95.part.js": "2f1a8e445cb972121d08d00ca4454872",
"main.dart.js_85.part.js": "fab3a2e3bf79d15e72f54aca5c094476",
"main.dart.js_186.part.js": "7ad70567f46f2ad7f822d26e4826670b",
"test/1.mp4": "58f3a99b8821dce6ac732844f2bcbc2d",
"main.dart.js_68.part.js": "232ba55fd8f3748432b4492d0c4e5c45",
"main.dart.js_78.part.js": "799508ae2041181968dd1113a3ba51c0",
"main.dart.js_110.part.js": "4a1261dd2aa91243be857a04218b1d0f",
"main.dart.js_100.part.js": "e8190610f149d408cb983291b12372c3",
"main.dart.js_35.part.js": "1472c205121ab5d055f98629046cc725",
"main.dart.js_25.part.js": "b46612fac1742f71ed88feacec2bcfdd",
"main.dart.js_57.part.js": "8346125b81fdc239e112dcbc06b289f7",
"main.dart.js_47.part.js": "107bdb5c89e26f0940006cb6c96d4de7",
"main.dart.js_172.part.js": "dc1f19e0bd6ddec183e76403f4cffe4e",
"main.dart.js_162.part.js": "502913911f29f21c7c8091c93f69d805",
"main.dart.js_124.part.js": "96542c5caaea9afbe58685dcf1a317a3",
"main.dart.js_134.part.js": "20894bfa40882f172eb11df85a1e9d14",
"main.dart.js_11.part.js": "73188d90199734257de4a41ffd53a2f5",
"main.dart.js_63.part.js": "add0b9d182a04d3175ee18a252038143",
"main.dart.js_4.part.js": "0d40ed83bc0bc1370888fc15192eae31",
"main.dart.js_73.part.js": "ee36f85cfeee2838459391ca2d977cd5",
"main.dart.js_146.part.js": "c81ff822e64e8ef11ff014b3855cf7b3",
"main.dart.js_156.part.js": "f929063155af224273ec48f08d5a6efa",
"main.dart.js": "28818447c7c675eaae5b8e02053c56fd",
"main.dart.js_87.part.js": "72bc84d9408c7ffc7a17ad803dbb228d",
"main.dart.js_97.part.js": "3a76cf11d189dc32111aa4b21685fd00",
"main.dart.js_179.part.js": "66b4a5a03858855597f58f148227aa4b",
"main.dart.js_169.part.js": "6c6a73d153a29146c6d57323bfd0a9c2",
"main.dart.js_184.part.js": "fca720792dfb4a99997187624fe6be67",
"main.dart.js_160.part.js": "c0e6d349f2349def888c30e24f49a21c",
"main.dart.js_170.part.js": "cd96244dee27ebfd042c7a1a11901105",
"main.dart.js_45.part.js": "48cf801a8753f6da31df082214c6bd91",
"main.dart.js_55.part.js": "bf90d78a7f7abc6d17c6151fee985adf",
"main.dart.js_27.part.js": "0392a6cf5a193f1533e5a85d4e1541a3",
"main.dart.js_37.part.js": "ef3d71797b735a5dc72792022fbe9a5d",
"main.dart.js_102.part.js": "5d9c098e4f1caf24737e03ae946db4c8",
"terms/index.html": "7e0f5422c525b2ee7f5bf0d6e71f6439",
"main.dart.js_112.part.js": "ab3f762bc20c61bb0c1773ebc0e5086d",
"main.dart.js_19.part.js": "97ba0177f40282e2d0dfe27bf3f214e2",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_185.part.js": "64c81b15e5beb3a54f832d95a079950d",
"main.dart.js_171.part.js": "db992a730cbd5bd0a08d4b6f0430de75",
"main.dart.js_161.part.js": "61de62302adba25df91230b88ca6ff85",
"main.dart.js_54.part.js": "5f0cf3327f5b1b434b149c0c8c35489b",
"main.dart.js_44.part.js": "558836b3477e7bce30f8a39b5d34b918",
"main.dart.js_36.part.js": "3d5f71e1cd1617eec1b1c84660670c43",
"main.dart.js_26.part.js": "515d58f7eaaa1e2f3db6bcb853093637",
"main.dart.js_113.part.js": "422922c43d1ab469b55727740b356b2d",
"main.dart.js_103.part.js": "0b9df3d0f7367ad992be65139337bd89",
"main.dart.js_135.part.js": "13053e812f71b7620e87fe9a63d930a2",
"main.dart.js_125.part.js": "1789c3967571e4d3b0e349a6205b1b73",
"main.dart.js_72.part.js": "2beadd69af2f68fc3d22c2d4c0dcd4fe",
"main.dart.js_5.part.js": "55dd64f1e457772cab758abf0067768c",
"main.dart.js_62.part.js": "47f74c384b9673b5d558209ccb1a1ab4",
"main.dart.js_157.part.js": "1357f661ee6b9cb643d5d10dbfa771c1",
"main.dart.js_147.part.js": "59632e7d6c43c939e43f12857850fe4a",
"main.dart.js_96.part.js": "5f952d4585a8d5edd9bd834686219dde",
"main.dart.js_86.part.js": "283ee4f5ab35b6ecd25c416fe45e3bc7",
"main.dart.js_168.part.js": "8457e00a5fe05cbc3e8625f26bb40804",
"main.dart.js_178.part.js": "4d5b5a92bda98587519ce2fcad4b4498",
"main.dart.js_83.part.js": "e146b41704e2309ac0554273228b85a9",
"main.dart.js_93.part.js": "d29ac0b73a68404b5fb5b1191e5593db",
"main.dart.js_58.part.js": "0a74b5c96ee18883940fb84945a620bc",
"main.dart.js_48.part.js": "3e9dfbc0d82864888f4ec64c7944e134",
"main.dart.js_15.part.js": "f038237ae31cc5a6e239e8cb6d808a25",
"main.dart.js_120.part.js": "596b949d479e36cfd4bc540a31404926",
"main.dart.js_130.part.js": "cf656450fb609892125c7c501db4677d",
"main.dart.js_189.part.js": "fdada334cd72493182acf9fbad900054",
"main.dart.js_142.part.js": "b45c83763244b8ee58440cda8f98f5e6",
"main.dart.js_152.part.js": "bae21a37944c0028f59c0238101d2623",
"main.dart.js_67.part.js": "9d87374944654dcef85ba08636b4a05e",
"main.dart.js_77.part.js": "38f90ad801dc1509f423731ccff38869",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_41.part.js": "362010a1843f37669498b53eea4ff837",
"main.dart.js_51.part.js": "521c8f43e76823f80dbe3bf6d26c1dc4",
"main.dart.js_164.part.js": "a9b565cda886ac89806b226a1ca4dbe0",
"main.dart.js_174.part.js": "c7501bfd1253f09736b40fa8349ff975",
"main.dart.js_106.part.js": "01116a95b65866b164e1714d4c22b6ca",
"main.dart.js_116.part.js": "6daf3d980f065982f3277bcf82adaf76",
"main.dart.js_23.part.js": "1ea4e799351c30a202f25fbd29372715",
"main.dart.js_33.part.js": "d5aae3364457c3d1463383b3415929fd",
"main.dart.js_9.part.js": "f9ba70a6da5ddec0da4fdf7dcf977a3e",
"main.dart.js_139.part.js": "b77e620add9cf985d70308bc2a60a5f1",
"main.dart.js_129.part.js": "dafb034017832d7d116dae7407376714",
"main.dart.js_180.part.js": "37a5e52b659dd71963365108b15b8216",
"main.dart.js_50.part.js": "4dafae0fbd425c8d608ed726d349dcf4",
"main.dart.js_40.part.js": "8a553678c06a4cfecb253091d71d6866",
"main.dart.js_175.part.js": "e7db2fec87fdd449da5ec756d0ae6a77",
"main.dart.js_165.part.js": "6fb168acdfa7c1ab5a487a045436c37a",
"CONTRIBUTING.md": "008372a06bbe8972dfc9aed157c5332f",
"main.dart.js_117.part.js": "dd0a1dbbf0c8845d89b7add99f475b46",
"main.dart.js_107.part.js": "e4ca414a88264f4a5bcba5fd5172a1b6",
"main.dart.js_32.part.js": "7b0274209e9f61e03ce17bf4cbb6f509",
"main.dart.js_22.part.js": "78496f47f26202dee05b4e1235d260e4",
"main.dart.js_8.part.js": "90456e0ac4aa142a93f41cf7b33a599d",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "4eaaa1839edfcb8c3eda8c549a43cc6b",
"main.dart.js_128.part.js": "e3a308659754eff5c161cc71a92a2db3",
"main.dart.js_138.part.js": "1ac24321427b0355c950d25a724d8670",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "577667d82b290bc4966850e89da783be",
"main.dart.js_82.part.js": "dbc8956b125c775a38aeb65b66b2b224",
"main.dart.js_49.part.js": "94abcd601099cf3b06f6deeb5b4b0bb8",
"main.dart.js_59.part.js": "9dc7789ffe0e722cde4214c9bd6e6474",
"main.dart.js_188.part.js": "019edd836670e30fc717aa83faafe566",
"main.dart.js_14.part.js": "be4380aade9d34a633952c31fd30e88a",
"main.dart.js_131.part.js": "ec38badbd2b913ee69f75266d112c47e",
"main.dart.js_121.part.js": "887d02aa5ec5e95c74635be4b4fc8c6e",
"main.dart.js_153.part.js": "b7cc60e4b3ced80228d4381144ba5077",
"main.dart.js_143.part.js": "5286f60564785c7dfc561bc7fbee79ef",
"main.dart.js_76.part.js": "48be514cd871793dd58e95ab37bfeff9",
"main.dart.js_66.part.js": "b478b739d07d03ee81292c8111055b1c",
"main.dart.js_1.part.js": "1c441aa042c432fce5bed3a52b71e09b",
"main.dart.js_20.part.js": "4473a796dd69e57021f6b00a26ae0402",
"main.dart.js_30.part.js": "8abf4689d4f6519d7d1ece09780bedaf",
"main.dart.js_105.part.js": "2159e860867f14122b5e0a1249cb6b8c",
"main.dart.js_115.part.js": "9600e59b2f97e8da4eb42f8a6692c2ed",
"main.dart.js_99.part.js": "56d7e48433cdaaa1732d149382a63556",
"main.dart.js_89.part.js": "1eef0bd4c33858fe0d58b14f4d95ade1",
"main.dart.js_167.part.js": "7befcd71a2e1b9eb6f4ddcc1943a4cc5",
"main.dart.js_177.part.js": "52152b5c5e17735af25612a60910cfa3",
"main.dart.js_42.part.js": "a7a35a5a8978b3a7ce4173c71c70685b",
"main.dart.js_52.part.js": "36695aae17164f34164651ae64ddac3b",
"main.dart.js_183.part.js": "90da8abb6899b8656c7ce32d791cbbef",
"main.dart.js_158.part.js": "7163ee9a2236bfc1f1a9fe8d5b195c9c",
"main.dart.js_148.part.js": "6fb824a8505c2a17f25999627dc56edb",
"main.dart.js_39.part.js": "e10b326541e653a4bf42f81e1e494fb9",
"main.dart.js_29.part.js": "4941910caa9d32daee132244b2e4ebd0",
"main.dart.js_80.part.js": "774659321ed8bf89c2cc8582cbc07c96",
"main.dart.js_90.part.js": "f4cddba4c81c7645948db2ab02327203",
"main.dart.js_64.part.js": "fb2e6634a5b8fde76a3bed3584946a2d",
"main.dart.js_74.part.js": "25f7c46ed5245b8564c5651f9d3f432c",
"main.dart.js_141.part.js": "a043fd17f534e8f2c6068814ffee9037",
"main.dart.js_151.part.js": "68aa1a6dc3b310b20c2144787703d908",
"main.dart.js_123.part.js": "cd9039f0d0facf59f17273580d67c6b8",
"main.dart.js_133.part.js": "c718cf77fae16938408fbefc70541682",
"main.dart.js_16.part.js": "b40c0fd569de7ee1710fa3bf3e84f63a",
"assets/AssetManifest.json": "75145026723eb9dd5be9629286d124d1",
"assets/NOTICES": "9075e0f940f0dc4bfde2d24d03befb53",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "473dc1c32f0f1ee59ab596a7f5fa5357",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
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
"main.dart.js_91.part.js": "b3c0e2973e4611ba9f6a184549096139",
"main.dart.js_81.part.js": "3b2dc06274ebaaafdd7fe8ec2fe9a192",
"main.dart.js_28.part.js": "7e42fa463b6d3214ae0afebcecda7e34",
"main.dart.js_38.part.js": "3a135dc47e82b3a13607d016adcb8290",
"main.dart.js_75.part.js": "89ddebcdfeef82424e6bb93b5b0086fb",
"main.dart.js_2.part.js": "0c41751fc509cd05ddca5352cb70cc34",
"main.dart.js_65.part.js": "5ab812eb6a1ac5b49046ac02d0fc1ed6",
"main.dart.js_150.part.js": "7fddf0c5d03d31367fd2e11390b6367d",
"main.dart.js_140.part.js": "708b9f06ae3ec0839f589edd3de215ff",
"main.dart.js_132.part.js": "caa2756bc987fe033cf07a25b97af63d",
"main.dart.js_122.part.js": "1740615953c287dfcf98e98822ecb87b",
"main.dart.js_17.part.js": "2178a27a9b86736c83939426034ca5ae",
"main.dart.js_88.part.js": "3df73b23c33078add7441b23b705cb7a",
"main.dart.js_98.part.js": "700da54f42d8a39238f3db4f8797e486",
"main.dart.js_31.part.js": "de529afb152e3e7eebc02bb948079c65",
"main.dart.js_21.part.js": "c96c0a02f549686b568017655aa5b617",
"main.dart.js_114.part.js": "1587f3009dfe237cccfe1aecdc8093ee",
"main.dart.js_104.part.js": "e67047024108d62f8636a1bb11a93b6b",
"main.dart.js_176.part.js": "9a4dc89fb678953ea6dafb5a2092382e",
"main.dart.js_166.part.js": "5c697b52c08a3fdd3eeadaf0d56777a4",
"main.dart.js_53.part.js": "89fd4bc441ab1bd5e4e0d205bcf06977",
"main.dart.js_43.part.js": "403216d865be656a7c09c96e1825be13",
"main.dart.js_182.part.js": "df6997d89e604b4c0e1747852a4ab00e",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"main.dart.js_149.part.js": "e3ab50a1ceea01b448122ea4068d95a2",
"main.dart.js_159.part.js": "eb70f15d24256718ec7ec3544b165e40"};
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
