import 'package:flutter/material.dart';
import 'package:piyuo/l10n/l10n.dart';

class DownloadView extends StatelessWidget {
  const DownloadView({required this.isMobile, super.key});

  /// whether the device is mobile or not
  final bool isMobile;

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    buildButton({required String image}) {
      return Column(
        children: [
          if (isMobile) SizedBox(width: 200, child: Image.asset('assets/images/$image')),
          if (!isMobile) Image.asset('assets/images/$image'),
          const SizedBox(height: 10),
          Text(
            context.l.index_download_soon,
            style: isMobile ? textTheme.bodySmall : textTheme.bodyMedium,
            textAlign: TextAlign.center,
          ),
        ],
      );
    }

    return Column(
      children: [
        Text(context.l.index_download, style: textTheme.headlineMedium),
        Text(context.l.index_download_available, style: textTheme.bodyMedium, textAlign: TextAlign.center),
        const SizedBox(height: 20),

        isMobile
            ? Column(
              children: [
                buildButton(image: 'apple.webp'),
                const SizedBox(height: 10),
                buildButton(image: 'google.webp'),
                const SizedBox(height: 10),
                buildButton(image: 'windows.webp'),
              ],
            )
            : Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Expanded(child: buildButton(image: 'apple.webp')),
                const SizedBox(width: 20),
                Expanded(child: buildButton(image: 'google.webp')),
                const SizedBox(width: 20),
                Expanded(child: buildButton(image: 'windows.webp')),
              ],
            ),
      ],
    );
  }
}
