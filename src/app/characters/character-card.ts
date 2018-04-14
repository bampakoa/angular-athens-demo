(() => {

    'use strict';

    angular
        .module('ngaApp.characters')
        .component('ngaCharacterCard', {
            controller: CharacterCard,
            controllerAs: 'vm',
            bindings: {
                character: '<',
                onSelect: '&'
            },
            templateUrl: 'app/characters/character-card.html'
        });

    function CharacterCard(imageService, characterService) {
        const vm = this;
        vm.getCharacterImage = getCharacterImage;
        vm.getCharacterLink = getCharacterLink;
        vm.showCharacter = showCharacter;

        function getCharacterImage(thumbnail) {
            return imageService.getImage('landscape_incredible', thumbnail);
        }

        function getCharacterLink(character) {
            return characterService.getCharacterDetailsUrl(character);
        }

        function showCharacter(character) {
            vm.onSelect({character: character});
        }
    }
})();
