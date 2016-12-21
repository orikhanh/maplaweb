(function(angular){
	'use strict';

	angular
		.module('mapla-login')
		.controller('HomeController', HomeController)

	HomeController.$inject = [];
	function HomeController(){
		var vm = this

		vm.show = show;

		function show(){
			alert('1123');
		}
	}
	
})(window.angular);