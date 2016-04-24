'use strict';

angular.module('yomadApp')
  .service('submissionService', ['$q', '$rootScope', function dataService($q, $rootScope) {

    var myFirebaseRef = new Firebase("https://yomad.firebaseio.com/");

    return {
      submitMessage(messageType) {
        return $q.when();
      },
    }

  }]);