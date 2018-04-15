declare var angular: angular.IAngularStatic;

export class CharacterList {
  characters = [];
  isVisible = false;
  selectedCharacter;
  showProgress = false;

  constructor(private $mdSidenav, private characterService) {}

  search(name) {
    if (name) {
      this.isVisible = false;
      this.showProgress = true;
      this.characterService.getCharacters(name).then(this.charactersGetComplete).finally(() => this.showProgress = false);
    } else {
      this.showProgress = false;
      this.characters = [];
    }
  }

  selectCharacter(character) {
    this.selectedCharacter = character;
    this.$mdSidenav('sidebar').toggle();
  }

  private charactersGetComplete = (characters) => {
    this.characters = characters;
    return this.characters;
  }
}

angular
  .module('ngaApp.characters')
  .component('ngaCharacterList', {
    controller: CharacterList,
    templateUrl: 'app/characters/character-list.html'
  });
