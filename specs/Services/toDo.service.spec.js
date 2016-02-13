describe('toDo Services and Function', function() {
	var $httpBackend, toDoFactory = {}, $q, $http;

	var todoList = [];
	var todoOne = {
		title:'sample 1',
		description:'this is a sample todo',
		numPomo:3
	};

	todoList.push(todoOne);

	beforeEach(module('pomoWebApp'));

	beforeEach(inject(function(_toDoFactory_, _$httpBackend_, _$q_, _$http_){
		$httpBackend = _$httpBackend_;
		toDoFactory = _toDoFactory_;
		$q = _$q_;
		$http = _$http_;

		var response;

	}));

	it('Service should have add functionality', function() {
		expect(toDoFactory.add).toBeDefined();
	});

	it('Service should have edit functionality', function() {
		expect(toDoFactory.edit).toBeDefined();
	});

	it('Service should have delete functionality', function() {
		expect(toDoFactory.delete).toBeDefined();
	});

	it('Service should have retrieve functionality', function() {
		expect(toDoFactory.retrieve).toBeDefined();
	});

	it('should retrieve the number of toDo Items in database', function(){

		$httpBackend.when('GET', '/db/retrieveList')
			.respond(200, todoList);

		toDoFactory.retrieve()
			.then(function(data){
				response = data;
			})

		$httpBackend.flush(1);
		expect(response.data).toEqual(todoList);

	});

	it('retrive function should handle errors acordingly', function() {

		$httpBackend.when('GET', '/db/retrieveList')
			.respond(500);

		toDoFactory.retrieve()
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





