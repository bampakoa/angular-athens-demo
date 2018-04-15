import { Character, Url } from '../core/character.model';

declare var angular: angular.IAngularStatic;

export class CharacterService {

  constructor(private $resource: angular.resource.IResourceService, private $filter: any, private apiUrl: string) {}

  getCharacterDetailsUrl(character: Character): string {
    const detail: Url[] = this.$filter('filter')(character.urls, {type: 'detail'});
    return detail.length > 0 ? detail[0].url : 'http://marvel.com';
  }

  getCharacters(term: string): angular.IPromise<angular.resource.IResourceArray<Character[]>> {
    return this.$resource<Character[]>(this.apiUrl + 'characters').query({nameStartsWith: term}).$promise;
  }

}

angular
  .module('ngaApp.characters')
  .service('characterService', CharacterService);
