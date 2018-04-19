function configureCoreRoutes($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider,
                              $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('main', {
      url: '/',
      template: '<nga-character-list></nga-character-list>'
    })
    .state('quiz', {
      url: '/quiz',
      template: '<nga-quiz></nga-quiz>'
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('ngaApp')
  .config(configureCoreRoutes);
