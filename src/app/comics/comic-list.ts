(() => {

    'use strict';

    angular
        .module('ngaApp.comics')
        .component('ngaComicList', {
            controller: ComicList,
            controllerAs: 'vm',
            bindings: {
                character: '<'
            },
            templateUrl: 'app/comics/comic-list.html'
        });

    function ComicList(comicService) {
        const vm = this;
        vm.comics = [];
        vm.showProgress = false;
        vm.$onChanges = onChanges;

        function onChanges() {
            vm.comics = [];
            vm.showProgress = true;
            comicService.getComics(vm.character.id).then(comicsGetComplete).finally(() => vm.showProgress = false);
        }

        function comicsGetComplete(comics) {
            vm.comics = comics;
            return vm.comics;
        }
    }
})();
