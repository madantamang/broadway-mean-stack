/**
 * Created by madan.tamang on 1/21/2017.
 */
app.controller('homeController',['$scope','$http',function ($scope,$http) {
	$http.get("http://localhost:3000/api/users").then(function(response){
		console.log(response);
	});
    $scope.message="HomePage";
}]);