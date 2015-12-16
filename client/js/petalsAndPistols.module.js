(function() {
  "use strict";

  angular
    .module("petalsAndPistols", ['ui.router'])
    .config(router);

  function router($stateProvider){
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login.html'
    })

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
    })
  }

})();
