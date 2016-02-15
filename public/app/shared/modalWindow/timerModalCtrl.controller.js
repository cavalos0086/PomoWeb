angular.module('pomoWebApp')
	.controller('timerModalCtrl', ['$scope','$uibModalInstance','toDo','toDoFunctions','$timeout', function($scope, $uibModalInstance,toDo, toDoFunctions, $timeout){

		$scope.toDo = toDo;
		$scope.minutes = '10';
		$scope.seconds = '00';



		$scope.tickInterval = 1000; //ms

		var tick = function(){
			$scope.temp = (parseInt($scope.seconds) - 1).toString();
			if($scope.temp === '-1'){
				$scope.minutes = (parseInt($scope.minutes) - 1).toString();
				if(parseInt($scope.minutes) < 10){
					$scope.minutes = '0' + $scope.minutes.toString();
				}
				$scope.seconds = '59';
			} else{
				$scope.seconds = (parseInt($scope.seconds) - 1).toString();
				if(parseInt($scope.seconds) < 10){
					$scope.seconds = '0' + $scope.seconds.toString();
				}
			}


			$timeout(tick, $scope.tickInterval);
		}

		$scope.start = function(){
			tick();
		};

		$scope.cancel = function(){
			$uibModalInstance.dismiss('cancel');
		};


	}]);