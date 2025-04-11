import 'dart:async';

import 'package:flutter/widgets.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:intl/intl.dart' as intl;

import 'localization_af.dart' deferred as localization_af;
import 'localization_am.dart' deferred as localization_am;
import 'localization_ar.dart' deferred as localization_ar;
import 'localization_az.dart' deferred as localization_az;
import 'localization_bg.dart' deferred as localization_bg;
import 'localization_bn.dart' deferred as localization_bn;
import 'localization_ca.dart' deferred as localization_ca;
import 'localization_cs.dart' deferred as localization_cs;
import 'localization_da.dart' deferred as localization_da;
import 'localization_de.dart' deferred as localization_de;
import 'localization_el.dart' deferred as localization_el;
import 'localization_en.dart' deferred as localization_en;
import 'localization_es.dart' deferred as localization_es;
import 'localization_et.dart' deferred as localization_et;
import 'localization_fa.dart' deferred as localization_fa;
import 'localization_fi.dart' deferred as localization_fi;
import 'localization_fr.dart' deferred as localization_fr;
import 'localization_gl.dart' deferred as localization_gl;
import 'localization_gu.dart' deferred as localization_gu;
import 'localization_he.dart' deferred as localization_he;
import 'localization_hi.dart' deferred as localization_hi;
import 'localization_hr.dart' deferred as localization_hr;
import 'localization_hu.dart' deferred as localization_hu;
import 'localization_id.dart' deferred as localization_id;
import 'localization_it.dart' deferred as localization_it;
import 'localization_ja.dart' deferred as localization_ja;
import 'localization_kk.dart' deferred as localization_kk;
import 'localization_ko.dart' deferred as localization_ko;
import 'localization_ku.dart' deferred as localization_ku;
import 'localization_ln.dart' deferred as localization_ln;
import 'localization_lt.dart' deferred as localization_lt;
import 'localization_lv.dart' deferred as localization_lv;
import 'localization_ml.dart' deferred as localization_ml;
import 'localization_mn.dart' deferred as localization_mn;
import 'localization_mr.dart' deferred as localization_mr;
import 'localization_ms.dart' deferred as localization_ms;
import 'localization_my.dart' deferred as localization_my;
import 'localization_nb.dart' deferred as localization_nb;
import 'localization_ne.dart' deferred as localization_ne;
import 'localization_nl.dart' deferred as localization_nl;
import 'localization_nn.dart' deferred as localization_nn;
import 'localization_pl.dart' deferred as localization_pl;
import 'localization_ps.dart' deferred as localization_ps;
import 'localization_pt.dart' deferred as localization_pt;
import 'localization_ro.dart' deferred as localization_ro;
import 'localization_ru.dart' deferred as localization_ru;
import 'localization_si.dart' deferred as localization_si;
import 'localization_sk.dart' deferred as localization_sk;
import 'localization_sl.dart' deferred as localization_sl;
import 'localization_sn.dart' deferred as localization_sn;
import 'localization_sr.dart' deferred as localization_sr;
import 'localization_sv.dart' deferred as localization_sv;
import 'localization_sw.dart' deferred as localization_sw;
import 'localization_ta.dart' deferred as localization_ta;
import 'localization_te.dart' deferred as localization_te;
import 'localization_th.dart' deferred as localization_th;
import 'localization_tl.dart' deferred as localization_tl;
import 'localization_tr.dart' deferred as localization_tr;
import 'localization_uk.dart' deferred as localization_uk;
import 'localization_ur.dart' deferred as localization_ur;
import 'localization_uz.dart' deferred as localization_uz;
import 'localization_vi.dart' deferred as localization_vi;
import 'localization_zh.dart' deferred as localization_zh;

// ignore_for_file: type=lint

