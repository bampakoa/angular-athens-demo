declare var angular: angular.IAngularStatic;

function configureCore($compileProvider: angular.ICompileProvider, $logProvider: angular.ILogProvider) {
  // disable debug info and log messages
  $compileProvider.debugInfoEnabled(false);
  $logProvider.debugEnabled(false);

  // toastr configuration
  toastr.options.timeOut = 1500;
}

angular
  .module('ngaApp.core')
  .config(configureCore);
