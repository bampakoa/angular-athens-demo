import { CharacterService } from '../characters/characters.service';
import { Character } from '../core/character.model';
import { ImageService } from '../core/image.service';
import { Thumbnail } from '../core/thumbnail.model';

declare var angular: angular.IAngularStatic;

export class CharacterDetail {

  constructor(private imageService: ImageService, private characterService: CharacterService) {}

  getAvatar(thumbnail: Thumbnail): string {
    return this.imageService.getImage('standard_medium', thumbnail);
  }

  getCharacterImage(thumbnail: Thumbnail): string {
    return this.imageService.getImage('portrait_uncanny', thumbnail);
  }

  getCharacterLink(character: Character): string {
    return this.characterService.getCharacterDetailsUrl(character);
  }

}

angular
  .module('ngaApp.widgets')
  .component('ngaCharacterDetail', {
      controller: CharacterDetail,
      bindings: {
          character: '<'
      },
      templateUrl: 'app/widgets/character-detail.html'
  });
