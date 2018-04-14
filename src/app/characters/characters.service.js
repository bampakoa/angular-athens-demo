(function () {
    'use strict';

    angular
        .module('ngaApp.characters')
        .service('characterService', characterService);

    function characterService($resource, $filter, apiUrl) {
        var service = {
            getCharacters: getCharacters,
            getCharacterDetailsUrl: getCharacterDetailsUrl
        };

        return service;

        function getCharacters(term) {
            return $resource(apiUrl + 'characters').query({nameStartsWith: term}).$promise;
        }

        function getCharacterDetailsUrl(character) {
            var detail = $filter('filter')(character.urls, {type: 'detail'});
            return detail.length > 0 ? detail[0].url : 'http://marvel.com';
        }
    }
})();
