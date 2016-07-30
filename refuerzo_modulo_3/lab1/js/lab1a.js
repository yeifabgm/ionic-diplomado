angular.module('lab1a', [])
  .controller('lab1aController', function($scope, $filter){
    $scope.name     = $filter('uppercase')('Yesion Gutierrez');
    $scope.id     = '1234567';
    $scope.profession = 'Ing. de Sistemas';
    $scope.salary   =  $filter('currency')('4000000');
    $scope.phone    = '7227874';
    $scope.address    = 'Calle falsa 123';
  }

);