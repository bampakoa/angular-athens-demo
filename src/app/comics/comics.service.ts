import { Comic } from './comic.model';
import { environment } from '../../environments/environment';

declare var angular: angular.IAngularStatic;

export class ComicService {

  constructor(private $resource: angular.resource.IResourceService) {}

  getComics(characterId: number): angular.IPromise<angular.resource.IResourceArray<Comic[]>> {
      return this.$resource<Comic[]>(environment.apiUrl + 'characters/' + characterId + '/comics').query().$promise;
  }

}

angular
  .module('ngaApp.comics')
  .service('comicService', ComicService);
