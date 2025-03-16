import 'package:flutter/material.dart';
import 'package:piyuo/l10n/l10n.dart';
import 'package:provider/provider.dart';
import 'package:video_player/video_player.dart';

import 'glass_container.dart';

const kMaxContentWidth = 1280.0;

final kHorizontalPadding = true ? 10.0 : 28.0;

/// _load providers when loading screen show
Future<void> _load(BuildContext context) async {}

class IndexScreen extends StatelessWidget {
  const IndexScreen({this.loader = _load, super.key});

  /// loader is a function that will be called when the screen is loading
  final Future<void> Function(BuildContext) loader;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    return MultiProvider(
      providers: [ChangeNotifierProvider<IndexPageProvider>(create: (context) => IndexPageProvider())],
      child: Consumer<IndexPageProvider>(
        builder: (context, indexPageProvider, _) {
          Widget restraintWidth(Widget child) {
            return Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: kMaxContentWidth),
                child: Padding(padding: EdgeInsets.symmetric(horizontal: kHorizontalPadding), child: child),
              ),
            );
          }

          buildTitle() {
            return Row(
              children: [
                Expanded(
                  child: Column(
                    children: [
                      SizedBox(width: 160, child: Image.asset('assets/images/icon.webp')),
                      Text(context.l.app_name, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 96)),
                      Text(
                        context.l.app_desc,
                        style: TextStyle(fontSize: 26, color: Colors.grey.shade900),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 20),
                SizedBox(width: 303, child: Image.asset('assets/images/app.webp')),
              ],
            );
          }

          buildVideo() {
            return Column(
              children: [
                Text(context.l.video_title, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 26)),
                Text(
                  context.l.video_desc,
                  style: TextStyle(fontSize: 26, color: Colors.grey.shade900),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 20),
                SizedBox(
                  width: 1024,
                  child:
                      indexPageProvider._videoController.value.isInitialized
                          ? AspectRatio(
                            aspectRatio: indexPageProvider._videoController.value.aspectRatio,
                            child: VideoPlayer(indexPageProvider._videoController),
                          )
                          : const CircularProgressIndicator(),
                ),
              ],
            );
          }

          buildHighlight({required String title, required String desc, required String image}) {
            return Align(
              alignment: Alignment.bottomCenter,
              child: Column(
                children: [
                  Text(title, style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold)),
                  Text(desc, style: TextStyle(fontSize: 20)),
                  SizedBox(height: 20),
                  SizedBox(width: 490, child: Image.asset('assets/images/$image')),
                ],
              ),
            );
          }

          buildAppBar() {
            return Row(
              children: [
                Text('piyuo', style: TextStyle(fontSize: 18, color: Colors.grey.shade900)),
                Text('.com', style: TextStyle(fontSize: 18, color: Colors.grey.shade600)),
                const SizedBox(width: 24),
                Text(
                  'Counter',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.grey.shade900),
                ),
                const SizedBox(width: 24),
                Text(
                  context.l.index_download,
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.grey.shade900),
                ),
                Spacer(),
                Text(
                  context.l.index_language,
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.grey.shade900),
                ),
              ],
            );
          }

          return LayoutBuilder(
            builder: (BuildContext context, BoxConstraints constraints) {
              return Scaffold(
                appBar: AppBar(
                  toolbarHeight: 68,
                  title: restraintWidth(GlassContainer(child: buildAppBar())),
                  backgroundColor: Colors.transparent,
                  elevation: 0,
                  scrolledUnderElevation: 4,
                ),
                extendBody: true,
                extendBodyBehindAppBar: true,
                body: Stack(
                  children: [
                    Positioned.fill(child: Image.asset('assets/images/background.webp', fit: BoxFit.cover)),
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          const SizedBox(height: 85),
                          restraintWidth(GlassContainer(padding: const EdgeInsets.all(40), child: buildTitle())),
                          const SizedBox(height: 30),
                          restraintWidth(GlassContainer(padding: const EdgeInsets.all(40), child: buildVideo())),
                          const SizedBox(height: 30),
                          restraintWidth(
                            Row(
                              children: [
                                Expanded(
                                  child: GlassContainer(
                                    padding: const EdgeInsets.fromLTRB(20, 10, 20, 0),
                                    child: buildHighlight(
                                      title: '24小時追蹤',
                                      desc: '可以檢視任何時段的人流數量',
                                      image: 'highlight-1.webp',
                                    ),
                                  ),
                                ),
                                SizedBox(width: 30),
                                Expanded(
                                  child: GlassContainer(
                                    child: buildHighlight(
                                      title: '同時追蹤多種物件',
                                      desc: '可以同時計算行人，汽車，腳踏車等數量',
                                      image: 'highlight-2.webp',
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 30),
                          restraintWidth(
                            Row(
                              children: [
                                Expanded(
                                  child: GlassContainer(
                                    child: buildHighlight(
                                      title: '24小時追蹤',
                                      desc: '可以檢視任何時段的人流數量',
                                      image: 'highlight-1.webp',
                                    ),
                                  ),
                                ),
                                SizedBox(width: 30),
                                Expanded(
                                  child: GlassContainer(
                                    child: buildHighlight(
                                      title: '24小時追蹤',
                                      desc: '可以檢視任何時段的人流數量',
                                      image: 'highlight-1.webp',
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Container(height: 600),
                        ],
                      ),
                    ),
                  ],
                ),

                bottomNavigationBar: Container(
                  height: 60,
                  color: Colors.transparent,
                  child: Center(
                    child: Text('piyuo.com', style: TextStyle(color: colorScheme.onPrimary, fontSize: 24)), // 底部導航欄
                  ),
                ),
              );
            },
          );
        },
      ),
    );
  }
}

class IndexPageProvider extends ChangeNotifier {
  final VideoPlayerController _videoController = VideoPlayerController.asset('assets/videos/screenshot.webm');

  IndexPageProvider() {
    _videoController.initialize().then((_) async {
      notifyListeners();
      await _videoController.setVolume(0);
      await _videoController.play();
      await _videoController.setLooping(true);
      notifyListeners();
    });
  }

  /// of get BranchModel from context
  static IndexPageProvider of(BuildContext context) {
    return Provider.of<IndexPageProvider>(context, listen: false);
  }
}
