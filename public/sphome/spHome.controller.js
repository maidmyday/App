angular
  .module('spHome')
  .controller('SpController',SpController)

  SpController.$inject = ['$scope','$rootScope','$route','$location','$uibModal','$log','SpService'];

  function SpController($scope,$rootScope,$route,$location,$uibModal,$log,SpService, $modalInstance) {
    $scope.photoFill = false;
    var vm = this;


// LOGOUT PROVIDER
    vm.logout = function(){
      console.log('data inside logout function',window.localStorage);
      SpService.logoutNow().then(function(){
        window.localStorage.clear();
        console.log('hopefully empty: ',window.localStorage);
        $location.path('/');
      })
      var offline = {isOnline: false, tasks:null};
      var userId = JSON.parse(window.localStorage.getItem('theprovider')).id
      SpService.putProviderOffline(offline,userId)
      .success(function(dataObj) {
        console.log("SUCCESS", dataObj)
          $rootScope.changeOnline = false;
      })
      .error(function(err) {
        $rootScope.changeOnline = false;
      })
    }


// PAGE LOAD EDIT REFRESH
    vm.loadPage = function(){
      SpService.getProvider(window.JSON.parse(window.localStorage.getItem('theprovider')).id)
      .then(function(data){
        vm.providerData =  data.data;
      })
    }
    vm.loadPage();


// PHOTO UPLOAD
    vm.uploadPFile = function(){
        var file = vm.myFile;
        var uploadUrl = "/fileUpload";
        SpService.uploadFileToUrl(file, uploadUrl).then(function() {
          vm.editInfo = !vm.editInfo;
          SpService.getProvider(window.JSON.parse(window.localStorage.getItem('theprovider')).id)
          .then(function(data){
            vm.providerData =  data.data;
          })
        });
    };



// EDIT PROFILE CONTENT

    vm.editInfo = false;
    vm.editBtn1 = function(){
      vm.editInfo = !vm.editInfo;
    }
    vm.saveEdit = function(user){
      console.log('should be new profile info obj',user);
      SpService.editProvider(user).then(function(data){
        vm.edittedData =  data.data;
        console.log('provider after edit',vm.edittedData);
        vm.editInfo = !vm.editInfo;
        console.log('page should have reloaded');
        vm.loadPage();
        $route.reload();
      })
    }
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



// DELETE PROVIDER ACCOUNT
    vm.deleteSp = function(){
      console.log('data inside delete function',window.localStorage);
      SpService.deleteSpAccount(window.JSON.parse(window.localStorage.getItem('theprovider')).id).then(function(){
        window.localStorage.clear();
        console.log('hopefully empty: ',window.localStorage);
        $location.path('/');
      })
    }


// OPENS GO ONLINE MODAL

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


// USER GOES OFFLINE
    $scope.goOff = function () {
      var offline = {isOnline: false, tasks:null};
      var userId = JSON.parse(window.localStorage.getItem('theprovider')).id
      SpService.putProviderOffline(offline,userId)
      .success(function(dataObj) {
        console.log("SUCCESS", dataObj)
          $rootScope.changeOnline = false;
      })
      .error(function(err) {
        $rootScope.changeOnline = false;
      })
    };



// NOT TAKING USER OFFLINE ON PAGE REFRESH
    SpService.isUserOnline(JSON.parse(localStorage.getItem('theprovider')).id).then(function (bool) {
      $rootScope.changeOnline = bool;
    });



    //edit specialties content
    // vm.editSpecial = false;
    // vm.editBtn3 = function(){
    //   vm.editSpecial = !vm.editSpecial;
    // }
    //
    // vm.saveSpecialties = function(user){
    //   console.log('should be about content obj',user);
    //   SpService.editProvider(user).then(function(data){
    //     vm.edittedData =  data.data;
    //     console.log('provider after edit',vm.edittedData);
    //   });
    //   vm.editSpecial = !vm.editSpecial;
    //   vm.loadPage();
    // }

  }
