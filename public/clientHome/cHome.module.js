var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('cHome',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/cHome',{
          templateUrl: 'clientHome/tmpls/clientHome.html',
          controller: 'ClientController as ClientCtrl'
        })
  })
