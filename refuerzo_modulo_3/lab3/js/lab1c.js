angular.module('lab1c', [])
  .controller('lab1cController', function($scope){
    $scope.link_image = "http://dummyimage.com/200x200/000/34ffddaa";
    $scope.changeLinkImage = function(image){
      $scope.link_image = "http://dummyimage.com/300x300/000/34ffddaa";
    };
 });