angular.module('test-work.pages')
  .controller('LoginPageCtrl', [ 'AuthService', '$scope', '$translate', '$state', function (AuthService, $scope, $translate, $state) {

    var vm = this;

    localStorage.setItem('Lang', 'EN');

    vm.lang = localStorage.Lang;

    vm.changeLang = function(key) {
      $translate.use(key);
      localStorage.Lang = key.toUpperCase();
    }

    $translate.use(localStorage.Lang.toLowerCase());

    vm.signIn = function() {
      
      AuthService
        .checkUser(vm.loginSignIn, vm.passwordSignIn)
        .then(function(res) {
          vm.checkUserAuth = [];
          for (var i = 0; i < res.rows.length; i++) {
            vm.checkUserAuth.push(res.rows.item(i));
          }

          if (vm.checkUserAuth.length == 0) {

            console.log('Sorry! Login or password is not right!');
          
          } else {

            $state.go('home')
            localStorage.setItem('auth', true);
            localStorage.setItem('user', vm.checkUserAuth[0].login);

            console.log('Welcome ' + localStorage.user);

          }

        });

    }

  }]);