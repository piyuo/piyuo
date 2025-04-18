import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:piyuo/l10n/l10n.dart';

import 'open_link.dart';

class DownloadView extends StatelessWidget {
  const DownloadView({required this.isMobile, super.key});

  /// whether the device is mobile or not
  final bool isMobile;

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    buildButton({required String image, String? url, String? qrCode, String? desc}) {
      return MouseRegion(
        cursor: SystemMouseCursors.click,
        child: GestureDetector(
          onTap: url != null ? () => openLink(url) : null,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              SizedBox(width: 300, child: Image.asset('assets/images/$image')),
              if (desc != null)
                SelectableText(
                  desc,
                  style: isMobile ? textTheme.bodySmall : textTheme.bodyMedium,
                  textAlign: TextAlign.center,
                ),
              if (qrCode != null)
                ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Padding(
                    padding: const EdgeInsets.only(top: 5),
                    child: SvgPicture.asset('assets/images/$qrCode', width: 300),
                  ),
                ),
              const SizedBox(height: 10),
              if (url == null && desc == null)
                SelectableText(
                  context.l.index_download_soon,
                  style: isMobile ? textTheme.bodySmall : textTheme.bodyMedium,
                  textAlign: TextAlign.center,
                ),
            ],
          ),
        ),
      );
    }

    final appleBtn = buildButton(
      image: 'apple.webp',
      qrCode: 'app-store.svg',
      url: 'https://apps.apple.com/app/piyuo-counter/id6743642606',
    );

    final androidTesterDesc =
        'Our Android app is in closed testing on the Google Play Store. If you\'re interested and have a Google account, email us and we\'ll add you to the tester list so you can try it out!';

    return Column(
      children: [
        SelectableText(context.l.index_download, style: isMobile ? textTheme.headlineSmall : textTheme.headlineMedium),
        const SizedBox(height: 20),

        isMobile
            ? Column(
              children: [
                appleBtn,
                const SizedBox(height: 10),
                buildButton(image: 'google.webp', desc: androidTesterDesc),
                const SizedBox(height: 10),
                buildButton(image: 'windows.webp'),
              ],
            )
            : Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(child: appleBtn),
                const SizedBox(width: 20),
                Expanded(child: buildButton(image: 'google.webp', desc: androidTesterDesc)),
                const SizedBox(width: 20),
                Expanded(child: buildButton(image: 'windows.webp')),
              ],
            ),
      ],
    );
  }
}
