angular.module('pomoWebApp')
	.controller('addTodoController', ['$scope','toDoItem','toDoFunctions', '$timeout',function($scope,toDoItem, toDoFunctions, $timeout){
		
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
				$scope.error = false;
				$scope.titleMissing = false;

				toDoFunctions.add(obj).
					then(function(){
						$scope.message = 'Success';
						$scope.success = true;
						$scope.item = {
							title:'',
							description:'none',
							numPomodoros:1
						};

						$timeout(function(){
							$scope.success = false;
						},2000);
					},function(){
						$scope.message = 'Error. Please try again';
						$scope.error = true;
					})
			}
		}

	}]);