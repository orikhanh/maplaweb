(function (angular){
	'use strict';

	angular
		.module('mapla-login')
		.factory('AuthenticationService', MyAuthenticationService);

	MyAuthenticationService.$inject = ['$http'];
	function MyAuthenticationService($http){

		var service = {};

		service.login = login;
		service.register = register;

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
	}

})(window.angular);