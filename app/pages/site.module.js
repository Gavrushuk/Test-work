angular.module('test-work.pages', [])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login_page', {
        url: '/',
        templateUrl: '/app/pages/login_page/login_page.html',
        controller: 'LoginPageCtrl',
        controllerAs: 'vm',
      })
      .state('home', {
        url: '/home',
        templateUrl: '/app/pages/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      })
  }]);