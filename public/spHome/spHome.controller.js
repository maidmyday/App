angular
  .module('spHome')
  .controller('SpController', SpController);

  SpController.$inject = ['$scope','$rootScope','$location'/*'SpService'*/];

  function SpController($scope,$rootScope,$location/*SpService*/) {
     $scope.accordionData = [
       {
         title: "this is clavin",
         content: "this is a great content"
       },
       {
         title: "this is alex",
         content: "this is the great content"
       }
     ]
  }
