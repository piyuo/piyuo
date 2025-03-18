import 'package:flutter/material.dart';
import 'package:piyuo/l10n/l10n.dart';

import 'glass_container.dart';

/// the padding of the picture container
const _kPicContainerPadding = const EdgeInsets.fromLTRB(40, 40, 40, 0);

class FeatureView extends StatelessWidget {
  const FeatureView({required this.contentMargin, required this.isMobile, super.key});

  /// whether the device is mobile or not
  final bool isMobile;

  /// the margin between the content
  final double contentMargin;

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    buildPic({required String title, required String desc, required String image}) {
      return Container(
        height: 620,
        alignment: Alignment.bottomCenter,
        child: Column(
          children: [
            Text(title, style: isMobile ? textTheme.headlineSmall : textTheme.headlineMedium),
            Expanded(child: Text(desc, style: isMobile ? textTheme.bodySmall : textTheme.bodyMedium)),
            SizedBox(height: 20),
            SizedBox(child: Image.asset('assets/images/$image')),
          ],
        ),
      );
    }

    return isMobile
        ? Column(
          children: [
            GlassContainer(
              padding: _kPicContainerPadding,
              child: buildPic(title: context.l.index_1, desc: context.l.index_1_desc, image: 'highlight-1.webp'),
            ),
            SizedBox(height: contentMargin),
            GlassContainer(
              padding: _kPicContainerPadding,
              child: buildPic(title: context.l.index_2, desc: context.l.index_2_desc, image: 'highlight-2.webp'),
            ),
            SizedBox(height: contentMargin),
            GlassContainer(
              padding: _kPicContainerPadding,
              child: buildPic(title: context.l.index_3, desc: context.l.index_3_desc, image: 'highlight-3.webp'),
            ),
            SizedBox(height: contentMargin),
            GlassContainer(
              padding: _kPicContainerPadding,
              child: buildPic(title: context.l.index_4, desc: context.l.index_4_desc, image: 'highlight-4.webp'),
            ),
          ],
        )
        : Column(
          children: [
            Row(
              children: [
                Expanded(
                  child: GlassContainer(
                    padding: _kPicContainerPadding,
                    child: buildPic(title: context.l.index_1, desc: context.l.index_1_desc, image: 'highlight-1.webp'),
                  ),
                ),
                SizedBox(width: contentMargin),
                Expanded(
                  child: GlassContainer(
                    padding: _kPicContainerPadding,
                    child: buildPic(title: context.l.index_2, desc: context.l.index_2_desc, image: 'highlight-2.webp'),
                  ),
                ),
              ],
            ),

            const SizedBox(height: 30),

            Row(
              children: [
                Expanded(
                  child: GlassContainer(
                    padding: _kPicContainerPadding,
                    child: buildPic(title: context.l.index_3, desc: context.l.index_3_desc, image: 'highlight-3.webp'),
                  ),
                ),
                SizedBox(width: contentMargin),
                Expanded(
                  child: GlassContainer(
                    padding: _kPicContainerPadding,
                    child: buildPic(title: context.l.index_4, desc: context.l.index_4_desc, image: 'highlight-4.webp'),
                  ),
                ),
              ],
            ),
          ],
        );
  }
}
