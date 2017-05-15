angular.module('test-work.pages')
  .controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
    
    var vm = this;

    if (localStorage.auth == 'false') {
      $state.go('login_page');
    }

    vm.loginName = localStorage.user;

    vm.logout = function() {
      localStorage.auth = false;
      localStorage.user = 'not found';
      $state.go('login_page');
      
    }
   
  }]);