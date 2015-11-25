'use strict';

angular.module('PlayerCtrl', [])

	.controller('PlayerController', ['$scope', '$http', function($scope, $http) {

		//Create the playerName variable to hold the Name for the newly created player
		$scope.playerName = '';

		//Create selectedPlayer variable to hold the _id for each player - begins null
		$scope.selectedPlayer = null;


		//REST API

		//wrap GET request in a function so we can just call it as needed.
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

		//POST
		$scope.addPlayer = function() {

			var player = {
				name: $scope.playerName,
				score: 0
			};

			$http.post('/api/players', player)
					.success(function() {
						$scope.playerName = '';
						$scope.loadPlayers()
					})
					.error(function(error) {
						console.log('Error! - ' + error);
					});

		};

		//DELETE
		$scope.removePlayer = function(id) {

			console.log(id);

			$http.delete('/api/players/' + id)
				.success(function(response) {
					console.log('DELETE response - ' + response);
					$scope.loadPlayers();
				})
				.error(function(error) {
					console.log('Error! - ' + error);
				})
		};

		//PUT
		$scope.addFive = function(id) {

			console.log(id);

			$http.put('/api/players/score/update/' + id, { $inc: {score: 5} })
					.success(function(response) {
						console.log('PUT - add five points response -' + response);
						$scope.loadPlayers();
					})
					.error(function(error) {
						console.log('Error! - ' + error);
					})
		};

		//PUT
		$scope.removeFive = function(id) {

			console.log(id);
			console.log($scope.selectedPlayer);

			$http.put('/api/players/score/update/' + id, { $inc: {score: -5} })
					.success(function(response) {
						console.log('PUT - remove five points response -' + response);
						$scope.loadPlayers();
					})
					.error(function(error) {
						console.log('Error! - ' + error);
					})
		};

		//grab player ID
		$scope.setSelectedPlayer = function(selectedPlayer) {
			console.log(this.player._id);
			$scope.selectedPlayer = selectedPlayer;
			console.log($scope.selectedPlayer);
		};

		//ng-repeat player in players orderBy functions
		$scope.playerFilter = '';

		$scope.sortPlayersName = function() {
			$scope.playerFilter = "name";
		};

		$scope.sortPlayersScore = function() {
			$scope.playerFilter = "-score";
		};


	}]);


