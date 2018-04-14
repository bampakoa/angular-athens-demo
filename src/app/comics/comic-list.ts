class ComicList {
  character;
  comics = [];
  showProgress = false;

  constructor(private comicService) {}

  $onChanges() {
    this.comics = [];
    this.showProgress = true;
    this.comicService.getComics(this.character.id).then(this.comicsGetComplete).finally(() => this.showProgress = false);
  }

  private comicsGetComplete = comics => {
    this.comics = comics;
    return this.comics;
  }
}

angular
  .module('ngaApp.comics')
  .component('ngaComicList', {
    controller: ComicList,
    bindings: {
        character: '<'
    },
    templateUrl: 'app/comics/comic-list.html'
  });
