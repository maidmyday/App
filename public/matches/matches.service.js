angular
  .module('match')
  .service('MatchService',function($http) {
    var clienturl = '/client';
    var match= '/clientTasks';
    var matches ='/provider/tasks'

    function putMatches(user) {
      console.log(user);
      return $http.post(matches);
    }

    return {
      putMatches: putMatches

    };
  })
