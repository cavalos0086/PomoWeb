angular.module('pomoWebApp')
	.factory('toDoFactory', ['$http', '$q', function($http, $q){
		var toDoFunctions = {};

		return toDoFunctions;
	}]);