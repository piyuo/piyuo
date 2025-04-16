import 'package:flutter/material.dart';
import 'package:libcli/cli/cli.dart' as cli;
import 'package:piyuo/l10n/l10n.dart';

import 'open_link.dart';

class LinkView extends StatelessWidget {
  const LinkView({required this.isMobile, super.key});

  /// whether the device is mobile or not
  final bool isMobile;

  @override
  Widget build(BuildContext context) {
    buildButton() {
      return ElevatedButton(
        onPressed: () {
          cli.openMailTo('service@piyuo.com', '', '');
        },
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.grey.shade900,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(25)),
        ),
        child: Text(context.l.index_email_us, style: TextStyle(fontSize: 20, color: Colors.white)),
      );
    }

    return isMobile
        ? Column(
          children: [
            buildButton(),
            const SizedBox(width: 20),
            SelectableText('service@piyuo.com', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
            TextButton(
              onPressed: () {
                openLink('/terms');
              },
              child: Text(context.l.terms, style: TextStyle(fontSize: 18, color: Colors.black)),
            ),
            TextButton(
              onPressed: () {
                openLink('/privacy');
              },
              child: Text(context.l.privacy, style: TextStyle(fontSize: 18, color: Colors.black)),
            ),
          ],
        )
        : Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            buildButton(),
            const SizedBox(width: 20),
            SelectableText('service@piyuo.com', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
            TextButton(
              onPressed: () {
                openLink('/terms');
              },
              child: Text(context.l.terms, style: TextStyle(fontSize: 18, color: Colors.black)),
            ),
            TextButton(
              onPressed: () {
                openLink('/privacy');
              },
              child: Text(context.l.privacy, style: TextStyle(fontSize: 18, color: Colors.black)),
            ),
          ],
        );
  }
}
