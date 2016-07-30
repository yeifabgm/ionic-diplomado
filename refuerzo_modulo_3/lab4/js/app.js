angular.module('lab1d', ['ngRoute', 'lab1d.controllers'])
  .config(['$routeProvider', function($routeProvider){
    /*
     * `when()` cuantas veces sea necesario
     * `otherwise()` una sola vez "OJO"
    */
    $routeProvider

    .when('/lab1a', {
      templateUrl: "views/lab1a.html",
      controller: 'lab1aController'
    })

    .when('/lab1b', {
      templateUrl: "views/lab1b.html",
      controller: 'lab1bController'
    })

    .when('/lab1c', {
      templateUrl: "views/lab1c.html",
      controller: 'lab1cController'
    })
    
    .otherwise({
        redirectTo: '/',
        templateUrl: 'views/otherwise.html'
    });
 }]);