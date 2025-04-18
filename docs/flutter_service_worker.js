'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "585cdc2aa50eda5c470ba1a771245a72",
"flutter_bootstrap.js": "30369cf7df3a05199bd5e08463e382ad",
"main.dart.js_79.part.js": "0150792b12321a8519a57a240ab6e746",
"main.dart.js_69.part.js": "fedf87cbf6958ae35f22ca8ad512d6aa",
"main.dart.js_101.part.js": "184125aae1f4b38ca3dc2b90fb79fd52",
"main.dart.js_111.part.js": "6d645e0ed6cd29958c8e8c5302c400ee",
"main.dart.js_24.part.js": "b6e24dd7b9e9ad8a9028db0f29c7fb30",
"main.dart.js_34.part.js": "d82375989d382d46700abf8d946cd606",
"main.dart.js_46.part.js": "b163d9007cf94249bbbf7d307126b60b",
"main.dart.js_56.part.js": "64a007d1844c614c36db8be9091d709b",
"main.dart.js_163.part.js": "8ee49b34f1de01ab73fb03485d42773e",
"main.dart.js_173.part.js": "cb9d9f9bf2adb8aa5fdc297d042f7a31",
"main.dart.js_145.part.js": "94a1bf862c9586f484fa14cbb739b5a0",
"main.dart.js_155.part.js": "8b594f09e6838b410112ccd6be108050",
"version.json": "e108e1c11104e2ec7cf9868c8c17c462",
"main.dart.js_7.part.js": "4e13532e55a69ab27569209476935587",
"main.dart.js_60.part.js": "92584d702e1aa3ece575b8283a541395",
"main.dart.js_70.part.js": "0409de9870a033fea38cac0d2e5f3af3",
"main.dart.js_12.part.js": "3f10effa1ae638ab35c7b6ee422f6cdc",
"main.dart.js_127.part.js": "626d923c573686e65c63ca3aca4513e3",
"main.dart.js_137.part.js": "79b2529e39e0d7811b082b2b193602e8",
"main.dart.js_84.part.js": "ebbe7be62d12eed31d8352c6f35a0cb7",
"main.dart.js_94.part.js": "07093b289febfdcea84cc06f4c1b3ce7",
"main.dart.js_118.part.js": "f0377121e402ef6fcab18b8870837b30",
"main.dart.js_108.part.js": "b02be164309cfe07503bab8105964207",
"main.dart.js_154.part.js": "9386c9b8ac4923edf31f5be06fa3d5ba",
"main.dart.js_144.part.js": "a195724d3912379b66a10cd6c23db5ce",
"main.dart.js_71.part.js": "49455633fae44388e2f52ed93605f3c8",
"main.dart.js_61.part.js": "ddacac032da39dc4b3b2c08d9a866a1d",
"main.dart.js_6.part.js": "02b6032171a5095ec2f1471881f4f58c",
"index.html": "958769728841b59e5331ec1ac4b666b7",
"/": "958769728841b59e5331ec1ac4b666b7",
"main.dart.js_13.part.js": "373d8ddc671d0cabba10dd0edc1338df",
"main.dart.js_136.part.js": "63185eaba77484318a2e8816bb8664cc",
"main.dart.js_126.part.js": "7f8e7acd86a97d67c4d9f75a2a96bf88",
"privacy/index.html": "cdef54c1cd1d1c6f8a40228cd236ab70",
"main.dart.js_109.part.js": "99de1814b888341b9bf4e5cd4d33b8e4",
"main.dart.js_119.part.js": "2c02714678eb287d5aa0f501c99560ca",
"main.dart.js_95.part.js": "8ba62fdfc7d2a0f14947cddfc54111da",
"main.dart.js_85.part.js": "54a1d527d20cae580d94de4f55638746",
"main.dart.js_186.part.js": "7ad70567f46f2ad7f822d26e4826670b",
"test/1.mp4": "58f3a99b8821dce6ac732844f2bcbc2d",
"main.dart.js_68.part.js": "7b403c4e3f438cf89cc981d1099f0764",
"main.dart.js_78.part.js": "cdf6b97710a3d6d224afa29fb47853b1",
"main.dart.js_110.part.js": "4a1261dd2aa91243be857a04218b1d0f",
"main.dart.js_100.part.js": "e8190610f149d408cb983291b12372c3",
"main.dart.js_35.part.js": "1472c205121ab5d055f98629046cc725",
"main.dart.js_25.part.js": "b46612fac1742f71ed88feacec2bcfdd",
"main.dart.js_57.part.js": "ec4669eb7b2ecdf00101d22ae01efbdd",
"main.dart.js_47.part.js": "107bdb5c89e26f0940006cb6c96d4de7",
"main.dart.js_172.part.js": "dc1f19e0bd6ddec183e76403f4cffe4e",
"main.dart.js_162.part.js": "a0ad20d163f5c75c47f47805adfa01f0",
"main.dart.js_124.part.js": "96542c5caaea9afbe58685dcf1a317a3",
"main.dart.js_134.part.js": "0ed988c63e2f8c35957f1bbcbe66f502",
"main.dart.js_11.part.js": "73188d90199734257de4a41ffd53a2f5",
"main.dart.js_63.part.js": "dfaca2ae2ccdf4fd94a9214e82ffb98d",
"main.dart.js_4.part.js": "45b55e00469f8743ffe7cb53b99f321f",
"main.dart.js_73.part.js": "eb2ff36a68327063357414795d7caddf",
"main.dart.js_146.part.js": "517c8faf27cc2be285804325522f13bf",
"main.dart.js_156.part.js": "e5a661e72e783f0b3097543dfd913496",
"main.dart.js": "31e58df8eeaeeaf7a8a7d8ed4fbaa624",
"main.dart.js_87.part.js": "ea5ae1313951ee52c7d1f5ae30c7d580",
"main.dart.js_97.part.js": "87ab0df2adb88873eec4cfa69f7440d5",
"main.dart.js_179.part.js": "66b4a5a03858855597f58f148227aa4b",
"main.dart.js_169.part.js": "f5cfca991447a899299911a68ba0dec3",
"main.dart.js_184.part.js": "fca720792dfb4a99997187624fe6be67",
"main.dart.js_160.part.js": "aabc7c9c209d00a3d6ae1f64d91bf85d",
"main.dart.js_170.part.js": "896308e445981c853122fb7e4bd9a905",
"main.dart.js_45.part.js": "58bd5e24da015b6ce24a40e3dc9d1271",
"main.dart.js_55.part.js": "bf90d78a7f7abc6d17c6151fee985adf",
"main.dart.js_27.part.js": "0392a6cf5a193f1533e5a85d4e1541a3",
"main.dart.js_37.part.js": "ef3d71797b735a5dc72792022fbe9a5d",
"main.dart.js_102.part.js": "cddd6e855237bf17abdb0e98c1442613",
"terms/index.html": "7e0f5422c525b2ee7f5bf0d6e71f6439",
"main.dart.js_112.part.js": "8d8ab2c1918ea006871144bc3c60e1a6",
"main.dart.js_19.part.js": "97ba0177f40282e2d0dfe27bf3f214e2",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js_185.part.js": "64c81b15e5beb3a54f832d95a079950d",
"main.dart.js_171.part.js": "95ec719bb3bb0389d01dfa19f1cf79a8",
"main.dart.js_161.part.js": "c526e601af97d25d63567b96710b116d",
"main.dart.js_54.part.js": "45912f88456aa675a4b84c9fdafbaa53",
"main.dart.js_44.part.js": "1f2fcb281e4cbd61462f8f5b843f71d2",
"main.dart.js_36.part.js": "82fe740aa3a000abc02cf0bc9c710586",
"main.dart.js_26.part.js": "8f680627009f678bb0a812aa0d9b9d8d",
"main.dart.js_113.part.js": "60b23ca25d351c7208ca2c3a9a2e0299",
"main.dart.js_103.part.js": "0b9df3d0f7367ad992be65139337bd89",
"main.dart.js_135.part.js": "3c3dcd8d8e520cae571edc79c2383358",
"main.dart.js_125.part.js": "0246c826997f144f052f9cc0bd1e6eb4",
"main.dart.js_72.part.js": "2beadd69af2f68fc3d22c2d4c0dcd4fe",
"main.dart.js_5.part.js": "55dd64f1e457772cab758abf0067768c",
"main.dart.js_62.part.js": "41f936ef5fdce3cfcb062c9fe96dd0e5",
"main.dart.js_157.part.js": "1fe96c72fefec32e2f35c5b14479f720",
"main.dart.js_147.part.js": "be6dd21efdf1eaeac333f7962c88df60",
"main.dart.js_96.part.js": "5f952d4585a8d5edd9bd834686219dde",
"main.dart.js_86.part.js": "283ee4f5ab35b6ecd25c416fe45e3bc7",
"main.dart.js_168.part.js": "2cb8159acb120d7feea17827a7e755f1",
"main.dart.js_178.part.js": "4d5b5a92bda98587519ce2fcad4b4498",
"main.dart.js_83.part.js": "0d11bccb1ed99f3a510a7e0e3afde6cc",
"main.dart.js_93.part.js": "8fbfa48a0646309b6e3bf96f231a150b",
"main.dart.js_58.part.js": "0a74b5c96ee18883940fb84945a620bc",
"main.dart.js_48.part.js": "893872cb5100508ca2ae8d62b802fe5f",
"main.dart.js_15.part.js": "53c756f288856c642ce027eaa8fefb30",
"main.dart.js_120.part.js": "74ffe43edea45e46b7bf619717ccbfa0",
"main.dart.js_130.part.js": "983d4e895a28c6be12826e10334723e4",
"main.dart.js_189.part.js": "fdada334cd72493182acf9fbad900054",
"main.dart.js_142.part.js": "440c1351368129dade8458dcf8bc76f5",
"main.dart.js_152.part.js": "03b810f4f35cdf3f7aecce7456953a58",
"main.dart.js_67.part.js": "da18f2c1459f5e7b6af5a6930db6f3c3",
"main.dart.js_77.part.js": "38f90ad801dc1509f423731ccff38869",
"favicon.png": "63b30a22e0faf2f9a13d55ca5264e7fe",
"main.dart.js_41.part.js": "362010a1843f37669498b53eea4ff837",
"main.dart.js_51.part.js": "836b598218169546bb34abce092fa8fa",
"main.dart.js_164.part.js": "71854ea846dc8efd25569a1834bb7c80",
"main.dart.js_174.part.js": "c7501bfd1253f09736b40fa8349ff975",
"main.dart.js_106.part.js": "ac22c826b89721609aa8d9b1864324cb",
"main.dart.js_116.part.js": "7011747b94c9773a664c7d4d77d0b7f3",
"main.dart.js_23.part.js": "1ea4e799351c30a202f25fbd29372715",
"main.dart.js_33.part.js": "d5aae3364457c3d1463383b3415929fd",
"main.dart.js_9.part.js": "84f63846f67b5437dd846d562791ecbb",
"main.dart.js_139.part.js": "b77e620add9cf985d70308bc2a60a5f1",
"main.dart.js_129.part.js": "a0f84fa65b177ba1cbbece44e7236c7b",
"main.dart.js_180.part.js": "37a5e52b659dd71963365108b15b8216",
"main.dart.js_50.part.js": "4dafae0fbd425c8d608ed726d349dcf4",
"main.dart.js_40.part.js": "2a87ce62216326b7b5991154a32d54aa",
"main.dart.js_175.part.js": "e7db2fec87fdd449da5ec756d0ae6a77",
"main.dart.js_165.part.js": "0a00495334ebc3d2698eec558b452009",
"main.dart.js_117.part.js": "581f4e3fd61222e4d4a5bbf6b5fb4a44",
"main.dart.js_107.part.js": "8bc48912e80e1eb9e08236ff3f322309",
"main.dart.js_32.part.js": "29d54eff577aa5d241062b9fb0fc1064",
"main.dart.js_22.part.js": "ad37df7833e8a5dcbe523579cb6d9664",
"main.dart.js_8.part.js": "90456e0ac4aa142a93f41cf7b33a599d",
"icons/Icon-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-192.png": "9b4ee7b655c09de56323d722e96981e2",
"icons/Icon-maskable-512.png": "29e58824cd7d5960f0761c6dd424b419",
"icons/Icon-512.png": "29e58824cd7d5960f0761c6dd424b419",
"main.dart.js_181.part.js": "4eaaa1839edfcb8c3eda8c549a43cc6b",
"main.dart.js_128.part.js": "e3a308659754eff5c161cc71a92a2db3",
"main.dart.js_138.part.js": "47579408b209195de35869b1925affea",
"manifest.json": "7519fb3d54da80f2347510f2e96418cb",
"main.dart.js_92.part.js": "577667d82b290bc4966850e89da783be",
"main.dart.js_82.part.js": "dbc8956b125c775a38aeb65b66b2b224",
"main.dart.js_49.part.js": "95833f7d090178b1d2171b28ec2a4840",
"main.dart.js_59.part.js": "a236f5f49e0f7b66f08fb5ab9ebd8413",
"main.dart.js_188.part.js": "019edd836670e30fc717aa83faafe566",
"main.dart.js_14.part.js": "e65c8b84541d56375e200798c29d87a7",
"main.dart.js_131.part.js": "f7254faaf49316690b1cbaf1d0eaf3e9",
"main.dart.js_121.part.js": "dc6f9f0b076e3253f95061685ecb123f",
"main.dart.js_153.part.js": "d82ce4885ff7de1746dac2cdb0d33ae8",
"main.dart.js_143.part.js": "9092be1cdb1168ff536ee24b5ba84858",
"main.dart.js_76.part.js": "c57a01fda1f812e949dee3b8afeccfc3",
"main.dart.js_66.part.js": "bebdd41f8b9f355f321ae4bcd8beafd9",
"main.dart.js_1.part.js": "b6b80b4b7e439c2f6a6aef2a600def0a",
"main.dart.js_20.part.js": "6fb66b8ec71fbb3a42d05000bb44c44a",
"main.dart.js_30.part.js": "5b405741a18a15a20a670c5ac403573f",
"main.dart.js_105.part.js": "f186a68151ebe97ef0ef3338ccdd3f47",
"main.dart.js_115.part.js": "3832f4999e08c157f767a222372c111f",
"main.dart.js_99.part.js": "a13460b9c7f788534b98d99889e6297e",
"main.dart.js_89.part.js": "c6c35daeaa7a39377d23dadd596464da",
"main.dart.js_167.part.js": "a3106d1a7847c7faa10fdbe5581966a0",
"main.dart.js_177.part.js": "52152b5c5e17735af25612a60910cfa3",
"main.dart.js_42.part.js": "1672e9594accd246e8dd3c786302cef2",
"main.dart.js_52.part.js": "36695aae17164f34164651ae64ddac3b",
"main.dart.js_183.part.js": "90da8abb6899b8656c7ce32d791cbbef",
"main.dart.js_158.part.js": "0a674cf826aeb52a1d1b0d514b23ff2d",
"main.dart.js_148.part.js": "30dadd4cd61e9e8327417081386ea58b",
"main.dart.js_39.part.js": "e10b326541e653a4bf42f81e1e494fb9",
"main.dart.js_29.part.js": "4941910caa9d32daee132244b2e4ebd0",
"main.dart.js_80.part.js": "15a4a41d09572c37c010b924bdc2da29",
"main.dart.js_90.part.js": "f4cddba4c81c7645948db2ab02327203",
"main.dart.js_64.part.js": "7498a6b6ca9e51f7a4fccf47c0dd0797",
"main.dart.js_74.part.js": "25f7c46ed5245b8564c5651f9d3f432c",
"main.dart.js_141.part.js": "d070e0f3bfc24e85fca0e9d6e1b1f026",
"main.dart.js_151.part.js": "68aa1a6dc3b310b20c2144787703d908",
"main.dart.js_123.part.js": "e7d007fcf7c587baf41981e8bfac43a2",
"main.dart.js_133.part.js": "56bc074266ff09cc39bb883fc373d660",
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
"main.dart.js_91.part.js": "b014589322bdfb99e3412f875abbebef",
"main.dart.js_81.part.js": "1dedd455703f00ef01d13cffd13d58fb",
"main.dart.js_28.part.js": "cf2a380a6731679e99f4dacb4f90545a",
"main.dart.js_38.part.js": "f5171831ce5253e9c0b0a0effd1f6fa6",
"main.dart.js_75.part.js": "29469acccc31144b75159ac07c4e2695",
"main.dart.js_2.part.js": "bc762eeb6c787c30ae5ecbddb40fca42",
"main.dart.js_65.part.js": "636118c724a4a132d3378c86af7f7f12",
"main.dart.js_150.part.js": "1d43380718534478d5a6a218ea90e775",
"main.dart.js_140.part.js": "bd94beee48f7d5140154ca65e73be6f0",
"main.dart.js_132.part.js": "c904eb07dc4213adbfc683d3d9920e56",
"main.dart.js_122.part.js": "ed83e1f35048aca7bedf1c7d73847c4d",
"main.dart.js_17.part.js": "419af04b536bac31fdcf87537dd34384",
"main.dart.js_88.part.js": "e727a006fcc81a44a398e5a7d34a55ce",
"main.dart.js_98.part.js": "700da54f42d8a39238f3db4f8797e486",
"main.dart.js_31.part.js": "de529afb152e3e7eebc02bb948079c65",
"main.dart.js_21.part.js": "c96c0a02f549686b568017655aa5b617",
"main.dart.js_114.part.js": "1587f3009dfe237cccfe1aecdc8093ee",
"main.dart.js_104.part.js": "461224dd97010ae7daf51f606fd179d2",
"main.dart.js_176.part.js": "9a4dc89fb678953ea6dafb5a2092382e",
"main.dart.js_166.part.js": "7883721b18f32c9e804c11299c1ce8c6",
"main.dart.js_53.part.js": "a51ae8c8ce084cd9a8f8cbc1ddecd464",
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
"main.dart.js_149.part.js": "9bc99783958eb3c0aa0d81e7aa4de037",
"main.dart.js_159.part.js": "0182295da72dc93c2b340001a536c55b"};
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
