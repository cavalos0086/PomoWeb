angular.module('pomoWebApp')
	.controller('todoListController', ['$scope', 'toDoFunctions','toDoItem',function($scope, toDoFunctions,toDoItem){
		$scope.toDoList = [];
		$scope.empty = false;

		$scope.$watch('toDoList', function(newValue, oldValue){
			if(newValue.length > 0){
				$scope.empty = false;
			} else{
				$scope.empty = true;
			}
		});
	}]);