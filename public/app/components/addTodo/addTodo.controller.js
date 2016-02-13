angular.module('pomoWebApp')
	.controller('addTodoController', function($scope){
		$scope.data = {
			title:'',
			description:'',
			numPomo:0
		};
		$scope.numTodos = 0;
		$scope.addTodo = function(){
			if( ($scope.data.title !== '') && ($scope.data.numPomo > 0) && ($scope.data.numPomo <= 10)){
				$scope.numTodos++;
			}
		};

	});