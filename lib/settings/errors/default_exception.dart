import 'package:flutter/foundation.dart';

abstract class IDefaultException {
  final String message;
  final StackTrace? stackTrace;
  final Object exception;

  IDefaultException(this.message, this.exception, [this.stackTrace]) {
    ///TODO - Add Crash reporting service here.
  }

  @override
  String toString() {
    if (kDebugMode) {
      return toString();
    } else {
      return message;
    }
  }
}
