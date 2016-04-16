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
      $uibModalInstance.dismiss();
  })
  .error(function(err) {
    console.log("ERROR", err)
  })
};

});
