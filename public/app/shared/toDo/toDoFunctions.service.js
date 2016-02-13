angular.module('pomoWebApp')
	.service('toDoFuntions', ['$http', '$q', 'toDoItem',function($http, $q, toDoItem){

		this.add = function(){};
		this.edit = function(){};
		this.delete = function(){};


		this.retrieve = function(){
			var deferred = $q.defer();

			$http.get('/db/retrieveList')
				.then(function(data){
					deferred.resolve(data);
				}, function(data){
					deferred.reject();
				});

			return deferred.promise;
		};

	}]);