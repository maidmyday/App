angular
.module('maidApp')
.controller('LoginModalController', function ($scope, $uibModal, $log) {

$scope.items = ['item1', 'item2', 'item3'];

$scope.animationsEnabled = true;

$scope.open = function (size) {

  var modalInstance = $uibModal.open({
    animation: $scope.animationsEnabled,
    templateUrl: 'modal.html',
    controller: 'ModalInstanceController',
    size: size,
    resolve: {
      items: function () {
        return $scope.items;
      }
    }
  });

  modalInstance.result.then(function (selectedItem) {
    $scope.selected = selectedItem;
  }, function () {
    $log.info('Modal dismissed at: ' + new Date());
  });
};

$scope.toggleAnimation = function () {
  $scope.animationsEnabled = !$scope.animationsEnabled;
};

})
