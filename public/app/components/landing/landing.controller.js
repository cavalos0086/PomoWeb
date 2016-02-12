angular.module('pomoWebApp')
	.controller('landingController', function($scope, $state, $location,$timeout){
		$scope.goHome = function(){ 
			$timeout(function(){
				 $state.go('home');
				}, 3000);
		};

		$scope.goHome();
		
	});