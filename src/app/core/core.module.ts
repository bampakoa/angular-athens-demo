import { NgModule } from '@angular/core';

import { ContextService } from './core.service';
import { Logger } from './logger.service';

declare var angular: angular.IAngularStatic;

@NgModule({
  providers: [
    ContextService,
    Logger
  ]
})
export class CoreModule {}

angular.module('ngaApp.core', [
    // 3rd Party Modules
    'ngMaterial',
    'ui.router'
]);
