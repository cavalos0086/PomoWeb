angular.module('pomoWebApp')
	.factory('toDoItem', function(){
		return function(title, description, numPomodoros){
			this.title = title;
			this.description = description || 'none';
			this.numPomodoros = numPomodoros || 1;
		}
	});