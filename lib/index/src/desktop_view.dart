import 'package:flutter/material.dart';

class DesktopView extends StatelessWidget {
  const DesktopView({
    required this.title,
    required this.desc,
    required this.imagePath,
    required this.isMobile,
    super.key,
  });

  /// whether the device is mobile or not
  final bool isMobile;

  /// the title
  final String title;

  /// the description
  final String desc;

  /// the image
  final String imagePath;

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    return Column(
      children: [
        SelectableText(title, style: isMobile ? textTheme.headlineSmall : textTheme.headlineMedium),
        SelectableText(desc, style: isMobile ? textTheme.bodySmall : textTheme.bodyMedium, textAlign: TextAlign.center),
        const SizedBox(height: 20),
        SizedBox(width: 960, child: Image.asset('assets/images/$imagePath')),
      ],
    );
  }
}
