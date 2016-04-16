angular
  .module('match')
  .service('MatchService',function($http) {
    var clienturl = '/client';
    var match= '/clientTasks'

    function putMatches(user,idOfUser) {
      return $http.put(clienturl+ "-tasks" + '/' + idOfUser, user);
    }





    return {
      putMatches: putMatches
      // putProviderOffline: putProviderOffline,
      // isUserOnline: isUserOnline
    };
  })
