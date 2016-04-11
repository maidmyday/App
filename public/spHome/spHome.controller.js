angular
  .module('spHome')
  .controller('SpController', SpController);

  SpController.$inject = ['$scope','$rootScope','$location'/*'SpService'*/];

  function SpController($scope,$rootScope,$location/*SpService*/) {
     $scope.accordionData = [
       {
         title: 'this is clavin',
         content: 'this is a great content'
       },
       {
         title: 'this is alex',
         content: 'this is the great content'
       }
     ]

    $scope.historyData = [
      {
        img: './images/bill04.jpg',
        first: 'Zachary',
        last: 'Binx',
        rating: '5 stars',
        date: 'date/time'
      },
      {
        img: './images/bill02.jpg',
        first: 'Will',
        last: 'Graham',
        rating: '2 stars',
        date: 'date/time'
      },
      {
        img: './images/bill03.jpg',
        first: 'Spencer',
        last: 'Reid',
        rating: '0 stars',
        date: 'date/time'
      }
    ]
  }
