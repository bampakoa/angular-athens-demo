import { Character } from '../core/character.model';

declare var angular: angular.IAngularStatic;

export class CharacterService {

  constructor(private $resource: angular.resource.IResourceService, private apiUrl: string) {}

  getCharacters(term: string): angular.IPromise<angular.resource.IResourceArray<Character[]>> {
    return this.$resource<Character[]>(this.apiUrl + 'characters').query({nameStartsWith: term}).$promise;
  }

}

angular
  .module('ngaApp.characters')
  .service('characterService', CharacterService);
