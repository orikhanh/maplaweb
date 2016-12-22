(function(angular){
	'use strict';

	angular
		.module('mapla-login', ['ngRoute', 'ngCookies'])
		.config(myConfig)
        .run(runConfig);

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

    //config 'on run' to get data from cookies and redirect
    runConfig.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function runConfig($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})(window.angular);