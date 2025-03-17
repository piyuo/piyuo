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
      supportedLocales: const [Locale('en', 'US'), Locale('zh', 'TW')],
    );
  }
}
