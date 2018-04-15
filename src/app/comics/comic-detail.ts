import { ImageService } from '../core/image.service';
import { Thumbnail } from '../core/thumbnail.model';

declare var angular: angular.IAngularStatic;

export class ComicDetail {

  constructor(private imageService: ImageService) {}

  getComicImage(thumbnail: Thumbnail): string {
    return this.imageService.getImage('portrait_fantastic', thumbnail);
  }

}

angular
  .module('ngaApp.comics')
  .component('ngaComicDetail', {
    controller: ComicDetail,
    bindings: {
      comic: '<'
    },
    templateUrl: 'app/comics/comic-detail.html'
  });
