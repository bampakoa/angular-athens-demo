import { NgModule } from '@angular/core';

import { ComicService } from './comics.service';

declare var angular: angular.IAngularStatic;

@NgModule({
  providers: [ComicService]
})
export class ComicsModule {}

angular.module('ngaApp.comics', []);
