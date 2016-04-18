// require('../../matches/controllers/matches.controller');

angular
  .module('match')
  .directive('matchReader', function(){
    return {
      templateUrl: '../../matches/tmpls/match-reader.html',
      restrict: 'E',
      scope: {
        question: '=',},
      controller:"MatchModalController"}
  })
