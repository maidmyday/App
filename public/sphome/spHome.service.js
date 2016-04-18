angular
  .module('spHome')
  .service('SpService',function($http, $q, $cacheFactory) {

    var spurl = '/provider';
    var allProviders = '/providers';
    var logouturl = '/logout';
    // var uploadPUrl = '/fileUpload';

    function logoutNow(){
      return $http.post(logouturl);
    }

    function deleteSpAccount(id){
      return $http.delete(spurl + '/' + id);
    }

    //registering a provider
    function getProvider(id) {
      return $http.get(spurl + '/' + id);
    }

    //editing provider profile
    function editProvider(user) {
      return $http.put('/provider', user);
    }

    //putting the new file
    // function editFile(file, uploadUrl){
    //   var fd = new FormData();
    //   fd.append('photo', file);
    //   $http.put(uploadUrl, fd, {
    //       transformRequest: angular.identity,
    //       headers: {'Content-Type': undefined}
    //   })
    //   .success(function(){
    //     console.log('Holy Moly it worked!');
    //   })
    //   .error(function(){
    //     console.log('Nah the picture didnt go!');
    //   });
    // }

    //uploading a photo to database
    function uploadFileToUrl(file, uploadUrl){
        var fd = new FormData();
        fd.append('photo', file);
        return $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        // .success(function(){
        //   console.log('Holy Moly it worked!');
        // })
        // .error(function(){
        //   console.log('Nah the picture didnt go!');
        // });
    }

    function putProviderOffline(user,idOfUser) {
      return $http.put(spurl + '/' + idOfUser + "/isOnline", user);
    }
    function isUserOnline(userId) {
      return $http.get(spurl + '/' + userId).then(function (user) {
        console.log('service isOnline', user.data.isOnline);
        return user.data.isOnline;
      });
    }


    //temp data for history
    var historyData = [
      {
        img: './images/bill04.jpg',
        first: 'Thachary',
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
      // editFile: editFile,

      putProviderOffline: putProviderOffline,
      isUserOnline: isUserOnline,

      uploadFileToUrl: uploadFileToUrl,

      editProvider: editProvider,
      logoutNow: logoutNow,
      getProvider: getProvider,
      historyData: historyData,
      deleteSpAccount: deleteSpAccount
    }

  })
