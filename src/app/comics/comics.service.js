(function () {
    'use strict';

    angular
        .module('ngaApp.comics')
        .service('comicService', comicService);
    
    /* @ngInject */
    function comicService($resource, $q, apiUrl, apiKey) {
        var service = {
            getComics: getComics
        };

        return service;

        function getComics(characterId) {
            return $q(function(resolve, reject){
                $resource(apiUrl + 'characters/' + characterId + '/comics').get({apikey: apiKey}).$promise.then(function(response){
                    resolve(response.data.results);
                });
            });
        }
    }
})();