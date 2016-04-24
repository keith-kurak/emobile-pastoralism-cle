'use strict';

angular.module('yomadApp')
  .controller('SettingsCtrl', ['$scope', '$window', '$q', '$location', function ($scope, $window, $q, $location) {

    $scope.username = $window.localStorage.getItem('username')

    $scope.backClicked = function() {
      $window.localStorage.setItem('username', $scope.username);
      $location.path('/');
    }
    

  }]);