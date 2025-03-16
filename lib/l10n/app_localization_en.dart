// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localization.dart';

// ignore_for_file: type=lint

/// The translations for English (`en`).
class AppLocalizationEn extends AppLocalization {
  AppLocalizationEn([String locale = 'en']) : super(locale);

  @override
  String get index_download => 'Download';

  @override
  String get index_language => 'Language';

  @override
  String get app_name => 'Counter';

  @override
  String get app_desc => 'Want to know how many people pass by? This app uses your phone\'s camera to intelligently identify and automatically count pedestrians. No manual input required. Say goodbye to tedious counting and easily monitor traffic flow.';

  @override
  String get video_title => 'Your phone can now use AI to recognize pedestrians.';

  @override
  String get video_desc => 'No internet required. No need to manually count people with a traditional clicker. Just set up your phone to automatically track passing foot traffic.';

  @override
  String get back => 'Back';
}
