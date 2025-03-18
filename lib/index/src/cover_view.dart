import 'package:flutter/material.dart';
import 'package:piyuo/l10n/l10n.dart';

class CoverView extends StatelessWidget {
  const CoverView({required this.isMobile, super.key});

  /// whether the device is mobile or not
  final bool isMobile;

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return isMobile
        ? Column(
          children: [
            SizedBox(width: 160, child: Image.asset('assets/images/icon.webp')),
            const SizedBox(height: 20),
            Text(context.l.app_name, style: textTheme.displaySmall),
            const SizedBox(height: 20),
            Image.asset('assets/images/app.webp', width: double.infinity, fit: BoxFit.cover),
            const SizedBox(height: 20),
            Text(context.l.app_desc, style: textTheme.bodySmall, textAlign: TextAlign.center),
          ],
        )
        : Row(
          children: [
            Expanded(
              child: Column(
                children: [
                  SizedBox(width: 160, child: Image.asset('assets/images/icon.webp')),
                  const SizedBox(height: 20),
                  Text(context.l.app_name, style: textTheme.displayLarge),
                  const SizedBox(height: 20),
                  Text(context.l.app_desc, style: textTheme.bodyMedium, textAlign: TextAlign.center),
                ],
              ),
            ),
            const SizedBox(width: 20),
            SizedBox(width: 400, child: Image.asset('assets/images/app.webp')),
          ],
        );
  }
}
