'use strict';

angular.module('yomadApp')
  .service('messageService', ['$q', 'iconService', function messageService($q, iconService) {

    return {
      getMessagesForArea(area) {
        return $q.when(clevelandData).then(function(messages) {
          for(var m in messages) {
            var message = messages[m];
            message.localIconPath = iconService.getIconPathForMessage(message);
          }
          return $q.when(messages);
        });
      }
    }

  }]);