// public/js/appRoutes.js
angular.module('appRoutes', ['ngRoute']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/players', {
			templateUrl: 'public/views/player.html',
			controller: 'PlayerController'
		})
		.otherwise({
			template: '<div class="container"><p class="flow-text">Page not found!</p></div>'
		})
	;

	$locationProvider.html5Mode(true);

}]);