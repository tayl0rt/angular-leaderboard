'use strict';

angular.module('PlayerCtrl', [])

	.controller('PlayerController', ['$scope', 'PlayerService', function($scope, PlayerService) {

		//todo: Figure out how to select an employee by ID and highlight the specific employee light teal

			var promise = PlayerService.getEmployees();
			promise.then(function(data) {
				$scope.employees = data.data; // todo: Why is this data.data? Not understanding what .data does - Find Answer.
				console.log($scope.employees);
			});
		}
	]);