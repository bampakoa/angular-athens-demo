(function () {
    'use strict';

    angular
        .module('ngaApp.comics')
        .service('comicService', comicService);

    function comicService($resource, apiUrl) {
        const service = {
            getComics: getComics
        };

        return service;

        function getComics(characterId) {
            return $resource(apiUrl + 'characters/' + characterId + '/comics').query().$promise;
        }
    }
})();
