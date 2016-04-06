var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('cHome',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/chome',{
          templateUrl: 'clientHome/tmpls/clientHome.html',
          controller: 'ClientController as ClCtrl'
        })
  })
