define([
    'angular',
    'angular-ui-router'
  ], function() {
  var Jefferson = angular.module('jefferson', ['ui.router']);

  window.Jefferson = Jefferson;

  return Jefferson;
});