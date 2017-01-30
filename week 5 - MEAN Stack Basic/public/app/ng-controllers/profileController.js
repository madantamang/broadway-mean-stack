/**
 * Created by madan.tamang on 1/22/2017.
 */
app.controller('profileController',['$scope','$rootScope','$http','AuthMain',function ($scope,$rootScope,$http,AuthMain) {
    AuthMain.me().then(function (res) {
        console.log(res);
        $scope.name=res.profiledata.firstName + res.profiledata.lastName;
        $rootScope.loginName=res.profiledata.firstName + " " + res.profiledata.lastName;

        $scope.address=res.profiledata.address.city + res.profiledata.address.State + res.profiledata.address.country;
    });
}]);