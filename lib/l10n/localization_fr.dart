// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'localization.dart';

// ignore_for_file: type=lint

/// The translations for French (`fr`).
class LocalizationFr extends Localization {
  LocalizationFr([String locale = 'fr']) : super(locale);

  @override
  String get index_download => 'Télécharger';

  @override
  String get index_download_soon => 'Bientôt disponible.';

  @override
  String get index_language => 'Langue';

  @override
  String get index_video_title =>
      'Votre téléphone peut désormais utiliser l\'IA pour reconnaître les piétons.';

  @override
  String get index_video_desc =>
      'Aucune connexion Internet requise. Plus besoin de compter manuellement les personnes avec un compteur traditionnel. Configurez simplement votre téléphone pour suivre automatiquement le flux piétonnier.';

  @override
  String get index_1 => 'Suivi 24h/24, 7j/7';

  @override
  String get index_1_desc =>
      'Consultez les comptages de passage pour n\'importe quelle période.';

  @override
  String get index_2 => 'Suivi multi-objets';

  @override
  String get index_2_desc =>
      'Comptez simultanément les piétons, voitures, vélos et plus encore';

  @override
  String get index_3 => 'Zones de détection personnalisées';

  @override
  String get index_3_desc =>
      'Définissez des zones de détection personnalisées pour compter le trafic dans des zones spécifiques.';

  @override
  String get index_4 => 'Modes de comptage flexibles';

  @override
  String get index_4_desc =>
      'Choisissez de compter les nouveaux objets apparaissant dans la zone de détection, ou ceux qui restent immobiles.';

  @override
  String get index_desktop_title => 'Disponibilité de la version bureau';

  @override
  String get index_desktop_desc =>
      'Nous proposons également une version bureau. Nous fournissons des versions pour iOS/Android/Mac/Windows, vous permettant d\'utiliser à la fois des appareils mobiles et des ordinateurs avec webcams. La version bureau prend également en charge plusieurs sources vidéo, permettant un comptage simultané à partir de plusieurs flux.';

  @override
  String get index_desktop2_title => 'Prise en charge des flux en direct';

  @override
  String get index_desktop2_desc =>
      'En plus des caméras des appareils mobiles, nous prenons en charge les fichiers vidéo enregistrés, les entrées webcam et les flux en direct sur Internet comme RTSP. Cela vous permet de vous connecter à des appareils existants et de commencer immédiatement à mesurer le flux de trafic.';

  @override
  String get index_email_us => 'Contactez-nous par e-mail';

  @override
  String get app_desc =>
      'Vous voulez savoir combien de personnes passent ? Cette application utilise la caméra de votre téléphone pour identifier intelligemment et compter automatiquement les piétons. Aucune saisie manuelle requise. Dites adieu au comptage fastidieux et surveillez facilement le flux de trafic.';

  @override
  String get video_desc =>
      'Aucune connexion Internet requise. Plus besoin de compter manuellement les personnes avec un compteur traditionnel. Configurez simplement votre téléphone pour suivre automatiquement le flux piétonnier.';

  @override
  String get terms => 'Conditions d\'utilisation';

  @override
  String get privacy => 'Confidentialité';
}

/// The translations for French, as used in Belgium (`fr_BE`).
class LocalizationFrBe extends LocalizationFr {
  LocalizationFrBe() : super('fr_BE');

  @override
  String get index_download => 'Télécharger';

  @override
  String get index_download_soon => 'Bientôt disponible.';

  @override
  String get index_language => 'Langue';

  @override
  String get index_video_title =>
      'Votre GSM peut désormais utiliser l\'IA pour reconnaître les piétons.';

  @override
  String get index_video_desc =>
      'Pas de connexion Internet nécessaire. Plus besoin de compter manuellement les personnes avec un compteur traditionnel. Paramétrez simplement votre GSM pour suivre automatiquement le passage des piétons.';

  @override
  String get index_1 => 'Suivi 24h/24, 7j/7';

  @override
  String get index_1_desc =>
      'Consultez les comptages de passage pour n\'importe quelle période.';

  @override
  String get index_2 => 'Suivi multi-objets';

