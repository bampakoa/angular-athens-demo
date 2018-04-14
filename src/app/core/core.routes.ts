function configureCoreRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
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
  .module('ngaApp.core')
  .config(configureCoreRoutes);
