// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'localization.dart';

// ignore_for_file: type=lint

/// The translations for Swedish (`sv`).
class LocalizationSv extends Localization {
  LocalizationSv([String locale = 'sv']) : super(locale);

  @override
  String get index_download => 'Ladda ner';

  @override
  String get index_download_soon => 'Kommer snart.';

  @override
  String get index_language => 'Språk';

  @override
  String get index_video_title => 'Din telefon kan nu använda AI för att känna igen fotgängare.';

  @override
  String get index_video_desc => 'Ingen internetanslutning krävs. Ingen manuell räkning med traditionell räknare behövs. Ställ bara in din telefon för att automatiskt spåra förbipasserande fotgängare.';

  @override
  String get index_1 => 'Spårning dygnet runt';

  @override
  String get index_1_desc => 'Se statistik över fotgängartrafik för valfri tidsperiod.';

  @override
  String get index_2 => 'Spårning av flera objekttyper';

  @override
  String get index_2_desc => 'Räkna fotgängare, bilar, cyklar och mer samtidigt';

  @override
  String get index_3 => 'Anpassade detekteringszoner';

  @override
  String get index_3_desc => 'Definiera egna detekteringszoner för att räkna trafik i specifika områden.';

  @override
  String get index_4 => 'Flexibla räkningslägen';

  @override
  String get index_4_desc => 'Välj att räkna nya objekt som dyker upp inom detekteringszonen, eller de som står stilla.';

  @override
  String get index_desktop_title => 'Tillgänglighet för skrivbordsversion';

  @override
  String get index_desktop_desc => 'Vi erbjuder även en skrivbordsversion. Vi tillhandahåller versioner för iOS/Android/Mac/Windows, så att du kan använda både mobila enheter och stationära datorer med webbkameror. Skrivbordsversionen stöder dessutom flera videokällor, vilket möjliggör samtidig räkning från flera strömmar.';

  @override
  String get index_desktop2_title => 'Stöd för livestream';

  @override
  String get index_desktop2_desc => 'Förutom mobilkameror stöder vi inspelade videofiler, webbkamerainmatning och internet-liveströmmar som RTSP. Detta gör att du kan ansluta till befintliga enheter och omedelbart börja mäta trafikflödet.';

  @override
  String get index_email_us => 'Maila oss';

  @override
  String get app_desc => 'Vill du veta hur många människor som passerar förbi? Denna app använder din telefons kamera för att intelligent identifiera och automatiskt räkna fotgängare. Ingen manuell inmatning krävs. Säg farväl till tråkig räkning och övervaka enkelt trafikflödet.';

  @override
  String get video_desc => 'Ingen internetanslutning krävs. Ingen manuell räkning med traditionell räknare behövs. Ställ bara in din telefon för att automatiskt spåra förbipasserande fotgängare.';

  @override
  String get terms => 'Användarvillkor';

  @override
  String get privacy => 'Integritet';
}
