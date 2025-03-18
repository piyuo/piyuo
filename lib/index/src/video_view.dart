import 'package:flutter/material.dart';
import 'package:piyuo/l10n/l10n.dart';
import 'package:video_player/video_player.dart';

class VideoView extends StatelessWidget {
  const VideoView({required this.videoController, required this.isMobile, super.key});

  /// whether the device is mobile or not
  final bool isMobile;

  /// video controller for the screenshot video
  final VideoPlayerController videoController;

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return Column(
      children: [
        Text(context.l.index_video_title, style: isMobile ? textTheme.headlineSmall : textTheme.headlineMedium),
        const SizedBox(height: 10),
        Text(
          context.l.index_video_desc,
          style: isMobile ? textTheme.bodySmall : textTheme.bodyMedium,
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 20),
        SizedBox(
          width: 960,
          //          height: 540,
          child:
              videoController.value.isInitialized
                  ? AspectRatio(aspectRatio: videoController.value.aspectRatio, child: VideoPlayer(videoController))
                  : SizedBox.shrink(),
        ),
      ],
    );
  }
}
