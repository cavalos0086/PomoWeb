angular.module('pomoWebApp')
	.factory('toDoFactory', ['$http', '$q', function($http, $q){
		var toDoFunctions = {};

		toDoFunctions.add = function(){};
		toDoFunctions.edit = function(){};
		toDoFunctions.delete = function(){};

		
		toDoFunctions.retrieve = function(){
			var deferred = $q.defer();

			$http.get('/db/retrieveList')
				.then(function(data){
					deferred.resolve(data);
				}, function(data){
					deferred.reject();
				});

			return deferred.promise;
		};


		return toDoFunctions;
	}]);