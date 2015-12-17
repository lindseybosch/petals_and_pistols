(function() {
  "use strict";

  angular
    .module('petalsAndPistols', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider){

console.log('configging')

      $httpProvider.interceptors.push("tokenSigningService");

      $stateProvider

        .state('home', {
          url: '/home',
          templateUrl: 'templates/home.html'
        })

        .state('account', {
          url: '/account',
          templateUrl: 'templates/account.html'
        })

        .state('dresses', {
          url: '/dresses',
          templateUrl: 'templates/dresses.html'
        })

        .state('handbags', {
          url: '/handbags',
          templateUrl: 'templates/handbags.html'
        })

        .state('shoes', {
          url: '/shoes',
          templateUrl: 'templates/shoes.html'
        })

        .state('tote', {
          url: '/tote',
          templateUrl: 'templates/tote.html'
        });




      $urlRouterProvider.otherwise('/home');

    }]);

})();


