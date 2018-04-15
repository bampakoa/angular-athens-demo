import { Character } from '../core/character.model';
import { ContextService } from '../core/core.service';
import { Thumbnail } from '../core/thumbnail.model';

declare var angular: angular.IAngularStatic;

export class CharacterDetail {

  constructor(private contextService: ContextService) {}

  getAvatar(thumbnail: Thumbnail): string {
    return this.contextService.getImage('standard_medium', thumbnail);
  }

  getCharacterImage(thumbnail: Thumbnail): string {
    return this.contextService.getImage('portrait_uncanny', thumbnail);
  }

  getCharacterLink(character: Character): string {
    return this.contextService.getCharacterDetailsUrl(character);
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
