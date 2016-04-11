angular
  .module('goOnline')
  .controller('GoController', GoController);

  GoController.$inject = ['$scope','$rootScope','$location', '$uibModal', '$log'/*,'GoService'*/];

  function GoController($scope,$rootScope,$location,$uibModal,$log/*,GoService*/){
    var vm = this;
  }
