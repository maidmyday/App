angular
  .module('cHome')
  .service('ClientService',function($http, $q, $cacheFactory) {

    var clienturl = '/client';
    var allClients = '/clients';
    var logouturl = '/logout';
    // var uploadUrl = '/fileUpload';

    function deleteClient(id){
      return $http.delete(clienturl + '/' + id);
    }

    function logoutNow(){
      return $http.post(logouturl);
    }

    //registering a client account
    function getClient(id) {
      return $http.get(clienturl + '/' + id);
    }

    //editing the client profile
    function editClient(user) {
      return $http.put(clienturl, user);
    }


    //uploading a photo to database
    // got this from https://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
    // thanks to Jenny Louthan !!! <3
    function uploadFileToCUrl(file, uploadUrl){
        var fd = new FormData();
        fd.append('photo', file);
        return $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
    }

  //  var historyData = [
  //    {
  //      img: './images/bill04.jpg',
  //      firstName: 'Thachary',
  //      lastName: 'Binx',
  //      rating: '5',
  //      date: 'date/time',
  //      comment: 'Wakka wakka'
  //    },
  //    {
  //      img: './images/bill02.jpg',
  //      firstName: 'Will',
  //      lastName: 'Graham',
  //      rating: '2',
  //      date: 'date/time',
  //      comment: 'Like a good neighbor, state farm is there!'
  //    },
  //    {
  //      img: './images/bill03.jpg',
  //      firstName: 'Spencer',
  //      lastName: 'Reid',
  //      rating: '1',
  //      date: 'date/time',
  //      comment: 'Whazzahhhp'
  //    }
  //  ]

    return {
      uploadFileToCUrl: uploadFileToCUrl,
      editClient: editClient,
      deleteClient: deleteClient,
      logoutNow: logoutNow,
      getClient: getClient
      // historyData: historyData
    }
  })
