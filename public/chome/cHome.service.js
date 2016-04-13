angular
  .module('cHome')
  .service('ClientService',function($http, $q, $cacheFactory) {

    var clienturl = '/client';
    var allClients = '/clients';
    var logouturl = '/logout';

    function deleteClient(){
      return $http.delete(clienturl);
    }

    function logoutNow(id){
      return $http.post(logouturl);
    }

    function getClient(id) {
      return $http.get(clienturl + '/' + id)
    }

    function editClient(user) {
      return $http.put(clienturl, user);
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
      editClient: editClient,
      deleteClient: deleteClient,
      logoutNow: logoutNow,
      getClient: getClient,
      historyData: historyData
    }
  })
