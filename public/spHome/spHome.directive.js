angular
  .module('spHome')
  .directive('spHomeDir', function () {
    return {
      restrict: 'E',
      templateUrl: 'templateurl here',
      scope: {
        mydata: '='
      },
      link: function (scope, elem, attrs) {
       // dom stuff here
       elem.on('click', function (e) {
         elem.css('background-color', 'red');
       })
      }
    }
  });

  <sp-home-dir mydata="angularObject"></sp-home-dir>
