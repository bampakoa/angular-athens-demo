import { environment } from '../../environments/environment';

declare var angular: angular.IAngularStatic;

function configureCore($compileProvider: angular.ICompileProvider, $logProvider: angular.ILogProvider,
                        $httpProvider: angular.IHttpProvider) {
  // disable debug info and log messages
  $compileProvider.debugInfoEnabled(false);
  $logProvider.debugEnabled(false);

  // toastr configuration
  toastr.options.timeOut = 1500;

  $httpProvider.interceptors.push('httpInterceptor');
}

angular
  .module('ngaApp.core')
  .config(configureCore);
