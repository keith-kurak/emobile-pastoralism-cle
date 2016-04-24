'use strict';

angular.module('yomadApp')
  .service('iconService', ['$q', function iconService($q) {

    return {
      getIconPathForMessage: function(message) {
        return 'img/Glyphs png/' + message.type + '.png';
      }
    }

  }]);