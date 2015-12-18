(function() {
  "use strict";

  angular
    .module("petalsAndPistols")
    .factory("toteService", toteService);

  toteService.$inject = ["$http"];

  function toteService($http) {
    var tote = [];
    var service = {
      tote: tote,
      getTote: function(){
        $http.get("/api/tote").then(function(res){
          tote = res.data;

console.log('updated tote: ', res.data)


        });
      }
    };

    service.getTote();
    console.log("service");
    console.log("TEST");
    return service;
  }

})();
