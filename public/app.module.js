var angular = require('angular');
var angularRoute = require('angular-route');
require('angular-material');
require('angular-messages');


angular
  .module('maidApp',[
    'ngRoute',
    'loginFeature',
    'ngMaterial',
    'ngMessages'

    ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "login.html",
         controller: 'ModalController'

      })
      .when('/404',{
        template: '<h1> 404 </h1>'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })


  .controller('ModalController', function($scope, $mdDialog) {


    $scope.showModal = function(ev) {

      $mdDialog.show({

       controller: DialogController,
       templateUrl: 'loginFeature/templates/signInModal.html',
       parent: angular.element(document.body),
       targetEvent: ev,
       clickOutsideToClose:true,


      });
    };

    $scope.createAccount = function(ev) {

      $mdDialog.show({

       controller: DialogController,
       templateUrl: 'templates/createAccountModal.html',
       parent: angular.element(document.body),
       targetEvent: ev,
       clickOutsideToClose:true,

      });
    };

    function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }



  })
  .controller('DemoCtrl', function($scope) {
      $scope.client = {

        email: '',
        password: ''
      }
    })



  require('./loginFeature');
