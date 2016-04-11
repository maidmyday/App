angular
  .module('maidApp')
  .controller('LoginController', function($scope,$location,LoginService, $routeParams) {
    console.log("this is the login   controller");
    LoginService.getAllClients()
      .then(function(data) {
        $scope.clients = data;

      });

    LoginService.getAllSp()
        .then(function(data) {
          $scope.providers = data;

        });

      // if($routeParams.id) {
      //   LoginService.showItem($routeParams.id)
      //     .then(function(data) {
      //       console.log("INFO", data);
      //       $scope.client = data;
      //       window.glob = $scope.client;
      //     })
      // };

      $scope.addToClientData = function(post) {
          console.log('post', post);
        LoginService.postClient(post)
        .then(function() {
          //  $location.path('/client');

     })
 };

 $scope.addToSpData = function(post) {
     console.log('post', post);
   LoginService.postSp(post)
   .then(function() {
     //  $location.path('/provider');

})
};













})
