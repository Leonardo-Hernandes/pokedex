abstract class HttptMethods {
  static const String get = 'GET';
}

enum HttpMethodsEnum {
  get('GET');

  final String str;
  const HttpMethodsEnum(this.str);
}
