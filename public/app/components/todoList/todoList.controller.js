angular.module('pomoWebApp')
	.controller('todoListController', ['$scope', 'toDoFuntions','toDoItem',function($scope, toDoFuntions,toDoItem){
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