(function(angular){
	'use strict';

	angular
		.module('mapla-login')
		.controller('HomeController', HomeController)

	HomeController.$inject = ['AuthenticationService', '$location'];
	function HomeController(AuthenticationService, $location){
		var vm = this

		vm.logout = logout;

		function logout(){
            AuthenticationService.clearCredential();
            $location.path('/login');
		}
	}
	
})(window.angular);