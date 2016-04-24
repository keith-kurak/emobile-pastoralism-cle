'use strict';

angular.module('yomadApp')
  .service('messageDescriptionService', ['$q', function messageDescriptionService($q) {

    return {
      getDescriptionForMessage: function(message) {
        if(message.isBurst && message.type === "map") {
          return message.user + ": " + message.locationDesc;
        } else if(message.isBurst) {
          return message.locationDesc;
        } else {
          return message.address1;
        }
      }
    }
  }]);