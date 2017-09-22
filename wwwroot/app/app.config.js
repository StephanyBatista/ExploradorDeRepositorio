app.config([
    '$routeProvider', function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "/app/usuarios/listagem.html"
        })
        .when("/user/:login", {
            templateUrl : "/app/detalheDoUsuario/detalhe.html"
        })
        .when("/repo/:login", {
            templateUrl : "/app/repositorioDoUsuario/listagem.html"
        })
        .otherwise({
            redirectTo: '/'
        });
    }
]);         
