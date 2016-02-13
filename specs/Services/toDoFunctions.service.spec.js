describe('toDo Services and Function', function() {
	var $httpBackend, toDoFuntions = {}, $q, $http, toDoItem, toDoList;
	var newItem1, newItem2, newItem3;
	var todoList = [];
	

	beforeEach(module('pomoWebApp'));

	beforeEach(inject(function(_toDoFuntions_, _toDoItem_, _$httpBackend_, _$q_, _$http_){
		$httpBackend = _$httpBackend_;
		toDoFuntions = _toDoFuntions_;
		$q = _$q_;
		$http = _$http_;
		toDoItem = _toDoItem_;

		newItem1 = toDoItem('sample 1');
		newItem2 = toDoItem('sample 2','this contains a description');
		newItem3 = toDoItem('sample 3', 'this contains number of pomodoros and desc', 4);

		toDoList = [newItem1, newItem2, newItem3];

		var response;

	}));

	afterEach(function(){
		$httpBackend.verifyNoOutstandingRequest();
		$httpBackend.verifyNoOutstandingExpectation();
	});


	describe('Should check for functions existance', function() {

		it('Service should have add functionality', function() {
			expect(toDoFuntions.add).toBeDefined();
		});

		it('Service should have edit functionality', function() {
			expect(toDoFuntions.edit).toBeDefined();
		});

		it('Service should have delete functionality', function() {
			expect(toDoFuntions.delete).toBeDefined();
		});

		it('Service should have retrieve functionality', function() {
			expect(toDoFuntions.retrieve).toBeDefined();
		});

	});
	

	describe('Checks for function functionality.', function() {

		describe('Retrieve function test', function() {

			it('Should retrieve the number of toDo Items in database', function(){

				$httpBackend.when('GET', '/db/retrieveList')
				.respond(200, todoList);

				toDoFuntions.retrieve()
				.then(function(data){
					response = data;
				})

				$httpBackend.flush(1);
				expect(response.data).toEqual(todoList);

			});

			it('Retrive function should handle errors acordingly', function() {

				$httpBackend.when('GET', '/db/retrieveList')
				.respond(500);

				toDoFuntions.retrieve()
				.then(function(data){
					response = data;
				})
				.catch(function(){
					response = 'Error!';
				})

				$httpBackend.flush(1);
				expect(response).toEqual('Error!');

			});
		});

		describe('Add function test', function() {
			
			it('Add function should sent POST request to database', function() {

				$httpBackend.expectPOST('/db/addTodo', newItem1)
				.respond(201);


				toDoFuntions.add(newItem1);

				
				expect($httpBackend.flush).not.toThrow();

			});

			it('Add function should handle errors', function() {

				$httpBackend.expectPOST('/db/addTodo', newItem1)
				.respond(500);


				toDoFuntions.add(newItem1)
				.then(function(){
					response = 'OK';
				}, function(){
					response = 'Error!';
				});

				$httpBackend.flush(1);
				expect(response).toEqual('Error!');
			});

		});

		describe('Delete function test', function() {
			
			it('Delete function should sent a POST request to database', function() {
				var toDoId = 10;

				$httpBackend.expectPOST('/db/deleteTodo', toDoId)
				.respond(200);

				toDoFuntions.delete(toDoId).
					then(function(){
						response = 'OK';
					}, function(){
						response = 'Error!';
					})

				expect($httpBackend.flush).not.toThrow();
				

			});

			it('Delete function should handle errros', function() {

				var toDoId = 10;

				$httpBackend.expectPOST('/db/deleteTodo', toDoId)
				.respond(500);

				toDoFuntions.delete(toDoId)
					.then(function(){
						response = 'OK';
					}, function(){
						response = 'Error!';
					});

				$httpBackend.flush(1);
				expect(response).toBe('Error!');

			});

		});


	});







});











