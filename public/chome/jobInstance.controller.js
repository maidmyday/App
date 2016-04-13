angular
.module('cHome')
.controller('JobInstanceCtrl',JobInstanceCtrl)

  JobInstanceCtrl.$inject = ['$scope','$rootScope','$location','$uibModal','$log','$uibModalInstance'];

  function JobInstanceCtrl($rootScope,$scope,$uibModal,$log,$location,$uibModalInstance){
    var vm = this;

    vm.ok = function(){
      $uibModalInstance.close();
    }

    vm.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    }
  }
