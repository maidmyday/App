angular
.module('login')
.controller('LoginModalController', function ($scope, $uibModal, $log, $location) {
  $scope.animationsEnabled = true;


// THIS OPENS PROVIDER MODAL
  $scope.openSpLoginModal = function (lg) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: './loginFeature/templates/provider-register-login-modal.html',
      controller: 'ModalInstanceController',
      size: lg,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };


// THIS OPENS CLIENT MODAL
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


  $(document).ready(function () {

      // scroll positioning
      $('[data-scroll]').click(function() {
          var a = $($(this).attr('data-scroll')).position();
          a = a.top;
          $('html, body').animate({scrollTop: a-40}, 500);
      });


  });

})
