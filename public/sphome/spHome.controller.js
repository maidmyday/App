angular
  .module('spHome')
  .controller('SpController',SpController)

  SpController.$inject = ['$scope','$rootScope','$location','$uibModal','$log','SpService'];

  function SpController($scope,$rootScope,$location,$uibModal,$log,SpService, $modalInstance) {
    var vm = this;

    //logout button
    vm.logout = function(){
      console.log('data inside logout function',window.localStorage);
      SpService.logoutNow().then(function(){
        window.localStorage.clear();
        console.log('hopefully empty: ',window.localStorage);
        $location.path('/');
      })
    }

    //to load the page after changes
    vm.loadPage = function(){
      //getting data from the login and register
      SpService.getProvider(window.JSON.parse(window.localStorage.getItem('theprovider')).id)
      .then(function(data){
        console.log('provider data from sphome controller',data);
        vm.providerData =  data.data;
        console.log('vm provider from sphome controller',vm.providerData);
      })
    }
    vm.loadPage();

    //PHOTO UPLOAD
    vm.uploadFile = function(){
        var file = vm.myFile;
        console.log('photo file is ',file );
        console.dir(file);
        var uploadUrl = "/fileUpload";
        SpService.uploadFileToUrl(file, uploadUrl);
    };

    //go online: change a boolean and show change in dom
    vm.inactive = true;
    vm.goOnline = function(){
      vm.active = true;
    }

    //go offline: change a boolean and show change in dom
    vm.goOffline = function(){
      vm.active = false;
      vm.inactive = true;
    }

    //edit profile content
    vm.editInfo = false;
    vm.editBtn1 = function(){
      vm.editInfo = !vm.editInfo;
    }

    vm.master = {};
    vm.saveEdit = function(user){
      // vm.master = angular.copy(user);
      console.log('should be new profile info obj',user);
      SpService.editProvider(user).then(function(data){
        vm.edittedData =  data.data;
        console.log('provider after edit',vm.edittedData);
      });
      vm.editInfo = !vm.editInfo;
      vm.loadPage();
    }

    //edit about content
    vm.editAbout = false;
    vm.editBtn2 = function(){
      vm.editAbout = !vm.editAbout;
    }

    vm.saveAbout = function(user){
      console.log('should be about content obj',user);
      SpService.editProvider(user).then(function(data){
        vm.edittedData =  data.data;
        console.log('provider after edit',vm.edittedData);
      });
      vm.editAbout = !vm.editAbout;
      vm.loadPage();
    }

    //edit specialties content
    vm.editSpecial = false;
    vm.editBtn3 = function(){
      vm.editSpecial = !vm.editSpecial;
    }

    vm.saveSpecialties = function(user){
      console.log('should be about content obj',user);
      SpService.editProvider(user).then(function(data){
        vm.edittedData =  data.data;
        console.log('provider after edit',vm.edittedData);
      });
      vm.editSpecial = !vm.editSpecial;
      vm.loadPage();
    }

    //delete provider account
    vm.deleteSp = function(){
      console.log('data inside delete function',window.localStorage);
      SpService.deleteSpAccount(window.JSON.parse(window.localStorage.getItem('theprovider')).id).then(function(){
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

    function standardSwitch($scope) {
    $scope.switch = 'off';
    }

    function alternateSwitch($scope) {
    $scope.switchAlternate = 'off';
    }

    $rootScope.openOnlineModal = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: './goOnline/tmpls/goOnline.html',
        controller: 'GoOnlineModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    }

    $rootScope.openOfflineModal = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: './goOnline/tmpls/goOffline.html',
        controller: 'GoOnlineModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    }



  }
