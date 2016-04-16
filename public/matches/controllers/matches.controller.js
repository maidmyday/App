angular
.module('match')
.controller('MatchModalController', function ($rootScope,$scope, $location, $uibModalInstance, MatchService) {



$scope.matchMe = function (post) {
console.log(post);
  var task = {tasks:post};


  var userId = JSON.parse(window.localStorage.getItem('theclient')).id
  MatchService.putMatches(task,userId)
  .success(function(dataObj) {
      console.log("SUCCESS", dataObj);
      // $rootScope.changeOnline = true;
      $uibModalInstance.dismiss();
  })
  .error(function(err) {
    console.log("ERROR", err)
  })
};



// THIS CHANGES THE BOOLEAN OF IS_ONLINE TO TRUE
  // $scope.matchMe = function () {
  //    $uibModalInstance.dismiss();
// console.log(post);
//     var online = {isOnline: true, tasks:post};


    // var userId = JSON.parse($window.localStorage.getItem('theprovider')).id
    // GoOnlineService.putProviderOnline(online,userId)
    // .success(function(dataObj) {
    //     console.log("SUCCESS", dataObj);
    //     // $rootScope.changeOnline = true;
    //     // $uibModalInstance.dismiss();
    // })
    // .error(function(err) {
    //   console.log("ERROR", err)
    // })
  // };


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
