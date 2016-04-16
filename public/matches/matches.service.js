angular
  .module('match')
  .service('MatchService',function($http) {
    var clienturl = '/client';
    var match= '/clientTasks';
    var matches ='/provider'

    function putMatches(user,idOfUser) {
      return $http.get(matches);
    }

    return {
      putMatches: putMatches

    };
  })
