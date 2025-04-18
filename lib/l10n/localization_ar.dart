// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'localization.dart';

// ignore_for_file: type=lint

/// The translations for Arabic (`ar`).
class LocalizationAr extends Localization {
  LocalizationAr([String locale = 'ar']) : super(locale);

  @override
  String get index_download => 'تحميل';

  @override
  String get index_download_soon => 'قريبًا.';

  @override
  String get index_language => 'اللغة';

  @override
  String get index_video_title => 'يمكن لهاتفك الآن استخدام الذكاء الاصطناعي للتعرف على المشاة.';

  @override
  String get index_video_desc => 'لا حاجة للإنترنت. لا داعي لعد الأشخاص يدويًا باستخدام العداد التقليدي. ما عليك سوى إعداد هاتفك لتتبع حركة المشاة تلقائيًا.';

  @override
  String get index_1 => 'تتبع على مدار الساعة';

  @override
  String get index_1_desc => 'عرض إحصاءات حركة المشاة لأي فترة زمنية.';

  @override
  String get index_2 => 'تتبع كائنات متعددة';

  @override
  String get index_2_desc => 'عد المشاة والسيارات والدراجات وأكثر في وقت واحد';

  @override
  String get index_3 => 'مناطق كشف مخصصة';

  @override
  String get index_3_desc => 'تحديد مناطق كشف مخصصة لعد حركة المرور في مناطق محددة.';

  @override
  String get index_4 => 'أوضاع عد مرنة';

  @override
  String get index_4_desc => 'اختر عد الكائنات التي تظهر حديثًا داخل منطقة الكشف، أو تلك التي تبقى ثابتة.';

  @override
  String get index_desktop_title => 'توفر إصدار سطح المكتب';

  @override
  String get index_desktop_desc => 'نقدم أيضًا إصدارًا لسطح المكتب. نوفر إصدارات لـ iOS/Android/Mac/Windows، مما يتيح لك استخدام كل من الأجهزة المحمولة وأجهزة سطح المكتب المزودة بكاميرات ويب. يدعم إصدار سطح المكتب أيضًا مصادر فيديو متعددة، مما يتيح العد المتزامن من عدة تدفقات.';

  @override
  String get index_desktop2_title => 'دعم البث المباشر';

  @override
  String get index_desktop2_desc => 'بالإضافة إلى كاميرات الأجهزة المحمولة، ندعم ملفات الفيديو المسجلة، ومدخلات كاميرا الويب، وبث الإنترنت المباشر مثل RTSP. هذا يسمح لك بالاتصال بالأجهزة الموجودة والبدء فورًا في قياس تدفق حركة المرور.';

  @override
  String get index_email_us => 'راسلنا عبر البريد الإلكتروني';

  @override
  String get app_desc => 'هل تريد معرفة عدد الأشخاص المارين؟ يستخدم هذا التطبيق كاميرا هاتفك للتعرف بذكاء على المشاة وعدهم تلقائيًا. لا حاجة لإدخال يدوي. ودع العد المرهق وراقب تدفق حركة المرور بسهولة.';

  @override
  String get video_desc => 'لا حاجة للإنترنت. لا داعي لعد الأشخاص يدويًا باستخدام العداد التقليدي. ما عليك سوى إعداد هاتفك لتتبع حركة المشاة تلقائيًا.';

  @override
  String get terms => 'شروط الخدمة';

  @override
  String get privacy => 'الخصوصية';
}

/// The translations for Arabic, as used in the United Arab Emirates (`ar_AE`).
class LocalizationArAe extends LocalizationAr {
  LocalizationArAe(): super('ar_AE');

  @override
  String get index_download => 'تنزيل';

  @override
  String get index_download_soon => 'قريباً.';

  @override
  String get index_language => 'اللغة';

  @override
  String get index_video_title => 'يمكن لهاتفك الآن استخدام الذكاء الاصطناعي للتعرف على المشاة.';

  @override
  String get index_video_desc => 'لا حاجة للإنترنت. لا داعي للعد اليدوي للأشخاص باستخدام العداد التقليدي. ما عليك سوى إعداد هاتفك لتتبع حركة المرور بشكل تلقائي.';

  @override
  String get index_1 => 'تتبع على مدار الساعة';

  @override
  String get index_1_desc => 'عرض إحصائيات حركة المشاة لأي فترة زمنية.';

  @override
  String get index_2 => 'تتبع أهداف متعددة';

