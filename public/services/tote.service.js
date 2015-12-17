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
        });
      }
    };

    service.getTote();

    return service;
  }

})();
