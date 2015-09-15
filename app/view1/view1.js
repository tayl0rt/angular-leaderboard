'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

		//todo: Figure out how to select an employee by ID and highlight the specific employee light teal

		$scope.staff =	{
			Employees:
				[
					{_id: 1, name: 'Bill', score: 0},
					{_id: 2, name: 'Ted', score: 0},
					{_id: 3, name: 'Mary', score: 0},
					{_id: 4, name: 'Samantha', score: 0},
					{_id: 5, name: 'Jordan', score: 0}
				]
		};

		var employeeId = $scope.staff.Employees._id;

		$scope.getId = function() {
			console.log(employeeId);
		};
	}
]);