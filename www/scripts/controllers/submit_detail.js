'use strict';

angular.module('yomadApp')
  .controller('SubmitDetailCtrl', ['$scope', '$window', '$q', '$location', 'submissionService', '$routeParams', function ($scope, $window, $q, $location, submissionService, $routeParams) {
    
    $scope.locationId = $routeParams.locationId;

    submissionService.getMessageCategories().then(function(messageCategories) {
      $scope.currentMessageCategory = _.find(messageCategories, function(messageCategory) {
        return $routeParams.messageCategoryId === messageCategory.id;
      });
    });

    function goBackToLocation() {
      var path = '/'+ $scope.locationId;
      $location.path(path);
    }

    $scope.optionClicked = function(option) {
      submissionService.submitMessage($scope.locationId, option).then(function() {
        goBackToLocation();
      });
    }
  }]);