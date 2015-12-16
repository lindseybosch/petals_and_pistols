(function() {
  "use strict";

  angular
    .module("petalsAndPistols", ['ui.router'])

    .config(function($httpProvider){

      $httpProvider.interceptors.push("tokenSigningService");
     });

})();


