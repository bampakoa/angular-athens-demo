(function () {

    'use strict';

    angular
        .module('ngaApp.characters')
        .component('ngaCharacterCard', {
            controller: CharacterCard,
            controllerAs: 'vm',
            bindings: {
                character: '<'
            },
            templateUrl: 'app/characters/character-card.html'
        });

    function CharacterCard(imageService, characterService) {
        var vm = this;
        vm.getCharacterImage = getCharacterImage;
        vm.getCharacterLink = getCharacterLink;

        function getCharacterImage(thumbnail) {
            return imageService.getImage('landscape_incredible', thumbnail);
        }

        function getCharacterLink(character) {
            return characterService.getCharacterDetailsUrl(character);
        }

        function showCharacter() {}
    }
})();