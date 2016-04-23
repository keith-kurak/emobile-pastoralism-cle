'use strict';

angular.module('yomadApp')
  .controller('MainCtrl', ['$scope', '$window', '$q', 'messageService', '$location', function ($scope, $window, $q, messageService, $location) {

    messageService.getMessagesForArea('put area/ region here').then(function(messages) {
      $scope.messages = messages;
    });

    $scope.showMessageDetail = function(message){
      var path = '/main/'+message.id;
      $location.path(path);
    }
  }]);
