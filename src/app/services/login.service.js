/**
 * Created by Rinas Musthafa on 2/11/2017.
 */
export class loginService{

    constructor ($rootScope, $log, authService, requestService, $inDialog) {
        'ngInject'

        $log.log("loginService");
        var vm = this;
        vm.username = '';
        vm.password = '';
        vm.listeners = {};


        vm.addListener = function (key, listener) {
            if (!(key in vm.listeners)) {
                vm.listeners[key] = [];
            }

            if (vm.listeners[key].indexOf(listener) === -1) {
                vm.listeners[key].push(listener);
            }
        };


        vm.callListeners = function (msg, key) {
            if (key in vm.listeners) {
                for (var idx in vm.listeners[key]) {
                    vm.listeners[key][idx](msg, key);
                }
            }
        };


        vm.login = function (username, password) {
            return requestService.firePost('/authenticate', {
                "user": {
                    email: username,
                    password: password
                }
            }).then(function (resp) {
                // $log.log(resp);
                vm.username = username;
                vm.password = password;
                vm.callListeners(resp, 'loginSuccess');
                return resp;
            });
        };

        vm.logout = function () {
            authService.logout && authService.logout();
            $rootScope.showLoginDialog = true;
            vm.checkLogin();
        };

        vm.isAuthed = function () {
            return authService.isAuthed ? authService.isAuthed() : false;
        };

        vm.checkLogin = function () {
            if ($rootScope.showLoginDialog) {
                $inDialog.show({
                    controller : 'LoginDialogController',
                    templateUrl : 'app/main/login/login.html',
                    clickOutsideToClose: false,
                    escapeToClose: false,
                    height:300,
                    width: 400,
                });
            }
        };

        requestService.addAuthListener(vm.checkLogin);
    }

}
