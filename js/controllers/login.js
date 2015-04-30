define([
		'services/session', 
		'jefferson'
	], function() {
  Jefferson.controller('Login', function($rootScope, $scope, $state, SessionService){
  	$scope.userName = null;
  	$scope.password = null;

  	$scope.login = function(loginForm) {
  		if(loginForm.$valid) {
				SessionService.login({
	  			userName: $scope.userName,
	  			password: $scope.password,
	  		}, function() {
	  			var stateToDeepLink = $rootScope.stateToDeepLink;

	  			if(stateToDeepLink) {
	  				$rootScope.stateToDeepLink = null;
	  				// Retrive the stored state for deep linking from rootScope and go to appropirate state
	  				$state.go(stateToDeepLink.toState.name);
	  			} else {
	  				$state.go('accounts');
	  			}
	  		});
  		}
  	}
  });
});