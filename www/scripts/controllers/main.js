'use strict';

angular.module('yomadApp')
  .controller('MainCtrl', ['$scope', '$window', '$q', 'messageService', 'iconService', function ($scope, $window, $q, messageService, iconService) {

    messageService.getMessagesForArea('put area/ region here').then(function(messages) {
      $scope.messages = messages;
    });  
  }]);
