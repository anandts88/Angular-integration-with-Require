define(['controllers/accounts'], function() {
	return {
    url: '/accounts',
    parent: 'authenticated',
    controller: 'Accounts',
    templateUrl: 'templates/accounts.html',
    resolve: {
    	accounts: function($q, $timeout) {
				var deferred = $q.defer();
				$timeout(function() {
					deferred.resolve([
					{
						accountNumber: 1,
						balance: 100,
						nickName: "A1"
					},
					{
						accountNumber: 2,
						balance: 200,
						nickName: "A2"
					},
					{
						accountNumber: 3,
						balance: 300,
						nickName: "A3"
					}										
					]);
				}, 1000);
				return deferred.promise;
    	}
    }
	};
});