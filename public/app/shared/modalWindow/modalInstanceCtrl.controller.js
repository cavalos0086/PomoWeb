angular.module('pomoWebApp')
	.controller('modalInstanceCtrl',['$scope','$uibModalInstance','toDoList',function($scope, $uibModalInstance,toDoList){

		$scope.toDoList =toDoList;

		$scope.save = function(){
			
		};

		$scope.cancel = function(){
			$uibModalInstance.dismiss('cancel');
		}
	}]);