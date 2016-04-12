angular
  .module('goOnline')
  .controller('GoController', GoController);

  GoController.$inject = ['$scope','$rootScope','$location', '$uibModal', '$log'/*,'GoService'*/];

  function GoController($scope,$rootScope,$location,$uibModal,$log/*,GoService*/){
    var vm = this;
  }
  // function standardSwitch($scope) {
  // $scope.switch = 'off';
  // }
  //
  // function alternateSwitch($scope) {
  // $scope.switchAlternate = 'off';
  // }
  //
  //
  // $scope.enabled = true;
  //   $scope.onOff = true;
  //   $scope.yesNo = true;
