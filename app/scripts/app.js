'use strict';

var app = angular.module('conquestApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'ui.router'
    
])
  app.config(['$routeProvider', '$stateProvider', '$urlRouterProvider', function ($routeProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/posts.html',
            controller: 'PostsCtrl'
        });
   /* $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })*/
  }])
/*.run(['angularFireAuth',  function(angularFireAuth) {
  //    angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth', path: '/signin'});
      $rootScope.FBURL = FBURL;
    }])*/
.constant('FBURL', 'con-quest.firebaseIO.com')
.run(['FBURL', '$rootScope', function(FBURL, $rootScope){
    var conRef = new Firebase(FBURL);
    var auth = new FirebaseSimpleLogin(conRef, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        // user authenticated with Firebase
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
      } else {
        // user is logged out
      }
    });
    console.log(auth);
    $rootScope.FBURL = FBURL;
    $rootScope.auth = auth;
    auth.login('facebook');
}]);
