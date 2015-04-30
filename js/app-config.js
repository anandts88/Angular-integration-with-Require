define([
    'domReady!',
    'helpers/states',
    'services/session',
    'jefferson'
  ], function(document, States) {

  Jefferson.run(function($rootScope, $state, SessionService) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, error){
      $rootScope.isRouteLoading = true;

      if(toState.name === "authenticated" || toState.parent === "authenticated") {
        if(!SessionService.isAuthenticated()) {
          event.preventDefault();

          if(fromState.name) {
            // Store the state for performing deep linking operation
            $rootScope.stateToDeepLink = {
              toState: toState,
              toParams: toParams
            };
          }
          
          $state.go('login');
        }
      }
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { 
      $rootScope.isRouteLoading = false;
    });  

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) { 
      $rootScope.isRouteLoading = false;
    });         
  });

  Jefferson.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('authenticated', States.Authenticated)
      .state('login', States.Login)
      .state('accounts', States.Accounts);

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

  });

  angular.bootstrap(document, ['jefferson']);
})