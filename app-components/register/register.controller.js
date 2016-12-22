(function(angular){
    'use strict';
    
    angular
        .module('mapla-login')
        .controller('RegisterController', MyRegisterController);

    MyRegisterController.$inject = ['AuthenticationService','$location'];
    function MyRegisterController(AuthenticationService, $location) {
        var vm = this;

        vm.register = register;

        function register(){
            AuthenticationService.register(vm.reg.username, vm.reg.password, function(response){
                if(response.result){
                    //auto login and redirect home
                    $location.path('/');
                } else {
                    alert('fail to create');
                }
            })
        }
    }

})(window.angular);