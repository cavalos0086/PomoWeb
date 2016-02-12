describe('Landing Controller', function() {
	var $controller, $timeout, $scope, $location, controller;


	beforeEach(module('pomoWebApp'));
	beforeEach(inject(function(_$location_, _$timeout_, _$controller_){
		$scope = {};

		$controller = _$controller_;
		$timeout = _$timeout_;
		$location = _$location_;

		$controller('landingController',{$location:$location, $timeout:$timeout, $scope:$scope});
	}));

	it('should redirect to the home page after 3 seconds', function() {
		$scope.goHome();
		$timeout.flush(3500);
		dump(angular.mock.dump($location));
		expect($location.$$url).toBe('/home');
	});

	
});