import { Comic } from './comic.model';

declare var angular: angular.IAngularStatic;

export class ComicService {

  constructor(private $resource: angular.resource.IResourceService, private apiUrl: string) {}

  getComics(characterId: number): angular.IPromise<angular.resource.IResourceArray<Comic[]>> {
      return this.$resource<Comic[]>(this.apiUrl + 'characters/' + characterId + '/comics').query().$promise;
  }

}

angular
  .module('ngaApp.comics')
  .service('comicService', ComicService);
