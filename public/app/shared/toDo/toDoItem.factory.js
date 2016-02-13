angular.module('pomoWebApp')
	.factory('toDoItem', function(){
		return function(title, description, numPomodoros){


			this.title = title;
			this.description = description || '';
			this.numPomodoros = numPomodoros || 1;
		}
	});