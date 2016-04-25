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
      .when('/settings', {
        templateUrl: 'views/controllers/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/:locationId', {
        templateUrl: 'views/controllers/location.html',
        controller: 'LocationCtrl'
      })
      .when('/:locationId/map', {
        templateUrl: 'views/controllers/map.html',
        controller: 'MapCtrl'
      })
      .when('/:locationId/submit', {
        templateUrl: 'views/controllers/submit.html',
        controller: 'SubmitCtrl'
      })
      .when('/:locationId/submit/:messageCategoryId', {
        templateUrl: 'views/controllers/submit_detail.html',
        controller: 'SubmitDetailCtrl'
      })
      .when('/:locationId/:messageId', {
        templateUrl: 'views/controllers/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