/// Callers can lookup localized strings with an instance of Localization
/// returned by `Localization.of(context)`.
///
/// Applications need to include `Localization.delegate()` in their app's
/// `localizationDelegates` list, and the locales they support in the app's
/// `supportedLocales` list. For example:
///
/// ```dart
/// import 'l10n/localization.dart';
///
/// return MaterialApp(
///   localizationsDelegates: Localization.localizationsDelegates,
///   supportedLocales: Localization.supportedLocales,
///   home: MyApplicationHome(),
/// );
/// ```
///
/// ## Update pubspec.yaml
///
/// Please make sure to update your pubspec.yaml to include the following
/// packages:
///
/// ```yaml
/// dependencies:
///   # Internationalization support.
///   flutter_localizations:
///     sdk: flutter
///   intl: any # Use the pinned version from flutter_localizations
///
///   # Rest of dependencies
/// ```
///
/// ## iOS Applications
///
/// iOS applications define key application metadata, including supported
/// locales, in an Info.plist file that is built into the application bundle.
/// To configure the locales supported by your app, you’ll need to edit this
/// file.
///
/// First, open your project’s ios/Runner.xcworkspace Xcode workspace file.
/// Then, in the Project Navigator, open the Info.plist file under the Runner
/// project’s Runner folder.
///
/// Next, select the Information Property List item, select Add Item from the
/// Editor menu, then select Localizations from the pop-up menu.
///
/// Select and expand the newly-created Localizations item then, for each
/// locale your application supports, add a new item and select the locale
/// you wish to add from the pop-up menu in the Value field. This list should
/// be consistent with the languages listed in the Localization.supportedLocales
/// property.
abstract class Localization {
  Localization(String locale) : localeName = intl.Intl.canonicalizedLocale(locale.toString());

  final String localeName;

  static Localization of(BuildContext context) {
    return Localizations.of<Localization>(context, Localization)!;
  }

  static const LocalizationsDelegate<Localization> delegate = _LocalizationDelegate();

  /// A list of this localizations delegate along with the default localizations
  /// delegates.
  ///
  /// Returns a list of localizations delegates containing this delegate along with
  /// GlobalMaterialLocalizations.delegate, GlobalCupertinoLocalizations.delegate,
  /// and GlobalWidgetsLocalizations.delegate.
  ///
  /// Additional delegates can be added by appending to this list in
  /// MaterialApp. This list does not have to be used at all if a custom list
  /// of delegates is preferred or required.
  static const List<LocalizationsDelegate<dynamic>> localizationsDelegates = <LocalizationsDelegate<dynamic>>[
    delegate,
    GlobalMaterialLocalizations.delegate,
    GlobalCupertinoLocalizations.delegate,
    GlobalWidgetsLocalizations.delegate,
  ];

  /// A list of this localizations delegate's supported locales.
  static const List<Locale> supportedLocales = <Locale>[
    Locale('af'),
    Locale('am'),
    Locale('ar'),
    Locale('ar', 'AE'),
    Locale('ar', 'DZ'),
    Locale('ar', 'EG'),
    Locale('az'),
    Locale('bg'),
    Locale('bn'),
    Locale('bn', 'IN'),
    Locale('ca'),
    Locale('cs'),
    Locale('da'),
    Locale('de'),
    Locale('de', 'AT'),
    Locale('de', 'CH'),
    Locale('el'),
    Locale('en'),
    Locale('en', 'AU'),
    Locale('en', 'CA'),
    Locale('en', 'GB'),
    Locale('en', 'IN'),
    Locale('es'),
    Locale('es', 'AR'),
    Locale('es', 'CO'),
    Locale('et'),
    Locale('fa'),
    Locale('fi'),
    Locale('fr'),
    Locale('fr', 'BE'),
    Locale('fr', 'CA'),
    Locale('fr', 'CH'),
    Locale('gl'),
    Locale('gu'),
    Locale('he'),
    Locale('hi'),
    Locale('hr'),
    Locale('hu'),
    Locale('id'),
    Locale('it'),
    Locale('ja'),
    Locale('kk'),
    Locale('ko'),
    Locale('ku'),
    Locale('ln'),
    Locale('lt'),
    Locale('lv'),
    Locale('ml'),
    Locale('mn'),
    Locale('mr'),
    Locale('ms'),
    Locale('ms', 'SG'),
    Locale('my'),
    Locale('nb'),
    Locale('ne'),
    Locale('nl'),
    Locale('nl', 'BE'),
    Locale('nn'),
    Locale('pl'),
    Locale('ps'),
    Locale('pt'),
    Locale('pt', 'PT'),
    Locale('ro'),
    Locale('ru'),
    Locale('ru', 'KZ'),
    Locale('ru', 'UA'),
    Locale('si'),
    Locale('sk'),
    Locale('sl'),
    Locale('sn'),
    Locale('sr'),
    Locale('sv'),
    Locale('sw'),
    Locale('ta'),
    Locale('te'),
    Locale('th'),
    Locale('tl'),
    Locale('tr'),
    Locale('uk'),
    Locale('ur'),
    Locale('ur', 'IN'),
    Locale('uz'),
    Locale('vi'),
    Locale('zh'),
    Locale('zh', 'CN'),
    Locale('zh', 'HK'),
    Locale('zh', 'MO'),
    Locale('zh', 'SG')
  ];

