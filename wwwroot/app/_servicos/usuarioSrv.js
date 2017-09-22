app.factory("usuarioSvc", ['$http', '$q', function ($http, $q) { 
    
    return {
        get: get,
        getByLogin: getByLogin
    };

    function get() {
        return $http.get("https://api.github.com/users?since=135");
    }
    
    function getByLogin(login) {
        return $http.get("https://api.github.com/users/" + login);
    }
}]);
    