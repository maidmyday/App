angular
  .module('spHome')
  .service('SpService',function($http, $q, $cacheFactory) {

    var accordionData = [
      {
        title: 'this is calvin',
        content: 'this is a great content'
      },
      {
        title: 'this is alex',
        content: 'this is the great content'
      }
    ]

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
      accordionData: accordionData,
      historyData: historyData
    }

  })
