import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { AppMaterialModule } from '../app-material.module';

declare var angular: angular.IAngularStatic;

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  entryComponents: [CharacterDetailComponent]
})
export class SharedModule {}

angular.module('ngaApp.widgets', []);
