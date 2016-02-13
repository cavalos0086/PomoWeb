describe('AddTodo Controller', function() {
	var $scope, $controller, $httpBackend;

	beforeEach(module('pomoWebApp'));
	beforeEach(inject(function(_$controller_, _$httpBackend_){
		$scope = {};
		$controller = _$controller_;
		$httpBackend = _$httpBackend_;

		$controller('addTodoController', {$scope:$scope})
	}));

	it('to-do Title can not be empty', function() {
		$scope.data.title = '';
		$scope.addTodo();
		expect($scope.numTodos).toBe(0);
	});

	it('number of pomodoros can not be zero', function() {
		$scope.data.numPomo = 0;
		$scope.addTodo();
		expect($scope.numTodos).toBe(0);
	});

	it('should add todo if title is not empty, and number of pomodoros >= 1 and <= 10', function(){
		$scope.data.title = 'Sample Title';
		$scope.data.numPomo = 5;
		$scope.addTodo();
		expect($scope.numTodos).toBe(1);
	});

	it('should sent a post request when addTodo function is called', function() {
		
	});

});