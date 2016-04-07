var angular = require('angular');
var angularRoute = require('angular-route');
require('angular-material');
require('angular-messages');
// require('angular-material-icons');
require('./loginFeature');
require('./clientHome');
require('./spHome');


angular
  .module('maidApp',[
    'ngRoute',
    'ngMaterial',
    'ngMessages',
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
