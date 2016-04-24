'use strict';

angular.module('yomadApp')
  .controller('SubmitDetailCtrl', ['$scope', '$window', '$q', '$location', 'submissionService', '$routeParams', function ($scope, $window, $q, $location, submissionService, $routeParams) {
    
    submissionService.getMessageTypes().then(function(messageTypes) {
      $scope.currentMessageCategory = _.find(messageTypes, function(type, key) {
        return $routeParams.messageCategoryId === key;
      });
    });

  }]);