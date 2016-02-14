angular.module('pomoWebApp')
	.controller('todoListController', ['$scope', 'toDoFunctions','toDoItem', function($scope, toDoFunctions,toDoItem){
		$scope.toDoList = [];
		$scope.empty = true;

		$scope.populateToDos = function(){

			toDoFunctions.retrieve()
				.then(function(data){
					
					$scope.toDoList = data.data;
					// console.log('todoList', $scope.toDoList);
					if($scope.toDoList.length > 0){
						$scope.empty = false;
					}
				})
		};

		$scope.populateToDos();

	}]);