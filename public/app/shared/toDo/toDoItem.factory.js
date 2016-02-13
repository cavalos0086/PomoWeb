angular.module('pomoWebApp')
	.factory('toDoItem', function(){
		var toDoItem = {};
		toDoItem.title='';
		toDoItem.description='';
		toDoItem.numPomodoros = 0;

		return toDoItem;
	});