import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:libcli/utils/utils.dart' as utils;
import 'package:piyuo/l10n/l10n.dart';
import 'package:provider/provider.dart';

import '../../language.dart';
import 'cover_view.dart';
import 'feature_view.dart';
import 'glass_container.dart';
import 'index_page_provider.dart';
import 'video_view.dart';

/// the max width of the content
const kMaxContentWidth = 1280.0;

/// the horizontal padding of the content and app bar
const kHorizontalPadding = 20.0;

/// the margin between content
const kContentMargin = 30.0;

/// the max width of the mobile device
const kMobileMaxWidth = 750.0;

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
    final textTheme = Theme.of(context).textTheme;

    return MultiProvider(
      providers: [ChangeNotifierProvider<IndexPageProvider>(create: (context) => IndexPageProvider())],
      child: Consumer<IndexPageProvider>(
        builder: (context, indexPageProvider, _) {
          Widget restraintWidth(Widget child) {
            return Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: kMaxContentWidth),
                //child: Padding(padding: EdgeInsets.symmetric(horizontal: kHorizontalPadding), child: child),
                child: child,
              ),
            );
          }

          Widget buildLanguage() {
            return SizedBox(
              height: 26,
              child: DropdownButton<Locale>(
                alignment: AlignmentDirectional.centerEnd,
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
                        child: Text(language.name, style: textTheme.titleMedium),
                      );
                    }).toList(),
              ),
            );
          }

          buildDesktop({required String title, required String desc, required String image}) {
            return Column(
              children: [
                Text(title, style: textTheme.headlineMedium),
                Text(desc, style: textTheme.bodyMedium, textAlign: TextAlign.center),
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
                  Text(context.l.index_download_soon, style: textTheme.bodyMedium, textAlign: TextAlign.center),
                  SizedBox(height: 100),
                ],
              ),
            );
          }

          buildDownload() {
            return Column(
              children: [
                Text(context.l.index_download, style: textTheme.headlineMedium),
                Text(context.l.index_download_available, style: textTheme.bodyMedium, textAlign: TextAlign.center),
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
                  onPressed: () {
                    utils.openMailTo('service@piyuo.com', '', '');
                  },
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
                TextButton(
                  onPressed: () => indexPageProvider.scrollToTop(),
                  child: Text('piyuo.com', style: textTheme.titleLarge),
                ),

                const SizedBox(width: 24),
                TextButton(
                  onPressed: () => indexPageProvider.scrollToKey(indexPageProvider.bookmarkDownloadKey),
                  child: Text(context.l.index_download, style: textTheme.titleMedium),
                ),

                Spacer(),
                buildLanguage(),
              ],
            );
          }

          return LayoutBuilder(
            builder: (BuildContext context, BoxConstraints constraints) {
              final isMobile = constraints.maxWidth < kMobileMaxWidth;
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
                      controller: indexPageProvider.scrollController,
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: kHorizontalPadding),
                        child: restraintWidth(
                          Column(
                            children: [
                              const SizedBox(height: 85),
                              GlassContainer(padding: const EdgeInsets.all(20), child: CoverView(isMobile: isMobile)),
                              const SizedBox(height: kContentMargin),
                              GlassContainer(
                                padding: const EdgeInsets.all(40),
                                child: VideoView(
                                  isMobile: isMobile,
                                  videoController: indexPageProvider.videoController,
                                ),
                              ),
                              const SizedBox(height: kContentMargin),
                              FeatureView(contentMargin: kBottomNavigationBarHeight, isMobile: isMobile),
                              const SizedBox(height: kContentMargin),

                              GlassContainer(
                                padding: const EdgeInsets.all(40),
                                child: buildDesktop(
                                  title: context.l.index_desktop_title,
                                  desc: context.l.index_desktop_desc,
                                  image: 'desktop-1.webp',
                                ),
                              ),

                              const SizedBox(height: kContentMargin),

                              GlassContainer(
                                padding: const EdgeInsets.all(40),
                                child: buildDesktop(
                                  title: context.l.index_desktop2_title,
                                  desc: context.l.index_desktop2_desc,
                                  image: 'desktop-2.webp',
                                ),
                              ),

                              const SizedBox(height: kContentMargin),

                              GlassContainer(
                                key: indexPageProvider.bookmarkDownloadKey,
                                padding: const EdgeInsets.all(40),
                                child: buildDownload(),
                              ),

                              const SizedBox(height: kContentMargin),
                              GlassContainer(padding: const EdgeInsets.all(40), child: buildEmailUs()),
                              const SizedBox(height: 60),
                              Center(
                                child: Text('piyuo.com', style: TextStyle(color: colorScheme.onPrimary, fontSize: 24)),
                              ),
                              const SizedBox(height: kContentMargin),
                            ],
                          ),
                        ),
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
