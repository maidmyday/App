angular
.module('goOnline')
.controller('GoOnlineModalInstanceCtrl', function ($rootScope,$scope, $location, $uibModalInstance) {

  $rootScope.showThing = false;

  $scope.go = function () {
    // $('#onlinesection').append( '<p>' + 'you are online' + '</p>');
    $rootScope.showThing = true;
    $uibModalInstance.dismiss('cancel');
  };

  $scope.goOffline = function () {
    $rootScope.showThing = false;
    // $('#onlinesection').append( '<p>' + 'you are offline' + '</p>');

    console.log("IVE BEEN CLCIEKD");
    $uibModalInstance.dismiss('cancel');
  };





});