  @override
  String get index_2_desc =>
      'Comptez simultanément les piétons, voitures, vélos et plus encore';

  @override
  String get index_3 => 'Zones de détection personnalisées';

  @override
  String get index_3_desc =>
      'Définissez des zones de détection personnalisées pour compter le passage dans des zones spécifiques.';

  @override
  String get index_4 => 'Modes de comptage flexibles';

  @override
  String get index_4_desc =>
      'Choisissez de compter les nouveaux objets apparaissant dans la zone de détection, ou ceux qui restent stationnaires.';

  @override
  String get index_desktop_title => 'Disponibilité de la version ordinateur';

  @override
  String get index_desktop_desc =>
      'Nous proposons également une version pour ordinateur. Nous fournissons des versions pour iOS/Android/Mac/Windows, vous permettant d\'utiliser à la fois des appareils mobiles et des ordinateurs avec webcams. La version ordinateur supporte également plusieurs sources vidéo, permettant un comptage simultané à partir de plusieurs flux.';

  @override
  String get index_desktop2_title => 'Support de flux en direct';

  @override
  String get index_desktop2_desc =>
      'En plus des caméras des appareils mobiles, nous supportons les fichiers vidéo enregistrés, les entrées webcam et les flux en direct sur Internet comme RTSP. Cela vous permet de vous connecter à des appareils existants et de commencer immédiatement à mesurer le flux de passage.';

  @override
  String get index_email_us => 'Contactez-nous par e-mail';

  @override
  String get app_desc =>
      'Vous voulez savoir combien de personnes passent ? Cette application utilise la caméra de votre GSM pour identifier intelligemment et compter automatiquement les piétons. Aucune saisie manuelle requise. Dites adieu au comptage fastidieux et surveillez facilement le flux de passage.';

  @override
  String get video_desc =>
      'Pas de connexion Internet nécessaire. Plus besoin de compter manuellement les personnes avec un compteur traditionnel. Paramétrez simplement votre GSM pour suivre automatiquement le passage des piétons.';

  @override
  String get terms => 'Conditions d\'utilisation';

  @override
  String get privacy => 'Confidentialité';
}

/// The translations for French, as used in Canada (`fr_CA`).
class LocalizationFrCa extends LocalizationFr {
  LocalizationFrCa() : super('fr_CA');

  @override
  String get index_download => 'Télécharger';

  @override
  String get index_download_soon => 'Bientôt disponible.';

  @override
  String get index_language => 'Langue';

  @override
  String get index_video_title =>
      'Votre cellulaire peut maintenant utiliser l\'IA pour reconnaître les piétons.';

  @override
  String get index_video_desc =>
      'Aucune connexion Internet requise. Plus besoin de compter manuellement les personnes avec un compteur traditionnel. Configurez simplement votre cellulaire pour suivre automatiquement l\'achalandage piétonnier.';

  @override
  String get index_1 => 'Suivi 24/7';

  @override
  String get index_1_desc =>
      'Consultez les comptages d\'achalandage pour n\'importe quelle période.';

  @override
  String get index_2 => 'Suivi multi-objets';

  @override
  String get index_2_desc =>
      'Comptez simultanément les piétons, les autos, les vélos et plus encore';

  @override
  String get index_3 => 'Zones de détection personnalisées';

  @override
  String get index_3_desc =>
      'Définissez des zones de détection personnalisées pour compter l\'achalandage dans des zones spécifiques.';

  @override
  String get index_4 => 'Modes de comptage flexibles';

  @override
  String get index_4_desc =>
      'Choisissez de compter les nouveaux objets qui apparaissent dans la zone de détection, ou ceux qui demeurent stationnaires.';

  @override
  String get index_desktop_title =>
      'Disponibilité de la version pour ordinateur';

  @override
  String get index_desktop_desc =>
      'Nous offrons également une version pour ordinateur. Nous fournissons des versions pour iOS/Android/Mac/Windows, vous permettant d\'utiliser à la fois des appareils mobiles et des ordinateurs avec webcams. La version pour ordinateur supporte aussi plusieurs sources vidéo, permettant un comptage simultané à partir de plusieurs flux.';

  @override
  String get index_desktop2_title => 'Support des flux en direct';

