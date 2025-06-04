// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'localization.dart';

// ignore_for_file: type=lint

/// The translations for Estonian (`et`).
class LocalizationEt extends Localization {
  LocalizationEt([String locale = 'et']) : super(locale);

  @override
  String get index_download => 'Laadi alla';

  @override
  String get index_download_soon => 'Tulemas peagi.';

  @override
  String get index_language => 'Keel';

  @override
  String get index_video_title =>
      'Teie telefon suudab nüüd tehisintellekti abil jalakäijaid tuvastada.';

  @override
  String get index_video_desc =>
      'Internetti pole vaja. Pole vaja inimesi traditsioonilise klikkeriga käsitsi lugeda. Lihtsalt seadistage oma telefon automaatselt mööduvat jalakäijate liikumist jälgima.';

  @override
  String get index_1 => 'Ööpäevaringne jälgimine';

  @override
  String get index_1_desc =>
      'Vaadake jalakäijate arvu mistahes ajavahemiku kohta.';

  @override
  String get index_2 => 'Mitme objekti jälgimine';

  @override
  String get index_2_desc =>
      'Loendage samaaegselt jalakäijaid, autosid, jalgrattaid ja muud';

  @override
  String get index_3 => 'Kohandatud tuvastustsoonid';

  @override
  String get index_3_desc =>
      'Määrake kohandatud tuvastustsoonid kindlate alade liikluse loendamiseks.';

  @override
  String get index_4 => 'Paindlikud loendusrežiimid';

  @override
  String get index_4_desc =>
      'Valige, kas loendada tuvastustsoonis ilmuvaid uusi objekte või neid, mis jäävad paigale.';

  @override
  String get index_desktop_title => 'Töölauaversiooni saadavus';

  @override
  String get index_desktop_desc =>
      'Pakume ka töölauaversiooni. Meil on versioonid iOS/Android/Mac/Windows platvormidele, võimaldades kasutada nii mobiilseadmeid kui ka veebikaameratega lauaarvuteid. Töölauaversioon toetab lisaks mitut videoallikat, võimaldades samaaegselt loendada mitmest voogedastusest.';

  @override
  String get index_desktop2_title => 'Otseülekande tugi';

  @override
  String get index_desktop2_desc =>
      'Lisaks mobiilseadmete kaameratele toetame salvestatud videofaile, veebikaamera sisendeid ja interneti otseülekandeid nagu RTSP. See võimaldab teil ühenduda olemasolevate seadmetega ja alustada kohe liiklusvoo mõõtmist.';

  @override
  String get index_email_us => 'Kirjuta meile';

  @override
  String get app_desc =>
      'Soovite teada, kui palju inimesi möödub? See rakendus kasutab teie telefoni kaamerat, et intelligentselt tuvastada ja automaatselt loendada jalakäijaid. Käsitsi sisestamine pole vajalik. Jätke tüütu lugemine seljataha ja jälgige liiklusvoogu hõlpsalt.';

  @override
  String get video_desc =>
      'Internetti pole vaja. Pole vaja inimesi traditsioonilise klikkeriga käsitsi lugeda. Lihtsalt seadistage oma telefon automaatselt mööduvat jalakäijate liikumist jälgima.';

  @override
  String get terms => 'Teenusetingimused';

  @override
  String get privacy => 'Privaatsus';
}
