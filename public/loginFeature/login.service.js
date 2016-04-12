angular
  .module('login')
  .service('LoginService',function($http) {
    var clienturl = '/client';
    var clientsurl = '/clients';
    var spsurl = '/providers';
    var spurl = '/provider';
    var clientloginurl ='/clientLogin';

    function getClient(id) {
      return $http.get(clienturl + '/' + id)
    }
    function getClientLogin() {
      console.log("CLIENT Logging in from login service");
      return $http.get(clientloginurl);
    }
    function getAllClients() {
      return $http.get(clientsurl)
    }
    function postClient(post) {
      console.log("CLIENT BEING SAVED from login service", post);
      delete post.passwordConfirm;
      return $http.post(clienturl,post);
    }

    function getSp(id) {
      return $http.get(spurl + '/' + id)
    }

    function getAllSp() {
      return $http.get(spsurl)
    }

    function postSp(post) {
      console.log("PROVIDER BEING SAVED from login service", post);
      delete post.passwordConfirm;
      return $http.post(spurl,post);
    }



    return {
      getClient: getClient,
      getAllClients: getAllClients,
      getClientLogin: getClientLogin,
      postClient: postClient,
      getSp: getSp,
      getAllSp: getAllSp,
      postSp: postSp
    };
  })
