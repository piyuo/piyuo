// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'localization.dart';

// ignore_for_file: type=lint

/// The translations for Bengali Bangla (`bn`).
class LocalizationBn extends Localization {
  LocalizationBn([String locale = 'bn']) : super(locale);

  @override
  String get index_download => 'ডাউনলোড করুন';

  @override
  String get index_download_soon => 'শীঘ্রই আসছে।';

  @override
  String get index_download_available => '২০২৫ সালের বসন্তে উপলব্ধ হবে।';

  @override
  String get index_language => 'ভাষা';

  @override
  String get index_video_title => 'আপনার ফোন এখন পথচারীদের চিনতে AI ব্যবহার করতে পারে।';

  @override
  String get index_video_desc => 'ইন্টারনেট প্রয়োজন নেই। পারম্পরিক ক্লিকার দিয়ে ম্যানুয়ালি লোক গণনা করার প্রয়োজন নেই। শুধু আপনার ফোনকে স্বয়ংক্রিয়ভাবে অতিক্রান্ত পথচারী ট্র্যাফিক অনুসরণ করতে সেট করুন।';

  @override
  String get index_1 => '২৪/৭ ট্র্যাকিং';

  @override
  String get index_1_desc => 'যেকোনো সময়কালের জন্য পথচারী ট্র্যাফিক সংখ্যা দেখুন।';

  @override
  String get index_2 => 'একাধিক বস্তু ট্র্যাকিং';

  @override
  String get index_2_desc => 'একই সাথে পথচারী, গাড়ি, সাইকেল এবং আরও অনেক কিছু গণনা করুন';

  @override
  String get index_3 => 'কাস্টম সনাক্তকরণ অঞ্চল';

  @override
  String get index_3_desc => 'নির্দিষ্ট এলাকায় ট্র্যাফিক গণনা করতে কাস্টম সনাক্তকরণ অঞ্চল নির্ধারণ করুন।';

  @override
  String get index_4 => 'নমনীয় গণনা মোড';

  @override
  String get index_4_desc => 'সনাক্তকরণ অঞ্চলের মধ্যে নতুন উপস্থিত বস্তু বা যেগুলি স্থির থাকে, সেগুলি গণনা করতে বেছে নিন।';

  @override
  String get index_desktop_title => 'ডেস্কটপ সংস্করণের উপলব্ধতা';

  @override
  String get index_desktop_desc => 'আমরা একটি ডেস্কটপ সংস্করণও অফার করি। আমরা iOS/Android/Mac/Windows সংস্করণ প্রদান করি, যা আপনাকে মোবাইল ডিভাইস এবং ওয়েবক্যাম সহ ডেস্কটপ উভয়ই ব্যবহার করতে দেয়। ডেস্কটপ সংস্করণ আরও বহু ভিডিও উৎস সমর্থন করে, একাধিক স্ট্রিম থেকে একযোগে গণনা করতে সক্ষম করে।';

  @override
  String get index_desktop2_title => 'লাইভ স্ট্রিম সমর্থন';

  @override
  String get index_desktop2_desc => 'মোবাইল ডিভাইস ক্যামেরার পাশাপাশি, আমরা রেকর্ড করা ভিডিও ফাইল, ওয়েবক্যাম ইনপুট এবং RTSP এর মতো ইন্টারনেট লাইভ স্ট্রিম সমর্থন করি। এটি আপনাকে বিদ্যমান ডিভাইসে সংযোগ করতে এবং অবিলম্বে ট্র্যাফিক প্রবাহ পরিমাপ শুরু করতে দেয়।';

  @override
  String get index_email_us => 'আমাদের ইমেইল করুন';

  @override
  String get app_name => 'কাউন্টার';

  @override
  String get app_desc => 'কতজন লোক পাশ দিয়ে যায় তা জানতে চান? এই অ্যাপ আপনার ফোনের ক্যামেরা ব্যবহার করে বুদ্ধিমানভাবে পথচারীদের সনাক্ত করে এবং স্বয়ংক্রিয়ভাবে গণনা করে। কোন ম্যানুয়াল ইনপুট প্রয়োজন নেই। ক্লান্তিকর গণনার বিদায় জানান এবং সহজেই ট্র্যাফিক প্রবাহ পর্যবেক্ষণ করুন।';

  @override
  String get video_desc => 'ইন্টারনেট প্রয়োজন নেই। পারম্পরিক ক্লিকার দিয়ে ম্যানুয়ালি লোক গণনা করার প্রয়োজন নেই। শুধু আপনার ফোনকে স্বয়ংক্রিয়ভাবে অতিক্রান্ত পথচারী ট্র্যাফিক অনুসরণ করতে সেট করুন।';

