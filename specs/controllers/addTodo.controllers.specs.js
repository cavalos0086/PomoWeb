describe('AddTodo Controller', function() {
	var $scope, $controller, $httpBackend;

	beforeEach(module('pomoWebApp'));
	beforeEach(inject(function(_$controller_, _$httpBackend_){
		$scope = {};
		$controller = _$controller_;
		$httpBackend = _$httpBackend_;

		$controller(function(){
			$scope.data = {
				title:'',
				description:'',
				numPomo:0
			};
			$scope.numTodos = 0;

			$scope.addTodo = function(){
				if(!$scope.data.title === '' && $scope.data.numPomo > 0 && $scope.data.numPomo <= 10){
					$scope.numTodos++;
				}
			}



		}, {$scope:$scope})
	}));

	it('to-do Title can not be empty', function() {
		$scope.data.title = '';
		$scope.addTodo();
		expect($scope.numTodos).toBe(0);
	});

	it('number of pomodoros can not be zero', function() {
	});

	it('should add todo if title is not empty, and number of pomodoros >= 1 and <= 10', function(){

	});

	
	it('number of pomodoros should be between 1 and 10', function() {
		
	});

});