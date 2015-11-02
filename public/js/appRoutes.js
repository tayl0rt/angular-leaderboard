// public/js/appRoutes.js
angular.module('appRoutes', ['ngRoute'])

	.config(function($routeProvider, $locationProvider) {

		$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/players.html',
			controller: 'PlayerController'
		})

		.otherwise({
			template: '<div class="card-panel white"><h3 class="flow-text center-align">Page not found!</h3></div>'
		})
	;

	$locationProvider.html5Mode(true);

});