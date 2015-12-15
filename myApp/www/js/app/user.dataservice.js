(function() {
  "use strict";

  angular
    .module("petalsAndPistols")
    .factory("userDataService", userDataService);

  userDataService.$inject = ["$log", "$http"];

  function userDataService($log, $http) {
    var user = {
      name:    "",
      email:   "",
      password: "",
      create:   create
    };

    return user;

    function create() {
      $log.debug("Attempting to create user:", user);

      return $http({
        method: "POST",
        url:    "http://localhost:3000/api/users",
        headers: {"Content-Type": "application/json"},
        data: angular.toJson({
          name:     user.name,
          email:    user.email,
          password: user.password
        })
      });
    }
  }

})();
