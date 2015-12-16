(function(){
  "use strict";

  angular
    .module("petalsAndPistols")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes ($stateProvider, $urlRouterProvider ){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './templates/home.html'
    })
      .state('login', {
        url: '/login',
        templateUrl: './templates/login.html'
    });

    $urlRouterProvider.otherwise('/');
  }
})
