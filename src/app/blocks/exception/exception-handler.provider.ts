import { Logger } from '../logger/logger';

declare var angular: angular.IAngularStatic;

export class ExceptionHandlerProvider implements angular.IServiceProvider {
  config = {
    appErrorPrefix: undefined
  };

  $get() {
    return {config: this.config};
  }

  configure(appErrorPrefix?: string) {
    this.config.appErrorPrefix = appErrorPrefix;
  }
}

function config($provide: angular.auto.IProvideService) {
  $provide.decorator('$exceptionHandler', extendExceptionHandler);
}

function extendExceptionHandler($delegate: angular.IExceptionHandlerService, exceptionHandler: ExceptionHandlerProvider, logger: Logger) {
  return (exception: DOMException, cause: string) => {
    const appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
    const errorData = {
      exception: exception,
      cause: cause
    };

    $delegate(exception, cause);

    if (exception.message) {
      logger.error(exception.message, errorData, appErrorPrefix);
    }
  };
}

angular
  .module('blocks.exception')
  .provider('exceptionHandler', ExceptionHandlerProvider)
  .config(config);
