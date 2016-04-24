'use strict';

angular.module('yomadApp')
  .controller('SettingsCtrl', ['$scope', '$window', '$q', '$location', function ($scope, $window, $q, $location) {

    $scope.username = $window.localStorage.getItem('username')
    $scope.location = $window.localStorage.getItem('location')

    $scope.backClicked = function() {
      $window.localStorage.setItem('username', $scope.username);
      $window.localStorage.setItem('location', $scope.location);
      $location.path('/');
    }
    

  }]);