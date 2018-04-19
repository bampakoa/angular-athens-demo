import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpgradeModule } from '@angular/upgrade/static';

import { stateServiceProvider } from './ajs-upgraded-providers';
import { AppComponent } from './app.component';
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
    stateServiceProvider,
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
require('angular-material');
require('angular-ui-router');

angular
  .module('ngaApp', [
    'ngMaterial',
    'ui.router'
  ]);

require('./core/core.routes');
require('./templates');

angular
  .module('ngaApp')
  .component('appRoot', {
    controller: AppComponent,
    templateUrl: 'app/app.component.html'
  });
