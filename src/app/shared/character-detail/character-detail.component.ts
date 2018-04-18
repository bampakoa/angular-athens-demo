import { Component, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

import { Character } from '../../core/character.model';
import { ContextService } from '../../core/core.service';

declare var angular: angular.IAngularStatic;

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html'
})
export class CharacterDetailComponent {
  @Input() character: Character;

  constructor(private contextService: ContextService) {}

  getAvatar(): string {
    return this.contextService.getImage('standard_medium', this.character.thumbnail);
  }

  getCharacterImage(): string {
    return this.contextService.getImage('portrait_uncanny', this.character.thumbnail);
  }

  getCharacterLink(): string {
    return this.contextService.getCharacterDetailsUrl(this.character);
  }
}

angular
  .module('ngaApp.widgets')
  .directive('ngaCharacterDetail', downgradeComponent({component: CharacterDetailComponent}));
