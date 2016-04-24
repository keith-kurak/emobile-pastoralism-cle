'use strict';

angular.module('yomadApp')
  .service('submissionService', ['$q', '$rootScope', '$window', function dataService($q, $rootScope, $window) {

    function getMessageObject(messageType, username) {
      return {
        "user": "weather",
        "isBurst": true,
        "burstDuration": 1,
        "priority": 1,
        "title": "High winds until 10 PM",
        "type": "weather",
        "address1": "",
        "address2": "",
        "phone": "",
        "mapUrl": "",
        "detailImgUrl": "",
        "detailText": "",
        "locationDesc": "East Side",
        "iconUrl": "",
        "lonLatCoordinates": [-81.8618, 41.415]
      };
    }

    return {
      submitMessage: function(location, messageType) {

        var firebaseRef = new Firebase('https://yomad.firebaseio.com/locations/' + location + '/messages');
        //var username = $window.localStorage.getItem('username');
        var username = 'weather';

        firebaseRef.orderByChild('user').equalTo(username).once("value", function(snap) {
          console.log(snap.val());
        });
        return $q.when();
      },
      getMessageCategories: function() {
        return $q.when(message_categories);
      }
    }

  }]);