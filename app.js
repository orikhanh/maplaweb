(function(angular){
	'use strict';

	angular
		.module('mapla-login', ['ngRoute'])
		.config(myConfig)
        .run(runConfig)

	myConfig.$inject = ['$routeProvider', '$locationProvider'];
	function myConfig($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				controller : 'HomeController',
				templateUrl : 'app-components/home/home.view.html',
				controllerAs : 'vm'
			})
			.when('/login',{
				controller : 'LoginController',
				templateUrl : 'app-components/login/login.view.html',
				controllerAs : 'vm'
			})
            .when('/register',{
                controller : 'RegisterController',
                templateUrl : 'app-components/register/register.view.html',
                controllerAs : 'vm'
            })
			.otherwise({ redirectTo: '/login' });
        $locationProvider
			.html5Mode({
                enabled: true
            })
    }

    //config on run to get data from cookies and redirect
    runConfig.$inject = [];
	function runConfig() {

    }
    
})(window.angular);