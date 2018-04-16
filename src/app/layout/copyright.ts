import { environment } from '../../environments/environment';

declare var angular: angular.IAngularStatic;

export class Copyright implements angular.IComponentController {
  version = '';

  $onInit() {
    this.version = environment.settings.version;
  }
}

angular
  .module('ngaApp.layout')
  .component('ngaCopyright', {
    controller: Copyright,
    templateUrl: 'app/layout/copyright.html'
  });
