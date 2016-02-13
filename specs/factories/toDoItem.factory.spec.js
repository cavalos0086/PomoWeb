describe('toDoItem factory', function() {

	var toDoItem, newItem;
	beforeEach(module('pomoWebApp'));
	beforeEach(inject(function(_toDoItem_){
		toDoItem = _toDoItem_;
		newItem = new toDoItem('sample1','this is a sample toDoItem', 0);
	}));

	describe('Exitance of keys on toDoItem object', function() {

		it('toDoItem object should have title key', function() {
			expect(newItem.title).toBeDefined();
		});

		it('toDoItem object should have description key', function() {
			expect(newItem.description).toBeDefined();
		});

		it('toDoItem object should have numPomodoros key', function() {
			expect(newItem.numPomodoros).toBeDefined();
		});

		it('toDoItem object should have numPomodoros key set to 1', function() {
			expect(newItem.numPomodoros).toBe(1);
		});
	});
	
});