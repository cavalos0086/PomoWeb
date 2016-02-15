angular.module('pomoWebApp')
	.controller('timerModalCtrl', ['$scope','$uibModalInstance','toDo','toDoFunctions','$timeout', function($scope, $uibModalInstance,toDo, toDoFunctions, $timeout){

		$scope.toDo = toDo;
		$scope.minutes = '03';
		$scope.seconds = '00';



		$scope.tickInterval = 1000; //ms

		// var tick = function(){
		// 	$scope.seconds = (parseInt($scope.seconds) - 1).toString();

		// 	if($scope.seconds === '00'){

		// 		$scope.minutes = (parseInt($scope.minutes) - 1).toString();
		// 		if(parseInt($scope.minutes) < 10){
		// 			$scope.minutes = '0' + $scope.minutes.toString();
		// 			if($scope.minutes === '00' && $scope.seconds === '00'){
		// 				$scope.toDo.numpomodoros = $scope.toDo.numpomodoros - 1;
		// 				$scope.minutes = '03';
		// 				$scope.seconds = '00';
		// 				return;
		// 			}
		// 		}

		// 		$scope.seconds = '05';

		// 	} else{

		// 		$scope.seconds = (parseInt($scope.seconds) - 1).toString();
		// 		if(parseInt($scope.seconds) < 10){
		// 			$scope.seconds = '0' + $scope.seconds.toString();
		// 		}
		// 	}

		// 	$timeout(tick, $scope.tickInterval);
		// }


		var tick = function(){
			$scope.seconds = (parseInt($scope.seconds) - 1).toString();

			if($scope.seconds === '-1'){
				$scope.seconds = '05';
				$scope.minutes = (parseInt($scope.minutes) - 1).toString();
				if(parseInt($scope.minutes) < 10){
					$scope.minutes = '0'+ parseInt($scope.minutes).toString();
				}
			} else{
				if(parseInt($scope.seconds) < 10){
					$scope.seconds = '0'+ parseInt($scope.seconds).toString();
				}

				if(parseInt($scope.minutes) < 10){
					$scope.minutes = '0'+ parseInt($scope.minutes).toString();
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