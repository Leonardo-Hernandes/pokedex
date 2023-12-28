import 'package:pokedex/service/http/http_methods.dart';

abstract class IHttpService {
  Future<String?> restRequest({
    required String url,
    required HttpMethodsEnum method,
    // Map<String, dynamic>? headers,
    // dynamic body,
  });
}
