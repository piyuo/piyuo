import 'dart:ui';

import 'package:flutter/material.dart';

class GlassContainer extends StatelessWidget {
  const GlassContainer({required this.child, this.padding = const EdgeInsets.fromLTRB(20, 10, 20, 10), super.key});

  /// the child widget to be displayed in the glass container
  final Widget child;

  /// the padding of the glass container
  final EdgeInsetsGeometry padding;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 15, sigmaY: 15),
        child: Container(
          padding: padding,
          decoration: BoxDecoration(
            color: Colors.white.withValues(alpha: 0.2), // 半透明背景
            borderRadius: BorderRadius.circular(20), // 圓角
            border: Border.all(color: Colors.white.withValues(alpha: 0.3)), // 白色邊框
          ),
          alignment: Alignment.center,
          child: child,
        ),
      ),
    );
  }
}
