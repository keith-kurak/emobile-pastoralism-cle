'use strict';

angular.module('yomadApp')
  .controller('MapCtrl', ['$scope', '$window', '$q', '$location', 'messageService', '$routeParams', function ($scope, $window, $q, $location, messageService, $routeParams) {
    
    messageService.getMessagesForArea($routeParams.locationId).then(function(messages) {
      $scope.messages = messages;
    });

  }]);