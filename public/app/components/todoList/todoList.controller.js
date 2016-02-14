angular.module('pomoWebApp')
	.controller('todoListController', ['$scope', 'toDoFuntions','toDoItem',function($scope, toDoFuntions,toDoItem){
		$scope.toDoList = [];
		$scope.empty = false;

	}]);