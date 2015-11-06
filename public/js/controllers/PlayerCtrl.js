'use strict';

angular.module('PlayerCtrl', [])

	.controller('PlayerController', ['$scope', '$http', function($scope, $http) {

		$scope.selectedPlayer = null;

		$scope.loadPlayers = function() {

			$http.get('/api/players')
				.success(function (response) {
					$scope.players = response;
					console.log($scope.players);
					console.log('successful load');
				})

				.error(function data() {
					console.log('Error: ' + data);
				});
		};

		$scope.loadPlayers();


		$scope.playerName = '';

		$scope.addPlayer = function() {

			var player = {
				name: $scope.playerName,
				score: 0
			};

			console.log(typeof player);

			$http.post('/api/players', player)
					.success(function() {
						//console.log(response);
						$scope.playerName = '';
						$scope.loadPlayers()
					})
					.error(function(error) {
						console.log('Error! - ' + error);
					});

		};

		$scope.removePlayer = function(id) {

			console.log(id);

			$http.delete('/api/players/' + id)
				.success(function(response) {
					console.log(response);
					$scope.loadPlayers();
				})
				.error(function(error) {
					console.log('Error! - ' + error);
				})
		};

		$scope.addFive = function(id) {

			console.log(id);

			$http.put('/api/players/score/addfive/' + id, { $inc: {score: 5} })
					.success(function(response) {
						console.log(response);
						$scope.loadPlayers();
					})
					.error(function(error) {
						console.log('Error! - ' + error);
					})
		};

		$scope.removeFive = function(id) {

			console.log(id);
			console.log($scope.selectedPlayer);

			$http.put('/api/players/score/removefive/' + id, { $inc: {score: -5} })
					.success(function(response) {
						console.log(response);
						$scope.loadPlayers();
					})
					.error(function(error) {
						console.log('Error! - ' + error);
					})
		};


		//todo: Figure out how to select an employee by ID and highlight the specific employee light teal


		$scope.setSelectedPlayer = function(selectedPlayer) {
			console.log(this.player._id);
			$scope.selectedPlayer = selectedPlayer;
			console.log($scope.selectedPlayer);
		};

	}]);


