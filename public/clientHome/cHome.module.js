var angular = require('angular');
var angularRoute = require('angular-route');
require('angular-material');
require('angular-messages');
require('angular-animate');
require('angular-aria');

angular
  .module('cHome',['ngRoute','ngMaterial'])
  .config(function($routeProvider){
    $routeProvider
    .when('/clienthome',{
      templateUrl: 'clientHome/tmpls/clientHome.html',
      controller: 'ClientController as CliCtrl'
    })
  })
