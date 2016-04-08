var angular = require('angular');
var angularRoute = require('angular-route');


angular
  .module('spHome',['ngRoute','maidApp'])
  .config(function($routeProvider){
    $routeProvider
    .when('/sphome',{
      templateUrl: 'spHome/tmpls/spHome.html',
      controller: 'SpController as SpCtrl'
    })
  })
