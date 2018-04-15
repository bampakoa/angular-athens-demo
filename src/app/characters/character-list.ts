import { CharacterService } from './characters.service';
import { Character } from '../core/character.model';

declare var angular: angular.IAngularStatic;

export class CharacterList {
  characters: Character[] = [];
  isVisible = false;
  selectedCharacter: Character;
  showProgress = false;

  constructor(private $mdSidenav: angular.material.ISidenavService, private characterService: CharacterService) {}

  search(name: string) {
    if (name) {
      this.isVisible = false;
      this.showProgress = true;
      this.characterService.getCharacters(name).then(this.charactersGetComplete).finally(() => this.showProgress = false);
    } else {
      this.showProgress = false;
      this.characters = [];
    }
  }

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
    this.$mdSidenav('sidebar').toggle();
  }

  private charactersGetComplete = (characters: any) => {
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
