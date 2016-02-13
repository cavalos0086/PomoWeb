describe('toDoItem factory', function() {

	var toDoItem;
	beforeEach(module('pomoWebApp'));
	beforeEach(inject(function(_toDoItem_){
		toDoItem = _toDoItem_;
	}));


	describe('Exitance of keys on toDoItem object', function() {
		it('toDoItem object should have title key', function() {
			expect(toDoItem.title).toBeDefined();
		});

		it('toDoItem object should have description key', function() {
			expect(toDoItem.description).toBeDefined();
		});

		it('toDoItem object should have numPomodoros key', function() {
			expect(toDoItem.numPomodoros).toBeDefined();
		});

		it('toDoItem object should have numPomodoros key set to 0', function() {
			expect(toDoItem.numPomodoros).toBe(0);
		});
	});
	
});