// got this from https://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
// thanks to Jenny Louthan !!! <3

angular
  .module('spHome')
  .directive('spHomeDir', function () {
    return {
      restrict: 'E',
      templateUrl: 'sphome/tmpls/profileTmpl.html',
      scope: {
        theProviderData: '='
      },
      link: function (scope, elem, attrs) {
       // dom stuff here
       elem.on('click', function (e) {
         elem.css('background-color', 'red');
       })
      }
    }
  });

  // <sp-home-dir mydata="angularObject"></sp-home-dir>
