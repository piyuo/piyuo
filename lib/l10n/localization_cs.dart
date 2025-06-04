// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'localization.dart';

// ignore_for_file: type=lint

/// The translations for Czech (`cs`).
class LocalizationCs extends Localization {
  LocalizationCs([String locale = 'cs']) : super(locale);

  @override
  String get index_download => 'Stáhnout';

  @override
  String get index_download_soon => 'Již brzy.';

  @override
  String get index_language => 'Jazyk';

  @override
  String get index_video_title =>
      'Váš telefon nyní může využívat umělou inteligenci k rozpoznávání chodců.';

  @override
  String get index_video_desc =>
      'Nevyžaduje internet. Není potřeba ručně počítat lidi tradičním počítadlem. Stačí nastavit telefon pro automatické sledování procházejících osob.';

  @override
  String get index_1 => 'Nepřetržité sledování 24/7';

  @override
  String get index_1_desc => 'Zobrazte počty chodců za jakékoli časové období.';

  @override
  String get index_2 => 'Sledování více objektů';

  @override
  String get index_2_desc =>
      'Současně počítejte chodce, auta, jízdní kola a další';

  @override
  String get index_3 => 'Vlastní detekční zóny';

  @override
  String get index_3_desc =>
      'Definujte vlastní detekční zóny pro počítání provozu v konkrétních oblastech.';

  @override
  String get index_4 => 'Flexibilní režimy počítání';

  @override
  String get index_4_desc =>
      'Vyberte si, zda chcete počítat nově se objevující objekty v detekční zóně nebo ty, které zůstávají na místě.';

  @override
  String get index_desktop_title => 'Dostupnost desktopové verze';

  @override
  String get index_desktop_desc =>
      'Nabízíme také desktopovou verzi. Poskytujeme verze pro iOS/Android/Mac/Windows, což vám umožňuje využívat jak mobilní zařízení, tak počítače s webkamerami. Desktopová verze navíc podporuje více videozáznamů, umožňující simultánní počítání z více streamů.';

  @override
  String get index_desktop2_title => 'Podpora živých přenosů';

  @override
  String get index_desktop2_desc =>
      'Kromě kamer mobilních zařízení podporujeme také nahrané video soubory, vstupy z webkamer a internetové živé přenosy jako RTSP. To vám umožňuje připojit se k existujícím zařízením a okamžitě začít měřit dopravní tok.';

  @override
  String get index_email_us => 'Napište nám';

  @override
  String get app_desc =>
      'Chcete vědět, kolik lidí prochází kolem? Tato aplikace používá kameru vašeho telefonu k inteligentní identifikaci a automatickému počítání chodců. Není potřeba žádný ruční vstup. Rozlučte se s únavným počítáním a snadno monitorujte dopravní tok.';

  @override
  String get video_desc =>
      'Nevyžaduje internet. Není potřeba ručně počítat lidi tradičním počítadlem. Stačí nastavit telefon pro automatické sledování procházejících osob.';

  @override
  String get terms => 'Podmínky služby';

  @override
  String get privacy => 'Ochrana soukromí';
}
