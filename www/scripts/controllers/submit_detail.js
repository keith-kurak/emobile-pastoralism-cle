'use strict';

angular.module('yomadApp')
  .controller('SubmitDetailCtrl', ['$scope', '$window', '$q', '$location', 'submissionService', '$routeParams', function ($scope, $window, $q, $location, submissionService, $routeParams) {
    
    submissionService.getMessageCategories().then(function(messageCategories) {
      $scope.currentMessageCategory = _.find(messageCategories, function(messageCategory) {
        return $routeParams.messageCategoryId === messageCategory.id;
      });
    });
  }]);