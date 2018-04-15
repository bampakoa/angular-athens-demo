declare var angular: angular.IAngularStatic;

export class ComicDetail {

  constructor(private imageService) {}

  getComicImage(thumbnail) {
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
