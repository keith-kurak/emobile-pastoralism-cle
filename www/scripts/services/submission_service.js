'use strict';

angular.module('yomadApp')
  .service('submissionService', ['$q', '$rootScope', '$window', function dataService($q, $rootScope, $window) {

    function getMessageObject(messageType, username, locationDescription) {
      return {
        "user": username,
        "date": (new Date()).toJSON(),
        "isBurst": true,
        "burstDuration": 1,
        "priority": messageType.priority,
        "title": messageType.name,
        "type": messageType.id,
        "address1": "",
        "address2": "",
        "phone": "",
        "mapUrl": "",
        "detailImgUrl": "",
        "detailText": "",
        "locationDesc": locationDescription,
        "iconUrl": "",
        "lonLatCoordinates": [-81.8618, 41.415]
      };
    }

    return {
      submitMessage: function(location, messageType) {

        var firebaseRef = new Firebase('https://yomad.firebaseio.com/locations/' + location + '/messages');
        var username = $window.localStorage.getItem('username');
        var locationDescription = $window.localStorage.getItem('location');

        firebaseRef.orderByChild('user').equalTo(username).once("value", function(snap) {
          var results = snap.val();
          var messageObject = getMessageObject(messageType, username, locationDescription);
          //prevent duplicate message by the same user of the same type
          if(results) {
            var duplicateMessage = _.find(results, function(r) {
              return r.type === messageType.id;
            });
            if(duplicateMessage) {
              var dupeRef = firebaseRef.child(_.findKey(results, duplicateMessage));
              dupeRef.set(messageObject);
            } else {
              firebaseRef.push().set(messageObject);
            }
          } else {
            firebaseRef.push().set(messageObject);
          }
        });
        return $q.when();
      },
      getMessageCategories: function() {
        return $q.when(message_categories);
      }
    }

  }]);