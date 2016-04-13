var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jobPost',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider

    .when('/jobPost',{
      templateUrl: 'jobPost/tmpls/joblisting.html',
      controller: 'JobPostController as PostCtrl'
    })
  })
