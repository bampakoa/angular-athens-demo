import { Thumbnail } from './thumbnail.model';

declare var angular: angular.IAngularStatic;

export class ImageService {
  getImage(variant: string, thumbnail: Thumbnail): string {
    return thumbnail.path + '/' + variant + '.' + thumbnail.extension;
  }
}

angular
  .module('ngaApp.core')
  .service('imageService', ImageService);
