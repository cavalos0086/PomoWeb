angular.module('pomoWebApp')
	.controller('timerModalCtrl', ['$scope','$uibModalInstance','toDo','toDoFunctions','$timeout', function($scope, $uibModalInstance,toDo, toDoFunctions, $timeout){

		$scope.toDo = toDo;
		$scope.minutes = '01';
		$scope.seconds = '00';
		$scope.stillLeft = false;

		 var tickInterval = 1000; //ms

		
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

			if($scope.seconds === '00' && $scope.minutes === '00'){
				$scope.toDo.numpomodoros =  $scope.toDo.numpomodoros - 1;
				if($scope.toDo.numpomodoros !== 0){
					toDoFunctions.edit($scope.toDo)
						.then(function(){
							$scope.stillLeft = true;
						});
				}else{
					toDoFunctions.edit(toDo)
						.then(function(){
							$scope.cancel();
						})
				}
				return;
			}

			$timeout(tick, tickInterval);
		}

		

		
		$scope.start = function(){
			$scope.minutes = '01';
			$scope.seconds = '00';
			$scope.stillLeft = false;
			tick();
		};

		$scope.cancel = function(){
			$uibModalInstance.dismiss('cancel');
		};


	}]);