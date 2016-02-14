angular.module('pomoWebApp')
	.controller('addTodoController', ['$scope','toDoItem','toDoFunctions',function($scope,toDoItem, toDoFunctions){
		$scope.title = '';
		$scope.description = '';
		$scope.numPomodoros = 1;

		$scope.message = '';

		var newItem1 = new toDoItem();

		$scope.addItem = function(obj){
			if(obj.title === undefined){
				$scope.message = 'toDO must have a title';
				return;
			} else{
				toDoFunctions.add(obj).
					then(function(){
						$scope.message = 'Success';
					},function(){
						$scope.message = 'Error. Please try again';
					})
			}
		}

		// $scope.addItem(newItem1);


	}]);