import { Comic } from './comic.model';
import { ComicService } from './comics.service';
import { Character } from '../core/character.model';

declare var angular: angular.IAngularStatic;

export class ComicList implements angular.IComponentController {
  character: Character;
  comics: Comic[] = [];
  showProgress = false;

  constructor(private comicService: ComicService) {}

  $onChanges() {
    this.comics = [];
    this.showProgress = true;
    this.comicService.getComics(this.character.id).then(this.comicsGetComplete).finally(() => this.showProgress = false);
  }

  private comicsGetComplete = (comics: any) => {
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
