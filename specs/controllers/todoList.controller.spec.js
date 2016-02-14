describe('toDoList Controller', function() {
	var $controller, $rootScope, $scope, toDoFunctions, toDoItem;

	beforeEach(module('pomoWebApp'));
	beforeEach(inject(function(_$controller_, _toDoFunctions_){
		$scope = {};
		$controller = _$controller_;
		toDoFunctions = _toDoFunctions_;
		// toDoItem = _toDoItem_;

		// $controller('todoListController', {$scope:$scope, toDoFunctions:toDoFunctions, toDoItem:toDoItem});
	}));

	it('should display empty message if toDoList is empty', function() {
		
	});

});