define([
		'jefferson'
	], function() {
  Jefferson.controller('Accounts', function($scope, $state, accounts){
  	$scope.accounts = accounts;
  });
});