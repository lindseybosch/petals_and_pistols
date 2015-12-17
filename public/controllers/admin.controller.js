(function() {
  "use strict";

  angular
    .module("petalsAndPistols")
    .controller("AdminController", AdminController);

  AdminController.$inject = ["$http"];

  function AdminController($http) {
    var vm = this;

    vm.createProduct = function(){
      console.log("created Product test")
      $http.post("/api/createProduct", {
        type: vm.product.type,
        occassion: vm.product.occassion,
        size: vm.product.size,
        color: vm.product.color,
        quantity: vm.product.quantity,
        imageURL: vm.product.imageURL
      }).then(function (res){
          console.log("Created New Product", res.data);
      });

    };

   }

})();

