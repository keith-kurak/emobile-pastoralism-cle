'use strict';

angular.module('yomadApp')
  .service('dataService', ['$q', '$rootScope', function dataService($q, $rootScope) {

    var myFirebaseRef = new Firebase("https://yomad.firebaseio.com/");

    var data;

    myFirebaseRef.on("value", function(snapshot) {
      data = snapshot.val()
      $rootScope.$broadcast('data-updated');
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

    //use if you want to grab local test data instead
    function getSampleData() {
      var deferred = $q.defer();
      $.getJSON("sample_data/global_revised.json", function(json) {
        return deferred.resolve(json);
      });
      return deferred.promise;
    }

    function getFirebaseData() {
      if(data) {
        return $q.when(data);
      } else {
        var deferred = $q.defer();
        $rootScope.$on('data-updated', function(event, args) {
          deferred.resolve(data);
        });
        return deferred.promise;
      }
    }

    return {
      getAppData() {
        return getFirebaseData();
        //return getSampleData();
      },
    }

  }]);