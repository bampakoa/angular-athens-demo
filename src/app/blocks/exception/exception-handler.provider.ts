declare var angular: angular.IAngularStatic;

export class ExceptionHandlerProvider {
  config = {
    appErrorPrefix: undefined
  };

  $get() {
    return {config: this.config};
  }

  configure(appErrorPrefix) {
    this.config.appErrorPrefix = appErrorPrefix;
  }
}

function config($provide) {
  $provide.decorator('$exceptionHandler', extendExceptionHandler);
}

function extendExceptionHandler($delegate, exceptionHandler, logger) {
  return (exception, cause) => {
    const appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
    const errorData = {exception: exception, cause: cause};
    exception.message = appErrorPrefix + exception.message;
    $delegate(exception, cause);
    if (exception.message) {
      logger.error(exception.message, errorData);
    }
  };
}

angular
  .module('blocks.exception')
  .provider('exceptionHandler', ExceptionHandlerProvider)
  .config(config);
