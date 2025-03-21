import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:video_player/video_player.dart';

class ScreenshotPlayer extends StatelessWidget {
  const ScreenshotPlayer({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<ScreenshotProvider>(
      create: (context) => ScreenshotProvider(),
      child: Consumer<ScreenshotProvider>(
        builder: (context, screenshotProvider, _) {
          return Container(
            width: 960,
            height: 540,
            decoration: BoxDecoration(
              image: DecorationImage(image: AssetImage('assets/images/screenshot.webp'), fit: BoxFit.cover),
            ),
            child:
                screenshotProvider.videoController.value.isInitialized
                    ? FittedBox(
                      fit: BoxFit.cover, // 確保影片填滿
                      child: SizedBox(
                        width: screenshotProvider.videoController.value.size.width,
                        height: screenshotProvider.videoController.value.size.height,
                        child: VideoPlayer(screenshotProvider.videoController),
                      ),
                    )
                    : null,
          );
        },
      ),
    );
  }
}

class ScreenshotProvider extends ChangeNotifier {
  /// video controller for the screenshot video
  final VideoPlayerController videoController = VideoPlayerController.asset('assets/videos/screenshot.mp4');

  ScreenshotProvider() {
    videoController.initialize().then((_) async {
      notifyListeners();
      await videoController.setVolume(0);
      await videoController.play();
      await videoController.setLooping(true);
    });
  }

  /// dispose the video controller
  @override
  void dispose() {
    videoController.dispose();
    super.dispose();
  }
}
