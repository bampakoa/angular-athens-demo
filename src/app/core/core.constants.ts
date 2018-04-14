(function () {
    'use strict';

    angular
        .module('ngaApp.core')
        .constant('toastr', toastr)
        .constant('toastTimeout', 1500)
        .constant('settings', getSettings())
        .constant('apiUrl', '//gateway.marvel.com/v1/public/')
        .constant('apiKey', '<Your public key here>');

    function getSettings() {
        const settings = {
            appErrorPrefix: '[Angular Heroes Error] ',
            appTitle: 'Angular Heroes',
            version: '1.0.0'
        };

        return settings;
    }
})();
