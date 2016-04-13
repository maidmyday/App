var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jobPost',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider

    .when('/jobpost',{
      templateUrl: 'jobPost/tmpls/jobpost.html',
      controller: 'JobPostController as PostCtrl'
    })
  })
