var angular = require('angular');
var angularRoute = require('angular-route');
var uiBoot = require('angular-ui-bootstrap');
require('./clientHome');
require('./spHome');
require('./goOnline')


angular
  .module('maidApp',[
    'ngRoute',
    'ui.bootstrap',
    'cHome',
    'spHome',
    'goOnline'
    ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{

        templateUrl: './loginFeature/templates/login.html',
        controller: 'LoginModalController'

      })
      .when('/404',{
        template: '<h1> 404 </h1>'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })

  .controller('LoginModalController', function ($scope, $uibModal, $log, $location) {
  $scope.animationsEnabled = true;

  $scope.openSpLoginModal = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: './loginFeature/templates/Spmodal.html',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };

  $scope.openClientLoginModal = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: './loginFeature/templates/Clientmodal.html',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };

  $scope.registerClient = function () {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: './loginFeature/templates/Clientregistermodal.html',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };



  })
  .controller('ModalInstanceController', function ($scope, $uibModalInstance, $location) {


  $scope.showModalSection = 'login';


  $scope.registerClient = function () {
    $scope.showModalSection = 'register';
  }

  $scope.loginClient = function () {
    $scope.showModalSection = 'login';


  };
  $scope.signInClient = function () {
    $uibModalInstance.dismiss();
    // THIS PATH WILL NEED AN ID LIKE /clienthome/id
    $location.path('/clienthome');
  };

  $scope.registerClientPath = function () {
    $uibModalInstance.dismiss();
    // THIS PATH WILL NEED AN ID LIKE /clienthome/id
    $location.path('/clienthome');
  }


  $scope.registerSp = function () {
    $scope.showModalSection = 'register';
  }

  $scope.loginSp = function () {
    $scope.showModalSection = 'login';

  };
  $scope.signInSp = function () {
    $uibModalInstance.dismiss();
    // THIS PATH WILL NEED AN ID LIKE /clienthome/id
    $location.path('/sphome');
  };

  $scope.registerSpPath = function () {
    $uibModalInstance.dismiss();
    // THIS PATH WILL NEED AN ID LIKE /clienthome/id
    $location.path('/sphome');
  }
  });
