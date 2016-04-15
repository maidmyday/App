var angular = require('angular');
var angularRoute = require('angular-route');
var uiBoot = require('angular-ui-bootstrap');


angular
  .module('cHome',[
    'ngRoute',
    'ui.bootstrap'
])
  .config(function($routeProvider){
    $routeProvider

    .when('/clienthome/:id',{
      templateUrl: 'chome/tmpls/clientHome.html',
      controller: 'ClientController as CliCtrl'
    })
  })
