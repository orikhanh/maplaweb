(function(angular){
	'use strict';

	angular
		.module('mapla-login')
		.controller('LoginController', MyLoginController)

	MyLoginController.$inject = ['AuthenticationService', '$location'];
	function MyLoginController(AuthenticationService, $location){
		var vm = this;

		vm.login = login;

		function login(){

			AuthenticationService.clearCredential();

			AuthenticationService.login(vm.username, vm.password, function(response){
				if(response.userEmail){
					AuthenticationService.setCredential(vm.username, vm.password);
					$location.path('/');
				} else if(response.error){
					alert('wrong username or password');
				} else {
                    alert('something happen??');
				}
			})
		};

	};

})(window.angular);