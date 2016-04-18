// got this from https://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
// thanks to Jenny Louthan !!! <3

angular
  .module('cHome')
  .directive('fileModel', ['$parse',function ($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            // window.glob = model;
            // window.glob2 = attrs.fileModel;
            var modelSetter = model.assign;
            // console.log("THIS IS MODEL", model)
            // console.log("THIS IS MODELSETTER", modelSetter)

            element.bind('change', function(){
                scope.$apply(function(){
                    // console.log("THIS IS ELEMENT", element);
                    modelSetter(scope, element[0].files[0]);
                });
            });
      }
    }
}]);
