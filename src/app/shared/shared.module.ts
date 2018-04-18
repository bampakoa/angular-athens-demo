import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { RouterLinkDirective } from './router-link.directive';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [
    CharacterDetailComponent,
    RouterLinkDirective
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    CharacterDetailComponent,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    RouterLinkDirective
  ]
})
export class SharedModule {}
