angular
.module('match')
.controller('MatchModalController', function ($scope, $uibModalInstance, MatchService) {


  $scope.showSection = 'postjob';

// MATCHES CLIENTS WITH PROVIDERS ON CLIENT SIDE

$scope.matchMe = function (post) {
  var task = {tasks:post};
  MatchService.putMatches(task)
  .success(function(dataObj) {
$scope.showSection = 'matches';
$scope.matchUsers = dataObj;
window.glob = $scope.matchUsers;






  })
  .error(function(err) {
  })
};


// SENDS REQUEST TO POST ROUTE




$scope.requestSent = function (user,post){
  console.log("USER IS THIS", user);
  console.log("REQUESTS ARETHESE", post);

  MatchService.postRequest(user,post)
  .success(function(dataObj) {
    console.log("SUCCESS");
      $uibModalInstance.dismiss();





  })
  .error(function(err) {
  })

}

});
