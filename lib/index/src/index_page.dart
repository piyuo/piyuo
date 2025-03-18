import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:piyuo/l10n/l10n.dart';
import 'package:provider/provider.dart';

import '../../language.dart';
import 'cover_view.dart';
import 'desktop_view.dart';
import 'download_view.dart';
import 'email_view.dart';
import 'feature_view.dart';
import 'glass_container.dart';
import 'index_page_provider.dart';
import 'video_view.dart';

/// the max width of the content
const _kMaxContentWidth = 1280.0;

/// the horizontal padding of the content and app bar
const _kHorizontalPadding = 20.0;

/// the margin between content
const _kContentMargin = 30.0;

/// the max width of the mobile device
const _kMobileMaxWidth = 750.0;

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
                constraints: const BoxConstraints(maxWidth: _kMaxContentWidth),
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
              final isMobile = constraints.maxWidth < _kMobileMaxWidth;
              final contentPadding = isMobile ? 20.0 : 40.0;
              final contentEdgeInsets = EdgeInsets.all(contentPadding);
              final safePadding = MediaQuery.of(context).padding;

              return Scaffold(
                appBar: AppBar(
                  toolbarHeight: 68,
                  title: restraintWidth(
                    GlassContainer(padding: EdgeInsets.all(isMobile ? 0 : 10), child: buildAppBar()),
                  ),
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
                        padding: const EdgeInsets.symmetric(horizontal: _kHorizontalPadding),
                        child: restraintWidth(
                          Column(
                            children: [
                              SizedBox(height: 85 + safePadding.top),
                              GlassContainer(padding: contentEdgeInsets, child: CoverView(isMobile: isMobile)),
                              const SizedBox(height: _kContentMargin),
                              GlassContainer(
                                padding: contentEdgeInsets,
                                child: VideoView(
                                  isMobile: isMobile,
                                  videoController: indexPageProvider.videoController,
                                ),
                              ),
                              const SizedBox(height: _kContentMargin),
                              FeatureView(contentMargin: _kContentMargin, isMobile: isMobile),
                              const SizedBox(height: _kContentMargin),

                              GlassContainer(
                                padding: contentEdgeInsets,
                                child: DesktopView(
                                  isMobile: isMobile,
                                  title: context.l.index_desktop_title,
                                  desc: context.l.index_desktop_desc,
                                  imagePath: 'desktop-1.webp',
                                ),
                              ),

                              const SizedBox(height: _kContentMargin),

                              GlassContainer(
                                padding: contentEdgeInsets,
                                child: DesktopView(
                                  isMobile: isMobile,
                                  title: context.l.index_desktop2_title,
                                  desc: context.l.index_desktop2_desc,
                                  imagePath: 'desktop-2.webp',
                                ),
                              ),

                              const SizedBox(height: _kContentMargin),

                              GlassContainer(
                                padding: contentEdgeInsets,
                                key: indexPageProvider.bookmarkDownloadKey,
                                child: DownloadView(isMobile: isMobile),
                              ),

                              const SizedBox(height: _kContentMargin),
                              const SizedBox(height: 20),
                              EmailView(isMobile: isMobile),
                              const SizedBox(height: 20),
                              Center(
                                child: Text('piyuo.com', style: TextStyle(color: colorScheme.onPrimary, fontSize: 24)),
                              ),
                              const SizedBox(height: _kContentMargin),
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
