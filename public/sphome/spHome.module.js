var angular = require('angular');
var angularRoute = require('angular-route');
var uiBoot = require('angular-ui-bootstrap');


angular
  .module('spHome',[
    'ngRoute',
    'ui.bootstrap'
    ])
  .config(function($routeProvider){
    $routeProvider
    .when('/sphome/:id',{
      templateUrl: 'sphome/tmpls/spHome.html',
      controller: 'SpController as SpCtrl'
    })
  })
