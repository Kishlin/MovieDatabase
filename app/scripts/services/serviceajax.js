'use strict';

/**
 * @ngdoc service
 * @name movieDatabaseApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the movieDatabaseApp.
 */
angular.module('movieDatabaseApp')
  .factory('serviceAjax', function ($http) {
    return {
      popular: function(page) {
        return $http.get('http://localhost:3000/popular?page=' + page);
      }
    };
  });
