(function() {
  "use strict";

  angular
    .module("petalsAndPistols")
    .controller("DressesController", DressesController);

  DressesController.$inject = ["$http", "userDataService", "toteService"];

  function DressesController($http, userDataService, toteService) {
    var vm = this;

    $http.get("/api/products/dress").then(function (res){
      vm.dresses = res.data;
    });

    vm.addToTote = function(dress){
      $http.post("/api/tote", {
        email: userDataService.email,
        productId: dress._id
      }).then(function(res){
        toteService.getTote();
      });
    };

   }

})();
