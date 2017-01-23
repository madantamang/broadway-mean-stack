/**
 * Created by madan.tamang on 1/22/2017.
 */
var app=angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/', {
        templateUrl: '/app/partials/home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/profile', {
        templateUrl: '/app/partials/profile.html',
        controller: 'userController'
    });
    $routeProvider.when('/login', {
        templateUrl: '/app/partials/login.html',
        controller: 'authController'
    });
    $routeProvider.when('/signup', {
        templateUrl: '/app/partials/signup.html',
        controller: 'authController'
    });
    $routeProvider.when('/books', {
        templateUrl: '/app/partials/books.html',
        controller: 'bookController'
    });
    $routeProvider.when('/books/details/:id', {
        templateUrl: '/app/partials/bookDetails.html',
        controller: 'bookDetailsController'
    });
    $routeProvider.when('/books/create', {
        templateUrl: '/app/partials/bookCreate.html',
        controller: 'bookCreateController'
    });

    $routeProvider.otherwise({redirectTo: '/'});


}]);