angular.module('PlayerPromiseService', [])

	//todo: investigate more how promises work in general, and $q.

	.service('PlayerService', ['$http', '$q', function($http, $q) {
		var deferred = $q.defer();
		$http.get('/assets/js/employees.json').then(function(data) {
			deferred.resolve(data);
		});
		this.getEmployees = function() {
			return deferred.promise;
		}
	}]);