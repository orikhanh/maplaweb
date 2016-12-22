(function (angular){
	'use strict';

	angular
		.module('mapla-login')
		.factory('AuthenticationService', MyAuthenticationService);

	MyAuthenticationService.$inject = ['$http', '$cookies', '$rootScope'];
	function MyAuthenticationService($http, $cookies, $rootScope){

		var service = {};

		service.login = login;
		service.register = register;
		service.setCredential = setCredential;
		service.clearCredential = clearCredential;

		return service;

		function login(username, password, callback) {
			var url = 'http://localhost:9000/users/'+username+'/'+password;
			$http.get( url, {
				// username: username,
				// password: password,
			})
			.success(function (response){
                callback(response);
			})
			.error(function (response){
				callback(response);
			})
		}

		function register(username, password, callback) {
            var url = 'http://localhost:9000/users/'+username+'/'+password;
            $http.post( url, {
                // username: username,
                // password: password,
            })
            .success(function (response){
                callback(response);
            })
            .error(function (response){
                callback(response);
            })
        }

        function setCredential(username, password){
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    password: password
                }
            };

            // set default auth header for http requests
            $http.defaults.headers.common['Authorization'] = 'Basic ' + password;

            // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
            var cookieExp = new Date();
            cookieExp.setDate(cookieExp.getDate() + 7);
            $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
        }

        function clearCredential(){
            $rootScope.globals = {};
            $cookies.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic';
        }
	}

})(window.angular);