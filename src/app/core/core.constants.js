(function () {
    'use strict';

    angular
        .module('ngaApp.core')
        .constant('toastr', toastr)
        .constant('toastTimeout', 1500)
        .constant('settings', getSettings());

    function getSettings() {
        var settings = {
            appErrorPrefix: '[Angular Heroes Error] ',
            appTitle: 'Angular Heroes',
            version: '1.0.0'
        };

        return settings;
    }
})(); 