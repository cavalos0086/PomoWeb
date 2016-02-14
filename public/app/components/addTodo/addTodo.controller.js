angular.module('pomoWebApp')
	.controller('addTodoController', ['$scope','toDoItem','toDoFunctions',function($scope,toDoItem, toDoFunctions){
		
		$scope.item = {
			title:'',
			description: 'none',
			numPomodoros: 1
		}

		$scope.message = '';

		$scope.titleMissing = false;
		$scope.success = false;
		$scope.error = false;

		var newItem1 = new toDoItem();

		$scope.addItem = function(obj){
			if(obj.title === '' || obj.title === undefined){
				$scope.message = 'toDO must have a title';
				$scope.titleMissing = true;
				return;
			} else{
				toDoFunctions.add(obj).
					then(function(){
						$scope.message = 'Success';
						$scope.success = true;
					},function(){
						$scope.message = 'Error. Please try again';
						$scope.error = true;
					})
			}
		}

	}]);