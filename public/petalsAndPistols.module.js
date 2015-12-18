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

        .state('products', {
          url: '/products/:type',
          templateUrl: 'templates/products.html',
          controller: 'ProductsController',
          controllerAs: 'vm'
        })

        .state('showProduct', {
          url: '/showProduct',
          templateUrl: 'templates/showProduct.html',
          controller: 'ProductsController',
          controllerAs: 'vm'
        })

        .state('tote', {
          url: '/tote',
          templateUrl: 'templates/tote.html'
        })

        .state('admin', {
          url: '/admin/petalsAndPistols88',
          templateUrl: 'templates/admin.html',
          controller: 'AdminController',
          controllerAs: 'vm'
        })


      $urlRouterProvider.otherwise('/home');

    }]);

})();


