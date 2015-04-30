require.config({
  baseUrl: 'js/',
  waitSeconds: 60,
  urlArgs: 'version=v0.1',
  paths: {
    'domReady': 'lib/domReady',
    'angular': 'lib/angular',
    "angular-ui-router": "lib/angular-ui-router",
    'templates': '../templates'
  },

  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-ui-router':{
      deps: ['angular']
    }
  }
});

define([
    'angular', 
    'jefferson'
  ], function() {

  require(['app-config'], function() {
    // Do opertations that is needed after loading of your app configuration
  });
});
