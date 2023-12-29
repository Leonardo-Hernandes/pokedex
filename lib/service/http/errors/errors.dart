import 'package:pokedex/imports.dart';

class DataSourceUnknownError implements IDefaultException {
  @override
  final String message =
      'Ocorreu um erro desconhecido, tente novamente mais tarde!';
  @override
  final StackTrace? stackTrace;
  @override
  final Object exception;

  const DataSourceUnknownError(this.exception, [this.stackTrace]);
}

class DataSourceConnectionError implements IDefaultException {
  @override
  final String message =
      'Ocorreu um erro de conexão, verifique sua conexão com a internet e tente novamente!';
  @override
  final StackTrace? stackTrace;
  @override
  final Object exception;

  const DataSourceConnectionError(this.exception, [this.stackTrace]);
}
