/**
 * Created by Rinas Musthafa on 4/28/2017.
 */
export class PortalLoginController{

    constructor (portalLoginService, $state) {
        'ngInject'

        var vm = this;

        vm.login = function () {
            vm.error = '';
            vm.fetching = true;
            portalLoginService.login(vm.username, vm.password, function (resp) {
                $state.go('dashboard');
                vm.fetching = false;
            }, function (resp) {
                vm.fetching = false;
                vm.error = 'Invalid Credentials';
            })
        }

    }

}