/**
 * Created by madan.tamang on 1/21/2017.
 */
app.controller('userController',['$scope','$http',function ($scope,$http) {
    var url="https://jsonplaceholder.typicode.com/users";
    $http.get(url).then(function (response) {
        console.log(response.data);
        $scope.userList=response.data;
    });
}]);