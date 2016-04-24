'use strict';

angular.module('yomadApp')
  .service('submissionService', ['$q', '$rootScope', function dataService($q, $rootScope) {

    var myFirebaseRef = new Firebase("https://yomad.firebaseio.com/");

    return {
      submitMessage: function(location, messageType) {
        return $q.when();
      },
      getMessageCategories: function() {
        return $q.when(message_categories);
      }
    }

  }]);