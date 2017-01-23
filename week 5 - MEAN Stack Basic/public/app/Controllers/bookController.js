/**
 * Created by madan.tamang on 1/22/2017.
 */
app.controller('bookController',['$scope','$http',function ($scope,$http) {

    var url="http://localhost:3000/api/books/";
    $http.get(url).then(function (response) {
        console.log(response);
        $scope.bookList=response.data.books;
    });
}]);
app.controller('bookCreateController',['$scope','$http',function ($scope,$http) {

}]);
app.controller('bookDetailsController',['$scope','$routeParams','$http',
    function ($scope,$routeParams,$http) {
    var url="http://localhost:3000/api/books/details/" + $routeParams.id;
    $http.get(url).then(function (response) {
        console.log(response);
        $scope.book=response.data.book;
    });
}]);