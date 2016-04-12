angular
  .module('cHome')
  .directive('cliHomeDir', function () {
    return {
      restrict: 'E',
      templateUrl: 'chome/tmpls/profileTmpl.html',
      scope: {
        thedata: '='
      },
      link: function (scope, elem, attrs, transclude) {
       // dom stuff here
       elem.on('click', function (e) {
         elem.css('background-color', 'red');
       })
      }
    }
  });
