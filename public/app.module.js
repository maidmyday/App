var angular = require('angular');
var angularRoute = require('angular-route');
var uiBoot = require('angular-ui-bootstrap');
<<<<<<< HEAD
require('./home');
require('./goOnline');
require('./loginFeature');


angular
  .module('maidApp',[
    'ngRoute',
    'ui.bootstrap',
    'cHome',
    'spHome',
    'goOnline',
    'login.module'
  ])

  .config(function($routeProvider) {
    $routeProvider
      .when('/',{

        templateUrl: './loginFeature/templates/login.html',
        controller: 'LoginModalController'

      })
      .when('/404',{
        template: '<h1> 404 </h1>'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
