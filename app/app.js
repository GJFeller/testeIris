'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'teamList',
  'teamDetail'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
      when('/view1', {
        template: '<serie-a-list></serie-a-list>'
  }).when('/view2', {
        template: '<serie-b-list></serie-b-list>'
  }).when('/:teamId', {
        template: '<team-detail></team-detail>'
  }).when('/:teamId', {
      template: '<team-detail></team-detail>'
  });
}]);
