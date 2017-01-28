/**
 * Created by madan.tamang on 1/28/2017.
 */
app.controller('mainController',['$rootScope', '$scope', '$location', 'AuthMain', function($rootScope, $scope, $location, AuthMain) {
    $scope.logout = function() {
        AuthMain.logout(function() {
            $location.path('/');
        }, function() {
            $rootScope.error = 'Failed to logout';
        });
    };
}]);