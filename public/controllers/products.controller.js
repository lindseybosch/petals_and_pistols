(function() {
  "use strict";

  angular
    .module("petalsAndPistols")
    .controller("ProductsController", ProductsController);

  ProductsController.$inject = ["$http", "$stateParams", "userDataService", "toteService", "$state"];

  function ProductsController($http, $stateParams, userDataService, toteService, $state) {
    var vm = this;

    // console.log($stateParams.type);

    $http.get("/api/products/" + $stateParams.type).then(function (res){
      vm.products = res.data;
      console.log('products', vm.products)
    });

    vm.product = userDataService.product;
    console.log('product saved: ', userDataService.product)

    vm.addToTote = function(product){
      $http.post("/api/tote", {
        productId: product._id
      }).then(function(res){
        toteService.getTote();
      });
    };

    vm.showProduct = function(product) {
      userDataService.product = product;
      $state.go('showProduct');
    };

   }

})();
