/**
 * Created by madan.tamang on 1/22/2017.
 */
var app=angular.module('myApp', ['ngRoute','ngStorage']);
app.config(['$routeProvider','$locationProvider','$httpProvider', function($routeProvider,$locationProvider,$httpProvider){
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

    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if ($localStorage.token) {
                    config.headers.Authorization = 'JWT' + $localStorage.token;
                }
                return config;
            },
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
    }]);
}]);