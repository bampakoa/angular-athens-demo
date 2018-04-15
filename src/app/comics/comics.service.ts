declare var angular: angular.IAngularStatic;

export class ComicService {

  constructor(private $resource, private apiUrl) {}

  getComics(characterId) {
      return this.$resource(this.apiUrl + 'characters/' + characterId + '/comics').query().$promise;
  }

}

angular
  .module('ngaApp.comics')
  .service('comicService', ComicService);
