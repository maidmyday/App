angular
.module('login')
.controller('ModalInstanceController', function ($rootScope,$scope, $uibModalInstance, LoginService, $location) {


$scope.showModalSection = 'login';

  $scope.showRegisterSection = function () {
    $scope.showModalSection = 'register';
  }

  $scope.showLoginSection = function () {
    $scope.showModalSection = 'login';
  };

  $scope.signInClient = function () {
    $uibModalInstance.dismiss();
    $location.path('/clienthome');
  };

  $scope.registerClientPath = function (client) {
    console.log("CLIENT from login controller", client);
    LoginService.postClient(client)
    .success(function(data) {
      // $rootScope.client = data
      console.log("SUCCESS from login controller", data)
      window.localStorage.setItem('theclient', window.JSON.stringify(data));
      $uibModalInstance.dismiss();
      $location.path('/clienthome/' + data.id);
    })
    .error(function(err) {
      console.log("ERROR", err)
    })

  }

  $scope.signInSp = function () {
    $uibModalInstance.dismiss();
    $location.path('/sphome/');
  };

  $scope.registerSpPath = function (provider) {
    console.log("PROVIDER", provider);
    LoginService.postSp(provider)
    .success(function(data) {
      // $rootScope.theprovider = data;
      window.localStorage.setItem('theprovider', window.JSON.stringify(data));
      console.log("SUCCESS from login controller", data)
      $uibModalInstance.dismiss();
      $location.path('/sphome/' + data.id);

    })
    .error(function(err) {
      console.log("ERROR", err)
    })

  };

  $scope.loginSpPath = function (provider) {
    console.log("PROVIDER", provider);
    LoginService.postSp(provider)
    .success(function(data) {
      // $rootScope.theprovider = data;
      window.localStorage.setItem('theprovider', window.JSON.stringify(data));
      console.log("SUCCESS from login controller", data)
      $uibModalInstance.dismiss();
      $location.path('/sphome/' + data.id);

    })
    .error(function(err) {
      console.log("ERROR", err)
    })

  };

  $scope.loginClientPath = function (client) {
    console.log("CLIENT", client);
    LoginService.clientLogin(client)
    .success(function(data) {
      // $rootScope.theprovider = data;
      window.localStorage.setItem('theprovider', window.JSON.stringify(data));
      console.log("SUCCESS from login controller", data)
      $uibModalInstance.dismiss();
      $location.path('/clienthome/' + data.id);

    })
    .error(function(err) {
      console.log("ERROR", err)
    })

  };


});
