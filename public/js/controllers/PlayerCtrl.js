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

	.controller('PlayerController', ['$scope', '$http', 'GetPlayerService', function($scope, $http, PlayerService) {

		//todo: Figure out how to select an employee by ID and highlight the specific employee light teal





		$http.get('/api/players')
			.success(function(data) {
				$scope.players = data;
				console.log(data);
			})

			.error(function data(){
			console.log('Error: ' + data);
			});




		$scope.addFivePoints = function(id) {
			$http.put('/api/players/:player_id')
				.success(function (data) {
					$scope.player.score = data;
					console.log(data);
				})
		}
	}]);
