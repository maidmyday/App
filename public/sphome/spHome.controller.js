angular
  .module('spHome')
  .controller('SpController',SpController);

  SpController.$inject = ['$scope','$rootScope','$location','$uibModal','$log','SpService'];

  function SpController($scope,$rootScope,$location,$uibModal,$log,SpService) {
    var vm = this;

//window.JSON.parse(window.localStorage.getItem('theprovider')).id
    //logout button
    vm.logout = function(){
      console.log('data inside logout function',window.localStorage);
      SpService.logoutNow().then(function(){
        window.localStorage.clear();
        console.log('hopefully empty: ',window.localStorage);
        $location.path('/');
      })
    }

    //getting data from the login and register
    SpService.getProvider(window.JSON.parse(window.localStorage.getItem('theprovider')).id).then(function(data){
      console.log('provider data from sphome controller',data);
      console.log('testing theprovider from sphome controller',window.localStorage.getItem('theprovider'));
      vm.providerData =  JSON.parse(window.localStorage.getItem('theprovider'));
      console.log('vm provider from sphome controller',vm.providerData);
    })

    SpService.getAllProviders().then(function(data){
      console.log('providers data from sphome controller',data);
    })

    //go online: change a boolean and show change in dom, switch button?
    vm.goOnline = function(){

    }

    //edit profile content
    vm.editInfo = false;
    vm.editBtn1 = function(){
      vm.editInfo = !vm.editInfo;
    }

    //edit about content
    vm.editAbout = false;
    vm.editBtn2 = function(){
      vm.editAbout = !vm.editAbout;
    }

    //edit specialties content
    vm.editSpecial = false;
    vm.editBtn3 = function(){
      vm.editSpecial = !vm.editSpecial;
    }

    //delete provider account
    vm.deleteSp = function(){
      console.log('data inside delete function',window.localStorage);
      SpService.deleteSpAccount().then(function(){
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

    // temporary accordion data to inject the page moved to service

    vm.historyData = SpService.historyData;

  }