  @override
  String get index_2_desc => 'عد المشاة والسيارات والدراجات والمزيد في وقت واحد';

  @override
  String get index_3 => 'مناطق كشف مخصصة';

  @override
  String get index_3_desc => 'تحديد مناطق كشف مخصصة لحساب حركة المرور في مناطق محددة.';

  @override
  String get index_4 => 'أوضاع عد مرنة';

  @override
  String get index_4_desc => 'اختر عد الأجسام التي تظهر حديثاً ضمن منطقة الكشف، أو تلك التي تبقى ثابتة.';

  @override
  String get index_desktop_title => 'توفر النسخة المكتبية';

  @override
  String get index_desktop_desc => 'نقدم أيضاً إصداراً للكمبيوتر. نوفر إصدارات لأنظمة آي أو إس/أندرويد/ماك/ويندوز، مما يتيح لك استخدام كل من الأجهزة المحمولة وأجهزة الكمبيوتر المزودة بكاميرات ويب. يدعم إصدار سطح المكتب أيضاً مصادر فيديو متعددة، مما يتيح العد المتزامن من بثوث متعددة.';

  @override
  String get index_desktop2_title => 'دعم البث المباشر';

  @override
  String get index_desktop2_desc => 'بالإضافة إلى كاميرات الأجهزة المحمولة، ندعم ملفات الفيديو المسجلة، ومدخلات كاميرا الويب، وبث الإنترنت المباشر مثل RTSP. هذا يسمح لك بالاتصال بالأجهزة الموجودة والبدء فوراً في قياس تدفق حركة المرور.';

  @override
  String get index_email_us => 'راسلنا عبر البريد الإلكتروني';

  @override
  String get app_desc => 'هل تريد معرفة عدد الأشخاص المارين؟ يستخدم هذا التطبيق كاميرا هاتفك للتعرف بذكاء على المشاة وعدهم تلقائياً. لا حاجة لإدخال يدوي. ودّع العد المرهق وراقب بسهولة تدفق حركة المرور.';

  @override
  String get video_desc => 'لا حاجة للإنترنت. لا داعي للعد اليدوي للأشخاص باستخدام العداد التقليدي. ما عليك سوى إعداد هاتفك لتتبع حركة المشاة المارة تلقائياً.';

  @override
  String get terms => 'شروط الخدمة';

  @override
  String get privacy => 'الخصوصية';
}

/// The translations for Arabic, as used in Algeria (`ar_DZ`).
class LocalizationArDz extends LocalizationAr {
  LocalizationArDz(): super('ar_DZ');

  @override
  String get index_download => 'تحميل';

  @override
  String get index_download_soon => 'قريباً.';

  @override
  String get index_language => 'اللغة';

  @override
  String get index_video_title => 'يمكن لهاتفك الآن استخدام الذكاء الاصطناعي للتعرف على المارة.';

  @override
  String get index_video_desc => 'لا حاجة للإنترنت. لا داعي للعد اليدوي للأشخاص باستخدام العداد التقليدي. فقط قم بإعداد هاتفك ليتتبع حركة المشاة تلقائياً.';

  @override
  String get index_1 => 'مراقبة على مدار ٢٤ ساعة';

  @override
  String get index_1_desc => 'اطلع على إحصائيات حركة المارة لأي فترة زمنية.';

  @override
  String get index_2 => 'تتبع عناصر متعددة';

  @override
  String get index_2_desc => 'عد المشاة والسيارات والدراجات والمزيد في نفس الوقت';

  @override
  String get index_3 => 'مناطق رصد مخصصة';

  @override
  String get index_3_desc => 'حدد مناطق رصد خاصة لإحصاء الحركة في مناطق معينة.';

  @override
  String get index_4 => 'أنماط عد مرنة';

  @override
  String get index_4_desc => 'اختر بين عد الأجسام الجديدة ضمن منطقة الرصد، أو تلك التي تبقى ثابتة.';

  @override
  String get index_desktop_title => 'توفر نسخة الكمبيوتر';

  @override
  String get index_desktop_desc => 'نقدم أيضاً إصداراً للكمبيوتر. نوفر إصدارات لأنظمة آي أو إس/أندرويد/ماك/ويندوز، مما يتيح لك استخدام الهواتف الذكية وأجهزة الكمبيوتر مع كاميرات الويب. توفر نسخة الكمبيوتر أيضاً دعماً لمصادر فيديو متعددة، مما يسمح بالعد المتزامن من بثوث متعددة.';

  @override
  String get index_desktop2_title => 'دعم البث المباشر';

