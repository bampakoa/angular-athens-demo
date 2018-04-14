(function () {

    'use strict';

    angular
        .module('ngaApp.comics')
        .component('ngaComicDetail', {
            controller: ComicDetail,
            controllerAs: 'vm',
            bindings: {
                comic: '<'
            },
            templateUrl: 'app/comics/comic-detail.html'
        });

    function ComicDetail(imageService) {
        const vm = this;
        vm.getComicImage = getComicImage;

        function getComicImage(thumbnail) {
            return imageService.getImage('portrait_fantastic', thumbnail);
        }
    }
})();
