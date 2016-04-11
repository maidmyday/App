angular
.module('login')
.controller('LoginModalController', function ($scope, $uibModal, $log, $location) {
  $scope.animationsEnabled = true;


// THIS OPENS PROVIDER MODAL
  $scope.openSpLoginModal = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: './loginFeature/templates/provider-register-login-modal.html',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };


// THIS OPEN CLIENT MODAL
  $scope.openClientLoginModal = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: './loginFeature/templates/client-register-login-modal.html',
      controller: 'ModalInstanceController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };

})
