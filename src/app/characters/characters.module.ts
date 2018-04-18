import { NgModule } from '@angular/core';

import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterService } from './characters.service';
import { AppMaterialModule } from '../app-material.module';
import { ComicsModule } from '../comics/comics.module';
import { SharedModule } from '../shared/shared.module';

declare var angular: angular.IAngularStatic;

@NgModule({
  imports: [
    AppMaterialModule,
    ComicsModule,
    SharedModule
  ],
  declarations: [
    CharacterCardComponent,
    CharacterListComponent
  ],
  providers: [CharacterService],
  entryComponents: [CharacterListComponent]
})
export class CharacterModule {}

angular.module('ngaApp.characters', []);
