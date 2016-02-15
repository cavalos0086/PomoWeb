angular.module('pomoWebApp')
	.controller('modalInstanceCtrl',['$scope','$uibModalInstance','toDo','toDoFunctions',function($scope, $uibModalInstance,toDo, toDoFunctions){

		$scope.toDo =toDo;

		
		$scope.save = function(){
			toDoFunctions.edit(toDo)
				.then(function(){
					$scope.cancel();
					
				}, function(){

				})
		};

		$scope.cancel = function(){
			$uibModalInstance.dismiss('cancel');
		}
	}]);