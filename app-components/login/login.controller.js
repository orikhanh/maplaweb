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
			// var response = AuthenticationService.login(vm.username, vm.password);
			
			// response.then(
			// 	function (response){
			// 		redirectAfterSubmit(response);
			// 	}
			// 	// redirectAfterSubmit(response);
			// );
			AuthenticationService.login(vm.username, vm.password, function(response){
				if(response.result){
					$location.path('/');
				} else if(response.error){
					alert('wrong username or password');
				}
			})
			
		};

		// function redirectAfterSubmit(response){
		// 	if (response){
		// 		$location.path('/');
		// 	}
		// 	else {
		// 		alert('wrong username or password');
		// 	}
		// }
	};

})(window.angular);