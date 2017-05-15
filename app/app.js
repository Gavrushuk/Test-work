angular.module('test-work', 
  [
    'ui.router',
    'test-work.pages',
    'angular-websql',
    'ngMessages',
    'ngMaterial',
    'pascalprecht.translate'
  ])
  .controller('MainCtrl', ['$scope', function() {
    var vm = this;

    vm.name = 'Illia'
  }])
  
  .config(['$urlRouterProvider', '$locationProvider', '$translateProvider', function($urlRouterProvider, $locationProvider, $translateProvider) {
    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);

    $translateProvider
      .translations('en', {
        LOGIN: 'Login',
        PASSWORD: 'Password',
        SIGNIN: 'SignIn',
        ERROR: 'Please enter a value for this field',
        TITLE: 'Test',
        LOGOUT: 'Exit'
      })
      .translations('ru', {
        LOGIN: 'Логин',
        PASSWORD: 'Пароль',
        SIGNIN: 'Войти',
        ERROR: 'Пожалуйста введите значение в это поле',
        TITLE: 'Тест',
        LOGOUT: 'Вихід'
      })
      .preferredLanguage('en');

  }]);