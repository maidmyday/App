angular
  .module('cHome')
  .service('ClientService',function($http, $q, $cacheFactory) {

    var clienturl = '/client';
    var allClients = '/clients';
    var logouturl = '/logout';


    function deleteClient(id){
      return $http.delete(clienturl + '/' + id);
    }

    function logoutNow(){
      return $http.post(logouturl);
    }

    function getClient(id) {
      return $http.get(clienturl + '/' + id);
    }

    function editClient(user) {
      return $http.put(clienturl, user);
    }


// UPLOAD PHOTO TO DATABASE
    // got this from https://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
    function uploadFileToCUrl(file, uploadUrl){
        var fd = new FormData();
        fd.append('photo', file);
        return $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
    }



    return {
      uploadFileToCUrl: uploadFileToCUrl,
      editClient: editClient,
      deleteClient: deleteClient,
      logoutNow: logoutNow,
      getClient: getClient
    }
  })
