var angular = require('angular');
var angularRoute = require('angular-route');



angular
  .module('cHome',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider

    .when('/clienthome/:id',{
      templateUrl: 'chome/tmpls/clientHome.html',
      controller: 'ClientController as CliCtrl'
    })
  })
