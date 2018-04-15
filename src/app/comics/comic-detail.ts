import { ContextService } from '../core/core.service';
import { Thumbnail } from '../core/thumbnail.model';

declare var angular: angular.IAngularStatic;

export class ComicDetail {

  constructor(private contextService: ContextService) {}

  getComicImage(thumbnail: Thumbnail): string {
    return this.contextService.getImage('portrait_fantastic', thumbnail);
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
