/**
 * Created by madan.tamang on 2/5/2017.
 */
app.controller('bookController',['$scope','$http',function ($scope,$http) {
    var url="http://localhost:3000/api/books/";
    $http.get(url).then(function (response) {
        console.log(response);
        $scope.bookList=response.data;
    });
}]);
app.controller('bookDetailsController',['$scope','$http','$routeParams',function ($scope,$http,$routeParams) {
    var url="http://localhost:3000/api/books/details/" + $routeParams.bookid;
    $http.get(url).then(function (response) {
        console.log(response);
        $scope.book=response.data;
    });
}]);
app.controller('bookCreateController',['$scope','$http',function ($scope,$http) {
   $scope.saveBooks=function(){
       var url="http://localhost:3000/api/books/create/";
       $http.post(url,$scope.book).then(function (response) {
           console.log(response);
           $scope.book=response.data;
       });
   };


}]);