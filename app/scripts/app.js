'use strict';

/**
 * @ngdoc overview
 * @name myDashboardApp
 * @description
 * # myDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('myDashboardApp', [

    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/hotel_menu.html',
        controller: 'MenuCtrl'
        })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
