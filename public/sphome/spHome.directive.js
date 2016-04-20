// got this from https://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
angular
  .module('spHome')
  .directive('spHomeDir', function () {
    return {
      restrict: 'E',
      templateUrl: 'sphome/tmpls/profileTmpl.html',
      scope: {
        theProviderData: '='
      },
    }
  });
