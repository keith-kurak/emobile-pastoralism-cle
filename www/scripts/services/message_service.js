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
        //var a = moment('2016-01-01');
        message.relativeTime = "1Hr ago"
      }
      return messages;
    }

    function getMessagesForLocation(locationId) {
      return dataService.getAppData().then(function(data) {
        return $q.when(mungeLocation(data.locations[locationId]));
      });
    }

    return {
      getMessagesForLocation(locationId) {
        return getMessagesForLocation(locationId);
      },
      getMessage(locationId, messageId) {
        return getMessagesForLocation(locationId).then(function(messages) {
          return $q.when(messages[messageId]);
        });
      },
      getLocations() {
        return dataService.getAppData().then(function(data) {
          var locations = _.map(data.locations, function(location, key) {
            return {
              id: key,
              name: location.name,
              coordinates: location.coordinates
            }
          });
          return $q.when(locations);
        });
      },
      getLocationForId(locationId) {
        return dataService.getAppData().then(function(data) {
          var locations = _.map(data.locations, function(location, key) {
            return {
              id: key,
              name: location.name,
              coordinates: location.coordinates
            }
          });
          return $q.when(_.find(locations, function(l) {return l.id === locationId}));
        });
      }
    }

  }]);
