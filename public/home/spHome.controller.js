angular
  .module('spHome')
  .controller('SpController',SpController);

  SpController.$inject = ['$scope','$rootScope','$location','$uibModal','$log','SpService'];

  function SpController($scope,$rootScope,$location,$uibModal,$log,SpService) {
    // var vm = this;

    //go online: change a boolean and show change in dom, switch button?
    $scope.goOnline = function(){
      
    }

    //edit profile content
    $scope.editInfo = false;
    $scope.editBtn1 = function(){
      $scope.editInfo = !$scope.editInfo;
    }

    //edit about content
    $scope.editAbout = false;
    $scope.editBtn2 = function(){
      $scope.editAbout = !$scope.editAbout;
    }

    //edit specialties content
    $scope.editSpecial = false;
    $scope.editBtn3 = function(){
      $scope.editSpecial = !$scope.editSpecial;
    }

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

    // temporary accordion data to inject the page moved to service

    $scope.accordionData = SpService.accordionData;
    $scope.historyData = SpService.historyData;

  }
