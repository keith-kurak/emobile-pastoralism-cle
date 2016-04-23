'use strict';

angular.module('yomadApp')
  .service('messageService', ['$q', 'iconService', function messageService($q, iconService) {

    //TODO: put this in another service, return the entire location instead of just an array of messages from this service
    function mungeLocation(location) {
      var messages = location.messages;
      for(var m in messages) {
        var message = messages[m];
        message.localIconPath = iconService.getIconPathForMessage(message);
      }
      return messages;
    }

    return {
      getMessagesForArea(area) {
        var deferred = $q.defer();
        $.getJSON("sample_data/global.json", function(json) {
          return deferred.resolve(mungeLocation(json.locations[0]));
        });
        return deferred.promise;
      }
    }

  }]);