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

	it('should set empty = false if toDoList size is greater than zero', function() {
		toDoList = ['item1', 'item2'];

		$httpBackend.expectGET('/db/retrieveList')
			.respond(200, toDoList);

		$httpBackend.flush();
		expect($scope.empty).toEqual(false);

	});

	it('should set empty = true if toDoList size is zero', function() {
		toDoList = [];

		$httpBackend.expectGET('/db/retrieveList')
		.respond(200, toDoList);

		$httpBackend.flush();
		expect($scope.empty).toEqual(true);

	});

});