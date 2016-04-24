'use strict';

angular.module('yomadApp')
  .controller('backButtonCtrl', function($scope, $location){
    var partsOfUrl = $location.$$path.split('/');
    var urlForPreviousPage = partsOfUrl.slice(0,partsOfUrl.length-1).join('/');

    $scope.backClicked = function(){
      $location.path(urlForPreviousPage);
    }
  })
  .directive('backButton', function () {
    return {
      template: '<span class="back-button" ng-click="backClicked();">&lt;</span>',
      controller: 'backButtonCtrl',
      replace: true,
    };
  });