angular
  .module('spHome')
  .service('SpService',function($http, $q, $cacheFactory) {

    var clienturl = '/client';
    var spurl = '/provider';
    var allClients = '/clients';
    var allProviders = '/providers';

    function getProvider(id) {
      return $http.get(spurl + '/' + id);
    }

    function getAllProviders(){
      return $http.get(allProviders);
    }

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
      getAllProviders: getAllProviders,
      getProvider: getProvider,
      historyData: historyData
    }

  })
