'use strict';

/**
 * @ngdoc function
 * @name movieDatabaseApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the movieDatabaseApp
 */
angular.module('movieDatabaseApp')
  .controller('PopularCtrl', function ($scope, serviceAjax) {
  	$scope.currentPage = 1;
  	$scope.totalPages = 0;

  	$scope.loadMovies = function() {
  		$scope.data = null;
  		var data = serviceAjax.popular($scope.currentPage).then(function(ret) {
  			$scope.data = ret.data;
	  		$scope.movies = $scope.data.results;
	  		$scope.totalPages = $scope.data.totalPages;
  		});
  	};

  	$scope.pageChanged = function() {
  		$scope.loadMovies();
  	};
  	$scope.loadMovies();
  });