var angular = require('angular');
var angularRoute = require('angular-route');
var uiBoot = require('angular-ui-bootstrap');
require('./clientHome');
require('./spHome');
require('./loginFeature');



angular
  .module('maidApp',[
    'ngRoute',
    'ui.bootstrap',
    'cHome',
    'spHome',
    'login.module'
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
  // .controller('ModalInstanceController', function ($scope, $uibModalInstance, $location,LoginService) {
  //
  //
  // $scope.showModalSection = 'login';
  //
  //
  // $scope.registerClient = function () {
  //   $scope.showModalSection = 'register';
  // }
  //
  // $scope.loginClient = function () {
  //   $scope.showModalSection = 'login';
  //
  //
  // };
  // $scope.signInClient = function () {
  //   $uibModalInstance.dismiss();
  //   // THIS PATH WILL NEED AN ID LIKE /clienthome/id
  //   $location.path('/clienthome');
  // };
  //
  // $scope.registerClientPath = function (user) {
  //   LoginService.postClient(user)
  //   $uibModalInstance.dismiss();
  //   // THIS PATH WILL NEED AN ID LIKE /clienthome/id
  //   $location.path('/clienthome');
  // }
  //
  //
  // $scope.registerSp = function () {
  //   $scope.showModalSection = 'register';
  // }
  //
  // $scope.loginSp = function () {
  //   $scope.showModalSection = 'login';
  //
  // };
  // $scope.signInSp = function () {
  //   $uibModalInstance.dismiss();
  //   // THIS PATH WILL NEED AN ID LIKE /clienthome/id
  //   $location.path('/sphome');
  // };
  //
  // $scope.registerSpPath = function () {
  //   $uibModalInstance.dismiss();
  //   // THIS PATH WILL NEED AN ID LIKE /clienthome/id
  //   $location.path('/sphome');
  // }
  // });
