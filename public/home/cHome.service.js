angular
  .module('cHome')
  .service('ClientService',function($http, $q, $cacheFactory) {

    var clienturl = '/client';
    var spurl = '/provider';

    function getClient(id) {
      return $http.get(clienturl + '/' + id)
    }

   var historyData = [
     {
       img: './images/bill04.jpg',
       first: 'Zachary',
       last: 'Binx',
       rating: '5',
       date: 'date/time'
     },
     {
       img: './images/bill02.jpg',
       first: 'Will',
       last: 'Graham',
       rating: '2',
       date: 'date/time'
     },
     {
       img: './images/bill03.jpg',
       first: 'Spencer',
       last: 'Reid',
       rating: '1',
       date: 'date/time'
     }
   ]

    return {
      getClient: getClient,
      historyData: historyData
    }
  })
