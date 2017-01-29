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
        controller: 'profileController'
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
                    config.headers.Authorization =  $localStorage.token;
                }
                return config;
            },
            'responseError': function(response) {
               // var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
                if(response.status === 401 || response.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
    }]);
}]);
// .run(['$rootScope', '$location', '$cookies', '$http',function ($rootScope, $location, $cookies, $http) {
//     // keep user logged in after page refresh
//     $rootScope.globals = $cookies.getObject('globals') || {};
//     if ($rootScope.globals.currentUser) {
//         $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
//     }
//
//     $rootScope.$on('$locationChangeStart', function (event, next, current) {
//         // redirect to login page if not logged in and trying to access a restricted page
//         var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
//         var loggedIn = $rootScope.globals.currentUser;
//         if (restrictedPage && !loggedIn) {
//             $location.path('/login');
//         }
//     });
// }]);