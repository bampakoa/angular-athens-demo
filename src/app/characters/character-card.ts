import { Character } from '../core/character.model';
import { ContextService } from '../core/core.service';
import { Thumbnail } from '../core/thumbnail.model';

declare var angular: angular.IAngularStatic;

export class CharacterCard {
  onSelect: any;

  constructor(private contextService: ContextService) {}

  getCharacterImage(thumbnail: Thumbnail): string {
    return this.contextService.getImage('landscape_incredible', thumbnail);
  }

  getCharacterLink(character: Character): string {
    return this.contextService.getCharacterDetailsUrl(character);
  }

  showCharacter(character: Character) {
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
