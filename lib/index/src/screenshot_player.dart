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
            // add decoration image
            decoration: BoxDecoration(
              image: DecorationImage(image: AssetImage('assets/images/screenshot.webp'), fit: BoxFit.cover),
            ),
            //          height: 540,
            child:
                screenshotProvider.videoController.value.isPlaying
                    ? AspectRatio(
                      aspectRatio: screenshotProvider.videoController.value.aspectRatio,
                      child: VideoPlayer(screenshotProvider.videoController),
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
  final VideoPlayerController videoController = VideoPlayerController.asset('assets/videos/screenshot.webm');

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
