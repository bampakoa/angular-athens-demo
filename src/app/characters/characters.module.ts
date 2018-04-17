import { NgModule } from '@angular/core';

import { CharacterService } from './characters.service';

declare var angular: angular.IAngularStatic;

@NgModule({
  providers: [CharacterService]
})
export class CharacterModule {}

angular.module('ngaApp.characters', []);
