'use strict';

angular.module('yomadApp')
  .service('messageDescriptionService', ['$q', function messageDescriptionService($q) {

    return {
      getDescriptionForMessage: function(message) {
        if(message.priority > 5){
          var pMsg = "!! ";
        }
        else{
          var pMsg = "hi ";
        }

        if(message.isBurst && message.type === "map") {
          return pMsg + message.user + ": " + message.locationDesc;
        } else if(message.isBurst && message.type === "land") {
          return pMsg + message.user + ": " + message.locationDesc;
        } else if(message.isBurst) {
          return message.locationDesc;
        } else {
          return message.address1;
        }
      }
    }
  }]);
