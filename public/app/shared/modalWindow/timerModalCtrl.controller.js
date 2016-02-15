angular.module('pomoWebApp')
	.controller('timerModalCtrl', ['$scope','$uibModalInstance','toDo','toDoFunctions','$timeout', function($scope, $uibModalInstance,toDo, toDoFunctions, $timeout){

		$scope.toDo = toDo;
		var newData = new Date('February 14, 2016 11:40:40');
		$scope.time = newData.getHours();

		$scope.tickInterval = 1000; //ms

		var tick = function(){
			$scope.clock = Date.now();
			$timeout(tick, $scope.tickInterval);
		}

		$scope.start = function(){
			$timeout(tick, $scope.tickInterval);
		};

		$scope.cancel = function(){
			$uibModalInstance.dismiss('cancel');
		};


	}]);