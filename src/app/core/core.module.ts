import { NgModule } from '@angular/core';

import { Logger } from './logger.service';

declare var angular: angular.IAngularStatic;

@NgModule({
  providers: [Logger]
})
export class CoreModule {}

angular.module('ngaApp.core', [
    // Angular modules
    'ngResource',

    // 3rd Party Modules
    'ngMaterial',
    'ui.router'
]);
