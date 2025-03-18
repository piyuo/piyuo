import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:intl/intl.dart';
import 'package:libcli/cli/cli.dart' as cli;
import 'package:libcli/l10n/lib_localization.dart' as libcli_localization;
import 'package:piyuo/index/index.dart' as index;
import 'package:piyuo/l10n/app_localization.dart';

import 'language.dart';

main() => cli.run(() => const PiyuoWeb());

class PiyuoWeb extends StatelessWidget {
  const PiyuoWeb({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    /// parse the locale string to a [Locale] object

    return MaterialApp(
      title: 'piyuo.com',
      home: const index.IndexScreen(),
      locale: Intl.defaultLocale == null ? Locale('en') : parseLocale(Intl.defaultLocale!),
      localizationsDelegates: [
        AppLocalization.delegate,
        libcli_localization.LibLocalization.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ],
      supportedLocales: AppLocalization.supportedLocales,
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.black, brightness: Brightness.light),
        textTheme: TextTheme(
          titleLarge: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold, color: Colors.grey.shade900),
          titleMedium: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold, color: Colors.grey.shade900),
          displayLarge: TextStyle(fontSize: 72.0, fontWeight: FontWeight.bold),
          displaySmall: TextStyle(fontSize: 48.0, fontWeight: FontWeight.bold),
          bodyMedium: TextStyle(fontSize: 20, color: Colors.grey.shade900),
          bodySmall: TextStyle(fontSize: 18, color: Colors.grey.shade900),
          headlineMedium: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
          headlineSmall: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
        ),
      ),
    );
  }
}
