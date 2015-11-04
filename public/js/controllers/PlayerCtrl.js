'use strict';

angular.module('PlayerCtrl', [])

/*	.service('GetPlayerService', ['$http', '$q', function($http, $q) {
		var deferred = $q.defer();
		$http.get('/assets/js/employees.json').then(function(data) {
			deferred.resolve(data);
		});
		this.getEmployees = function() {
			return deferred.promise;
		}
	}])*/

	.controller('PlayerController', ['$scope', '$http', function($scope, $http) {

		//todo: Figure out how to select an employee by ID and highlight the specific employee light teal





		$http.get('/api/players')
			.success(function(response) {
				$scope.players = response;
				console.log($scope.players);
			})

			.error(function data(){
			console.log('Error: ' + data);
			});

		$scope.addPlayer = function() {
			$http.post('/api/players', $scope.player);
			console.log($scope.player)
		};




		$scope.getID = function() {
			console.log(this.player._id);

		}
	}]);
