// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'localization.dart';

// ignore_for_file: type=lint

/// The translations for Dutch Flemish (`nl`).
class LocalizationNl extends Localization {
  LocalizationNl([String locale = 'nl']) : super(locale);

  @override
  String get index_download => 'Downloaden';

  @override
  String get index_download_soon => 'Binnenkort beschikbaar.';

  @override
  String get index_download_available => 'Beschikbaar in voorjaar 2025.';

  @override
  String get index_language => 'Taal';

  @override
  String get index_video_title => 'Je telefoon kan nu AI gebruiken om voetgangers te herkennen.';

  @override
  String get index_video_desc => 'Geen internet nodig. Geen handmatig tellen van mensen met een traditionele teller. Stel gewoon je telefoon in om automatisch passerende voetgangers te registreren.';

  @override
  String get index_1 => '24/7 Registratie';

  @override
  String get index_1_desc => 'Bekijk voetgangersaantallen voor elke tijdsperiode.';

  @override
  String get index_2 => 'Meerdere Objecten Volgen';

  @override
  String get index_2_desc => 'Tel gelijktijdig voetgangers, auto\'s, fietsen en meer';

  @override
  String get index_3 => 'Aangepaste Detectiezones';

  @override
  String get index_3_desc => 'Definieer aangepaste detectiezones om verkeer in specifieke gebieden te tellen.';

  @override
  String get index_4 => 'Flexibele Telmodi';

  @override
  String get index_4_desc => 'Kies ervoor om nieuw verschijnende objecten binnen de detectiezone te tellen, of objecten die stil blijven staan.';

  @override
  String get index_desktop_title => 'Beschikbaarheid Desktop Versie';

  @override
  String get index_desktop_desc => 'We bieden ook een desktopversie aan. We leveren versies voor iOS/Android/Mac/Windows, waardoor je zowel mobiele apparaten als desktops met webcams kunt gebruiken. De desktopversie ondersteunt daarnaast meerdere videobronnen, waardoor je gelijktijdig kunt tellen vanaf meerdere streams.';

  @override
  String get index_desktop2_title => 'Ondersteuning voor Livestreams';

  @override
  String get index_desktop2_desc => 'Naast camera\'s van mobiele apparaten ondersteunen we opgenomen videobestanden, webcaminvoer en internet livestreams zoals RTSP. Hierdoor kun je verbinding maken met bestaande apparaten en direct beginnen met het meten van verkeersstromen.';

  @override
  String get index_email_us => 'Mail ons';

  @override
  String get app_name => 'Teller';

  @override
  String get app_desc => 'Wil je weten hoeveel mensen er langskomen? Deze app gebruikt de camera van je telefoon om op intelligente wijze voetgangers te identificeren en automatisch te tellen. Geen handmatige invoer vereist. Zeg vaarwel tegen vervelend telwerk en monitor eenvoudig verkeersstromen.';

  @override
  String get video_desc => 'Geen internet nodig. Geen handmatig tellen van mensen met een traditionele teller. Stel gewoon je telefoon in om automatisch passerende voetgangers te registreren.';

  @override
  String get terms => 'Servicevoorwaarden';

  @override
  String get privacy => 'Privacy';
}

/// The translations for Dutch Flemish, as used in Belgium (`nl_BE`).
class LocalizationNlBe extends LocalizationNl {
  LocalizationNlBe(): super('nl_BE');

  @override
  String get index_download => 'Downloaden';

  @override
  String get index_download_soon => 'Binnenkort beschikbaar.';

  @override
  String get index_download_available => 'Beschikbaar in de lente van 2025.';

  @override
  String get index_language => 'Taal';

  @override
  String get index_video_title => 'Je gsm kan nu AI gebruiken om voetgangers te herkennen.';

  @override
  String get index_video_desc => 'Geen internet nodig. Geen handmatig tellen van mensen met een traditionele teller. Stel gewoon je gsm in om automatisch passerende voetgangers te registreren.';

  @override
  String get index_1 => '24/7 Registratie';

  @override
  String get index_1_desc => 'Bekijk voetgangersaantallen voor elke tijdsperiode.';

  @override
  String get index_2 => 'Meerdere Objecten Volgen';

  @override
  String get index_2_desc => 'Tel gelijktijdig voetgangers, auto\'s, fietsen en meer';

  @override
  String get index_3 => 'Aangepaste Detectiezones';

  @override
  String get index_3_desc => 'Definieer aangepaste detectiezones om verkeer in specifieke gebieden te tellen.';

  @override
  String get index_4 => 'Flexibele Telmodi';

  @override
  String get index_4_desc => 'Kies ervoor om nieuw verschijnende objecten binnen de detectiezone te tellen, of objecten die stil blijven staan.';

  @override
  String get index_desktop_title => 'Beschikbaarheid Desktop Versie';

  @override
  String get index_desktop_desc => 'We bieden ook een desktopversie aan. We leveren versies voor iOS/Android/Mac/Windows, waardoor je zowel mobiele toestellen als desktops met webcams kunt gebruiken. De desktopversie ondersteunt daarnaast meerdere videobronnen, waardoor je gelijktijdig kunt tellen vanaf meerdere streams.';

  @override
  String get index_desktop2_title => 'Ondersteuning voor Livestreams';

  @override
  String get index_desktop2_desc => 'Naast camera\'s van mobiele toestellen ondersteunen we opgenomen videobestanden, webcaminvoer en internet livestreams zoals RTSP. Hierdoor kun je verbinding maken met bestaande toestellen en direct beginnen met het meten van verkeersstromen.';

  @override
  String get index_email_us => 'Mail ons';

  @override
  String get app_name => 'Teller';

  @override
  String get app_desc => 'Wil je weten hoeveel mensen er langskomen? Deze app gebruikt de camera van je gsm om op intelligente wijze voetgangers te identificeren en automatisch te tellen. Geen handmatige invoer vereist. Zeg vaarwel tegen vervelend telwerk en monitor eenvoudig verkeersstromen.';

  @override
  String get video_desc => 'Geen internet nodig. Geen handmatig tellen van mensen met een traditionele teller. Stel gewoon je gsm in om automatisch passerende voetgangers te registreren.';

  @override
  String get terms => 'Servicevoorwaarden';

  @override
  String get privacy => 'Privacy';
}
