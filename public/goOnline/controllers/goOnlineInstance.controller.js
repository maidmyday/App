angular
.module('goOnline')
.controller('GoOnlineModalInstanceCtrl', function ($rootScope,$scope, $location, $uibModalInstance, GoOnlineService,$window) {

// THIS CHANGES USER FROM ONLINE TO OFFLINE ON UI
GoOnlineService.isUserOnline(JSON.parse($window.localStorage.getItem('theprovider')).id).then(function (bool) {
  console.log(bool);
  $rootScope.changeOnline = bool;
});



// THIS CHANGES THE BOOLEAN OF IS_ONLINE TO TRUE
  $scope.goOn = function (post) {

    var online = {isOnline: true, tasks:post};
console.log(online);


    var userId = JSON.parse($window.localStorage.getItem('theprovider')).id
    GoOnlineService.putProviderOnline(online,userId)
    .success(function(dataObj) {
        console.log("SUCCESS", dataObj);
        $rootScope.changeOnline = true;
        $uibModalInstance.dismiss();
    })
    .error(function(err) {
      console.log("ERROR", err)
    })
  };


// THESE ARE THE RATING STARS THE ALEX GOT FROM SOMEWHERE
  // $scope.rate = 0;
  // $scope.max = 5;
  // $scope.isReadonly = false;
  //
  // $scope.hoveringOver = function(value) {
  //   $scope.overStar = value;
  //   $scope.percent = 100 * (value / $scope.max);
  // };
  //
  // $scope.ratingStates = [
  //   {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
  //   {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
  //   {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
  //   {stateOn: 'glyphicon-heart'},
  //   {stateOff: 'glyphicon-off'}
  // ];

});
