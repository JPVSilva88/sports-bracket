'use strict';

/**
 * Main Controller of the bracketApp
 */
angular.module('bracketApp')
  .controller('MainCtrl', function ($scope, $http, $translate) {
  
	// Current language used in the bracket
	$scope.currLang = 'en';
  
	// function to change the language used
	$scope.changeLanguage = function(lang) {
		$translate.use(lang);
		
		$scope.currLang = lang;
	};
  
	$http.get('brackets.json').success(function(data) {
		$scope.data = data.knockout;
	});
});
