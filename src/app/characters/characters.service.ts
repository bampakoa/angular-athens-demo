declare var angular: angular.IAngularStatic;

export class CharacterService {

  constructor(private $resource, private $filter, private apiUrl) {}

  getCharacterDetailsUrl(character) {
    const detail = this.$filter('filter')(character.urls, {type: 'detail'});
    return detail.length > 0 ? detail[0].url : 'http://marvel.com';
  }

  getCharacters(term) {
    return this.$resource(this.apiUrl + 'characters').query({nameStartsWith: term}).$promise;
  }

}

angular
  .module('ngaApp.characters')
  .service('characterService', CharacterService);
