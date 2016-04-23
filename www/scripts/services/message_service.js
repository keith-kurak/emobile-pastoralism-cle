'use strict';

angular.module('yomadApp')
  .service('messageService', ['$q', 'iconService', function messageService($q, iconService) {

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

    function getMessagesFromSampleData() {
      var deferred = $q.defer();
      $.getJSON("sample_data/global.json", function(json) {
        return deferred.resolve(mungeLocation(json.locations[0]));
      });
      return deferred.promise;
    }

    function getMessagesFromFirebase() {
      var deferred = $q.defer();
      myFirebaseRef.once("value", function(data) {
        return deferred.resolve(mungeLocation(data.val().locations[0]));
      });
      return deferred.promise;
    }

    function getMessages() {
      return getMessagesFromSampleData();
      //return getMessagesFromFirebase();
    }

    return {
      getMessagesForArea(area) {
        return getMessages();
      },
      getMessage(messageId) {
        return getMessages().then(function(messages) {
          var message = _.find(messages, function(m){
            return m.id === messageId;
          });
          return $q.when(message);
        }); 
      }
    }

  }]);