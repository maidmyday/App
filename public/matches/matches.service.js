angular
  .module('match')
  .service('MatchService',function($http) {
    var clienturl = '/client';
    var match= '/clientTasks'

    function putMatches(user,idOfUser) {
      return $http.post(match);
    }
    //
    // function isUserOnline(userId) {
    //   return $http.get(spurl + '/' + userId).then(function (user) {
    //     console.log('service isOnline', user.data.isOnline);
    //     return user.data.isOnline;
    //   });
    // }
    //
    // function putProviderOffline(user,idOfUser) {
    //   return $http.put(spurl + '/' + idOfUser + "/isOnline", user);
    // }




    return {
      putMatches: putMatches
      // putProviderOffline: putProviderOffline,
      // isUserOnline: isUserOnline
    };
  })
