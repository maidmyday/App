angular
.module('login.module')
.controller('ModalInstanceController', function ($scope, $uibModalInstance, LoginService) {

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.showModalSection = 'login';


  $scope.registerClient = function () {
    $scope.showModalSection = 'register';
  }

  $scope.loginClient = function () {
    $scope.showModalSection = 'login';


  };
  $scope.signInClient = function () {
    $uibModalInstance.dismiss();
    // THIS PATH WILL NEED AN ID LIKE /clienthome/id
    $location.path('/clienthome');
  };

  $scope.registerClientPath = function (user) {
    console.log(user);
    LoginService.postClient(user)
    .success(function(data) {
      console.log("SAVED", data)
      $uibModalInstance.dismiss();
      // THIS PATH WILL NEED AN ID LIKE /clienthome/id
      // $location.path('/clienthome');
    })
    .error(function(err) {
      console.log("OH SHIT", err)
    })

  }


  $scope.registerSp = function () {
    $scope.showModalSection = 'register';
  }

  $scope.loginSp = function () {
    $scope.showModalSection = 'login';

  };
  $scope.signInSp = function () {
    $uibModalInstance.dismiss();
    // THIS PATH WILL NEED AN ID LIKE /clienthome/id
    $location.path('/sphome');
  };

  $scope.registerSpPath = function () {
    $uibModalInstance.dismiss();
    // THIS PATH WILL NEED AN ID LIKE /clienthome/id
    $location.path('/sphome');
  }
});
