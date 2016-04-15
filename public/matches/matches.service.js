angular
  .module('match')
  .service('MatchService',function($http) {
    // var spurl = '/provider';

    // function putProviderOnline(user,idOfUser) {
    //   return $http.put(spurl + '/' + idOfUser + "/isOnline", user);
    // }
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
      // putProviderOnline: putProviderOnline,
      // putProviderOffline: putProviderOffline,
      // isUserOnline: isUserOnline
    };
  })
