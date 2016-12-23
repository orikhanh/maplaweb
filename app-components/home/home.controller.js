(function(angular){
	'use strict';

	angular
		.module('mapla-login')
		.controller('HomeController', HomeController)

	HomeController.$inject = ['AuthenticationService', '$location', '$rootScope'];
	function HomeController(AuthenticationService, $location, $rootScope){
		var vm = this

        vm.user = null;
		vm.logout = logout;

        initController();

        function initController() {
            loadCurrentUser();
        }

		function logout(){
            AuthenticationService.clearCredential();
            $location.path('/login');
		}

		function loadCurrentUser(){
			vm.user = $rootScope.globals.currentUser.username;
		}
	}
	
})(window.angular);