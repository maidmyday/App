angular
  .module('cHome')
  .service('ClientService',function($http, $q, $cacheFactory) {

    var clienturl = '/client';
    var allClients = '/clients';
    var logouturl = '/logout';
    var uploadUrl = '/fileUpload';

    function deleteClient(){
      return $http.delete(clienturl);
    }

    function logoutNow(id){
      return $http.post(logouturl);
    }

    //registering a client account
    function getClient(id) {
      return $http.get(clienturl + '/' + id)
    }

    //editing the client profile
    function editClient(user) {
      return $http.put(clienturl, user);
    }

    //uploading a photo to database
    function uploadFileToUrl(file, uploadUrl){
        var fd = new FormData();
        fd.append('photo', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
          console.log('Holy Moly it worked!');
        })
        .error(function(){
          console.log('Nah the picture didnt go!');
        });
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
      uploadFileToUrl: uploadFileToUrl,
      editClient: editClient,
      deleteClient: deleteClient,
      logoutNow: logoutNow,
      getClient: getClient,
      historyData: historyData
    }
  })
