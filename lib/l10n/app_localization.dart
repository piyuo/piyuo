import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:intl/intl.dart' as intl;

import 'app_localization_en.dart';

// ignore_for_file: type=lint

/// Callers can lookup localized strings with an instance of AppLocalization
/// returned by `AppLocalization.of(context)`.
///
/// Applications need to include `AppLocalization.delegate()` in their app's
/// `localizationDelegates` list, and the locales they support in the app's
/// `supportedLocales` list. For example:
///
/// ```dart
/// import 'l10n/app_localization.dart';
///
/// return MaterialApp(
///   localizationsDelegates: AppLocalization.localizationsDelegates,
///   supportedLocales: AppLocalization.supportedLocales,
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
/// be consistent with the languages listed in the AppLocalization.supportedLocales
/// property.
abstract class AppLocalization {
  AppLocalization(String locale) : localeName = intl.Intl.canonicalizedLocale(locale.toString());

  final String localeName;

  static AppLocalization of(BuildContext context) {
    return Localizations.of<AppLocalization>(context, AppLocalization)!;
  }

  static const LocalizationsDelegate<AppLocalization> delegate = _AppLocalizationDelegate();

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
    Locale('en')
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

  /// No description provided for @back.
  ///
  /// In en, this message translates to:
  /// **'Back'**
  String get back;
}

class _AppLocalizationDelegate extends LocalizationsDelegate<AppLocalization> {
  const _AppLocalizationDelegate();

  @override
  Future<AppLocalization> load(Locale locale) {
    return SynchronousFuture<AppLocalization>(lookupAppLocalization(locale));
  }

  @override
  bool isSupported(Locale locale) => <String>['en'].contains(locale.languageCode);

  @override
  bool shouldReload(_AppLocalizationDelegate old) => false;
}

AppLocalization lookupAppLocalization(Locale locale) {


  // Lookup logic when only language code is specified.
  switch (locale.languageCode) {
    case 'en': return AppLocalizationEn();
  }

  throw FlutterError(
    'AppLocalization.delegate failed to load unsupported locale "$locale". This is likely '
    'an issue with the localizations generation tool. Please file an issue '
    'on GitHub with a reproducible sample app and the gen-l10n configuration '
    'that was used.'
  );
}
