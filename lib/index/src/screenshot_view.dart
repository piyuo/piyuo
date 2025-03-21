import 'package:flutter/material.dart';
import 'package:piyuo/l10n/l10n.dart';

class ScreenshotView extends StatelessWidget {
  const ScreenshotView({required this.isMobile, super.key});

  /// whether the device is mobile or not
  final bool isMobile;

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return Column(
      children: [
        Text(
          context.l.index_video_title,
          style: isMobile ? textTheme.headlineSmall : textTheme.headlineMedium,
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 10),
        Text(
          context.l.index_video_desc,
          style: isMobile ? textTheme.bodySmall : textTheme.bodyMedium,
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}
