'use strict';

angular.module('conquestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router'
])
  .config(['$routeProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/');
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
   /* $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })*/
  }])
.constant('FBURL', 'con-quest.firebaseIO.com');
