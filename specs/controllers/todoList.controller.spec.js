describe('toDoList Controller', function() {
	var $controller, $rootScope, $scope, toDoFunctions, toDoItem, $httpBackend;
	var toDoList = [];

	beforeEach(module('pomoWebApp'));
	beforeEach(inject(function(_$controller_, _toDoFunctions_, _toDoItem_, _$httpBackend_ ){
		$scope = {};
		$controller = _$controller_;
		toDoFunctions = _toDoFunctions_;
		toDoItem = _toDoItem_;
		$httpBackend = _$httpBackend_;
		
		$controller('todoListController', {$scope:$scope, toDoFunctions:toDoFunctions, toDoItem:toDoItem});
	}));

	describe('toDoList Controller', function() {
		describe('Modal functionality', function() {
			it('should have an openModal function', function() {
				expect($scope.openModal).toBeDefined();
			});

			
		});
	});

});