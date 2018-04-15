declare var angular: angular.IAngularStatic;

export class Copyright {
  version = '';

  constructor(private settings) {}

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
