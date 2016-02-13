angular.module('pomoWebApp')
	.factory('toDoFactory', ['$http', '$q', function($http, $q){
		var toDoFunctions = {};

		toDoFunctions.add = function(){};
		toDoFunctions.edit = function(){};
		toDoFunctions.delete = function(){};

		
		toDoFunctions.retrive = function(){
			
		};


		return toDoFunctions;
	}]);