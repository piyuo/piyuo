// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'localization.dart';

// ignore_for_file: type=lint

/// The translations for Japanese (`ja`).
class LocalizationJa extends Localization {
  LocalizationJa([String locale = 'ja']) : super(locale);

  @override
  String get index_download => 'ダウンロード';

  @override
  String get index_download_soon => '近日公開予定。';

  @override
  String get index_download_available => '2025年春に利用可能。';

  @override
  String get index_language => '言語';

  @override
  String get index_video_title => 'あなたのスマートフォンでAIを使って歩行者を認識できるようになりました。';

  @override
  String get index_video_desc => 'インターネット接続不要。従来のカウンターで手動で人数を数える必要なし。スマートフォンを設定するだけで、通行する人の流れを自動的に追跡できます。';

  @override
  String get index_1 => '24時間365日モニタリング';

  @override
  String get index_1_desc => '任意の時間帯の通行量をカウント表示。';

  @override
  String get index_2 => '複数物体追跡';

  @override
  String get index_2_desc => '歩行者、車、自転車などを同時にカウント';

  @override
  String get index_3 => 'カスタム検出ゾーン';

  @override
  String get index_3_desc => '特定のエリアの通行量をカウントするためのカスタム検出ゾーンを定義。';

  @override
  String get index_4 => '柔軟なカウンティングモード';

  @override
  String get index_4_desc => '検出ゾーン内に新しく現れる物体をカウントするか、静止している物体をカウントするかを選択可能。';

  @override
  String get index_desktop_title => 'デスクトップ版の利用可能性';

  @override
  String get index_desktop_desc => 'デスクトップ版も提供しています。iOS/Android/Mac/Windowsに対応しており、モバイルデバイスとウェブカメラ付きのデスクトップの両方を利用できます。デスクトップ版はさらに複数のビデオソースをサポートし、複数のストリームから同時にカウントすることが可能です。';

  @override
  String get index_desktop2_title => 'ライブストリームサポート';

  @override
  String get index_desktop2_desc => 'モバイルデバイスのカメラに加えて、録画されたビデオファイル、ウェブカム入力、RTSPなどのインターネットライブストリームもサポートしています。これにより、既存のデバイスに接続して、すぐに交通流の測定を開始できます。';

  @override
  String get index_email_us => 'メールでのお問い合わせ';

  @override
  String get app_name => 'カウンター';

  @override
  String get app_desc => 'どれだけの人が通過するか知りたいですか？このアプリはスマートフォンのカメラを使用して、歩行者をインテリジェントに識別し、自動的にカウントします。手動入力は不要です。面倒なカウント作業にさよならして、交通の流れを簡単にモニタリングしましょう。';

  @override
  String get video_desc => 'インターネット接続不要。従来のカウンターで手動で人数を数える必要なし。スマートフォンを設定するだけで、通行する人の流れを自動的に追跡できます。';
}
