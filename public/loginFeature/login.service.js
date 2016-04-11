angular
  .module('login')
  .service('LoginService',function($http) {
    var clienturl = '/client';
    var spurl = '/provider';

    function getClient(id) {
      return $http.get(clienturl + '/' + id)
    }
    function getAllClients() {
      return $http.get(clienturl)
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
      return $http.get(spurl)
    }

    function postSp(post) {
      console.log("PROVIDER BEING SAVED from login service", post);
      delete post.passwordConfirm;
      return $http.post(spurl,post);
    }



    return {
      getClient: getClient,
      getAllClients: getAllClients,
      postClient: postClient,
      getSp: getSp,
      getAllSp: getAllSp,
      postSp: postSp
    };
  })
