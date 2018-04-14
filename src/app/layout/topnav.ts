(() => {

    'use strict';

    angular
        .module('ngaApp.layout')
        .component('ngaTopnav', {
            controller: Topnav,
            controllerAs: 'vm',
            templateUrl: 'app/layout/topnav.html'
        });

    function Topnav(settings) {
        const vm = this;
        vm.title = '';
        vm.$onInit = onInit;

        function onInit() {
            vm.title = settings.appTitle;
        }
    }
})();
