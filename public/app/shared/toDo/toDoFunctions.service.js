angular.module('pomoWebApp')
	.service('toDoFunctions', ['$http', '$q', 'toDoItem',function($http, $q, toDoItem){

		
		
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


		this.add = function(toDo){
			var deferred = $q.defer();
			$http.post('/db/addTodo', toDo)
				.then(function(data){
					deferred.resolve(data);
				}, function(){
					deferred.reject();
				});

			return deferred.promise;
		};


		this.delete = function(toDoId){
			var deferred = $q.defer();
			$http.post('/db/deleteTodo', toDoId)
				.then(function(){
					deferred.resolve();
				}, function(){
					deferred.reject();
				});

			return deferred.promise;
		};


		this.edit = function(newTodo){
			var deferred = $q.defer();
			$http.put('/db/editTodo', newTodo)
				.then(function(){
					deferred.resolve();
				}, function(){
					deferred.reject();
				});
			return deferred.promise;
		};


	}]);