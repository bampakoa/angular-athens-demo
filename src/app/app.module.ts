import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { loggerServiceProvider } from './ajs-upgraded-providers';
import { AppErrorHandler } from './app-error-handler';

declare var angular: angular.IAngularStatic;

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    loggerServiceProvider,
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
require('angular-resource');
require('angular-sanitize');
require('angular-ui-router');

require('./blocks/logger/logger.module');
require('./blocks/logger/logger');
require('./characters/characters.module');
require('./characters/character-card');
require('./characters/character-list');
require('./characters/characters.service');
require('./comics/comics.module');
require('./comics/comic-detail');
require('./comics/comic-list');
require('./comics/comics.service');
require('./core/core.module');
require('./core/core.config');
require('./core/core.routes');
require('./core/core.service');
require('./core/http-interceptor');
require('./layout/layout.module');
require('./layout/copyright');
require('./layout/shell');
require('./layout/topnav');
require('./quiz/quiz.module');
require('./quiz/question');
require('./quiz/quiz.service');
require('./quiz/quiz');
require('./widgets/widgets.module');
require('./widgets/character-detail');
require('./templates');

angular
  .module('ngaApp', [
      'ngaApp.core',
      'ngaApp.layout',
      'ngaApp.widgets',
      'ngaApp.characters',
      'ngaApp.comics',
      'ngaApp.quiz'
  ]);
