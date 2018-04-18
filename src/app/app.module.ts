import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppErrorHandler } from './app-error-handler';
import { AuthInterceptor } from './auth-interceptor.service';
import { CharacterModule } from './characters/characters.module';
import { CoreModule } from './core/core.module';
import { QuizModule } from './quiz/quiz.module';

declare var angular: angular.IAngularStatic;

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CharacterModule,
    CoreModule,
    HttpClientModule,
    QuizModule,
    UpgradeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['ngaApp']);
  }
}

require('angular');
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-sanitize');
require('angular-ui-router');

require('./characters/characters.module');
require('./core/core.module');
require('./core/core.config');
require('./core/core.routes');
require('./layout/layout.module');
require('./layout/copyright');
require('./layout/shell');
require('./layout/topnav');
require('./quiz/quiz.module');
require('./quiz/question');
require('./quiz/quiz');
require('./shared/shared.module');
require('./shared/character-detail/character-detail.component');
require('./templates');

angular
  .module('ngaApp', [
      'ngaApp.core',
      'ngaApp.layout',
      'ngaApp.widgets',
      'ngaApp.characters',
      'ngaApp.quiz'
  ]);
