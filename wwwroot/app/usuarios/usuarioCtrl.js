app.controller('UsuarioCtrl', ['$scope', '$routeParams', 'usuarioSvc', function UsuarioCtrl($scope, $routeParams, usuarioSvc) {
    
    usuarioSvc.get().success(function (data) {
        $scope.usuarios = data;
    });
}])