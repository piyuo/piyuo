import 'dart:ui';

import 'package:flutter/material.dart';

class GlassContainer extends StatelessWidget {
  const GlassContainer({
    required this.child,
    this.padding = const EdgeInsets.fromLTRB(20, 10, 20, 10),
    this.margin = EdgeInsets.zero,
    super.key,
  });

  /// the child widget to be displayed in the glass container
  final Widget child;

  /// the padding of the glass container
  final EdgeInsetsGeometry padding;

  /// the margin of the glass container
  final EdgeInsetsGeometry margin;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 15, sigmaY: 15),
        child: Container(
          padding: padding,
          margin: margin,
          decoration: BoxDecoration(
            color: Colors.white.withValues(alpha: 0.2),
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: Colors.white.withValues(alpha: 0.3)),
          ),
          alignment: Alignment.center,
          child: child,
        ),
      ),
    );
  }
}
