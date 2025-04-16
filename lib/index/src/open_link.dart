import 'dart:js_interop';

@JS('window.open')
external JSAny? jsOpen(String url, String target);

void openLink(String url) {
  jsOpen(url, '_blank');
}
