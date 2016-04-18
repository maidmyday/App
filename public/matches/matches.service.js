angular
  .module('match')
  .service('MatchService',function($http) {
    var matches ='/provider/tasks'

    function putMatches(user) {
      return $http.post(matches, user);
    }


return {
    putMatches: putMatches

    };
  })
