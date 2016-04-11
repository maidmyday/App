angular
  .module('spHome')
  .controller('SpController',SpController/*,'RatingStars',RatingStars*/);

  SpController.$inject = ['$scope','$rootScope','$location', '$uibModal', '$log','SpService'];

  function SpController($scope,$rootScope,$location,$uibModal,$log,SpService) {
    var vm = this;

    //the rating stars
    $scope.rate = 0;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [
      {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
      {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
      {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
      {stateOn: 'glyphicon-heart'},
      {stateOff: 'glyphicon-off'}
    ];

    // temporary accordion data to inject the page moved to service

     $scope.accordionData = [
       {
         title: 'this is calvin',
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

  }

  //
  // RatingStars.$inject = ['$scope','$rootScope','$location', '$uibModal', '$log','SpService'];
  //
  // function RatingStars($scope,$rootScope,$location,$uibModal,$log,SpService){
  //   $scope.rate = rating;
  //   $scope.max = 5;
  //   $scope.isReadonly = true;
  //
  //   $scope.hoveringOver = function(value) {
  //     $scope.overStar = value;
  //     $scope.percent = 100 * (value / $scope.max);
  //   }
  //
  //   $scope.ratingStates = [
  //     {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
  //     {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
  //     {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
  //     {stateOn: 'glyphicon-heart'},
  //     {stateOff: 'glyphicon-off'}
  //   ]
  //
  //   $scope.historyData = [
  //     {
  //       img: './images/bill04.jpg',
  //       first: 'Zachary',
  //       last: 'Binx',
  //       rating: '3',
  //       date: 'date/time'
  //     },
  //     {
  //       img: './images/bill02.jpg',
  //       first: 'Will',
  //       last: 'Graham',
  //       rating: '5',
  //       date: 'date/time'
  //     },
  //     {
  //       img: './images/bill03.jpg',
  //       first: 'Spencer',
  //       last: 'Reid',
  //       rating: '2',
  //       date: 'date/time'
  //     }
  //   ]
  // }
