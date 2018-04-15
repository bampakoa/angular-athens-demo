import { Character, Url } from './character.model';
import { Thumbnail } from './thumbnail.model';

declare var angular: angular.IAngularStatic;

export class ContextService {

  constructor(private $filter: any) {}

  getCharacterDetailsUrl(character: Character): string {
    const detail: Url[] = this.$filter('filter')(character.urls, {type: 'detail'});
    return detail.length > 0 ? detail[0].url : 'http://marvel.com';
  }

  getImage(variant: string, thumbnail: Thumbnail): string {
    return thumbnail.path + '/' + variant + '.' + thumbnail.extension;
  }

}

angular
  .module('ngaApp.core')
  .service('contextService', ContextService);
