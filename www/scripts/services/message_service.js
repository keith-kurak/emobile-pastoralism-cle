'use strict';

angular.module('yomadApp')
  .service('messageService', ['$q', 'iconService', 'dataService', function messageService($q, iconService, dataService) {

    var myFirebaseRef = new Firebase("https://yomad.firebaseio.com/");

    //TODO: put this in another service, return the entire location instead of just an array of messages from this service
    function mungeLocation(location) {
      var messages = location.messages;
      for(var m in messages) {
        var message = messages[m];
        message.localIconPath = iconService.getIconPathForMessage(message);
      }
      return messages;
    }

    function getMessages() {
      return dataService.getAppData().then(function(data) {
        return $q.when(mungeLocation(data.locations["cle"]));
      });
    }

    return {
      getMessagesForArea(location) {
        return getMessages();
      },
      getMessage(messageId) {
        return getMessages().then(function(messages) {
          return $q.when(messages[messageId]);
        }); 
      },
      getLocations() {
        
      }
    }

  }]);