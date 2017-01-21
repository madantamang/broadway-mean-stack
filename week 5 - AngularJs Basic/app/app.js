/**
 * Created by madan.tamang on 1/21/2017.
 */
var app=angular.module('myApp', ['ngRoute']);



app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'app/partial/home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/contact', {
        templateUrl: 'app/partial/contact.html',
        controller: 'contactController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'app/partial/login.html',
        controller: 'loginController'
    });
    $routeProvider.when('/movie', {
        templateUrl: 'app/partial/movie.html',
        controller: 'movieController'
    });
    $routeProvider.when('/register', {
        templateUrl: 'app/partial/register.html',
        controller: 'registerController'
    });
   
    $routeProvider.when('/about', {
        templateUrl: 'app/partial/about.html',
        controller: 'aboutController'
    });
    $routeProvider.when('/users', {
        templateUrl: 'app/partial/users.html',
        controller: 'userController'
    });
    $routeProvider.otherwise({redirectTo: '/'});


}]);