  @override
  String get index_desktop2_desc =>
      'En plus des caméras des appareils mobiles, nous supportons les fichiers vidéo enregistrés, les entrées webcam et les flux en direct sur Internet comme RTSP. Cela vous permet de vous connecter à des appareils existants et de commencer immédiatement à mesurer l\'achalandage.';

  @override
  String get index_email_us => 'Écrivez-nous';

  @override
  String get app_desc =>
      'Vous voulez savoir combien de personnes passent? Cette application utilise la caméra de votre cellulaire pour identifier intelligemment et compter automatiquement les piétons. Aucune saisie manuelle requise. Dites adieu au comptage fastidieux et surveillez facilement l\'achalandage.';

  @override
  String get video_desc =>
      'Aucune connexion Internet requise. Plus besoin de compter manuellement les personnes avec un compteur traditionnel. Configurez simplement votre cellulaire pour suivre automatiquement l\'achalandage piétonnier.';

  @override
  String get terms => 'Conditions d\'utilisation';

  @override
  String get privacy => 'Confidentialité';
}

/// The translations for French, as used in Switzerland (`fr_CH`).
class LocalizationFrCh extends LocalizationFr {
  LocalizationFrCh() : super('fr_CH');

  @override
  String get index_download => 'Télécharger';

  @override
  String get index_download_soon => 'Bientôt disponible.';

  @override
  String get index_language => 'Langue';

  @override
  String get index_video_title =>
      'Votre natel peut désormais utiliser l\'IA pour reconnaître les piétons.';

  @override
  String get index_video_desc =>
      'Pas de connexion Internet nécessaire. Plus besoin de compter manuellement les personnes avec un compteur traditionnel. Configurez simplement votre natel pour suivre automatiquement le passage des piétons.';

  @override
  String get index_1 => 'Suivi 24h/24, 7j/7';

  @override
  String get index_1_desc =>
      'Consultez les comptages de passage pour n\'importe quelle période.';

  @override
  String get index_2 => 'Suivi multi-objets';

  @override
  String get index_2_desc =>
      'Comptez simultanément les piétons, voitures, vélos et plus encore';

  @override
  String get index_3 => 'Zones de détection personnalisées';

  @override
  String get index_3_desc =>
      'Définissez des zones de détection personnalisées pour compter le trafic dans des zones spécifiques.';

  @override
  String get index_4 => 'Modes de comptage flexibles';

  @override
  String get index_4_desc =>
      'Choisissez de compter les nouveaux objets apparaissant dans la zone de détection, ou ceux qui restent stationnaires.';

  @override
  String get index_desktop_title => 'Disponibilité de la version ordinateur';

  @override
  String get index_desktop_desc =>
      'Nous proposons également une version pour ordinateur. Nous fournissons des versions pour iOS/Android/Mac/Windows, vous permettant d\'utiliser à la fois des appareils mobiles et des ordinateurs avec webcams. La version ordinateur prend également en charge plusieurs sources vidéo, permettant un comptage simultané à partir de plusieurs flux.';

  @override
  String get index_desktop2_title => 'Prise en charge des flux en direct';

  @override
  String get index_desktop2_desc =>
      'En plus des caméras des appareils mobiles, nous prenons en charge les fichiers vidéo enregistrés, les entrées webcam et les flux en direct sur Internet comme RTSP. Cela vous permet de vous connecter à des appareils existants et de commencer immédiatement à mesurer le flux de passage.';

  @override
  String get index_email_us => 'Contactez-nous par e-mail';

  @override
  String get app_desc =>
      'Vous voulez savoir combien de personnes passent ? Cette application utilise la caméra de votre natel pour identifier intelligemment et compter automatiquement les piétons. Aucune saisie manuelle requise. Dites adieu au comptage fastidieux et surveillez facilement le flux de passage.';

  @override
  String get video_desc =>
      'Pas de connexion Internet nécessaire. Plus besoin de compter manuellement les personnes avec un compteur traditionnel. Configurez simplement votre natel pour suivre automatiquement le passage des piétons.';

  @override
  String get terms => 'Conditions d\'utilisation';

  @override
  String get privacy => 'Confidentialité';
}
