import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:video_player/video_player.dart';

class IndexPageProvider extends ChangeNotifier {
  /// video controller for the screenshot video
  final VideoPlayerController videoController = VideoPlayerController.asset('assets/videos/screenshot.webm');

  /// scroll controller for the page bookmark
  final ScrollController scrollController = ScrollController();

  /// key for the bookmark download
  final GlobalKey bookmarkDownloadKey = GlobalKey();

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

  /// scroll to the bookmark
  void scrollToKey(GlobalKey key) {
    final context = key.currentContext;
    if (context != null) {
      Scrollable.ensureVisible(context, duration: const Duration(milliseconds: 500), curve: Curves.easeInOut);
    }
  }

  /// scroll to the top of the page
  void scrollToTop() {
    scrollController.position.animateTo(0, duration: const Duration(milliseconds: 500), curve: Curves.easeInOut);
  }
}
