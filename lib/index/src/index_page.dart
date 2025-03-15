import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'glass_container.dart';
import 'index_page_provider.dart';

const kMaxContentWidth = 1024.0;

final kHorizontalPadding = true ? 10.0 : 28.0;

/// _load providers when loading screen show
Future<void> _load(BuildContext context) async {}

class IndexScreen extends StatelessWidget {
  const IndexScreen({this.loader = _load, super.key});

  /// loader is a function that will be called when the screen is loading
  final Future<void> Function(BuildContext) loader;

  @override
  Widget build(BuildContext context) {
    debugPrint('default font family: ${DefaultTextStyle.of(context).style.fontFamily}');
    final colorScheme = Theme.of(context).colorScheme;
    return MultiProvider(
      providers: [ChangeNotifierProvider<IndexPageProvider>(create: (context) => IndexPageProvider())],
      child: Consumer<IndexPageProvider>(
        builder: (context, indexScreenProvider, _) {
          Widget restraintWidth(Widget child) {
            return Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: kMaxContentWidth),
                child: Padding(padding: EdgeInsets.symmetric(horizontal: kHorizontalPadding), child: child),
              ),
            );
          }

          buildToolbar() {
            return Container(
              padding: const EdgeInsets.fromLTRB(0, 20, 0, 60),
              child: restraintWidth(
                Row(
                  children: [
                    Expanded(
                      child: Text(
                        'Create your online business with payment instantly',
                        style: TextStyle(fontWeight: FontWeight.bold),
                      ),
                    ),
                    const SizedBox(width: 20),
                    ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: colorScheme.secondary,
                        foregroundColor: colorScheme.onSecondary,
                      ),
                      onPressed: () {},
                      child: Text('hello'),
                    ),
                  ],
                ),
              ),
            );
          }

          buildContent() {
            return const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: EdgeInsets.only(top: 0),
                  child: Text('Your own website', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold)),
                ),
                Text('https://piyuo/yourname', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                Text('and QR code', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                SizedBox(height: 20),
                Padding(
                  padding: EdgeInsets.only(top: 20),
                  child: Text('Receive payment online', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold)),
                ),
                Text(
                  'Accept Credit card / Apple Pay / Google Pay',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                Text('Directly to your bank account', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                Padding(
                  padding: EdgeInsets.only(top: 20),
                  child: Text(
                    'We already built template for each business',
                    style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                  ),
                ),
                Text('Start using right away', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                Padding(
                  padding: EdgeInsets.only(top: 20),
                  child: Text('Everything is free', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold)),
                ),
                Text(
                  'No monthly fee / No apply fee / No Credit card required',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                Padding(
                  padding: EdgeInsets.only(top: 20),
                  child: Text('3%  + 30¢', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold)),
                ),
                Text(
                  'per successful card charge and that’s it',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 40),
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
                  'Download',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.grey.shade900),
                ),
                Spacer(),
                Text(
                  'Language',
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
                  backgroundColor: Colors.transparent, // 背景設為透明
                  elevation: 0, // 移除陰影
                ),
                extendBody: true,
                extendBodyBehindAppBar: true, // 允許內容延伸至 AppBar 背後
                body: Stack(
                  children: [
                    Positioned.fill(
                      child: Image.asset(
                        'assets/images/background.webp',
                        fit: BoxFit.cover, // 覆蓋整個螢幕
                      ),
                    ),
                    SingleChildScrollView(
                      child: Column(
                        children: [
                          const SizedBox(height: 60),
                          buildToolbar(),
                          const Divider(height: 1, thickness: 1),
                          buildContent(),
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
