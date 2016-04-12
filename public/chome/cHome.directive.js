angular
  .module('cHome')
  .directive('cliHomeDir', function () {
    return {
      restrict: 'E',
      templateUrl: 'chome/tmpls/profileTmpl.html',
      scope: {
        theClientData: '='
      },
      link: function (scope, elem, attrs, transclude) {
       // dom stuff here
       elem.on('click', function (e) {
         elem.css('background-color', 'red');
       })
      }
    }
  });
