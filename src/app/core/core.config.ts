import { ExceptionHandlerProvider } from '../blocks/exception/exception-handler.provider';
import { environment } from '../../environments/environment';

declare var angular: angular.IAngularStatic;

function configureCore($compileProvider: angular.ICompileProvider, $logProvider: angular.ILogProvider, $httpProvider: angular.IHttpProvider,
                        exceptionHandlerProvider: ExceptionHandlerProvider) {
  // disable debug info and log messages
  $compileProvider.debugInfoEnabled(false);
  $logProvider.debugEnabled(false);

  // add a prefix to application exception messages
  exceptionHandlerProvider.configure(environment.settings.appErrorPrefix);

  // toastr configuration
  toastr.options.timeOut = 1500;

  $httpProvider.interceptors.push('httpInterceptor');
}

angular
  .module('ngaApp.core')
  .config(configureCore);
