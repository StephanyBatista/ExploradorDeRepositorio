app.factory("repositorioSvc", ['$http', '$q', function ($http, $q) { 
    
    return {
        get: get
    };

    function get(login) {
        return $http.get("https://api.github.com/users/" + login + "/repos");
    }
}]);
    