  /// No description provided for @index_download.
  ///
  /// In en, this message translates to:
  /// **'Download'**
  String get index_download;

  /// No description provided for @index_download_soon.
  ///
  /// In en, this message translates to:
  /// **'Coming soon.'**
  String get index_download_soon;

  /// No description provided for @index_download_available.
  ///
  /// In en, this message translates to:
  /// **'Available in Spring 2025.'**
  String get index_download_available;

  /// No description provided for @index_language.
  ///
  /// In en, this message translates to:
  /// **'Language'**
  String get index_language;

  /// No description provided for @index_video_title.
  ///
  /// In en, this message translates to:
  /// **'Your phone can now use AI to recognize pedestrians.'**
  String get index_video_title;

  /// No description provided for @index_video_desc.
  ///
  /// In en, this message translates to:
  /// **'No internet required. No need to manually count people with a traditional clicker. Just set up your phone to automatically track passing foot traffic.'**
  String get index_video_desc;

  /// No description provided for @index_1.
  ///
  /// In en, this message translates to:
  /// **'24/7 Tracking'**
  String get index_1;

  /// No description provided for @index_1_desc.
  ///
  /// In en, this message translates to:
  /// **'View foot traffic counts for any time period.'**
  String get index_1_desc;

  /// No description provided for @index_2.
  ///
  /// In en, this message translates to:
  /// **'Multiple Object Tracking'**
  String get index_2;

  /// No description provided for @index_2_desc.
  ///
  /// In en, this message translates to:
  /// **'Simultaneously count pedestrians, cars, bicycles, and more'**
  String get index_2_desc;

  /// No description provided for @index_3.
  ///
  /// In en, this message translates to:
  /// **'Custom Detection Zones'**
  String get index_3;

  /// No description provided for @index_3_desc.
  ///
  /// In en, this message translates to:
  /// **'Define custom detection zones to count traffic in specific areas.'**
  String get index_3_desc;

  /// No description provided for @index_4.
  ///
  /// In en, this message translates to:
  /// **'Flexible Counting Modes'**
  String get index_4;

  /// No description provided for @index_4_desc.
  ///
  /// In en, this message translates to:
  /// **'Choose to count newly appearing objects within the detection zone, or those that remain stationary.'**
  String get index_4_desc;

  /// No description provided for @index_desktop_title.
  ///
  /// In en, this message translates to:
  /// **'Desktop Version Availability'**
  String get index_desktop_title;

  /// No description provided for @index_desktop_desc.
  ///
  /// In en, this message translates to:
  /// **'We also offer a desktop version. We provide versions for iOS/Android/Mac/Windows, allowing you to utilize both mobile devices and desktops with webcams. The desktop version further supports multiple video sources, enabling simultaneous counting from multiple streams.'**
  String get index_desktop_desc;

  /// No description provided for @index_desktop2_title.
  ///
  /// In en, this message translates to:
  /// **'Live Stream Support'**
  String get index_desktop2_title;

  /// No description provided for @index_desktop2_desc.
  ///
  /// In en, this message translates to:
  /// **'In addition to mobile device cameras, we support recorded video files, webcam inputs, and internet live streams such as RTSP. This allows you to connect to existing devices and immediately begin measuring traffic flow.'**
  String get index_desktop2_desc;

  /// No description provided for @index_email_us.
  ///
  /// In en, this message translates to:
  /// **'Email us'**
  String get index_email_us;

  /// No description provided for @app_name.
  ///
  /// In en, this message translates to:
  /// **'Counter'**
  String get app_name;

