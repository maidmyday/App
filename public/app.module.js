var angular = require('angular');
var angularRoute = require('angular-route');
var uiBoot = require('angular-ui-bootstrap');
var angularMatch = require('angular-validation-match');
require('./chome');
require('./sphome');
require('./goOnline');
require('./loginFeature');
require('./matches/');


angular
  .module('maidApp',[
    'ngRoute',
    'validation.match',
    'ui.bootstrap',
    'cHome',
    'spHome',
    'login',
    'goOnline',
    'match'
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
