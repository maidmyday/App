angular
.module('login')
.controller('ModalInstanceController', function ($rootScope,$scope, $uibModalInstance, LoginService, $location) {


  $scope.showModalSection = 'login';
  // $scope.isMatch = true;

//   $scope.add = function() {
//   if ($scope.emailReg != $scope.emailReg2) {
//     $scope.IsMatch=true;
//     return false;
//   }
//   $scope.IsMatch=false;
// }


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
      $rootScope.client = data
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
      $rootScope.provider = data
      console.log("SUCCESS", data)
      $uibModalInstance.dismiss();
      // THIS PATH WILL NEED AN ID LIKE /sphome/id
      $location.path('/sphome/' + data.id);

    })
    .error(function(err) {
      console.log("ERROR", err)
    })

  }

  // if($routeParams.id) {
  //         ShoppingService.showItem($routeParams.id)
  //           .then(function(data) {
  //             console.log("INFO", data);
  //             $scope.item = data.data.results[0];
  //             window.glob = $scope.item;
  //           })
  //       };

});
