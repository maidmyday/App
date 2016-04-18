angular
.module('goOnline')
.controller('GoOnlineModalInstanceCtrl', function ($rootScope,$scope, $location, $uibModalInstance, GoOnlineService,$window) {

// THIS CHANGES USER FROM ONLINE TO OFFLINE ON UI AND NOT HAVING TO REFRESH

GoOnlineService.isUserOnline(JSON.parse($window.localStorage.getItem('theprovider')).id).then(function (bool) {
  $rootScope.changeOnline = bool;
});



// THIS CHANGES THE BOOLEAN OF IS_ONLINE TO TRUE

  $scope.goOn = function (post) {
    var online = {isOnline: true, tasks:post};
    var userId = JSON.parse($window.localStorage.getItem('theprovider')).id
    GoOnlineService.putProviderOnline(online,userId)
    .success(function(dataObj) {
        $rootScope.changeOnline = true;
        $uibModalInstance.dismiss();
    })
    .error(function(err) {
    })
  };
});