  @override
  String get index_desktop2_desc => 'بالإضافة إلى كاميرات الأجهزة المحمولة، ندعم ملفات الفيديو المسجلة، ومدخلات كاميرا الويب، وبث الإنترنت المباشر مثل RTSP. هذا يسمح لك بالاتصال بالأجهزة الموجودة والبدء فوراً في قياس تدفق الحركة.';

  @override
  String get index_email_us => 'راسلنا عبر البريد الإلكتروني';

  @override
  String get app_desc => 'هل تريد معرفة عدد الأشخاص المارين؟ يستخدم هذا التطبيق كاميرا هاتفك للتعرف بذكاء على المارة وعدهم تلقائياً. لا حاجة لإدخال يدوي. ودع العد المتعب وراقب بسهولة تدفق الحركة.';

  @override
  String get video_desc => 'لا حاجة للإنترنت. لا داعي للعد اليدوي للأشخاص باستخدام العداد التقليدي. فقط قم بإعداد هاتفك ليتتبع حركة المشاة تلقائياً.';

  @override
  String get terms => 'شروط الخدمة';

  @override
  String get privacy => 'الخصوصية';
}

/// The translations for Arabic, as used in Egypt (`ar_EG`).
class LocalizationArEg extends LocalizationAr {
  LocalizationArEg(): super('ar_EG');

  @override
  String get index_download => 'تحميل';

  @override
  String get index_download_soon => 'قريباً.';

  @override
  String get index_language => 'اللغة';

  @override
  String get index_video_title => 'يمكن لهاتفك الآن استخدام الذكاء الاصطناعي للتعرف على المارة.';

  @override
  String get index_video_desc => 'لا حاجة للإنترنت. لا داعي للعد اليدوي للأشخاص باستخدام العداد التقليدي. ما عليك سوى إعداد هاتفك ليتتبع المارة تلقائياً.';

  @override
  String get index_1 => 'متابعة على مدار الساعة';

  @override
  String get index_1_desc => 'عرض إحصائيات حركة المارة لأي فترة زمنية.';

  @override
  String get index_2 => 'تتبع عناصر متعددة';

  @override
  String get index_2_desc => 'عد المشاة والعربيات والدراجات وغيرها في وقت واحد';

  @override
  String get index_3 => 'مناطق رصد مخصصة';

  @override
  String get index_3_desc => 'حدد مناطق رصد مخصصة لإحصاء الحركة في مناطق معينة.';

  @override
  String get index_4 => 'أنماط عد مرنة';

  @override
  String get index_4_desc => 'اختر عد الأجسام التي تظهر حديثاً ضمن منطقة الرصد، أو تلك التي تظل ثابتة.';

  @override
  String get index_desktop_title => 'توفر نسخة الكمبيوتر';

  @override
  String get index_desktop_desc => 'نقدم أيضاً إصداراً للكمبيوتر. نوفر إصدارات لأنظمة آي أو إس/أندرويد/ماك/ويندوز، مما يتيح لك استخدام الموبايلات وأجهزة الكمبيوتر المزودة بكاميرات ويب. تدعم نسخة الكمبيوتر أيضاً مصادر فيديو متعددة، مما يسمح بالعد المتزامن من بثوث متعددة.';

  @override
  String get index_desktop2_title => 'دعم البث المباشر';

  @override
  String get index_desktop2_desc => 'بالإضافة إلى كاميرات الموبايلات، ندعم ملفات الفيديو المسجلة، ومدخلات كاميرا الويب، وبث الإنترنت المباشر مثل RTSP. هذا يسمح لك بالاتصال بالأجهزة الموجودة والبدء فوراً في قياس تدفق الحركة.';

  @override
  String get index_email_us => 'راسلنا عبر الإيميل';

  @override
  String get app_desc => 'عايز تعرف كم شخص بيمر من قدامك؟ التطبيق ده بيستخدم كاميرا موبايلك للتعرف بذكاء على المارة وعدهم تلقائياً. مفيش داعي للإدخال اليدوي. ودع العد المتعب وراقب بسهولة تدفق الحركة.';

  @override
  String get video_desc => 'لا حاجة للإنترنت. مفيش داعي للعد اليدوي للأشخاص باستخدام العداد التقليدي. كل اللي عليك إعداد موبايلك ليتتبع المارة تلقائياً.';

  @override
  String get terms => 'شروط الخدمة';

  @override
  String get privacy => 'الخصوصية';
}