  /// No description provided for @app_desc.
  ///
  /// In en, this message translates to:
  /// **'Want to know how many people pass by? This app uses your phone\'s camera to intelligently identify and automatically count pedestrians. No manual input required. Say goodbye to tedious counting and easily monitor traffic flow.'**
  String get app_desc;

  /// No description provided for @video_desc.
  ///
  /// In en, this message translates to:
  /// **'No internet required. No need to manually count people with a traditional clicker. Just set up your phone to automatically track passing foot traffic.'**
  String get video_desc;
}

class _LocalizationDelegate extends LocalizationsDelegate<Localization> {
  const _LocalizationDelegate();

  @override
  Future<Localization> load(Locale locale) {
    return lookupLocalization(locale);
  }

  @override
  bool isSupported(Locale locale) => <String>['af', 'am', 'ar', 'az', 'bg', 'bn', 'ca', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fa', 'fi', 'fr', 'gl', 'gu', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'kk', 'ko', 'ku', 'ln', 'lt', 'lv', 'ml', 'mn', 'mr', 'ms', 'my', 'nb', 'ne', 'nl', 'nn', 'pl', 'ps', 'pt', 'ro', 'ru', 'si', 'sk', 'sl', 'sn', 'sr', 'sv', 'sw', 'ta', 'te', 'th', 'tl', 'tr', 'uk', 'ur', 'uz', 'vi', 'zh'].contains(locale.languageCode);

  @override
  bool shouldReload(_LocalizationDelegate old) => false;
}

Future<Localization> lookupLocalization(Locale locale) {

  // Lookup logic when language+country codes are specified.
  switch (locale.languageCode) {
    case 'ar': {
  switch (locale.countryCode) {
    case 'AE': return localization_ar.loadLibrary().then((dynamic _) => localization_ar.LocalizationArAe());
case 'DZ': return localization_ar.loadLibrary().then((dynamic _) => localization_ar.LocalizationArDz());
case 'EG': return localization_ar.loadLibrary().then((dynamic _) => localization_ar.LocalizationArEg());
   }
  break;
   }
    case 'bn': {
  switch (locale.countryCode) {
    case 'IN': return localization_bn.loadLibrary().then((dynamic _) => localization_bn.LocalizationBnIn());
   }
  break;
   }
    case 'de': {
  switch (locale.countryCode) {
    case 'AT': return localization_de.loadLibrary().then((dynamic _) => localization_de.LocalizationDeAt());
case 'CH': return localization_de.loadLibrary().then((dynamic _) => localization_de.LocalizationDeCh());
   }
  break;
   }
    case 'en': {
  switch (locale.countryCode) {
    case 'AU': return localization_en.loadLibrary().then((dynamic _) => localization_en.LocalizationEnAu());
case 'CA': return localization_en.loadLibrary().then((dynamic _) => localization_en.LocalizationEnCa());
case 'GB': return localization_en.loadLibrary().then((dynamic _) => localization_en.LocalizationEnGb());
case 'IN': return localization_en.loadLibrary().then((dynamic _) => localization_en.LocalizationEnIn());
   }
  break;
   }
    case 'es': {
  switch (locale.countryCode) {
    case 'AR': return localization_es.loadLibrary().then((dynamic _) => localization_es.LocalizationEsAr());
case 'CO': return localization_es.loadLibrary().then((dynamic _) => localization_es.LocalizationEsCo());
   }
  break;
   }
    case 'fr': {
  switch (locale.countryCode) {
    case 'BE': return localization_fr.loadLibrary().then((dynamic _) => localization_fr.LocalizationFrBe());
case 'CA': return localization_fr.loadLibrary().then((dynamic _) => localization_fr.LocalizationFrCa());
case 'CH': return localization_fr.loadLibrary().then((dynamic _) => localization_fr.LocalizationFrCh());
   }
  break;
   }
    case 'ms': {
  switch (locale.countryCode) {
    case 'SG': return localization_ms.loadLibrary().then((dynamic _) => localization_ms.LocalizationMsSg());
   }
  break;
   }
    case 'nl': {
  switch (locale.countryCode) {
    case 'BE': return localization_nl.loadLibrary().then((dynamic _) => localization_nl.LocalizationNlBe());
   }
  break;
   }
    case 'pt': {
  switch (locale.countryCode) {
    case 'PT': return localization_pt.loadLibrary().then((dynamic _) => localization_pt.LocalizationPtPt());
   }
  break;
   }
    case 'ru': {
  switch (locale.countryCode) {
    case 'KZ': return localization_ru.loadLibrary().then((dynamic _) => localization_ru.LocalizationRuKz());
case 'UA': return localization_ru.loadLibrary().then((dynamic _) => localization_ru.LocalizationRuUa());
   }
  break;
   }
    case 'ur': {
  switch (locale.countryCode) {
    case 'IN': return localization_ur.loadLibrary().then((dynamic _) => localization_ur.LocalizationUrIn());
   }
  break;
   }
    case 'zh': {
  switch (locale.countryCode) {
    case 'CN': return localization_zh.loadLibrary().then((dynamic _) => localization_zh.LocalizationZhCn());
case 'HK': return localization_zh.loadLibrary().then((dynamic _) => localization_zh.LocalizationZhHk());
case 'MO': return localization_zh.loadLibrary().then((dynamic _) => localization_zh.LocalizationZhMo());
case 'SG': return localization_zh.loadLibrary().then((dynamic _) => localization_zh.LocalizationZhSg());
   }
  break;
   }
  }

  // Lookup logic when only language code is specified.
  switch (locale.languageCode) {
    case 'af': return localization_af.loadLibrary().then((dynamic _) => localization_af.LocalizationAf());
    case 'am': return localization_am.loadLibrary().then((dynamic _) => localization_am.LocalizationAm());
    case 'ar': return localization_ar.loadLibrary().then((dynamic _) => localization_ar.LocalizationAr());
    case 'az': return localization_az.loadLibrary().then((dynamic _) => localization_az.LocalizationAz());
    case 'bg': return localization_bg.loadLibrary().then((dynamic _) => localization_bg.LocalizationBg());
    case 'bn': return localization_bn.loadLibrary().then((dynamic _) => localization_bn.LocalizationBn());
    case 'ca': return localization_ca.loadLibrary().then((dynamic _) => localization_ca.LocalizationCa());
    case 'cs': return localization_cs.loadLibrary().then((dynamic _) => localization_cs.LocalizationCs());
    case 'da': return localization_da.loadLibrary().then((dynamic _) => localization_da.LocalizationDa());
    case 'de': return localization_de.loadLibrary().then((dynamic _) => localization_de.LocalizationDe());
    case 'el': return localization_el.loadLibrary().then((dynamic _) => localization_el.LocalizationEl());
    case 'en': return localization_en.loadLibrary().then((dynamic _) => localization_en.LocalizationEn());
    case 'es': return localization_es.loadLibrary().then((dynamic _) => localization_es.LocalizationEs());
    case 'et': return localization_et.loadLibrary().then((dynamic _) => localization_et.LocalizationEt());
    case 'fa': return localization_fa.loadLibrary().then((dynamic _) => localization_fa.LocalizationFa());
    case 'fi': return localization_fi.loadLibrary().then((dynamic _) => localization_fi.LocalizationFi());
    case 'fr': return localization_fr.loadLibrary().then((dynamic _) => localization_fr.LocalizationFr());
    case 'gl': return localization_gl.loadLibrary().then((dynamic _) => localization_gl.LocalizationGl());
    case 'gu': return localization_gu.loadLibrary().then((dynamic _) => localization_gu.LocalizationGu());
    case 'he': return localization_he.loadLibrary().then((dynamic _) => localization_he.LocalizationHe());
    case 'hi': return localization_hi.loadLibrary().then((dynamic _) => localization_hi.LocalizationHi());
    case 'hr': return localization_hr.loadLibrary().then((dynamic _) => localization_hr.LocalizationHr());
    case 'hu': return localization_hu.loadLibrary().then((dynamic _) => localization_hu.LocalizationHu());
    case 'id': return localization_id.loadLibrary().then((dynamic _) => localization_id.LocalizationId());
    case 'it': return localization_it.loadLibrary().then((dynamic _) => localization_it.LocalizationIt());
    case 'ja': return localization_ja.loadLibrary().then((dynamic _) => localization_ja.LocalizationJa());
    case 'kk': return localization_kk.loadLibrary().then((dynamic _) => localization_kk.LocalizationKk());
    case 'ko': return localization_ko.loadLibrary().then((dynamic _) => localization_ko.LocalizationKo());
    case 'ku': return localization_ku.loadLibrary().then((dynamic _) => localization_ku.LocalizationKu());
    case 'ln': return localization_ln.loadLibrary().then((dynamic _) => localization_ln.LocalizationLn());
    case 'lt': return localization_lt.loadLibrary().then((dynamic _) => localization_lt.LocalizationLt());
    case 'lv': return localization_lv.loadLibrary().then((dynamic _) => localization_lv.LocalizationLv());
    case 'ml': return localization_ml.loadLibrary().then((dynamic _) => localization_ml.LocalizationMl());
    case 'mn': return localization_mn.loadLibrary().then((dynamic _) => localization_mn.LocalizationMn());
    case 'mr': return localization_mr.loadLibrary().then((dynamic _) => localization_mr.LocalizationMr());
    case 'ms': return localization_ms.loadLibrary().then((dynamic _) => localization_ms.LocalizationMs());
    case 'my': return localization_my.loadLibrary().then((dynamic _) => localization_my.LocalizationMy());
    case 'nb': return localization_nb.loadLibrary().then((dynamic _) => localization_nb.LocalizationNb());
    case 'ne': return localization_ne.loadLibrary().then((dynamic _) => localization_ne.LocalizationNe());
    case 'nl': return localization_nl.loadLibrary().then((dynamic _) => localization_nl.LocalizationNl());
    case 'nn': return localization_nn.loadLibrary().then((dynamic _) => localization_nn.LocalizationNn());
    case 'pl': return localization_pl.loadLibrary().then((dynamic _) => localization_pl.LocalizationPl());
    case 'ps': return localization_ps.loadLibrary().then((dynamic _) => localization_ps.LocalizationPs());
    case 'pt': return localization_pt.loadLibrary().then((dynamic _) => localization_pt.LocalizationPt());
    case 'ro': return localization_ro.loadLibrary().then((dynamic _) => localization_ro.LocalizationRo());
    case 'ru': return localization_ru.loadLibrary().then((dynamic _) => localization_ru.LocalizationRu());
    case 'si': return localization_si.loadLibrary().then((dynamic _) => localization_si.LocalizationSi());
    case 'sk': return localization_sk.loadLibrary().then((dynamic _) => localization_sk.LocalizationSk());
    case 'sl': return localization_sl.loadLibrary().then((dynamic _) => localization_sl.LocalizationSl());
    case 'sn': return localization_sn.loadLibrary().then((dynamic _) => localization_sn.LocalizationSn());
    case 'sr': return localization_sr.loadLibrary().then((dynamic _) => localization_sr.LocalizationSr());
    case 'sv': return localization_sv.loadLibrary().then((dynamic _) => localization_sv.LocalizationSv());
    case 'sw': return localization_sw.loadLibrary().then((dynamic _) => localization_sw.LocalizationSw());
    case 'ta': return localization_ta.loadLibrary().then((dynamic _) => localization_ta.LocalizationTa());
    case 'te': return localization_te.loadLibrary().then((dynamic _) => localization_te.LocalizationTe());
    case 'th': return localization_th.loadLibrary().then((dynamic _) => localization_th.LocalizationTh());
    case 'tl': return localization_tl.loadLibrary().then((dynamic _) => localization_tl.LocalizationTl());
    case 'tr': return localization_tr.loadLibrary().then((dynamic _) => localization_tr.LocalizationTr());
    case 'uk': return localization_uk.loadLibrary().then((dynamic _) => localization_uk.LocalizationUk());
    case 'ur': return localization_ur.loadLibrary().then((dynamic _) => localization_ur.LocalizationUr());
    case 'uz': return localization_uz.loadLibrary().then((dynamic _) => localization_uz.LocalizationUz());
    case 'vi': return localization_vi.loadLibrary().then((dynamic _) => localization_vi.LocalizationVi());
    case 'zh': return localization_zh.loadLibrary().then((dynamic _) => localization_zh.LocalizationZh());
  }

  throw FlutterError(
    'Localization.delegate failed to load unsupported locale "$locale". This is likely '
    'an issue with the localizations generation tool. Please file an issue '
    'on GitHub with a reproducible sample app and the gen-l10n configuration '
    'that was used.'
  );
}
