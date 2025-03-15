import 'package:flutter/material.dart';
import 'package:libcli/cli/cli.dart' as cli;
import 'package:piyuo/index/index.dart' as index;

main() => cli.run(() => const PiyuoWeb());

class PiyuoWeb extends StatelessWidget {
  const PiyuoWeb({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(title: 'piyuo.com', home: const index.IndexScreen());
  }
}
