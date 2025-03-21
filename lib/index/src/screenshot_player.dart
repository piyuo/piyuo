import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:video_player/video_player.dart';
import 'package:web/web.dart' as web;

class ScreenshotPlayer extends StatelessWidget {
  const ScreenshotPlayer({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<ScreenshotProvider>(
      create: (context) => ScreenshotProvider(),
      child: Consumer<ScreenshotProvider>(
        builder: (context, screenshotProvider, _) {
          return LayoutBuilder(
            builder: (context, constraints) {
              // scale the video player and background to fit the screen
              final scale = constraints.maxWidth / 960;
              final scaledWidth = 960 * scale;
              final scaledHeight = 540 * scale;
              return Container(
                width: scaledWidth,
                height: scaledHeight,
                decoration: BoxDecoration(
                  image: DecorationImage(image: AssetImage('assets/images/screenshot.webp'), fit: BoxFit.cover),
                ),
                child:
                    screenshotProvider.videoController.value.isInitialized
                        ? FittedBox(
                          fit: BoxFit.cover,
                          child: SizedBox(
                            width: scaledWidth,
                            height: scaledHeight,
                            child: VideoPlayer(screenshotProvider.videoController),
                          ),
                        )
                        : null,
              );
            },
          );
        },
      ),
    );
  }
}

class ScreenshotProvider extends ChangeNotifier {
  /// video controller for the screenshot video
  late final VideoPlayerController videoController;

  ScreenshotProvider() {
    videoController = VideoPlayerController.asset(_getVideoAssetPath());

    videoController.initialize().then((_) async {
      notifyListeners();
      await videoController.setVolume(0);
      await videoController.play();
      await videoController.setLooping(true);
    });
  }

  String _getVideoAssetPath() {
    if (kIsWeb) {
      try {
        final userAgent = web.window.navigator.userAgent.toLowerCase();
        if (userAgent.contains('chrome') && !userAgent.contains('edge') && !userAgent.contains('opr')) {
          return 'assets/videos/screenshot.webm';
        }
      } catch (e) {
        // Fallback to mp4 if there's any error in detection
      }
    }
    return 'assets/videos/screenshot.mp4';
  }

  /// dispose the video controller
  @override
  void dispose() {
    videoController.dispose();
    super.dispose();
  }
}
