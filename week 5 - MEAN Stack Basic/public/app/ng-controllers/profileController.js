/**
 * Created by madan.tamang on 1/22/2017.
 */
app.controller('profileController',['$scope','$http','AuthMain',function ($scope,$http,AuthMain) {
    AuthMain.me().then(function (res) {
        console.log(res);
        $scope.name=res.profiledata.firstName + res.profiledata.lastName;
        $scope.address=res.profiledata.address.city + res.profiledata.address.State + res.profiledata.address.country;
    });
}]);