angular
  .module('cHome')
  .directive('cliHomeDir', ['$parse',function ($parse) {
    return {
      restrict: 'EA',
      templateUrl: 'chome/tmpls/profileTmpl.html',
      scope: {
        theClientData: '='
      },
      link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
      }
    }
}]);
