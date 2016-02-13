angular.module('pomoWebApp')
	.service('toDoFuntions', ['$http', '$q', 'toDoItem',function($http, $q, toDoItem){

		var deferred = $q.defer();

		this.toDoList;
		
		this.retrieve = function(){

			$http.get('/db/retrieveList')
				.then(function(data){
					deferred.resolve(data);
				}, function(data){
					deferred.reject();
				});

			return deferred.promise;
		};

		this.add = function(toDo){

			$http.post('/db/addTodo', toDo)
				.then(function(){
					deferred.resolve();
				}, function(data){
					deferred.reject();
				});

			return deferred.promise;
		};


		this.delete = function(toDoId){

			$http.post('/db/deleteTodo', toDoId)
				.then(function(){
					deferred.resolve();
				}, function(){
					deferred.reject();
				});

			return deferred.promise;
		};


		this.edit = function(newTodo){

			$http.put('/db/editTodo', newTodo)
				.then(function(){
					deferred.resolve();
				}, function(){
					deferred.reject();
				});
			return deferred.promise;
		};


	}]);