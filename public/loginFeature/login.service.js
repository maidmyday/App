angular
  .module('login')
  .service('LoginService',function($http) {
    var clientUrl = '/client';
    var clientsUrl = '/clients';
    var spUrl = '/provider';
    var spsUrl = '/providers';
    var clientLoginUrl ='/clientLogin';
    var spLoginUrl ='/providerLogin';


    function clientLogin(post) {
      return $http.post(clientLoginUrl, post);
    }

    function providerLogin(post) {
      return $http.post(spLoginUrl, post);
    }

    function postClient(post) {
      delete post.passwordConfirm;
      return $http.post(clientUrl,post);
    }

    function postSp(post) {
      delete post.passwordConfirm;
      return $http.post(spUrl,post);
    }

    return {
      clientLogin: clientLogin,
      postClient: postClient,
      postSp: postSp,
      providerLogin: providerLogin
    };
  })
