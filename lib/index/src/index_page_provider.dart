import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class IndexPageProvider extends ChangeNotifier {
  int current = 0;

  /// of get BranchModel from context
  static IndexPageProvider of(BuildContext context) {
    return Provider.of<IndexPageProvider>(context, listen: false);
  }

  /// scrollController is screen scroll controller
  final scrollController = ScrollController();
}
