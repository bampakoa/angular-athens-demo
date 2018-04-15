declare var angular: angular.IAngularStatic;

export class ImageService {
  getImage(variant, thumbnail) {
    return thumbnail.path + '/' + variant + '.' + thumbnail.extension;
  }
}

angular
  .module('ngaApp.core')
  .service('imageService', ImageService);
