import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:piyuo/l10n/l10n.dart';
import 'package:url_launcher/link.dart';

import 'open_link.dart';

class DownloadView extends StatelessWidget {
  const DownloadView({required this.isMobile, super.key});

  /// whether the device is mobile or not
  final bool isMobile;

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    buildButton({required String image, String? url, String? qrCode, String? desc, String? groupLink}) {
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
              if (groupLink != null)
                Link(
                  uri: Uri.parse(groupLink),
                  target: LinkTarget.blank,
                  builder:
                      (context, followLink) => TextButton(
                        onPressed: followLink,
                        child: Text(
                          groupLink,
                          style: TextStyle(
                            color: Colors.blue.shade800,
                            fontSize: 23,
                            decoration: TextDecoration.underline,
                            decorationColor: Colors.blue.shade800,
                          ),
                        ),
                      ),
                ),
            ],
          ),
        ),
      );
    }

    final appleBtn = buildButton(
      image: 'apple.webp',
      qrCode: 'store-apple.svg',
      url: 'https://apps.apple.com/app/piyuo-counter/id6743642606',
    );

    final windowsBtn = buildButton(
      image: 'windows.webp',
      qrCode: 'store-microsoft.svg',
      url: 'https://apps.microsoft.com/detail/9nz6vcxrjjzd',
    );

    final androidTesterDesc =
        'Our Android app is currently in closed testing on the Google Play Store. If you\'re interested in early access, join our Google Group to participate and download the app';

    final androidGroup = 'https://groups.google.com/g/piyuo-counter-beta-testers';

    return Column(
      children: [
        SelectableText(context.l.index_download, style: isMobile ? textTheme.headlineSmall : textTheme.headlineMedium),
        const SizedBox(height: 20),

        isMobile
            ? Column(
              children: [
                appleBtn,
                const SizedBox(height: 10),
                buildButton(image: 'google.webp', desc: androidTesterDesc, groupLink: androidGroup),
                const SizedBox(height: 10),
                windowsBtn,
              ],
            )
            : Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(child: appleBtn),
                const SizedBox(width: 20),
                Expanded(child: buildButton(image: 'google.webp', desc: androidTesterDesc, groupLink: androidGroup)),
                const SizedBox(width: 20),
                Expanded(child: windowsBtn),
              ],
            ),
      ],
    );
  }
}
