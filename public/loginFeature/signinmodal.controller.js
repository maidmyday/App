angular
.module('login.module')
.controller('LoginModalController', function ($scope, $uibModal, $log, $location) {
  $scope.animationsEnabled = true;

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

  $scope.registerClient = function () {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: './loginFeature/templates/Clientregistermodal.html',
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
