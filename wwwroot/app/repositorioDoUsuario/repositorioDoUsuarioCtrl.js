app.controller('RepositorioDoUsuarioCtrl', ['$scope', '$routeParams', 'repositorioSvc', function RepositorioDoUsuarioCtrl($scope, $routeParams, repositorioSvc) {
    
    $scope.login = $routeParams.login;
    
    repositorioSvc.get($routeParams.login).success(function (data) {
        $scope.repositorios = data;
    });
}])