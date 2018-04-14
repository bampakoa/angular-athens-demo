(function() {
    'use strict';

    angular.module('ngaApp.core', [
        // Angular modules
        'ngResource',

        // Custom modules
        'blocks.exception',
        'blocks.logger',

        // 3rd Party Modules
        'ngMaterial',
        'ui.router'
    ]);
})();
