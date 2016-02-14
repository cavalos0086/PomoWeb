describe('toDoList Controller', function() {
	var $controller, $rootScope, toDoList;

	beforeEach(module('pomoWebApp'));
	beforeEach(inject(function(_$controller_,_$rootScope_){
		$controller = _$controller_;
		$rootScope  = _$rootScope_;
	}))

	it('should display empty list message if there are no 2dos', function() {
		$rootScope.toDoList = [];
		$rootScope.empty = true;
		expect($rootScope.empty).toBe(true);

		$rootScope.$watch('toDoList', function(newValue, oldValue){
			$rootScope.empty = false;
		});

		$rootScope.$digest(); // fake a change in $scope.toDoList 

		expect($rootScope.empty).toBe(false);
	});
});