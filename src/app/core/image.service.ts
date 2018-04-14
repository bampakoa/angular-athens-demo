(function () {
    'use strict';

    angular
        .module('ngaApp.core')
        .service('imageService', imageService);

    function imageService() {
        const service = {
            getImage: getImage
        };

        return service;

        function getImage(variant, thumbnail) {
            return thumbnail.path + '/' + variant + '.' + thumbnail.extension;
        }
    }
})();
