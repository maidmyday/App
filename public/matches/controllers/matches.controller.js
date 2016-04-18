angular
.module('match')
.controller('MatchModalController', function ($scope, $uibModalInstance, MatchService) {


  $scope.showSection = 'postjob';

  // $scope.showMatchSection = function () {
  //     $scope.showSection = 'matches';
  // };


// MATCHES CLIENTS WITH PROVIDERS ON CLIENT SIDE

$scope.matchMe = function (post) {
  var task = {tasks:post};
  MatchService.putMatches(task)
  .success(function(dataObj) {
$scope.showSection = 'matches';
$scope.matchUsers = dataObj;

    window.glob = $scope.matchUsers;
    // $uibModalInstance.dismiss();



  })
  .error(function(err) {
  })
};

});
