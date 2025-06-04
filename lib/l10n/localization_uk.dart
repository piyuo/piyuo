// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'localization.dart';

// ignore_for_file: type=lint

/// The translations for Ukrainian (`uk`).
class LocalizationUk extends Localization {
  LocalizationUk([String locale = 'uk']) : super(locale);

  @override
  String get index_download => 'Завантажити';

  @override
  String get index_download_soon => 'Скоро буде доступно.';

  @override
  String get index_language => 'Мова';

  @override
  String get index_video_title =>
      'Ваш телефон тепер може використовувати ШІ для розпізнавання пішоходів.';

  @override
  String get index_video_desc =>
      'Інтернет не потрібен. Не потрібно вручну рахувати людей за допомогою традиційного лічильника. Просто налаштуйте свій телефон для автоматичного відстеження потоку пішоходів.';

  @override
  String get index_1 => 'Цілодобове відстеження';

  @override
  String get index_1_desc =>
      'Переглядайте кількість пішоходів за будь-який період часу.';

  @override
  String get index_2 => 'Відстеження кількох об\'єктів';

  @override
  String get index_2_desc =>
      'Одночасно рахуйте пішоходів, автомобілі, велосипеди та інше';

  @override
  String get index_3 => 'Налаштовувані зони виявлення';

  @override
  String get index_3_desc =>
      'Визначте власні зони виявлення для підрахунку трафіку в певних областях.';

  @override
  String get index_4 => 'Гнучкі режими підрахунку';

  @override
  String get index_4_desc =>
      'Виберіть підрахунок об\'єктів, які щойно з\'явилися в зоні виявлення, або тих, що залишаються нерухомими.';

  @override
  String get index_desktop_title => 'Доступність настільної версії';

  @override
  String get index_desktop_desc =>
      'Ми також пропонуємо настільну версію. Ми надаємо версії для iOS/Android/Mac/Windows, що дозволяє використовувати як мобільні пристрої, так і настільні комп\'ютери з веб-камерами. Настільна версія також підтримує кілька джерел відео, що дозволяє одночасно здійснювати підрахунок з кількох потоків.';

  @override
  String get index_desktop2_title => 'Підтримка прямих трансляцій';

  @override
  String get index_desktop2_desc =>
      'Окрім камер мобільних пристроїв, ми підтримуємо записані відеофайли, вхідні сигнали веб-камер та інтернет-трансляції, такі як RTSP. Це дозволяє підключатися до існуючих пристроїв і негайно почати вимірювати потік трафіку.';

  @override
  String get index_email_us => 'Напишіть нам';

  @override
  String get app_desc =>
      'Хочете знати, скільки людей проходить повз? Цей додаток використовує камеру вашого телефону для розумного визначення та автоматичного підрахунку пішоходів. Не потрібно вводити дані вручну. Попрощайтеся з нудним підрахунком і легко моніторте потік трафіку.';

  @override
  String get video_desc =>
      'Інтернет не потрібен. Не потрібно вручну рахувати людей за допомогою традиційного лічильника. Просто налаштуйте свій телефон для автоматичного відстеження потоку пішоходів.';

  @override
  String get terms => 'Умови надання послуг';

  @override
  String get privacy => 'Конфіденційність';
}
