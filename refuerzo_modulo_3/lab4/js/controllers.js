angular.module('lab1d.controllers', [])

  .controller('lab1aController', function($scope, $filter){
    $scope.name     = $filter('uppercase')('Yesion Gutierrez');
    $scope.id     = '1234567';
    $scope.profession = 'Ing. de Sistemas';
    $scope.salary   =  $filter('currency')('4000000');
    $scope.phone    = '7227874';
    $scope.address    = 'Calle falsa 123';
  })

  .controller('lab1bController', function($scope){
    $scope.smartphone_message = 'Otro Mensaje';
  })

  .controller('lab1cController', function($scope){
    $scope.smartphone_message = 'Otro Mensaje';
  });