angular.module('pomoWebApp',[
	'ui.router',
])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('landing',{
			url:'/',
			views:{
				'main':{
					templateUrl:'app/components/landing/landing.html'
				}
			}
		})
		
	});