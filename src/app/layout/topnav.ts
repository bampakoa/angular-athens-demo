import { environment } from '../../environments/environment';

declare var angular: angular.IAngularStatic;

export class Topnav implements angular.IComponentController {
  title = '';

  $onInit() {
    this.title = environment.settings.appTitle;
  }
}

angular
  .module('ngaApp.layout')
  .component('ngaTopnav', {
      controller: Topnav,
      templateUrl: 'app/layout/topnav.html'
  });
