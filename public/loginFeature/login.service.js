angular
  .module('login.module')
  .service('LoginService',function($http) {
    // var url = "https://tiny-tiny.herokuapp.com/collections/shoppingcart";
    var clienturl = '/client';
    var spurl = '/provider';

    function getClient(id) {
      return $http.get(clienturl + '/' + id)
    }
    function getAllClients() {
      return $http.get(clienturl)
    }
    function postClient(post) {
      console.log("USER BEING SAVED", post);
      return $http.post(clienturl,post);
    }

    function getSp(id) {
      return $http.get(spurl + '/' + id)
    }

    function getAllSp() {
      return $http.get(spurl)
    }

    function postSp(post) {
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
