declare var angular: angular.IAngularStatic;

export class Copyright implements angular.IComponentController {
  version = '';

  constructor(private settings: any) {}

  $onInit() {
    this.version = this.settings.version;
  }
}

angular
  .module('ngaApp.layout')
  .component('ngaCopyright', {
    controller: Copyright,
    templateUrl: 'app/layout/copyright.html'
  });
