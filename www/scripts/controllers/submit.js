'use strict';

angular.module('yomadApp')
  .controller('SubmitCtrl', ['$scope', '$window', '$q', '$location', 'submissionService', '$routeParams', function ($scope, $window, $q, $location, submissionService, $routeParams) {
    
    $scope.locationId = $routeParams.locationId;

    function goBackToLocation() {
      var path = '/'+ $scope.locationId;
      $location.path(path);
    }

    submissionService.getMessageCategories().then(function(messageCategories) {
      $scope.messageCategories = messageCategories;
    });

    $scope.categoryClicked = function(messageCategory) {
      //if there are options within the category, show those
      if(messageCategory.options && messageCategory.options.length > 0) {
        var path = '/'+ $scope.locationId + '/submit/' + messageCategory.categoryId;
        $location.path(path);
      } else { //otherwise just post
        submissionService.submitMessage(locationId, messageCategory.id).then(function() {
          goBackToLocation();
        });
      }
    }

  }]);