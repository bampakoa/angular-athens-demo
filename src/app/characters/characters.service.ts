import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';
import { catchError, map } from 'rxjs/operators';

import { Character } from '../core/character.model';
import { ContextService } from '../core/core.service';
import { environment } from '../../environments/environment';

declare var angular: angular.IAngularStatic;

@Injectable()
export class CharacterService {

  constructor(private http: HttpClient, private contextService: ContextService) {}

  getCharacters(term: string): Promise<Character[]> {
    const options = new HttpParams().set('nameStartsWith', term);
    return this.http
      .get<Character[]>(environment.apiUrl + 'characters', {params: options})
      .pipe(
        map((response: any) => response.data.results),
        catchError(this.contextService.handleError)
      )
      .toPromise();
  }

}

angular
  .module('ngaApp.characters')
  .service('characterService', downgradeInjectable(CharacterService));
