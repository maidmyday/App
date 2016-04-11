var angular = require('angular');
var angularRoute = require('angular-route');
var uiBoot = require('angular-ui-bootstrap');
// var material = require('angular-material');

angular
  .module('spHome',[
    'ngRoute',
    'ui.bootstrap'
  /*,'ngMaterial'*/
    ])
  .config(function($routeProvider){
    $routeProvider
    .when('/sphome',{
      templateUrl: 'home/tmpls/spHome.html',
      controller: 'SpController as SpCtrl'
    })
  })
