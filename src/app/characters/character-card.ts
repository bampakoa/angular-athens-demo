import { CharacterService } from './characters.service';
import { Character } from '../core/character.model';
import { ImageService } from '../core/image.service';
import { Thumbnail } from '../core/thumbnail.model';

declare var angular: angular.IAngularStatic;

export class CharacterCard {
  onSelect: any;

  constructor(private imageService: ImageService, private characterService: CharacterService) {}

  getCharacterImage(thumbnail: Thumbnail): string {
    return this.imageService.getImage('landscape_incredible', thumbnail);
  }

  getCharacterLink(character: Character): string {
    return this.characterService.getCharacterDetailsUrl(character);
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
