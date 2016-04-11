var angular = require('angular');
var angularRoute = require('angular-route');
var uiBoot = require('angular-ui-bootstrap');

angular
  .module('goOnline',[
    'ngRoute',
    'ui.bootstrap'
  /*,'ngMaterial'*/
    ])
  .config(function($routeProvider){
    $routeProvider
    .when('/goonline',{
      templateUrl: 'goOnline/tmpls/goOnline.html',
      controller: 'GoController as GoCtrl'
    })
  })
