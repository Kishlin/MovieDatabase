'use strict';

/**
 * @ngdoc overview
 * @name movieDatabaseApp
 * @description
 * # movieDatabaseApp
 *
 * Main module of the application.
 */
angular
  .module('movieDatabaseApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/popular', {
        templateUrl: 'views/popular.html',
        controller: 'PopularCtrl',
      })
      .otherwise({
        redirectTo: '/popular'
      });
  });
