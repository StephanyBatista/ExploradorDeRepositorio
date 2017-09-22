app.controller('DetalheDoUsuarioCtrl', ['$scope', '$routeParams', 'usuarioSvc', function DetalheDoUsuarioCtrl($scope, $routeParams, usuarioSvc) {
    
    usuarioSvc.getByLogin($routeParams.login).success(function (data) {
        $scope.usuario = data;
    });
}])