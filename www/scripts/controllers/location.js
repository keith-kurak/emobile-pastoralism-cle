'use strict';

angular.module('yomadApp')
  .controller('LocationCtrl', ['$scope', '$window', '$q', 'messageService', '$location', '$rootScope', '$routeParams', function ($scope, $window, $q, messageService, $location, $rootScope, $routeParams) {

    messageService.getLocationForId($routeParams.locationId).then(function(location) {
      $scope.location = location;
    });

    $scope.getMessagesForLocation = function() {
      messageService.getMessagesForLocation($routeParams.locationId).then(function(messages) {
        $scope.messages = messages;
      });
    }

    $scope.getMessagesForLocation();

    $scope.showMessageDetail = function(message){
      var path = '/' + $routeParams.locationId + '/' +_.findKey($scope.messages, message);
      $location.path(path);
    }

    $scope.showMap = function(locationId){
      var path = '/map/'+location.id;
      $location.path(path);
    }

    $scope.showSubmitMessage = function(){
      var path = '/submit';
      $location.path(path);
    }

    $rootScope.$on('data-updated', function(event, args) {
      if($scope.selectedLocation) {
        $scope.getMessagesForLocation();
      }
    });
  }]);
