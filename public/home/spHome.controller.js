angular
  .module('spHome')
  .controller('SpController',SpController);

  SpController.$inject = ['$scope','$rootScope','$location','$uibModal','$log','SpService'];

  function SpController($scope,$rootScope,$location,$uibModal,$log,SpService) {
    var vm = this;
    $rootScope.userId;

    SpService.getProvider().then(function(data){
      console.log('provider data',data);
      vm.provider = data;
      console.log('vm provider',vm.provider);
      $rootScope.userId = id;
    })

    SpService.getAllProviders().then(function(data){
      console.log('providers data',data);
    })

    //go online: change a boolean and show change in dom, switch button?
    $scope.goOnline = function(){

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
