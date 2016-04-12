angular
  .module('cHome')
  .controller('ClientController', ClientController);

  ClientController.$inject = ['$scope','$rootScope','$location','$uibModal','$log','ClientService'];

  function ClientController($scope,$rootScope,$location,$uibModal,$log,ClientService) {
    var vm = this;

    //logout button
    vm.logout = function(){
      console.log('data inside logout function',window.localStorage);
      ClientService.logoutNow(window.JSON.parse(window.localStorage.getItem('theclient')).id).then(function(){
        window.localStorage.clear();
        console.log('hopefully empty: ',window.localStorage);
        $location.path('/');
      })
    }

    //getting data from the login and register
    ClientService.getClient(window.JSON.parse(window.localStorage.getItem('theclient')).id).then(function(data){
      console.log('client data from chome controller',data);
      console.log('testing theclient from chome controller',window.localStorage.getItem('theclient'));
      // vm.client = data;
      vm.clientData =  JSON.parse(window.localStorage.getItem('theclient'));
      console.log('vm client from chome controller',vm.clientData);
    })

    //edit profile content
    vm.editInfo = false;
    vm.editBtn = function(){
      vm.editInfo = !vm.editInfo;
    }

    //delete client account
    vm.deleteC = function(){
      console.log('data inside delete function',window.localStorage);
      ClientService.deleteClient().then(function(){
        window.localStorage.clear();
        console.log('hopefully empty: ',window.localStorage);
        $location.path('/');
      })
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
