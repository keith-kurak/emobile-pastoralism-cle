'use strict';

angular.module('yomadApp')
  .factory('messageService', ['$q', 'iconService', 'dataService', 'messageDescriptionService', function messageService($q, iconService, dataService, messageDescriptionService) {

    var myFirebaseRef = new Firebase("https://yomad.firebaseio.com/");

    function MessageService() {
      //TODO: put this in another service, return the entire location instead of just an array of messages from this service
      this._mungeLocation = function(location) {
        var messages = location.messages;
        for(var m in messages) {
          var message = messages[m];
          message.localIconPath = iconService.getIconPathForMessage(message);
          message.description = messageDescriptionService.getDescriptionForMessage(message);
          message.relativeTime = moment(message.date).fromNow();
        }
        return messages;
      }

      this._getMessagesForLocation = function(locationId) {
        return dataService.getAppData().then(function(data) {
          return $q.when(this._mungeLocation(data.locations[locationId]));
        }.bind(this));
      }

      this.getMessagesForLocation = function(locationId) {
        return this._getMessagesForLocation(locationId).then(function(messages) {
          var messages = _.map(messages, function(message, key) {
            message.id = key;
            return message;
          });
          return $q.when(messages);
        });
      };
      this.getMessage = function(locationId, messageId) {
        return this._getMessagesForLocation(locationId).then(function(messages) {
          return $q.when(messages[messageId]);
        });
      };
      this.getLocations = function() {
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
      };
      this.getLocationForId = function(locationId) {
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
      };
    }

    var messageService = new MessageService();

    window.messageService = messageService;

    return messageService;

  }]);
