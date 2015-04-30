define([
		'angular',
		'jefferson'
	], function() {

		Jefferson.service('SessionService', function($http) {
			this.authenticated = false;

			this.isAuthenticated = function() {
				return this.authenticated;
			};

			this.setAuthenticated = function() {
				this.authenticated = true;
			};

			this.login = function(params, doOnSucces, doOnError) {
				var self = this;
        $http.post('/login', params || {}).success(function(response) {
        	self.setAuthenticated(true);
        	if(doOnSucces) {
        		doOnSucces();
        	}
        }).error(function() {
        	self.setAuthenticated(true);
        	if(doOnSucces) {
        		doOnSucces();
        	}
        });
			};

		});
});