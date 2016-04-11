angular
  .module('cHome')
  .controller('ClientController', ClientController);

  ClientController.$inject = ['$scope','$rootScope','$location',/*'ClientService'*/];

  function ClientController($scope,$rootScope,$location/*ClientService*/) {
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


    //temporary accordion data injecting the page
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
       rating: '0',
       date: 'date/time'
     }
   ]

  }
