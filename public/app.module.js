var angular = require('angular');
var angularRoute = require('angular-route');
// require('angular-material');
// require('angular-messages');
// require('angular-material-icons');
require('./loginFeature');
require('./clientHome');
require('./spHome');


angular
  .module('maidApp',[
    'ngRoute',
    // 'ngMaterial',
    // 'ngMessages',
    'loginFeature',
    'cHome',
    'spHome'
    ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: 'login.html',
         controller: 'ModalController'
      })
      .when('/404',{
        template: '<h1> 404 </h1>'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })


  .controller('ModalController', function($scope, $mdDialog, $rootScope) {

    $scope.showModal = function(ev) {
      console.log($mdDialog);
      $mdDialog.show({

       controller: SignInController,
       templateUrl: 'loginFeature/templates/signInModal.html',
       parent: angular.element(document.body),
       targetEvent: ev,
       clickOutsideToClose:true,


      });
    };

    $scope.showSPModal = function(ev) {
      console.log($mdDialog);
      $mdDialog.show({

       controller: SignInController,
       templateUrl: 'loginFeature/templates/signInSPModal.html',
       parent: angular.element(document.body),
       targetEvent: ev,
       clickOutsideToClose:true,


      });
    };
    $scope.showSection = true;
    $scope.changeVis = function () {
      console.log($scope.showSection);
      $scope.showSection = !$scope.showSection;
    }




    function SignInController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
  };

  $scope.client = {

    email: '',
    password: ''
  }



})
.controller('AppCtrl', function($mdDialog, $log) {
    var self = this;

        self.login = function ($event) {
            $mdDialog.show({
                controller: 'dialogCtrl',
                controllerAs: 'lc',
                templateUrl: 'loginFeature/templates/test.html'
            });
        };
  })
  .controller('dialogCtrl', function($scope, $log) {
    var self = this;
    self.show_form = 'login';

    self.showRegister = function() {
      self.show_form = 'register';
      console.log('show register');
    };

    self.showLogin = function() {
      self.show_form = 'login';
      console.log('show login');
    };
  });
