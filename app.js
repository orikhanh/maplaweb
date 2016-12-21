(function(angular){
	'use strict';

	angular
		.module('mapla-login', ['ngRoute'])
		.config(myConfig)

	myConfig.$inject = ['$routeProvider', '$locationProvider'];
	function myConfig($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				controller : "HomeController",
				templateUrl : "home/home.view.html",
				controllerAs : 'vm',
			})
			.when('/asdasd',{
				controller : "LoginController",
				templateUrl : "login/login.view.html",
				controllerAs : 'vm',
			})
			.otherwise({ redirectTo: '/asdasd' });
        $locationProvider
			.html5Mode({
                enabled: true,
            })
    }

})(window.angular);