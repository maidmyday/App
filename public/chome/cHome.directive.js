angular
  .module('cHome')
  .directive('cliHomeDir', ['$parse',function ($parse) {
    return {
      restrict: 'EA',
      templateUrl: 'chome/tmpls/profileTmpl.html',
      scope: {
        theClientData: '='
      }
    }
}]);
