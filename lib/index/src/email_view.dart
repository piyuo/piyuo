import 'package:flutter/material.dart';
import 'package:libcli/utils/utils.dart' as utils;
import 'package:piyuo/l10n/l10n.dart';

class EmailView extends StatelessWidget {
  const EmailView({required this.isMobile, super.key});

  /// whether the device is mobile or not
  final bool isMobile;

  @override
  Widget build(BuildContext context) {
    buildButton() {
      return ElevatedButton(
        onPressed: () {
          utils.openMailTo('service@piyuo.com', '', '');
        },
        style: ElevatedButton.styleFrom(
          backgroundColor: Colors.grey.shade900,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(25)),
        ),
        child: Text(context.l.index_email_us, style: TextStyle(fontSize: 20, color: Colors.white)),
      );
    }

    buildEmailAddress() {
      return Text('service@piyuo.com', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18));
    }

    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [buildButton(), const SizedBox(width: 20), buildEmailAddress()],
    );
  }
}
