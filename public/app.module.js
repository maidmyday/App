var angular = require('angular');
var angularRoute = require('angular-route');
require('./clientHome');
require('./spHome');


angular
  .module('maidApp',[
    'ngRoute',
    'cHome',
    'spHome'
    ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: 'login.html'

      })
      .when('/404',{
        template: '<h1> 404 </h1>'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
