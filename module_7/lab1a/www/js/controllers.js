angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('page1Ctrl', function($scope) {

})
   
.controller('page2Ctrl', function($scope) {

})
   
.controller('page3Ctrl', function($scope) {

})

.controller('page4Ctrl', function($scope) {
  $scope.records = [
    "Alfreds Futterkiste",
    "Berglunds snabbköp",
    "Centro comercial Moctezuma",
    "Ernst Handel",
  ]
})

.controller('page5Ctrl', function($scope, $state) {
  $scope.loginButton = function(_user, _password){
    console.log($scope.user);
    localStorage.setItem('user', _user);
    localStorage.setItem('password', _password);

    $state.go('page6');
  };
})

.controller('page6Ctrl', function($scope) {
  $scope.user = localStorage.getItem('user');
  $scope.password = localStorage.getItem('password');
})
 