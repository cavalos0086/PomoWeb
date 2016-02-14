describe('addTodo Controller behavior', function() {
	var $scope, $httpBackend, toDoItem, toDoFunctions, $controller, $rootScope;
	var item;
	beforeEach(module('pomoWebApp'));

	beforeEach(inject(function(_$httpBackend_, _toDoItem_, _toDoFunctions_, _$controller_){
		$scope = {};
		$httpBackend = _$httpBackend_;
		toDoItem = _toDoItem_;
		toDoFunctions = _toDoFunctions_;
		$controller = _$controller_;

		$controller('addTodoController', {$scope:$scope, toDoItem:toDoItem, toDoFunctions:toDoFunctions});
		spyOn(toDoFunctions, 'add').and.callThrough();
	}));

	afterEach(function(){
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	})


	describe('AddTodo construction and functionality ', function() {

		describe('item to be sent format', function() {

			it('should display an missing title message to user', function() {
				item = new toDoItem();
				$scope.addItem(item);

				expect($scope.message).toEqual('toDO must have a title');
			});

			it('but it can send an item with only title', function() {

				item = new toDoItem('sample1');
				$httpBackend.expectPOST('/db/addTodo', item)
					.respond(200);
				
				$scope.addItem(item);

				$httpBackend.flush(1);
				expect($scope.message).toBe('Success');
				expect(toDoFunctions.add).toHaveBeenCalled();

			});

		});

		it('it can detect errors and send a message to the user acoordingly', function() {

				item = new toDoItem('sample1');
				$httpBackend.expectPOST('/db/addTodo', item)
					.respond(500);
				
				$scope.addItem(item);

				$httpBackend.flush(1);
				expect($scope.message).toBe('Error. Please try again');
				expect(toDoFunctions.add).toHaveBeenCalled();

			});



	});


});





