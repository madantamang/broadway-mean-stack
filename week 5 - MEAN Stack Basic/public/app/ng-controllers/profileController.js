/**
 * Created by madan.tamang on 1/22/2017.
 */
app.controller('profileController',['$scope','$http','AuthMain',function ($scope,$http,AuthMain) {
    AuthMain.me(function (res) {
        $scope.name=res.firstName + res.lastName;
        $scope.address=res.address.city + res.address.State + res.address.country;
    });
}]);