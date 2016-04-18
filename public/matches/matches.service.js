angular
  .module('match')
  .service('MatchService',function($http) {
    var matches ='/provider/tasks';
    var request = '/request/provider';

    function putMatches(user) {
      return $http.post(matches, user);
    }

    function postRequest(user,post) {
      return $http.post(request + "/" + user.id, post);
    }


return {
    putMatches: putMatches,
    postRequest: postRequest

    };
  })