  @override
  String get terms => 'পরিষেবার শর্তাবলী';

  @override
  String get privacy => 'গোপনীয়তা';
}

/// The translations for Bengali Bangla, as used in India (`bn_IN`).
class LocalizationBnIn extends LocalizationBn {
  LocalizationBnIn(): super('bn_IN');

  @override
  String get index_download => 'ডাউনলোড';

  @override
  String get index_download_soon => 'শীঘ্রই আসছে।';

  @override
  String get index_download_available => '২০২৫ সালের বসন্তে উপলব্ধ হবে।';

  @override
  String get index_language => 'ভাষা';

  @override
  String get index_video_title => 'আপনার ফোন এখন পথচারীদের চিনতে AI ব্যবহার করতে পারে।';

  @override
  String get index_video_desc => 'ইন্টারনেট প্রয়োজন নেই। পারম্পরিক ক্লিকার দিয়ে মানুষ গণনা করার প্রয়োজন নেই। শুধুমাত্র আপনার ফোনকে স্বয়ংক্রিয়ভাবে পথচারী গতিবিধি ট্র্যাক করতে সেট করুন।';

  @override
  String get index_1 => '২৪/৭ ট্র্যাকিং';

  @override
  String get index_1_desc => 'যেকোনো সময়কালের জন্য পথচারী গতিবিধির সংখ্যা দেখুন।';

  @override
  String get index_2 => 'একাধিক বস্তু ট্র্যাকিং';

  @override
  String get index_2_desc => 'একই সাথে পথচারী, গাড়ি, সাইকেল এবং আরও অনেক কিছু গণনা করুন';

  @override
  String get index_3 => 'কাস্টম সনাক্তকরণ জোন';

  @override
  String get index_3_desc => 'নির্দিষ্ট এলাকায় ট্রাফিক গণনা করতে কাস্টম সনাক্তকরণ জোন নির্ধারণ করুন।';

  @override
  String get index_4 => 'নমনীয় গণনা মোড';

  @override
  String get index_4_desc => 'সনাক্তকরণ জোনের মধ্যে নতুন উপস্থিত বস্তু বা স্থির থাকা বস্তু গণনা করতে বেছে নিন।';

  @override
  String get index_desktop_title => 'ডেস্কটপ সংস্করণ উপলব্ধতা';

  @override
  String get index_desktop_desc => 'আমরা একটি ডেস্কটপ সংস্করণও অফার করি। আমরা iOS/Android/Mac/Windows সংস্করণ প্রদান করি, যা আপনাকে মোবাইল ডিভাইস এবং ওয়েবক্যাম সহ ডেস্কটপ উভয়ই ব্যবহার করতে দেয়। ডেস্কটপ সংস্করণ আরও একাধিক ভিডিও উৎস সমর্থন করে, একাধিক স্ট্রিম থেকে একযোগে গণনা করতে সক্ষম করে।';

  @override
  String get index_desktop2_title => 'লাইভ স্ট্রিম সমর্থন';

  @override
  String get index_desktop2_desc => 'মোবাইল ডিভাইস ক্যামেরা ছাড়াও, আমরা রেকর্ড করা ভিডিও ফাইল, ওয়েবক্যাম ইনপুট এবং RTSP এর মতো ইন্টারনেট লাইভ স্ট্রিম সমর্থন করি। এটি আপনাকে বিদ্যমান ডিভাইসগুলিতে সংযোগ করতে এবং অবিলম্বে ট্র্যাফিক প্রবাহ পরিমাপ করতে দেয়।';

  @override
  String get index_email_us => 'আমাদের ইমেইল করুন';

  @override
  String get app_name => 'কাউন্টার';

  @override
  String get app_desc => 'কতজন লোক পাশ দিয়ে যায় জানতে চান? এই অ্যাপটি পথচারীদের স্মার্টভাবে চিহ্নিত করতে এবং স্বয়ংক্রিয়ভাবে গণনা করতে আপনার ফোনের ক্যামেরা ব্যবহার করে। কোনো ম্যানুয়াল ইনপুট প্রয়োজন নেই। ক্লান্তিকর গণনা থেকে মুক্তি পান এবং সহজেই ট্র্যাফিক প্রবাহ পর্যবেক্ষণ করুন।';

  @override
  String get video_desc => 'ইন্টারনেট প্রয়োজন নেই। পারম্পরিক ক্লিকার দিয়ে মানুষ গণনা করার প্রয়োজন নেই। শুধুমাত্র আপনার ফোনকে স্বয়ংক্রিয়ভাবে পথচারী গতিবিধি ট্র্যাক করতে সেট করুন।';

  @override
  String get terms => 'सेवा की शर्तें';

  @override
  String get privacy => 'गोपनीयता';
}
