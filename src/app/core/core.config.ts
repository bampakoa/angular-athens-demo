function configureCore($compileProvider, $logProvider, $httpProvider, exceptionHandlerProvider, settings, toastr, toastTimeout) {
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
