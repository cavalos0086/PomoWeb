describe('Landing Controller', function() {
	var $controller, $timeout, $scope, $location, $httpBackend, $templateCache;


	beforeEach(module('pomoWebApp'));
	beforeEach(inject(function(_$location_, _$timeout_, _$controller_, _$httpBackend_, _$templateCache_){
		$scope = {};

		$httpBackend = _$httpBackend_;
		$controller = _$controller_;
		$timeout = _$timeout_;
		$location = _$location_;
		$templateCache = _$templateCache_;

		// we need to add the template entry into the templateCache if we every specify a templateUrl
		$templateCache.put('app/components/home/home.html','');
		$templateCache.put('app/components/landing/landing.html','');

		$controller('landingController',{$location:$location, $timeout:$timeout, $scope:$scope});
	}));

	afterEach(function(){
		$httpBackend.verifyNoOutstandingRequest();
		$httpBackend.verifyNoOutstandingExpectation();
	})

	it('should stay in / path before 3 seconds', function() {
		$scope.goHome();
		$timeout.flush(2500);
		expect($location.$$url).toBe('');
	});

	it('should redirect to the home page after 3 seconds', function() {
		$scope.goHome();
		$timeout.flush(5000);
		expect($location.$$url).toBe('/home');
	});

	
});