var angular = require('angular');
var angularRoute = require('angular-route');
// require('angular-material');
// require('angular-messages');
// require('angular-material-icons');
// require('./loginFeature');
require('./clientHome');
require('./spHome');


angular
  .module('maidApp',[
    'ngRoute',
    // 'ngMaterial',
    // 'ngMessages',
    // 'loginFeature',
    'cHome',
    'spHome'
    ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: 'login.html'
        //  controller: 'ModalController'
      })
      .when('/404',{
        template: '<h1> 404 </h1>'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
