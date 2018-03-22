(function () {
    'use strict';

    angular
        .module('ngaApp.core')
        .config(configure);

    /* @ngInject */
    function configure($compileProvider, $logProvider, exceptionHandlerProvider, settings, toastr, toastTimeout) {
        // disable debug info and log messages
        $compileProvider.debugInfoEnabled(false);
        $logProvider.debugEnabled(false);

        // add a prefix to application exception messages
        exceptionHandlerProvider.configure(settings.appErrorPrefix);

        // toastr configuration
        toastr.options.timeOut = toastTimeout;
    }
})();