angular
  .module('cHome')
  .controller('ClientController', ClientController);

  ClientController.$inject = ['$scope','$rootScope','$location','$uibModal','$log','ClientService'];

  function ClientController($scope,$rootScope,$location,$uibModal,$log,ClientService) {
    var vm = this;

    //the rating stars
    $scope.rate = 0;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [
      {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
      {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
      {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
      {stateOn: 'glyphicon-heart'},
      {stateOff: 'glyphicon-off'}
    ];

    //temporary accordion data injecting the page

    $scope.historyData = ClientService.historyData;

  }
