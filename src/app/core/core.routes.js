(function () {
    'use strict';

    angular
        .module('ngaApp.core')
        .config(configure);

    /* @ngInject */
    function configure($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('main', {
                url: '/',
                template: '<nga-character-list></nga-character-list>'
            });

        $urlRouterProvider.otherwise('/');
    }
})();