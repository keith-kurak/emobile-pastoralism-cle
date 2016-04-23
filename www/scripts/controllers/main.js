'use strict';

angular.module('yomadApp')
  .controller('MainCtrl', ['$scope', '$window', '$q', function ($scope, $window, $q) {
    
    $scope.message = "here's a message from angular, do you like it?";
  }]);
