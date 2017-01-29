/**
 * Created by madan.tamang on 1/28/2017.
 */
app.factory('AuthMain', ['$http', '$localStorage','$q', function($http, $localStorage,$q){
    var baseUrl = "http://localhost:3000/api/users";
    function changeUser(user) {
        angular.extend(currentUser, user);
    }

    function urlBase64Decode(str) {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return window.atob(output);
    }

    function getUserFromToken() {
        var token = $localStorage.token;
        var user = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            user = JSON.parse(urlBase64Decode(encoded));
        }
        return user;
    }

    var currentUser = getUserFromToken();
    function handleSuccess(res) {
        return res.data;
    }

    function handleError(res) {
        return $q.reject(res.data);
    }

    return {
        save: function(data) {
           return $http.post(baseUrl + '/signin', data).then(handleSuccess,handleError)
        },
        signin: function(data) {
           return $http.post(baseUrl + '/login', data).then(handleSuccess,handleError)
        },
        me: function() {
            return $http.get(baseUrl + '/profile/').then(handleSuccess,handleError)
        },
        logout: function(success) {
            changeUser({});
            delete $localStorage.token;
            success();
        }
    };

}
]);