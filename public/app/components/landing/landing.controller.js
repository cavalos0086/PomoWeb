angular.module('pomoWebApp')
	.controller('landingController', function($scope, $state, $location,$timeout){
		$scope.goHome = function(){ 
			$timeout(function(){
				 $state.go('home.todoList');
				}, 5000);
		};

		$scope.goHome();

	});