// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'localization.dart';

// ignore_for_file: type=lint

/// The translations for Portuguese (`pt`).
class LocalizationPt extends Localization {
  LocalizationPt([String locale = 'pt']) : super(locale);

  @override
  String get index_download => 'Baixar';

  @override
  String get index_download_soon => 'Em breve.';

  @override
  String get index_download_available => 'Disponível na primavera de 2025.';

  @override
  String get index_language => 'Idioma';

  @override
  String get index_video_title => 'Seu celular agora pode usar IA para reconhecer pedestres.';

  @override
  String get index_video_desc => 'Não precisa de internet. Não é necessário contar pessoas manualmente com um contador tradicional. Basta configurar seu celular para rastrear automaticamente o fluxo de pedestres.';

  @override
  String get index_1 => 'Monitoramento 24/7';

  @override
  String get index_1_desc => 'Visualize contagens de fluxo de pedestres para qualquer período.';

  @override
  String get index_2 => 'Rastreamento de Múltiplos Objetos';

  @override
  String get index_2_desc => 'Conte simultaneamente pedestres, carros, bicicletas e mais';

  @override
  String get index_3 => 'Zonas de Detecção Personalizadas';

  @override
  String get index_3_desc => 'Defina zonas de detecção personalizadas para contar tráfego em áreas específicas.';

  @override
  String get index_4 => 'Modos de Contagem Flexíveis';

  @override
  String get index_4_desc => 'Escolha contar objetos recém-aparecidos dentro da zona de detecção ou aqueles que permanecem estacionários.';

  @override
  String get index_desktop_title => 'Disponibilidade da Versão Desktop';

  @override
  String get index_desktop_desc => 'Também oferecemos uma versão desktop. Fornecemos versões para iOS/Android/Mac/Windows, permitindo que você utilize tanto dispositivos móveis quanto desktops com webcams. A versão desktop também suporta múltiplas fontes de vídeo, permitindo contagens simultâneas de múltiplos streams.';

  @override
  String get index_desktop2_title => 'Suporte a Transmissões ao Vivo';

  @override
  String get index_desktop2_desc => 'Além das câmeras de dispositivos móveis, suportamos arquivos de vídeo gravados, entradas de webcam e transmissões ao vivo pela internet, como RTSP. Isso permite que você se conecte a dispositivos existentes e comece imediatamente a medir o fluxo de tráfego.';

  @override
  String get index_email_us => 'Envie-nos um email';

  @override
  String get app_name => 'Contador';

  @override
  String get app_desc => 'Quer saber quantas pessoas passam por perto? Este aplicativo usa a câmera do seu celular para identificar inteligentemente e contar automaticamente os pedestres. Não é necessária entrada manual. Diga adeus à contagem tediosa e monitore facilmente o fluxo de tráfego.';

  @override
  String get video_desc => 'Não precisa de internet. Não é necessário contar pessoas manualmente com um contador tradicional. Basta configurar seu celular para rastrear automaticamente o fluxo de pedestres.';
}

/// The translations for Portuguese, as used in Portugal (`pt_PT`).
class LocalizationPtPt extends LocalizationPt {
  LocalizationPtPt(): super('pt_PT');

  @override
  String get index_download => 'Transferir';

  @override
  String get index_download_soon => 'Brevemente disponível.';

  @override
  String get index_download_available => 'Disponível na primavera de 2025.';

  @override
  String get index_language => 'Idioma';

  @override
  String get index_video_title => 'O seu telemóvel agora pode usar IA para reconhecer peões.';

  @override
  String get index_video_desc => 'Não requer internet. Não é necessário contar pessoas manualmente com um contador tradicional. Basta configurar o seu telemóvel para rastrear automaticamente o fluxo de peões.';

  @override
  String get index_1 => 'Monitorização 24/7';

  @override
  String get index_1_desc => 'Visualize contagens de fluxo de peões para qualquer período de tempo.';

  @override
  String get index_2 => 'Rastreamento de Múltiplos Objetos';

  @override
  String get index_2_desc => 'Conte simultaneamente peões, automóveis, bicicletas e mais';

  @override
  String get index_3 => 'Zonas de Deteção Personalizadas';

  @override
  String get index_3_desc => 'Defina zonas de deteção personalizadas para contar tráfego em áreas específicas.';

  @override
  String get index_4 => 'Modos de Contagem Flexíveis';

  @override
  String get index_4_desc => 'Escolha contar objetos recém-aparecidos dentro da zona de deteção ou aqueles que permanecem estacionários.';

  @override
  String get index_desktop_title => 'Disponibilidade da Versão para Computador';

  @override
  String get index_desktop_desc => 'Também oferecemos uma versão para computador. Fornecemos versões para iOS/Android/Mac/Windows, permitindo-lhe utilizar tanto dispositivos móveis como computadores com webcams. A versão para computador também suporta múltiplas fontes de vídeo, permitindo contagens simultâneas de múltiplos fluxos.';

  @override
  String get index_desktop2_title => 'Suporte a Transmissões em Direto';

  @override
  String get index_desktop2_desc => 'Além das câmaras de dispositivos móveis, suportamos ficheiros de vídeo gravados, entradas de webcam e transmissões em direto pela internet, como RTSP. Isto permite-lhe ligar-se a dispositivos existentes e começar imediatamente a medir o fluxo de tráfego.';

  @override
  String get index_email_us => 'Envie-nos um email';

  @override
  String get app_name => 'Contador';

  @override
  String get app_desc => 'Quer saber quantas pessoas passam por perto? Esta aplicação usa a câmara do seu telemóvel para identificar inteligentemente e contar automaticamente os peões. Não é necessária introdução manual. Diga adeus à contagem tediosa e monitorize facilmente o fluxo de tráfego.';

  @override
  String get video_desc => 'Não requer internet. Não é necessário contar pessoas manualmente com um contador tradicional. Basta configurar o seu telemóvel para rastrear automaticamente o fluxo de peões.';
}
