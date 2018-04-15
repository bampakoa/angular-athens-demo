declare var angular: angular.IAngularStatic;

export class Topnav {
  title = '';

  constructor(private settings) {}

  $onInit() {
    this.title = this.settings.appTitle;
  }
}

angular
  .module('ngaApp.layout')
  .component('ngaTopnav', {
      controller: Topnav,
      templateUrl: 'app/layout/topnav.html'
  });
