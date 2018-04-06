(function () {
    'use strict';

    angular
        .module('ngaApp.characters')
        .service('characterService', characterService);
    
    /* @ngInject */
    function characterService($resource, $q, apiUrl, apiKey) {
        var service = {
            getCharacters: getCharacters,
            getCharacterDetailsUrl: getCharacterDetailsUrl
        };

        return service;

        function getCharacters(term) {
            return $q(function(resolve, reject){
                $resource(apiUrl + 'characters').get({
                    apikey: apiKey,
                    nameStartsWith: term
                }).$promise.then(function(response){
                    resolve(response.data.results);
                });
            });
        }

        function getCharacterDetailsUrl(character) {
            var detail = character.urls.find(function(url){
                return url.type === 'detail';
            });
            return detail ? detail.url : 'http://marvel.com';
        }
    }
})();