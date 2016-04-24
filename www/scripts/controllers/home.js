'use strict';

angular.module('yomadApp')
  .controller('HomeCtrl', ['$scope', '$window', '$q', 'messageService', '$location', '$rootScope', '$routeParams', function ($scope, $window, $q, messageService, $location, $rootScope, $routeParams) {

    //initial load
    messageService.getLocations().then(function(locations) {
      $scope.locations = locations;
    });

    $scope.locationChanged = function() {
      var path = '/'+$scope.selectedLocation.id;
      $location.path(path);
    }

    $scope.showSettings = function() {
      var path = '/settings';
      $location.path(path);
    }

  }]);