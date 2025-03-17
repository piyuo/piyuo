import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import 'package:video_player/video_player.dart';

class IndexPageProvider extends ChangeNotifier {
  final VideoPlayerController videoController = VideoPlayerController.asset('assets/videos/screenshot.webm');

  IndexPageProvider() {
    videoController.initialize().then((_) async {
      notifyListeners();
      await videoController.setVolume(0);
      await videoController.play();
      await videoController.setLooping(true);
    });
  }

  /// of get BranchModel from context
  static IndexPageProvider of(BuildContext context) {
    return Provider.of<IndexPageProvider>(context, listen: false);
  }

  /// set locale to the selected language
  Future<void> setLocale(Locale locale) async {
    Intl.defaultLocale = locale.toString();
    notifyListeners();
  }
}
