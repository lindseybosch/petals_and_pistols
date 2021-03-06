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
      create:   create,
      currentUserData: currentUserData,
      clear: clear,
      product: {}
    };

    return user;

    function create() {
      $log.debug("Attempting to create user:", user);

      return $http({
        method: "POST",
        url:    "/api/users",
        headers: {"Content-Type": "application/json"},
        data: angular.toJson({
          name:     user.name,
          email:    user.email,
          password: user.password
        })
      });
    }

    function clear() {
      $log.debug("Clearing user.");

      user.email    = "";
      user.name     = "";
      user.password = "";
    }

    function currentUserData() {
      $log.debug("Retrieving current user data.");

      return $http({
        url:     "/api/me",
        method:  "GET"
      });
    }
  }

})();
