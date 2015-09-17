'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
	  //resolve: {
		//  employees: ['myAppService', function(myAppService){
		//	  var employees = myAppService.getEmployees();
		//  }]
	  //}
  });
}])


	//Don't really know about this service below's logic yet sadly, learned from Accio Code on YouTube.
	//todo: investigate more how promises work in general, and $q.

.service('myAppService', function($http, $q) {
	var deferred = $q.defer();
	$http.get('/assets/js/employees.json').then(function(data) {
		deferred.resolve(data);
	});
	this.getEmployees = function() {
		return deferred.promise;
	}
})

.controller('View1Ctrl', ['$scope', 'myAppService', function($scope, myAppService) {

		//todo: Figure out how to select an employee by ID and highlight the specific employee light teal

		var promise = myAppService.getEmployees();
		promise.then(function(data) {
			$scope.employees = data.data; // todo: Why is this data.data? Not understanding what .data does - Find Answer.
			console.log($scope.employees);
		});
	}
]);