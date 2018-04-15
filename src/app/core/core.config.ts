import { ExceptionHandlerProvider } from '../blocks/exception/exception-handler.provider';

declare var angular: angular.IAngularStatic;

function configureCore($compileProvider: angular.ICompileProvider, $logProvider: angular.ILogProvider, $httpProvider: angular.IHttpProvider,
                        exceptionHandlerProvider: ExceptionHandlerProvider, settings: any, toastr: Toastr, toastTimeout: number) {
  // disable debug info and log messages
  $compileProvider.debugInfoEnabled(false);
  $logProvider.debugEnabled(false);

  // add a prefix to application exception messages
  exceptionHandlerProvider.configure(settings.appErrorPrefix);

  // toastr configuration
  toastr.options.timeOut = toastTimeout;

  $httpProvider.interceptors.push('httpInterceptor');
}

angular
  .module('ngaApp.core')
  .config(configureCore);
