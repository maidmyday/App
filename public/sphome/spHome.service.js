angular
  .module('spHome')
  .service('SpService',function($http, $q, $cacheFactory) {

    var clienturl = '/client';
    var allClients = '/clients';
    var spurl = '/provider';
    var allProviders = '/providers';
    var logouturl = '/logout';

    function logoutNow(){
      return $http.post(logouturl);
    }

    function deleteSpAccount(){
      return $http.delete(deleteProvider);
    }

    //registering a provider
    function getProvider(id) {
      return $http.get(spurl + '/' + id);
    }

    function getAllProviders(){
      return $http.get(allProviders);
    }

    //temp data for history
    var historyData = [
      {
        img: './images/bill04.jpg',
        first: 'Zachary',
        last: 'Binx',
        rating: '3',
        date: 'date/time'
      },
      {
        img: './images/bill02.jpg',
        first: 'Will',
        last: 'Graham',
        rating: '5',
        date: 'date/time'
      },
      {
        img: './images/bill03.jpg',
        first: 'Spencer',
        last: 'Reid',
        rating: '2',
        date: 'date/time'
      }
    ]

    return {
      logoutNow: logoutNow,
      getAllProviders: getAllProviders,
      getProvider: getProvider,
      historyData: historyData,
      deleteSpAccount: deleteSpAccount
    }

  })
