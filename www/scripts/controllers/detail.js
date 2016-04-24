'use strict';

angular.module('yomadApp')
  .controller('DetailCtrl', ['$scope', '$window', '$q', 'messageService', '$routeParams', function ($scope, $window, $q, messageService, $routeParams) {

    messageService.getMessage($routeParams.locationId, $routeParams.messageId).then(function(message) {
      $scope.message = message;
    });

  }]);