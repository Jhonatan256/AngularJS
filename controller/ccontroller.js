angular.module("MyFirstApp", [])
.controller("FirstController", function($scope){
  $scope.name = "Prueba";
})
.controller("SecondController", function($scope){
  referencia = this;
  referencia.name = "Prueba";
})
.controller("TercerController", function($scope){
  $scope.comentarios = [
    {
      comentario : 'Comentario',
      username : 'Prueba Comentario'
    },
    {
      comentario : 'Comentario',
      username : 'Prueba Comentario'
    }
  ];
});
