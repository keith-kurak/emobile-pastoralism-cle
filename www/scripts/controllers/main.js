'use strict';

angular.module('yomadApp')
  .controller('MainCtrl', ['$scope', '$window', '$q', 'messageService', '$location', function ($scope, $window, $q, messageService, $location) {

    messageService.getMessagesForArea('put area/ region here').then(function(messages) {
      $scope.messages = messages;
    });

    $scope.showMessageDetail = function(message){
      var path = '/main/'+_.findKey($scope.messages, message);
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
  }]);
