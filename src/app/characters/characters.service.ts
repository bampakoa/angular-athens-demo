import { Character } from '../core/character.model';
import { environment } from '../../environments/environment';

declare var angular: angular.IAngularStatic;

export class CharacterService {

  constructor(private $resource: angular.resource.IResourceService) {}

  getCharacters(term: string): angular.IPromise<angular.resource.IResourceArray<Character[]>> {
    return this.$resource<Character[]>(environment.apiUrl + 'characters').query({nameStartsWith: term}).$promise;
  }

}

angular
  .module('ngaApp.characters')
  .service('characterService', CharacterService);
