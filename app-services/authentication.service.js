(function (angular){
	'use strict';

	angular
		.module('mapla-login')
		.factory('AuthenticationService', MyAuthenticationService);

	MyAuthenticationService.$inject = ['$http'];
	function MyAuthenticationService($http){

		var service = {};

		service.login = login;

		return service;

		function login(username, password, callback) {
			var responseData = false;
			var url = 'http://localhost:9000/users/'+username+'/'+password;
			$http.get( url, {
				// username: username,
				// password: password,
			})
			.success(function (response){
				// responseData = true;
				callback(response);
			})
			.error(function (response){
				callback(response);
			})

			// return responseData.promise;
		}
	}

})(window.angular);