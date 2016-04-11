angular
  .module('cHome')
  .controller('ClientController', ClientController);

  ClientController.$inject = ['$scope','$rootScope','$location','$uibModal','$log','ClientService'];

  function ClientController($scope,$rootScope,$location,$uibModal,$log,ClientService) {
    var vm = this;

    ClientService.getClient().then(function(data){
      console.log('client data',data);
      vm.provider = data;
      console.log('vm client',vm.provider);
    })

    //edit profile content
    vm.editInfo = false;
    vm.editBtn = function(){
      vm.editInfo = !vm.editInfo;
    }

    //the rating stars
    vm.rate = 0;
    vm.max = 5;
    vm.isReadonly = false;

    vm.hoveringOver = function(value) {
      vm.overStar = value;
      vm.percent = 100 * (value / vm.max);
    };

    vm.ratingStates = [
      {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
      {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
      {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
      {stateOn: 'glyphicon-heart'},
      {stateOff: 'glyphicon-off'}
    ];

    //temporary accordion data injecting the page

    vm.historyData = ClientService.historyData;

  }
