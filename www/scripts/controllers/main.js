'use strict';

angular.module('yomadApp')
  .controller('MainCtrl', ['$scope', '$window', '$q', function ($scope, $window, $q) {
    $scope.messages = clevelandData;
  }]);
