'use strict';

/**
 * Main module of the application.
 */
angular
  .module('bracketApp', [
    'ngRoute',
	'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($translateProvider) {
	  $translateProvider.useStaticFilesLoader({
		prefix: 'strings.',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage('en');
  });
