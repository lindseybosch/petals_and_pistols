(function() {
  "use strict";

  angular
    .module("petalsAndPistols")
    .factory("authService", authService);

  authService.$inject = ["$log", "$http", "tokenService", "userDataService"];

  function authService($log, $http, tokenService, userDataService) {
    var auth = {
      email:      "",
      password:   "",
      logIn:      logIn,
      logOut:     logOut,
      clear:      clear,
      isLoggedIn: (tokenService.get() !== null)
    };

    return auth;

    function logIn() {
      $log.debug("Logging in with credentials:", {email: auth.email, password: auth.password});

      return $http({
        url:     "http://localhost:3000/api/token",
        method:  "POST",
        headers: {"Content-Type": "application/json"},
        data: angular.toJson({
          email:    auth.email,
          password: auth.password,
        })
      }).then(function(data, status, headers, config) {
        tokenService.set(data.data.token)
        auth.isLoggedIn = true;
        userDataService.email = auth.email;
        userDataService.name = JSON.parse(atob(data.data.token.split('.')[1])).name;
        return data;
      });
    }

    function logOut() {
      tokenService.clear();
      auth.isLoggedIn = false;
    }

    function clear() {
      auth.email    = "";
      auth.password = "";
    }
  }

})();
