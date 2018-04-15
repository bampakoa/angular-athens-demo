declare var angular: angular.IAngularStatic;

export class Shell {}

angular
  .module('ngaApp.layout')
  .component('ngaShell', {
    controller: Shell,
    templateUrl: 'app/layout/shell.html'
  });
