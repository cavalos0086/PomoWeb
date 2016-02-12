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
		.state('home', {
			url:'/home',
			views:{
				main:{
					templateUrl:'app/components/home/home.html'
				}
			}
		})
		.state('home.addTodo',{
			url:'/addTodo',
			views:{
				todoApp:{
					templateUrl:'app/components/addTodo/addTodo.html'
				},
			}
		})
	});