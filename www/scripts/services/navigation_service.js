'use strict';

angular.module('liftiumApp')
  .service('navigate', function ($location, $rootScope, $timeout) {
   return {
    to: function(path){
      $timeout(function(){$location.path(path);},0)
    }
   }
  });