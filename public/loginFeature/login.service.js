angular
  .module('login')
  .service('LoginService',function($http) {
    var clienturl = '/client';
    var clientsurl = '/client';
    var spsurl = '/providers';
    var spurl = '/provider';
    var clientloginurl ='/clientLogin';

    function getClient(id) {
      return $http.get(clienturl + '/' + id)
    }
    function clientLogin(user) {
      console.log("CLIENT Logging in from login service");
      return $http.post(clientloginurl, user);
    }
    function getAllClients() {
      return $http.get(clientsurl)
    }
    function postClient(post) {
      console.log("CLIENT BEING SAVED from login service", post);
      delete post.passwordConfirm;
      return $http.post(clienturl,post);
    }

    function loginSp() {
      return $http.get(loginProviderUrl);
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
      clientLogin: clientLogin,
      postClient: postClient,
      getSp: getSp,
      getAllSp: getAllSp,
      postSp: postSp
    };
  })
