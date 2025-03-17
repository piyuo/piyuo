import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:piyuo/l10n/l10n.dart';
import 'package:provider/provider.dart';
import 'package:video_player/video_player.dart';

import '../../language.dart';
import 'glass_container.dart';

const kMaxContentWidth = 1280.0;

const kHorizontalPadding = 10.0;

/// _load providers when loading screen show
Future<void> _load(BuildContext context) async {}

class IndexScreen extends StatelessWidget {
  const IndexScreen({this.loader = _load, super.key});

  /// loader is a function that will be called when the screen is loading
  final Future<void> Function(BuildContext) loader;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    final languages = Language.fromSupportedLocales(context);

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

          Widget buildLanguage() {
            return DropdownButton<Locale>(
              //isExpanded: true,
              //alignment: AlignmentDirectional.centerEnd,
              borderRadius: BorderRadius.circular(15),
              dropdownColor: Colors.white,
              underline: const SizedBox(),
              value: parseLocale(Intl.defaultLocale ?? 'en'),
              icon: const Icon(Icons.expand_more, color: Colors.black87),
              onChanged: (Locale? newValue) => indexPageProvider.setLocale(newValue!),
              items:
                  languages.map<DropdownMenuItem<Locale>>((language) {
                    return DropdownMenuItem<Locale>(
                      value: language.locale,
                      child: Text(language.name, style: TextStyle(color: Colors.black, fontSize: 20)),
                    );
                  }).toList(),
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
                Text(context.l.index_video_title, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 26)),
                Text(
                  context.l.index_video_desc,
                  style: TextStyle(fontSize: 26, color: Colors.grey.shade900),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 20),
                SizedBox(
                  width: 960,
                  height: 540,
                  child:
                      indexPageProvider._videoController.value.isInitialized
                          ? AspectRatio(
                            aspectRatio: indexPageProvider._videoController.value.aspectRatio,
                            child: VideoPlayer(indexPageProvider._videoController),
                          )
                          : SizedBox.shrink(),
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

          buildDesktop({required String title, required String desc, required String image}) {
            return Column(
              children: [
                Text(title, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 26)),
                Text(desc, style: TextStyle(fontSize: 26, color: Colors.grey.shade900), textAlign: TextAlign.center),
                const SizedBox(height: 20),
                SizedBox(width: 960, child: Image.asset('assets/images/$image')),
              ],
            );
          }

          buildButton({required String image}) {
            return SizedBox(
              width: 350,
              child: Column(
                children: [
                  SizedBox(width: 960, child: Image.asset('assets/images/$image')),
                  const SizedBox(height: 20),
                  Text(context.l.index_download_soon, style: TextStyle(fontSize: 20, color: Colors.grey.shade900)),
                  SizedBox(height: 200),
                ],
              ),
            );
          }

          buildDownload() {
            return Column(
              children: [
                Text(context.l.index_download, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 32)),
                Text(
                  context.l.index_download_available,
                  style: TextStyle(fontSize: 26, color: Colors.grey.shade900),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    buildButton(image: 'apple.webp'),
                    const SizedBox(width: 20),
                    buildButton(image: 'google.webp'),
                    const SizedBox(width: 20),
                    buildButton(image: 'windows.webp'),
                  ],
                ),
              ],
            );
          }

          buildEmailUs() {
            return Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.grey.shade900,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(25)),
                  ),
                  child: Text(context.l.index_email_us, style: TextStyle(fontSize: 72, color: Colors.white)),
                ),
                const SizedBox(width: 20),
                Text('service@piyuo.com', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 32)),
              ],
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
                buildLanguage(),
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
                                      title: context.l.index_1,
                                      desc: context.l.index_1_desc,
                                      image: 'highlight-1.webp',
                                    ),
                                  ),
                                ),
                                SizedBox(width: 30),
                                Expanded(
                                  child: GlassContainer(
                                    child: buildHighlight(
                                      title: context.l.index_2,
                                      desc: context.l.index_2_desc,
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
                                      title: context.l.index_3,
                                      desc: context.l.index_3_desc,
                                      image: 'highlight-3.webp',
                                    ),
                                  ),
                                ),
                                SizedBox(width: 30),
                                Expanded(
                                  child: GlassContainer(
                                    child: buildHighlight(
                                      title: context.l.index_4,
                                      desc: context.l.index_4_desc,
                                      image: 'highlight-4.webp',
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 30),
                          restraintWidth(
                            GlassContainer(
                              padding: const EdgeInsets.all(40),
                              child: buildDesktop(
                                title: context.l.index_desktop_title,
                                desc: context.l.index_desktop_desc,
                                image: 'desktop-1.webp',
                              ),
                            ),
                          ),
                          const SizedBox(height: 30),
                          restraintWidth(
                            GlassContainer(
                              padding: const EdgeInsets.all(40),
                              child: buildDesktop(
                                title: context.l.index_desktop2_title,
                                desc: context.l.index_desktop2_desc,
                                image: 'desktop-2.webp',
                              ),
                            ),
                          ),
                          const SizedBox(height: 30),
                          restraintWidth(GlassContainer(padding: const EdgeInsets.all(40), child: buildDownload())),
                          const SizedBox(height: 30),
                          restraintWidth(GlassContainer(padding: const EdgeInsets.all(40), child: buildEmailUs())),
                          const SizedBox(height: 60),
                          Center(
                            child: Text('piyuo.com', style: TextStyle(color: colorScheme.onPrimary, fontSize: 24)),
                          ),
                          const SizedBox(height: 30),
                        ],
                      ),
                    ),
                  ],
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
