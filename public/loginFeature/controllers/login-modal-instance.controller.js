angular
.module('login')
.controller('ModalInstanceController', function ($scope, $uibModalInstance, LoginService, $location) {


  $scope.showModalSection = 'login';


  $scope.showRegisterSection = function () {
    $scope.showModalSection = 'register';
  }

  $scope.showLoginSection = function () {
    $scope.showModalSection = 'login';
  };

  $scope.signInClient = function () {
    $uibModalInstance.dismiss();
    // THIS PATH WILL NEED AN ID LIKE /clienthome/id
    $location.path('/clienthome');
  };

  $scope.registerClientPath = function (client) {
    console.log("CLIENT", client);
    LoginService.postClient(client)
    .success(function(data) {
      console.log("SUCESS", data)
      $uibModalInstance.dismiss();
      // THIS PATH WILL NEED AN ID LIKE /clienthome/id
      $location.path('/clienthome/' + data.id);
    })
    .error(function(err) {
      console.log("ERROR", err)
    })

  }

  $scope.signInSp = function () {
    $uibModalInstance.dismiss();
    // THIS PATH WILL NEED AN ID LIKE /clienthome/id
    $location.path('/sphome/');
  };

  $scope.registerSpPath = function (provider) {
    console.log("PROVIDER", provider);
    LoginService.postSp(provider)
    .success(function(data) {
      console.log("SUCCESS", data)
      $uibModalInstance.dismiss();
      // THIS PATH WILL NEED AN ID LIKE /sphome/id
      $location.path('/sphome/' + data.id);
    })
    .error(function(err) {
      console.log("ERROR", err)
    })

  }
});
