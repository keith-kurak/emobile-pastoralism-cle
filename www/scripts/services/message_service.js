'use strict';

angular.module('yomadApp')
  .service('messageService', ['$q', 'iconService', function messageService($q, iconService) {

    return {
      getMessagesForArea(area) {
        var deferred = $q.defer();
        $.getJSON("sample_data/global.json", function(json) {
          var messages = json.locations[0].messages;
          for(var m in messages) {
            var message = messages[m];
            message.localIconPath = iconService.getIconPathForMessage(message);
          }
          return deferred.resolve(messages);
        });
        return deferred.promise;
        /*return $q.when(clevelandData).then(function(messages) {
          for(var m in messages) {
            var message = messages[m];
            message.localIconPath = iconService.getIconPathForMessage(message);
          }
          return $q.when(messages);
        });*/
      }
    }

  }]);