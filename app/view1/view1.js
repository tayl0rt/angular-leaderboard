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
			$scope.employees = data.data;
			console.log($scope.employees);
		});
	}
]);