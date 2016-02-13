describe('toDo Services and Function', function() {
	var $httpBackend, toDoFuntions = {}, $q, $http, toDoItem, toDoList;
	var newItem1, newItem2, newItem3;
	var todoList = [];
	var todoOne = {
		title:'sample 1',
		description:'this is a sample todo',
		numPomo:3
	};

	todoList.push(todoOne);

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

		it('Add function should sent POST request to database', function() {

			$httpBackend.expectPOST('/db/addTodo', newItem1)
				.respond(201);

			$httpBackend.whenGET('/db/retrieveList')
				.respond(200, toDoList);


			toDoFuntions.add(newItem1)
				.then(function(){
					response = 'OK';
				}, function(){
					response = 'Error!'
				});

			$httpBackend.flush(1);
			$httpBackend.flush(1);
			expect(response).toEqual('OK');

		});

		it('Add function should increment the number of 2dos by 1', function(){
			
		});

	});


});











