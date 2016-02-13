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

		toDoFactory.add = function(){};
		toDoFactory.edit = function(){};
		toDoFactory.delete = function(){};


		toDoFactory.retrieve = function(){
			var deferred = $q.defer();

			$http.get('/db/retrieveList')
				.then(function(data){
					deferred.resolve(data);
				}, function(data){
					deferred.reject();
				});

			return deferred.promise;
		};
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
		var response;

		$httpBackend.when('GET', '/db/retrieveList')
			.respond(200, todoList);

		toDoFactory.retrieve()
			.then(function(data){
				response = data;
			})

		$httpBackend.flush();
		expect(response.data).toEqual(todoList);

	});

	it('retrive function should handle errors acordingly', function() {
		var response;

		$httpBackend.when('GET', '/db/retrieveList')
			.respond(500);

		toDoFactory.retrieve()
			.then(function(data){
				response = data;
			})
			.catch(function(){
				response = 'Error!';
			})

		$httpBackend.flush();
		expect(response).toEqual('Error!');

	});


});





