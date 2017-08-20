/**
 * Created by Rinas Musthafa on 4/28/2017.
 */
export class DashboardController{

    constructor (portalLoginService, $cookieStore, API_HOST, $resource){
        'ngInject'

        var vm = this;

        vm.state = {};
        vm.user = $cookieStore.get('userData');

        function getAPPList() {

            if(!vm.user)
                return;

            var appList = portalLoginService.wrapActions(
                $resource(API_HOST + '/getapplist'),
                ['save']
            );

            appList.save({user_id: 6}).$promise.then(function(results) {
                vm.productList = processProductList(results.products);
            });
        }

        function processProductList(list) {
            for(var idx in list){
                list[idx].debugging = parseInt(list[idx].debugging);
            }
            return list;
        }

        function syncAPIList() {

            if(!vm.user)
                return;

            var appList = portalLoginService.wrapActions(
                $resource(API_HOST + '/getapicalls'),
                ['save']
            );

            appList.save({product_id: vm.state.product.id}).$promise.then(function(results) {
                vm.apicalls = results.apicalls;
                for(var idx in vm.apicalls){
                    var tempList = vm.apicalls[idx].api.split('/');
                    vm.apicalls[idx].apiEndpoint = tempList[tempList.length-1];
                    vm.apicalls[idx].apiEndpoint = vm.apicalls[idx].apiEndpoint.split('?');
                    vm.apicalls[idx].apiEndpoint = vm.apicalls[idx].apiEndpoint[0];
                    vm.apicalls[idx].timestamp = getTimeFromString(vm.apicalls[idx].created_at);
                }
            });
        }

        function getTimeFromString(str) {
            return getCurrentTime(moment(str).unix() * 1000)
        }

        var minute = 1000 * 60;
        var hour = minute * 60;
        var shiftHours = 5;
        var shiftMinutes = 30;

        function getCurrentTime(timestamp) {
            return timestamp + ( (shiftHours * hour) + (shiftMinutes * minute) );
        }

        vm.selectAPICall = function (call) {
            vm.state.apicall = call;
            var json
            var str;
            try{
                json = JSON.parse(vm.state.apicall.parameters)
                str = JSON.stringify(json, undefined, 4);
            } catch (e){
                str = vm.state.apicall.parameters;
            }

            output(syntaxHighlight(str));
        };

        vm.syncAPICalls = function () {
            syncAPIList();
        };

        vm.selectProduct = function (item) {
            vm.state.product = item;
        };

        vm.changeMode = function (item) {

            var appList = portalLoginService.wrapActions(
                $resource(API_HOST + '/changedebuggingmode'),
                ['save']
            );

            var deb = !vm.state.product.debugging ? 1 : 0;

            appList.save({id: vm.state.product.id, debugging: deb})
                .$promise.then(function(results) {
                    vm.state.product = results.product;
                    vm.productList = results.products;
                });
        };

        getAPPList();


        function output(inp) {
            $('.dbmcd-container pre').html(inp);
        }

        function syntaxHighlight(json) {
            json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                var cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    } else {
                        cls = 'string';
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean';
                } else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            });
        }

    }

}