'use strict';

  angular
  .module('yomadApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/controllers/home.html',
        controller: 'HomeCtrl'
      })
      /*.when('/home', {
        templateUrl: 'views/controllers/home.html',
        controller: 'HomeCtrl'
      })*/
      .when('/:locationId', {
        templateUrl: 'views/controllers/location.html',
        controller: 'LocationCtrl'
      })
      .when('/:locationId/:messageId', {
        templateUrl: 'views/controllers/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/:locationId/map', {
        templateUrl: 'views/controllers/map.html',
        controller: 'MapCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/controllers/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/:locationId/submit', {
        templateUrl: 'views/controllers/submit.html',
        controller: 'SubmitCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  /*.run(function ($rootScope, $location, $window) {
    // Handle Android back button press - not sure if this will work, but will leave it just in case
    if(navigator.userAgent.match(/(Android)/)) {
      document.addEventListener("backbutton", function(e){
        if($location.$$path != '/') {
          $rootScope.$emit('backPressed');
          e.preventDefault();
          return false;
        }
      }, false);
    }

    // Handle Windows Phone back button press - not sure if this will work, but will leave it just in case
    else if(navigator.userAgent.match(/(IEMobile)/)) {
      var hardwareButtons = Windows.Phone.UI.Input.HardwareButtons;
      hardwareButtons.addEventListener("backpressed", function (e) {
         if($location.$$path != '/') {
          $rootScope.$emit('backPressed');
          e.handled = true;
         }
      });
    }
});*/