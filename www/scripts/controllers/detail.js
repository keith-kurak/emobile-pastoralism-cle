'use strict';

angular.module('yomadApp')
  .controller('DetailCtrl', ['$scope', '$window', '$q', 'messageService', '$routeParams', function ($scope, $window, $q, messageService, $routeParams) {

    messageService.getMessage($routeParams.id).then(function(message) {
      $scope.message = message;
    });

    $scope.goBack = function(){
      //TODO
    }
  }]);