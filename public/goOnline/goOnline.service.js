angular
  .module('goOnline')
  .service('GoOnlineService',function($http) {
    var spurl = '/provider';

    function putProviderOnline(user,idOfUser) {
      return $http.put(spurl + '/' + idOfUser + "/isOnline", user);
    }

    function putProviderOffline(user,idOfUser) {
      return $http.put(spurl + '/' + idOfUser + "/isOnline", user);
    }




    return {
      putProviderOnline: putProviderOnline,
      putProviderOffline: putProviderOffline
    };
  })
