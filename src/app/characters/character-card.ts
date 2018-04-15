declare var angular: angular.IAngularStatic;

export class CharacterCard {
  onSelect;

  constructor(private imageService, private characterService) {}

  getCharacterImage(thumbnail) {
    return this.imageService.getImage('landscape_incredible', thumbnail);
  }

  getCharacterLink(character) {
    return this.characterService.getCharacterDetailsUrl(character);
  }

  showCharacter(character) {
    this.onSelect({character: character});
  }
}

angular
  .module('ngaApp.characters')
  .component('ngaCharacterCard', {
    controller: CharacterCard,
    bindings: {
        character: '<',
        onSelect: '&'
    },
    templateUrl: 'app/characters/character-card.html'
  });
