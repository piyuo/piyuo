import 'package:flutter/cupertino.dart';
import 'package:locale_names/locale_names.dart';
import 'package:piyuo/l10n/app_localization.dart';

/// parse the locale string to a [Locale] object
Locale parseLocale(String localeString) {
  final parts = localeString.split('_');
  if (parts.length == 2) {
    return Locale(parts[0], parts[1]);
  } else {
    return Locale(localeString);
  }
}

class Language {
  final Locale locale;
  final String name;

  Language(this.locale, this.name);

  static List<Language> fromSupportedLocales(BuildContext context) {
    return AppLocalization.supportedLocales.map((locale) {
      String name = locale.nativeDisplayLanguage;
      if (locale.nativeDisplayCountry.isNotEmpty) {
        name += ' (${locale.nativeDisplayCountry})';
      }
      return Language(locale, name);
    }).toList();
  }
}
