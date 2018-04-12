(function () {
    'use strict';

    angular
        .module('ngaApp.comics')
        .service('comicService', comicService);
    
    /* @ngInject */
    function comicService($resource, apiUrl) {
        var service = {
            getComics: getComics
        };

        return service;

        function getComics(characterId) {
            return $resource(apiUrl + 'characters/' + characterId + '/comics').query().$promise;
        }
    }
})();