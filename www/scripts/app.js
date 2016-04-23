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
        templateUrl: 'views/controllers/main.html',
        controller: 'MainCtrl'
      })
      .when('/main', {
        templateUrl: 'views/controllers/main.html',
        controller: 'MainCtrl'
      })
      .when('/main/:id', {
        templateUrl: 'views/controllers/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/controllers/settings.html',
        controller: 'SettingsCtrl'
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