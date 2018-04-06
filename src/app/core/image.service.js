(function () {
    'use strict';

    angular
        .module('ngaApp.core')
        .service('imageService', imageService);
    
    /* @ngInject */
    function imageService() {
        var service = {
            getImage: getImage
        };

        return service;

        function getImage(variant, thumbnail) {
            return thumbnail.path + '/' + variant + '.' + thumbnail.extension;
        }
    }
})();