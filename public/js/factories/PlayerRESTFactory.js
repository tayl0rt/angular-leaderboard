angular.module('PlayerRESTFactory', [])

	.factory('Player', ['$http', function($http) {

		return {
			// call to get all players
			get : function() {
				return $http.get('/api/players');
			},


			// these will work when more API routes are defined on the Node side of things
			// call to POST and create a new player
			create : function(playerData) {
				return $http.post('/api/players', playerData);
			},

			// call to DELETE a player
			delete : function(id) {
				return $http.delete('/api/players/' + id);
			}
		}

	}]);