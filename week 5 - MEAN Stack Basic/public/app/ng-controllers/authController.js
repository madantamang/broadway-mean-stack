/**
 * Created by madan.tamang on 1/22/2017.
 */
app.controller('authController',['$rootScope', '$scope', '$location', '$localStorage','toaster', 'AuthMain', function($rootScope, $scope, $location, $localStorage,toaster, AuthMain) {
    $scope.userlogin = function() {
        var formData = {
            username: $scope.username,
            password: $scope.password
        };

        AuthMain.signin(formData).then(function(res) {
            console.log(res);
            toaster.pop('info', "title", "text");
            $localStorage.token = res.token;
            $location.path('/profile');
        }, function() {
            $rootScope.error = 'Failed to signin';
        })
    };
    $scope.registerSubmit = function() {
        console.log('form submit called')
        var formData = {
            email: $scope.email,
            password: $scope.password
        };

        AuthMain.save(formData).then(function(res) {
            $localStorage.token = res.data.token;
            $location.path('/profile');
        }, function() {
            $rootScope.error = 'Failed to signup';
        })
    };
}]);