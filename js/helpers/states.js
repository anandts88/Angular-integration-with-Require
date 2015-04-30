define([
    'states/authenticated',
    'states/login',
    'states/accounts'
  ], function(
  	Authenticated, 
  	Login, 
  	Accounts) {

  	return {
  		Authenticated: Authenticated,
  		Login: Login,
			Accounts: Accounts  		
  	};

});